import mongoose, { isValidObjectId } from 'mongoose';
import { Like } from '../models/like.models.js';
import APIError from '../utils/APIError.js';
import APIResponse from '../utils/APIResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

const toggleVideoLikeStatus = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  if (!isValidObjectId(videoId))
    throw new APIError(400, 'The provided video ID is invalid or malformed.');

  const isLiked = await Like.findOne({
    video: videoId,
    likedBy: req.user?._id,
  });

  if (isLiked) {
    const deletedLike = await Like.findOneAndDelete({
      video: videoId,
      likedBy: req.user?._id,
    });

    if (!deletedLike)
      throw new APIError(
        500,
        'Failed to remove the like. Please try again later or contact support if the issue persists.'
      );

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          deletedLike,
          'You have successfully removed your like from this video.'
        )
      );
  } else {
    const addedLike = await Like.create({
      video: videoId,
      likedBy: req.user?._id,
    });

    if (!addedLike)
      throw new APIError(
        500,
        'Unable to add like at this moment. Please try again later, or contact support if the issue persists.'
      );

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          addedLike,
          'You have successfully liked this video.'
        )
      );
  }
});

const toggleCommentLikeStatus = asyncHandler(async (req, res) => {
  const { commentId } = req.params;

  if (!isValidObjectId(commentId))
    throw new APIError(400, 'The provided video ID is invalid or malformed.');

  const isLiked = await Like.findOne({
    comment: commentId,
    likedBy: req.user?._id,
  });

  if (isLiked) {
    const deletedLike = await Like.findOneAndDelete({
      comment: commentId,
      likedBy: req.user?._id,
    });

    if (!deletedLike)
      throw new APIError(
        500,
        'Failed to remove the like. Please try again later or contact support if the issue persists.'
      );

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          deletedLike,
          'You have successfully removed your like from this comment.'
        )
      );
  } else {
    const addedLike = await Like.create({
      video: commentId,
      likedBy: req.user._id,
    });

    if (!addedLike)
      throw new APIError(
        500,
        'Unable to add like at this moment. Please try again later, or contact support if the issue persists.'
      );

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          addedLike,
          'You have successfully liked this comment.'
        )
      );
  }
});

const togglePostLikeStatus = asyncHandler(async (req, res) => {
  const { postId } = req.params;

  if (!isValidObjectId(postId))
    throw new APIError(400, 'The provided post Id is invalid or malformed.');

  const isLiked = await Like.findOne({
    post: postId,
    likedBy: req.user?._id,
  });

  if (isLiked) {
    const deletedLike = await Like.findOneAndDelete({
      post: postId,
      likedBy: req.user?._id,
    });

    if (!deletedLike)
      throw new APIError(
        500,
        'Failed to remove the like. Please try again later or contact support if the issue persists.'
      );

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          deletedLike,
          'You have successfully removed your like from this post.'
        )
      );
  } else {
    const addedLike = await Like.create({
      post: postId,
      likedBy: req.user?._id,
    });

    if (!addedLike)
      throw new APIError(
        500,
        'Unable to add like at this moment. Please try again later, or contact support if the issue persists.'
      );

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          addedLike,
          'You have successfully liked this post.'
        )
      );
  }
});

const fetchLikedVideos = asyncHandler(async (req, res) => {
  try {
    const likedVideoAggregationPipeline = [
      {
        $match: {
          likedBy: new mongoose.Types.ObjectId(req.user?._id),
        },
      },
      {
        $lookup: {
          from: 'videos',
          localField: 'video',
          foreignField: '_id',
          as: 'video',
          pipeline: [
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
              $match: {
                isPublished: true,
              },
            },
            {
              $project: {
                videoFile: 1,
                thumbnail: 1,
                title: 1,
                description: 1,
                duration: 1,
                views: 1,
                owner: 1,
              },
            },
          ],
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $addFields: {
          video: {
            $first: '$video',
          },
        },
      },
      {
        $match: {
          video: {
            $ne: null, // Exclude documents where video is null or empty
          },
        },
      },
      {
        $project: {
          video: 1,
        },
      },
    ];

    const options = {
      page: 1,
      limit: 10,
    };

    const paginatedLikedVideos = await Like.aggregatePaginate(
      likedVideoAggregationPipeline,
      options
    );

    if (paginatedLikedVideos.docs.length === 0)
      return res
        .status(200)
        .json(new APIResponse(200, {}, "You haven't liked any videos yet."));

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          paginatedLikedVideos.docs,
          'Successfully fetched your liked videos.'
        )
      );
  } catch (error) {
    console.log(error.message);
    throw new APIError(
      500,
      'An unexpected error occurred while retrieving the video. Please try again later.'
    );
  }
});

export {
  toggleVideoLikeStatus,
  toggleCommentLikeStatus,
  togglePostLikeStatus,
  fetchLikedVideos,
};
