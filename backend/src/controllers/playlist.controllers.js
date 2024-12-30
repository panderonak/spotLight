import { Playlist } from '../models/playlist.models.js';
import APIError from '../utils/APIError.js';
import APIResponse from '../utils/APIResponse.js';
import asyncHandler from '../utils/asyncHandler.js';
import mongoose, { isValidObjectId } from 'mongoose';

const createPlaylist = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  if ([name, description].some((field) => field?.trim() === ''))
    throw new APIError(400, 'All required fields must be completed.');

  const existingPlaylist = await Playlist.findOne({ name });

  console.log(existingPlaylist);

  if (existingPlaylist)
    throw new APIError(
      409,
      'A playlist with this name already exists. Please choose a different name.'
    );

  const createPlaylist = await Playlist.create({
    name: name?.trim(),
    description: description?.trim(),
    owner: req.user?._id,
  });

  const createdPlaylist = await Playlist.findById(createPlaylist._id);

  if (!createdPlaylist)
    throw new APIError(
      500,
      'An error occurred while creating the playlist. Please try again later.'
    );

  return res
    .status(200)
    .json(
      new APIResponse(
        200,
        createdPlaylist,
        'Your playlist has been successfully created and is ready to use!'
      )
    );
});

const fetchUserPlaylist = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  if (!isValidObjectId(userId))
    throw new APIError(
      400,
      'User ID cannot be empty. Please provide a valid User ID.'
    );

  const userPlaylists = await Playlist.aggregate([
    {
      $match: {
        owner: new mongoose.Types.ObjectId(userId),
      },
    },
    {
      $lookup: {
        from: 'videos',
        localField: 'videos',
        foreignField: '_id',
        as: 'videos',
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
        ],
      },
    },
    {
      $match: {
        'videos.isPublished': true,
      },
    },
    {
      $addFields: {
        videosCount: {
          $size: '$videos',
        },
        viewsCount: {
          $sum: '$video.views',
        },
      },
    },
  ]);

  if (!userPlaylists)
    throw new APIError(
      500,
      'There was an error fetching your playlist. Please try again later.'
    );

  if (userPlaylists.length === 0)
    throw new APIResponse(
      400,
      "You don't have any playlists yet. Create one to get started!"
    );

  return res
    .status(200)
    .json(
      new APIResponse(
        200,
        userPlaylists,
        'Your playlist has been successfully fetched.'
      )
    );
});

const fetchPlaylistById = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;

  if (!isValidObjectId(playlistId))
    throw new APIError(400, 'Please provide a valid Playlist ID.');

  const playlist = await Playlist.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(playlistId),
      },
    },
    {
      $lookup: {
        from: 'videos',
        localField: 'videos',
        foreignField: '_id',
        as: 'videos',
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
        ],
      },
    },
    {
      $match: {
        'videos.isPublished': true,
      },
    },
    {
      $addFields: {
        videosCount: {
          $size: '$videos',
        },
        viewsCount: {
          $sum: '$video.views',
        },
      },
    },
  ]);

  if (!playlist)
    throw new APIError(
      500,
      'We encountered an issue while fetching your playlist. Please try again later.'
    );

  return res
    .status(200)
    .json(
      new APIResponse(
        200,
        playlist,
        'Your playlist has been successfully retrieved.'
      )
    );
});

const addToPlaylist = asyncHandler(async (req, res) => {
  const { playlistId, videoId } = req.params;

  if (!isValidObjectId(playlistId))
    throw new APIError(
      400,
      'The Playlist ID provided is invalid. Please provide a valid Playlist ID.'
    );

  if (!isValidObjectId(videoId))
    throw new APIError(
      400,
      'The Video ID provided is invalid. Please provide a valid Playlist ID.'
    );

  const currentPlaylist = await Playlist.findByIdAndUpdate(
    playlistId,
    {
      $addToSet: { videos: videoId },
    },
    { new: true }
  );

  if (!currentPlaylist)
    throw new APIError(404, 'Playlist not found. Please try again.');

  return res
    .status(200)
    .json(
      new APIResponse(
        200,
        currentPlaylist,
        'The Video has been added to playlist.'
      )
    );
});

const removeFromPlaylist = asyncHandler(async (req, res) => {
  const { playlistId, videoId } = req.params;

  if (!isValidObjectId(playlistId))
    throw new APIError(
      400,
      'The Playlist ID provided is invalid. Please provide a valid Playlist ID.'
    );

  if (!isValidObjectId(videoId))
    throw new APIError(
      400,
      'The Video ID provided is invalid. Please provide a valid Playlist ID.'
    );

  const currentPlaylist = await Playlist.findByIdAndUpdate(
    playlistId,
    {
      $pull: { videos: videoId },
    },
    { new: true }
  );

  if (!currentPlaylist)
    throw new APIError(404, 'Playlist not found. Please try again.');

  return res
    .status(200)
    .json(
      new APIResponse(
        200,
        currentPlaylist,
        'The Video has been deleted from playlist.'
      )
    );
});

const updatePlaylist = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;
  const { name, description } = req.body;

  if (!isValidObjectId(playlistId))
    throw new APIError(400, 'Please provide a valid Playlist ID.');

  if (!name || !description)
    throw new APIError(
      400,
      'Both name and description are required. Please fill in all fields.'
    );

  if ([name, description].some((field) => field?.trim() === ''))
    throw new APIError(400, 'All required fields must be completed.');

  const updatedPlaylist = await Playlist.findByIdAndUpdate(
    playlistId,
    {
      $set: {
        name: name?.trim(),
        description: description?.trim(),
      },
    },
    { new: true }
  );

  if (!updatedPlaylist)
    throw new APIError(
      500,
      'An error occurred while updating the playlist details. Please try again later.'
    );

  return res
    .status(200)
    .json(
      new APIResponse(
        200,
        'Your playlist details have been successfully updated.'
      )
    );
});

const deletePlaylist = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;

  if (!isValidObjectId(playlistId))
    throw new APIError(400, 'Playlist ID is required to delete the playlist.');

  const deletedPlaylist = await Playlist.findOneAndDelete(playlistId);

  if (!deletedPlaylist)
    throw new APIError(
      400,
      'The playlist could not be found or was already deleted.'
    );

  return res
    .status(200)
    .json(
      new APIResponse(
        200,
        deletedPlaylist,
        'Your playlist has been successfully deleted.'
      )
    );
});

export {
  createPlaylist,
  fetchUserPlaylist,
  fetchPlaylistById,
  addToPlaylist,
  removeFromPlaylist,
  updatePlaylist,
  deletePlaylist,
};
