import Video from '../models/video.models.js';
import mongoose, { isValidObjectId } from 'mongoose';
import APIResponse from '../utils/APIResponse.js';
import APIError from '../utils/APIError.js';
import asyncHandler from '../utils/asyncHandler.js';
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from '../utils/cloudinary.js';
import { Like } from '../models/like.models.js';
import User from '../models/user.models.js';

const publishVideo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  try {
    if (title?.trim() === '')
      throw new APIError(400, 'Title can not be empty.');

    if (description?.trim() === '')
      throw new APIError(400, 'Description can not be empty.');

    let tempVideoPath;
    if (
      req.files &&
      Array.isArray(req.files.videoFile) &&
      req.files.videoFile.length > 0
    )
      tempVideoPath = req.files?.videoFile[0]?.path;

    if (!tempVideoPath)
      throw new APIError(
        400,
        'No video file found. Please upload a valid video.'
      );

    let tempThumbnailPath;
    if (
      req.files &&
      Array.isArray(req.files.thumbnail) &&
      req.files.thumbnail.length > 0
    )
      tempThumbnailPath = req.files?.thumbnail[0]?.path;

    if (!tempThumbnailPath)
      throw new APIError(
        400,
        'Thumbnail is missing. Please upload a valid image thumbnail.'
      );

    const uploadedVideo = await uploadOnCloudinary(tempVideoPath);

    if (!uploadedVideo)
      throw new APIError(500, 'Video upload failed. Please try again later.');

    const uploadedThumbnail = await uploadOnCloudinary(tempThumbnailPath);

    if (!uploadedThumbnail)
      throw new APIError(
        500,
        'Thumbnail upload failed. Please try again later.'
      );

    const createdVideo = await Video.create({
      videoFile: uploadedVideo?.playback_url,
      thumbnail: uploadedThumbnail?.url,
      title,
      description,
      duration: parseFloat(uploadedVideo.duration.toFixed(2)),
      owner: req.user?._id,
    });

    const retrievedVideo = await Video.findById(createdVideo._id);

    if (!retrievedVideo)
      throw new APIError(500, 'Upload Failed. Please try again.');
    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          retrievedVideo,
          'Your video has been uploaded successfully.'
        )
      );
  } catch (error) {
    console.log(`PUBLISH VIDEO ERROR: ${error?.message}`);
    throw new APIError(
      500,
      'An unexpected error occurred while publishing your video. Please try again later. If the issue persists, contact support.'
    );
  }
});

const getVideoById = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  try {
    if (!isValidObjectId(videoId))
      throw new APIError(400, 'The provided video ID is invalid or malformed.');

    const videoDetails = await Video.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(videoId?.trim()),
        },
      },
      {
        $match: {
          isPublished: true,
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
              $lookup: {
                from: 'subscriptions',
                localField: '_id',
                foreignField: 'channel',
                as: 'subscribers',
              },
            },
            {
              $addFields: {
                subscribers: {
                  $size: '$subscribers',
                },
                isSubscribed: {
                  $cond: {
                    if: {
                      $in: [req.user?._id, '$subscribers.subscriber'],
                    },
                    then: true,
                    else: false,
                  },
                },
              },
            },
            {
              $project: {
                username: 1,
                avatar: 1,
                subscribers: 1,
                isSubscribed: 1,
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: 'likes',
          localField: '_id',
          foreignField: 'video',
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
          likedByCurrentUser: {
            $cond: {
              if: { $in: [req.user?._id, '$likes.likedBy'] },
              then: true,
              else: false,
            },
          },
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
          createdAt: 1,
          likes: 1,
          subscribers: 1,
          likedByCurrentUser: 1,
        },
      },
    ]);

    if (!videoDetails)
      throw new APIError(
        404,
        'Video not found. It may have been deleted or the provided ID is incorrect. Please check and try again.'
      );

    await Video.findByIdAndUpdate(videoId, {
      $inc: {
        views: 1,
      },
    });

    await User.findByIdAndUpdate(req.user?._id, {
      $addToSet: {
        watchHistory: videoId,
      },
    });

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          videoDetails[0],
          'Video details retrieved successfully.'
        )
      );
  } catch (error) {
    console.log(`GET VIDEO BY ID ERROR: ${error?.message}`);
    throw new APIError(
      500,
      'An unexpected error occurred while retrieving the video details. Please try again later. If the issue persists, contact support.'
    );
  }
});

const fetchAllVideos = asyncHandler(async (req, res) => {
  const {
    page = 1,
    limit = 10,
    query,
    sortBy = 'title',
    sortType = 'asc',
    userId,
  } = req.query;

  try {
    if (userId) {
      if (!isValidObjectId(userId)) {
        throw new APIError(
          400,
          'The provided User ID is invalid. Please ensure it is a valid ObjectId.'
        );
      }
    }

    const basePipeline = [
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
          createdAt: 1,
        },
      },
    ];

    if (query) {
      const videoPipelineWithQuery = [
        {
          $search: {
            index: 'videoSearchIndex',
            text: {
              query: query,
              path: ['title', 'description'],
            },
          },
        },
        ...(userId
          ? [{ $match: { owner: new mongoose.Types.ObjectId(userId) } }]
          : []),
        {
          $sort: {
            [sortBy]: sortType === 'asc' ? 1 : -1,
          },
        },
        ...basePipeline,
      ];

      const queriedVideos = await Video.aggregate(videoPipelineWithQuery);

      if (queriedVideos.length === 0)
        return res
          .status(200)
          .json(
            new APIResponse(
              200,
              {},
              'No videos found for this topic. Please try another search or check the topic again.'
            )
          );

      return res
        .status(200)
        .json(
          new APIResponse(200, queriedVideos, 'Videos retrieved successfully.')
        );
    }

    const videoPipeline = [
      ...(userId
        ? [{ $match: { owner: new mongoose.Types.ObjectId(userId) } }]
        : []),
      {
        $sort: {
          [sortBy]: sortType === 'asc' ? 1 : -1,
        },
      },
      ...basePipeline,
    ];

    const paginatedVideos = await Video.aggregatePaginate(videoPipeline, {
      page,
      limit,
    });

    if (paginatedVideos.docs.length === 0)
      return res
        .status(200)
        .json(
          new APIResponse(
            200,
            {},
            'No videos found for this topic. Please try another search or check the topic again.'
          )
        );

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          paginatedVideos.docs,
          'Videos retrieved successfully.'
        )
      );
  } catch (error) {
    console.log(`FETCH ALL VIDEOS ERROR: ${error?.message}`);
    throw new APIError(
      500,
      'An unexpected error occurred while retrieving the videos. Please try again later. If the problem persists, contact support.'
    );
  }
});

const updateVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  const { updatedTitle, updatedDescription } = req.body;

  try {
    if (!isValidObjectId(videoId))
      throw new APIError(400, 'The provided video ID is invalid or malformed.');

    const existingVideo = await Video.findById(videoId);

    if (!existingVideo)
      throw new APIError(
        400,
        'The video you are looking for could not be found. Please check the video ID or try again later.'
      );

    if (String(req.user?._id) !== String(existingVideo?.owner)) {
      throw new APIError(
        400,
        'You do not have permission to update this video.'
      );
    }

    if (!updatedTitle?.trim())
      throw new APIError(
        400,
        'Title is required and cannot be empty or just whitespace.'
      );

    if (!updatedDescription?.trim())
      throw new APIError(
        400,
        'Description is required and cannot be empty or just whitespace.'
      );

    const tempThumbnailPath = req.file?.path;

    if (!tempThumbnailPath)
      throw new APIError(
        400,
        'Thumbnail is missing. Please upload a valid image thumbnail.'
      );

    const uploadedThumbnail = await uploadOnCloudinary(tempThumbnailPath);

    if (!uploadedThumbnail)
      throw new APIError(
        500,
        'Thumbnail upload failed. Please try again later.'
      );

    const currentThumbnail = existingVideo?.thumbnail;

    const updatedVideoDetails = await Video.findByIdAndUpdate(
      videoId,
      {
        $set: {
          title: updatedTitle,
          description: updatedDescription,
          thumbnail: uploadedThumbnail?.url,
        },
      },
      { new: true }
    );

    if (!updatedVideoDetails)
      throw new APIError(400, 'The requested video could not be found.');

    const thumbnailDeletionResult =
      await deleteFromCloudinary(currentThumbnail);

    if (!thumbnailDeletionResult)
      throw new APIError(
        400,
        'Failed to delete previous thumbnail. Please try again.'
      );
    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          updatedVideoDetails,
          'Video details updated successfully.'
        )
      );
  } catch (error) {
    console.log(`UPDATE VIDEO ERROR: ${error?.message}`);
    throw new APIError(
      500,
      'An unexpected error occurred while updating the video details. Please try again later. If the issue persists, contact support.'
    );
  }
});

const deleteVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  try {
    if (!isValidObjectId(videoId))
      throw new APIError(400, 'The provided video ID is invalid or malformed.');

    const existingVideo = await Video.findById(videoId);

    if (!existingVideo)
      throw new APIError(
        400,
        'The video you are looking for could not be found. Please check the video ID or try again later.'
      );

    if (String(req.user?._id) !== String(existingVideo?.owner)) {
      throw new APIError(
        400,
        'You do not have permission to delete this video.'
      );
    }

    const deletedVideo = Video.findOneAndDelete({ _id: videoId });

    if (!deletedVideo)
      throw new APIError('Video not found or already deleted.');

    const videoFileUrlToDelete = deletedVideo?.videoFile;

    const thumbnailUrlToDelete = deletedVideo?.thumbnail;

    const deletedVideoFile = deleteFromCloudinary(videoFileUrlToDelete);

    if (!deletedVideoFile)
      throw new APIError(
        500,
        'Failed to delete the video file. Please try again later.'
      );

    const deletedThumbnailFile = deleteFromCloudinary(thumbnailUrlToDelete);

    if (!deletedThumbnailFile)
      throw new APIError(
        500,
        'Failed to delete the thumbnail file. Please try again later.'
      );

    const deletedLike = await Like.findOneAndDelete({ video: videoId });

    const deletedComment = await Comment.findOneAndDelete({
      video: videoId,
    });

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          deletedVideo,
          'The video was successfully deleted.'
        )
      );
  } catch (error) {
    console.log(`DELETE VIDEO ERROR: ${error?.message}`);
    throw new APIError(
      500,
      'An unexpected error occurred while deleting the video. Please try again later. If the issue persists, please contact support.'
    );
  }
});

const updatePublishStatus = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  try {
    if (!isValidObjectId(videoId)) {
      throw new APIError(400, 'Video ID is required and cannot be empty.');
    }

    const existingVideo = await Video.findById(videoId);

    if (!existingVideo)
      throw new APIError(
        404,
        'No video found with the provided ID. Please verify the Video ID and try again.'
      );

    const videoPublishStatusFlag = existingVideo.isPublished;

    const togglePublishStatus = !videoPublishStatusFlag;

    const updatedVideo = await Video.findByIdAndUpdate(
      videoId,
      {
        $set: {
          isPublished: togglePublishStatus,
        },
      },
      { new: true }
    );

    if (!updatedVideo)
      throw new APIError(
        500,
        'Failed to update the video publish status. Please try again later.'
      );
    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          updatedVideo,
          'Video publish status updated successfully.'
        )
      );
  } catch (error) {
    console.log(`UPDATE PUBLISH STATUS ERROR: ${error?.message}`);
    throw new APIError(
      500,
      'An unexpected error occurred while updating the video publish status. Please try again later. If the issue persists, contact support.'
    );
  }
});

export {
  publishVideo,
  getVideoById,
  fetchAllVideos,
  updateVideo,
  deleteVideo,
  updatePublishStatus,
};
