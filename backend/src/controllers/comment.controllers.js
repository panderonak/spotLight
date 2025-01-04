import mongoose, { isValidObjectId } from 'mongoose';
import { Comment } from '../models/comment.models.js';
import APIError from '../utils/APIError.js';
import APIResponse from '../utils/APIResponse.js';
import asyncHandler from '../utils/asyncHandler.js';
import { Like } from '../models/like.models.js';

const postComment = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const { videoId } = req.params;

  try {
    if (content?.trim() === '')
      throw new APIError(
        400,
        'Your comment cannot be empty. Please provide a valid comment.'
      );

    if (!isValidObjectId(videoId))
      throw new APIError(500, 'The provided video ID is invalid or malformed.');

    const newComment = await Comment.create({
      content: content.trim(),
      video: videoId.trim(),
      owner: req.user?._id,
    });

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          newComment,
          'Your comment has been added successfully.'
        )
      );
  } catch (error) {
    console.log(`POST COMMENT ERROR: ${error?.message}`);
    throw new APIError(
      500,
      'An error occurred while posting your comments. Try again.'
    );
  }
});

const editComment = asyncHandler(async (req, res) => {
  const { commentId } = req.params;
  const { updatedComment } = req.body;

  try {
    if (!isValidObjectId(commentId))
      throw new APIError(
        400,
        'Unable to edit comment.The provided comment ID is invalid or malformed.'
      );

    if (updatedComment?.trim() === '')
      throw new APIError(
        400,
        'Comment cannot be empty. Please provide valid content for the comment.'
      );

    const existingComment = await Comment.findById(commentId);

    if (!existingComment) {
      throw new APIError(
        400,
        'Comment not found. Please ensure the comment ID is correct.'
      );
    }
    existingComment.content = updatedComment;

    const updatedCommentDetails = await existingComment.save({
      validateBeforeSave: false,
    });

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          updatedCommentDetails,
          'The comment has been updated successfully.'
        )
      );
  } catch (error) {
    console.log(`EDIT COMMENT ERROR: ${error?.message}`);
    throw new APIError(
      500,
      'An unexpected error occurred while trying to edit the comment. Please try again later.'
    );
  }
});

const deleteComment = asyncHandler(async (req, res) => {
  const { commentId } = req.params;

  try {
    if (!isValidObjectId(commentId))
      throw new APIError(
        400,
        'Unable to delete comment. The provided comment ID is invalid or malformed.'
      );

    const deletedComment = await Comment.findOneAndDelete({ _id: commentId });

    if (!deletedComment)
      throw new APIError(
        400,
        'The comment you are trying to delete could not be found.'
      );

    const deletedLike = await Like.findOneAndDelete({ comment: commentId });

    return res
      .status(200)
      .json(
        new APIResponse(200, deletedComment, 'Comment deleted successfully')
      );
  } catch (error) {
    console.log(`DELETE COMMENT ERROR: ${error?.message}`);
    throw new APIError(500, error?.message || 'Unable to delete the comment.');
  }
});

const fetchVideoComments = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const { page = 1, limit = 10 } = req.query;

  try {
    if (!isValidObjectId(videoId))
      throw new APIError(400, 'The provided video ID is invalid or malformed.');

    const videoCommentsAggregationPipeline = [
      {
        $match: {
          video: new mongoose.Types.ObjectId(videoId),
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
        $lookup: {
          from: 'likes',
          localField: '_id',
          foreignField: 'comment',
          as: 'likes',
        },
      },
      {
        $addFields: {
          owner: {
            $first: '$owner',
          },
          likes: {
            $size: '$likes',
          },
          likedByUser: {
            $cond: {
              if: { $in: [req.user?._id, '$likes.likedBy'] },
              then: true,
              else: false,
            },
          },
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $project: {
          video: 1,
          content: 1,
          owner: 1,
          createdAt: 1,
          likes: 1,
          likedByUser: 1,
        },
      },
    ];

    const paginatedVideoComments = await Comment.aggregatePaginate(
      videoCommentsAggregationPipeline,
      { page, limit }
    );

    if (paginatedVideoComments.docs.length === 0)
      return res
        .status(200)
        .json(
          new APIResponse(200, {}, 'There are no comments for this video yet.')
        );

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          paginatedVideoComments.docs,
          'The comments for this video have been successfully retrieved.'
        )
      );
  } catch (error) {
    console.log(`VIDEO COMMENTS ERROR: ${error?.message}`);
    throw new APIError(
      500,
      'An unexpected error occurred while retrieving the comments. Please try again later.'
    );
  }
});

export { postComment, editComment, deleteComment, fetchVideoComments };
