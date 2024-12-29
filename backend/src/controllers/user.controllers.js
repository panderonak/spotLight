import asyncHandler from '../utils/asyncHandler.js';
import APIError from '../utils/APIError.js';
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from '../utils/validation.js';
import User from '../models/user.models.js';
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from '../utils/cloudinary.js';
import APIResponse from '../utils/APIResponse.js';
import generateAuthTokens from '../utils/token.js';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const registerUser = asyncHandler(async (req, res) => {
  let { username, email, fullname, password } = req.body;
  console.log(req.body);

  username = username.trim().replace(/\s+/g, '').toLowerCase();

  email = email.trim();

  password = password.trim();

  fullname = fullname.trim();

  if (
    [username, email, fullname, password].some((field) => field?.trim() === '')
  ) {
    throw new APIError(400, 'All required fields must be completed.');
  }

  if (!validateEmail(email.trim())) {
    throw new APIError(400, 'Invalid email format.');
  }

  if (!validatePassword(password.trim())) {
    throw new APIError(
      400,
      'Password must be at least 8 characters, contain both upper/lowercase letters and a number.'
    );
  }

  if (!validateUsername(username.trim())) {
    throw new APIError(
      400,
      'Username must be alphanumeric and between 1 to 30 characters (no consecutive or trailing dots).'
    );
  }

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  console.log(existingUser);
  if (existingUser) throw new APIError(409, 'User already exists.');

  console.log(req.files);
  let tempAvatarPath;
  if (
    req.files &&
    Array.isArray(req.files.avatar) &&
    req.files.avatar.length > 0
  )
    tempAvatarPath = req.files?.avatar[0]?.path;

  let tempCoverImagePath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  )
    tempCoverImagePath = req.files?.coverImage[0]?.path;

  if (!tempAvatarPath)
    throw new APIError(400, 'Please upload an avatar image.');

  const avatar = await uploadOnCloudinary(tempAvatarPath);

  const coverImage = await uploadOnCloudinary(tempCoverImagePath);

  if (!avatar) throw new APIError(400, 'Please upload an avatar image.');

  const user = await User.create({
    username,
    email,
    fullname,
    password,
    avatar: avatar.url,
    coverImage: coverImage?.url || '',
  });

  const createdUser = await User.findById(user._id).select(
    '-password -refreshToken'
  );

  if (!createdUser)
    throw new APIError(500, 'User registration failed. Please try again.');

  res
    .status(201)
    .json(
      new APIResponse(
        200,
        createdUser,
        'Your account has been created successfully.'
      )
    );
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!(username || email))
    throw new APIError(400, 'Either username or email is required.');
  if (!password) throw new APIError(400, 'Password is required.');

  const foundUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!foundUser)
    throw new APIError(404, 'No user found with the provided details.');

  const isPasswordValid = await foundUser.isPasswordCorrect(password);

  if (!isPasswordValid)
    throw new APIError(401, 'Invalid credentials. Please try again.');

  const { generatedAccessToken, generatedRefreshToken, userDetails } =
    await generateAuthTokens(foundUser._id);

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie('accessToken', generatedAccessToken, options)
    .cookie('refreshToken', generatedRefreshToken, options)
    .json(
      new APIResponse(
        200,
        {
          user: userDetails,
          accessToken: generatedAccessToken,
          refreshToken: generatedRefreshToken,
        },
        'Welcome back! You have logged in successfully.'
      )
    );
});

const logOutUser = asyncHandler(async (req, res) => {
  const userLoggedOut = await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: { refreshToken: 1 },
    },
    { new: true }
  ).select('username');

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie('accessToken', options)
    .clearCookie('refreshToken', options)
    .json(
      new APIResponse(
        200,
        userLoggedOut,
        'You have been logged out successfully.'
      )
    );
});

const renewAccessToken = asyncHandler(async (req, res) => {
  const receivedRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!receivedRefreshToken)
    throw new APIError(401, 'Unauthorized: No valid refresh token provided.');

  try {
    const decodedRefreshToken = jwt.verify(
      receivedRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const refreshTokenUser = await User.findById(decodedRefreshToken?._id);

    if (!refreshTokenUser)
      throw new APIError(
        401,
        'Invalid or expired refresh token. Unable to find associated user.'
      );

    if (receivedRefreshToken !== refreshTokenUser?.refreshToken)
      throw new APIError(
        401,
        'Invalid or expired refresh token. Please log in again.'
      );

    const { generatedAccessToken, generatedRefreshToken } =
      await generateAuthTokens(refreshTokenUser._id);

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie('accessToken', generatedAccessToken, options)
      .cookie('refreshToken', generatedRefreshToken, options)
      .json(
        new APIResponse(
          200,
          {
            generatedAccessToken,
            generatedRefreshToken,
          },
          'Successfully refreshed your access and refresh tokens. You can continue your session.'
        )
      );
  } catch (error) {
    throw new APIError(
      401,
      error?.message ||
        'Unable to refresh token: The provided refresh token is invalid.'
    );
  }
});

const updateUserPassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword, confirmNewPassword } = req.body;

  if (newPassword !== confirmNewPassword)
    throw new APIError(400, 'New password and confirmation do not match.');

  const currentUser = await User.findById(req.user?._id);

  const isCurrentPasswordValid =
    await currentUser.isPasswordCorrect(currentPassword);

  if (!isCurrentPasswordValid)
    throw new APIError(400, 'The current password you entered is incorrect.');

  currentUser.password = newPassword;

  await currentUser.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(
      new APIResponse(200, {}, 'Your password has been changed successfully.')
    );
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(
      new APIResponse(
        200,
        { user: req.user },
        'Current user information retrieved successfully.'
      )
    );
});

const updateUserProfile = asyncHandler(async (req, res) => {
  let { email, fullname } = req.body;

  email = email.trim();

  fullname = fullname.trim();

  if (!fullname || !email) {
    throw new APIError(400, 'All required fields must be filled.');
  }

  if (!validateEmail(email.trim())) {
    throw new APIError(400, 'Invalid email format.');
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        fullname,
        email,
      },
    },
    { new: true }
  ).select('-password');

  return res
    .status(200)
    .json(
      new APIResponse(
        200,
        { user: updatedUser },
        'Your account details have been successfully updated.'
      )
    );
});

const updateAvatar = asyncHandler(async (req, res) => {
  const tempAvatarPath = req.file?.path;

  if (!tempAvatarPath)
    throw new APIError(
      400,
      'Avatar image is required. Please upload a valid file.'
    );

  const avatar = await uploadOnCloudinary(tempAvatarPath);

  if (!avatar.url)
    throw new APIError(400, 'Avatar upload failed. Please try again.');

  const updatedUser = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        avatar: avatar.url,
      },
    },
    { new: true }
  ).select('-password');

  const avatarDeletionResult = await deleteFromCloudinary(req.user.avatar);
  console.log(avatarDeletionResult);

  await res
    .status(200)
    .json(
      new APIResponse(
        200,
        { user: updatedUser },
        'Your avatar image has been updated successfully.'
      )
    );
});

const updateCoverImage = asyncHandler(async (req, res) => {
  const tempCoverImagePath = req.file?.path;

  if (!tempCoverImagePath)
    throw new APIError(
      400,
      'Cover Image is required. Please upload a valid file.'
    );

  const coverImage = await uploadOnCloudinary(tempCoverImagePath);

  if (!coverImage.url)
    throw new APIError(400, 'Cover Image upload failed. Please try again.');

  const updatedUser = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        coverImage: coverImage.url,
      },
    },
    { new: true }
  ).select('-password');

  const coverImageDeletionResult = await deleteFromCloudinary(
    req.user.coverImage
  );

  res
    .status(200)
    .json(
      new APIResponse(
        200,
        { user: updatedUser },
        'Your cover image has been updated successfully.'
      )
    );
});

const fetchUserChannelProfile = asyncHandler(async (req, res) => {
  const { username } = req.params;

  if (!username?.trim()) {
    throw new APIError(400, 'Please provide a valid username.');
  }

  const channelDetails = await User.aggregate([
    {
      $match: {
        username: username?.toLowerCase(),
      },
    },
    {
      $lookup: {
        from: 'subscriptions',
        localField: '_id',
        foreignField: 'channel',
        as: 'subscribers',
      },
    },
    {
      $lookup: {
        from: 'subscriptions',
        localField: '_id',
        foreignField: 'subscriber',
        as: 'subscriptions',
      },
    },
    {
      $addFields: {
        subscribersCount: {
          $size: '$subscribers',
        },
        subscriptionsCount: {
          $size: '$subscriptions',
        },
        isSubscribed: {
          $cond: {
            if: { $in: [req.user?._id, '$subscribers.subscriber'] },
            then: true,
            else: false,
          },
        },
      },
    },
    {
      $project: {
        fullname: 1,
        username: 1,
        avatar: 1,
        coverImage: 1,
        createdAt: 1,
        subscribersCount: 1,
        subscriptionsCount: 1,
        isSubscribed: 1,
      },
    },
  ]);

  console.log(channelDetails);

  if (!channelDetails?.length)
    throw new APIError(
      404,
      'Channel not found. It may have been deleted or the identifier is incorrect.'
    );

  res
    .status(200)
    .json(
      new APIResponse(
        200,
        channelDetails[0],
        'Channel details retrieved successfully.'
      )
    );
});

const getWatchHistory = asyncHandler(async (req, res) => {
  try {
    const userDetails = await User.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(req.user_id),
        },
      },
      {
        $lookup: {
          from: 'videos',
          localField: 'watchHistory',
          foreignField: '_id',
          as: 'watchHistory',
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
    ]);

    console.log('userDetails', userDetails);

    if (userDetails.length === 0 || !userDetails[0].watchHistory.length)
      return res
        .status(200)
        .json(
          new APIResponse(
            200,
            {},
            "You haven't watched anything yet. Explore content to start building your watch history."
          )
        );

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          userDetails?.[0].watchHistory,
          "The user\'s watch history has been successfully retrieved."
        )
      );
  } catch (error) {
    return res
      .status(500)
      .json(
        new APIResponse(
          500,
          {},
          'An error occurred while fetching your watch history.'
        )
      );
  }
});

export {
  registerUser,
  loginUser,
  logOutUser,
  renewAccessToken,
  updateUserPassword,
  getCurrentUser,
  updateUserProfile,
  updateAvatar,
  updateCoverImage,
  fetchUserChannelProfile,
  getWatchHistory,
};
