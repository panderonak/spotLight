import mongoose from 'mongoose';
import { Comment } from '../models/comment.models.js';
import APIError from '../utils/APIError.js';
import APIResponse from '../utils/APIResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

const postComment = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const { videoId } = req.params;

  try {
    if (content?.trim() === '')
      throw new APIError(
        400,
        'Your comment cannot be empty. Please provide a valid comment.'
      );

    if (!videoId?.trim())
      throw new APIError(500, 'Unable to add comment. Video ID is missing.');

    const newComment = await Comment.create({
      content: content.trim(),
      video: videoId.trim(),
      owner: req.user?._id,
    });

    console.log(newComment);

    res
      .status(200)
      .json(
        new APIResponse(
          200,
          newComment,
          'Your comment has been added successfully.'
        )
      );
  } catch (error) {
    throw new APIError(
      500,
      error?.message ||
        'An error occurred while posting your comments. Try again.'
    );
  }
});

const editComment = asyncHandler(async (req, res) => {
  const { commentId } = req.params;
  const { updatedComment } = req.body;

  try {
    if (!commentId?.trim())
      throw new APIError(400, 'Unable to edit comment. Comment ID is missing.');

    if (updatedComment?.trim() === '')
      throw new APIError(
        400,
        'Comment cannot be empty. Please provide valid content for the comment.'
      );

    const existingComment = await Comment.findById(commentId);

    if (!existingComment) {
    }
    existingComment.content = updatedComment;

    await existingComment.save({ validateBeforeSave: false });

    return res
      .status(200)
      .json(
        new APIResponse(200, {}, 'The comment has been updated successfully.')
      );
  } catch (error) {
    throw new APIError(
      500,
      error?.message ||
        'An unexpected error occurred while trying to edit the comment. Please try again later.'
    );
  }
});

const deleteComment = asyncHandler(async (req, res) => {
  const { commentId } = req.params;

  try {
    if (!commentId || commentId.trim() === '')
      throw new APIError(
        400,
        'Unable to delete comment. Comment ID is missing.'
      );

    const deletedComment = await Comment.findOneAndDelete({ _id: commentId });

    if (!deletedComment)
      throw new APIError(
        400,
        'The comment you are trying to delete could not be found.'
      );

    res
      .status(200)
      .json(
        new APIResponse(
          200,
          { comment: deletedComment },
          'Comment deleted successfully'
        )
      );
  } catch (error) {
    throw new APIError(500, error?.message || 'Unable to delete the comment.');
  }
});

const fetchVideoComments = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const { page = 1, limit = 10 } = req.query;

  if (!videoId?.trim())
    throw new APIError(400, 'Video ID is missing. Please provide a valid ID.');

  try {
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
            {
              $addFields: {
                owner: {
                  $first: '$owner ',
                },
              },
            },
          ],
        },
      },
    ];

    const paginatedVideoComments = await Comment.aggregatePaginate(
      videoCommentsAggregationPipeline,
      { page, limit }
    );

    if (paginatedVideoComments.length === 0)
      return res
        .status(200)
        .json(
          new APIResponse(200, {}, 'There are no comments for this video yet.')
        );

    console.log(paginatedVideoComments);

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          paginatedVideoComments,
          'The comments for this video have been successfully retrieved.'
        )
      );
  } catch (error) {
    throw new APIError(
      500,
      error?.message ||
        'An unexpected error occurred while retrieving the comments. Please try again later.'
    );
  }
});

export { postComment, editComment, deleteComment, fetchVideoComments };
