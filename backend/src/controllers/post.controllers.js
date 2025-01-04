import mongoose, { isValidObjectId } from 'mongoose';
import Post from '../models/post.models.js';
import User from '../models/user.models.js';
import APIError from '../utils/APIError.js';
import APIResponse from '../utils/APIResponse.js';
import asyncHandler from '../utils/asyncHandler.js';
import { pipeline } from 'stream';

const createPost = asyncHandler(async (req, res) => {
  const { content } = req.body;

  try {
    if (!content?.trim())
      throw new APIError(
        400,
        'Content cannot be empty. Please provide valid input.'
      );

    const newPost = await Post.create({
      owner: req.user?._id,
      content: content.trim(),
    });

    const createdPost = await Post.findById(newPost._id);

    if (!createdPost)
      throw new APIError(
        500,
        'An unexpected error occurred while creating your post. Please try again later or contact support if the issue persists.'
      );

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          createdPost,
          'Your post was successfully created and is now live.'
        )
      );
  } catch (error) {
    console.log(`CREATE POST ERROR: ${error?.message}`);
    throw new APIError(
      500,
      'An unexpected error occurred while creating your post. Please try again later. If the problem persists, contact support.'
    );
  }
});

const retrieveUserPosts = asyncHandler(async (req, res) => {
  try {
    const userPostsAggregationPipeline = [
      {
        $match: {
          owner: new mongoose.Types.ObjectId(req.user?._id),
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'owner',
          foreignField: '_id',
          as: 'owner',
          pipeline: [
            {
              $project: {
                username: 1,
                avatar: 1,
              },
            },
          ],
        },
      },
      {
        $addFields: {
          owner: {
            $first: '$owner',
          },
        },
      },
      {
        $lookup: {
          from: 'likes',
          localField: '_id',
          foreignField: 'post',
          as: 'likes',
        },
      },
      {
        $addFields: {
          likes: {
            $size: '$likes',
          },
        },
      },
      {
        $project: {
          owner: 1,
          content: 1,
          createdAt: 1,
          likes: 1,
        },
      },
    ];

    const options = {
      page: 1,
      limit: 10,
    };

    const paginatedPosts = await Post.aggregatePaginate(
      userPostsAggregationPipeline,
      options
    );

    if (paginatedPosts.docs.length === 0)
      return res
        .status(200)
        .json(new APIResponse(200, {}, "You haven't  any posts yet."));

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          paginatedPosts.docs,
          'Successfully fetched your posts.'
        )
      );
  } catch (error) {
    console.log(`GET USER POST ERROR: ${error?.message}`);
    throw new APIError(
      500,
      'An unexpected error occurred while retrieving your posts. Please try again later. If the issue persists, please contact support.'
    );
  }
});

const updatePost = asyncHandler(async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;

  try {
    if (!isValidObjectId(postId))
      throw new APIError(400, 'The provided post ID is invalid or malformed.');

    if (!content?.trim())
      throw new APIError(
        400,
        'Post content cannot be empty. Please provide some text.'
      );

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        $set: {
          content: content?.trim(),
        },
      },
      {
        new: true,
      }
    );

    if (!updatePost)
      throw new APIError(
        500,
        'An error occurred while updating the post. Please try again later.'
      );

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          { post: updatedPost },
          'Your post has been successfully updated.'
        )
      );
  } catch (error) {
    console.log(`UPDATE POST ERROR: ${error?.message}`);
    throw new APIError(
      500,
      'An unexpected error occurred while updating your post. Please try again later. If the issue persists, contact support.'
    );
  }
});

const deletePost = asyncHandler(async (req, res) => {
  const { postId } = req.params;

  try {
    if (!isValidObjectId(postId))
      throw new APIError(400, 'The provided post ID is invalid or malformed.');

    const deletedPost = await Post.findOneAndDelete(postId);

    if (!deletedPost)
      throw new APIError(
        500,
        'Failed to delete the post. Please try again later or contact support if the issue persists.'
      );

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          deletedPost,
          'The post has been successfully deleted.'
        )
      );
  } catch (error) {
    console.log(`DELETE POST ERROR: ${error?.message}`);
    throw new APIError(
      500,
      'An unexpected error occurred while deleting the post. Please try again later. If the issue persists, please contact support.'
    );
  }
});

export { createPost, retrieveUserPosts, updatePost, deletePost };
