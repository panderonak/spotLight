import asyncHandler from '../utils/asyncHandler.js';
import APIError from '../utils/APIError.js';
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from '../utils/validation.js';
import User from '../models/user.models.js';
import uploadOnCloudinary from '../utils/cloudinary.js';
import APIResponse from '../utils/APIResponse.js';
import generateAuthTokens from '../utils/token.js';

const registerUser = asyncHandler(async (req, res) => {
  let { username, email, fullname, password } = req.body;
  console.log(req.body);

  username = username.trim().replace(/\s+/g, '').toLowerCase();

  email = email.trim();

  password = password.trim();

  if (
    [username, email, fullname, password].some((field) => field?.trim() === '')
  ) {
    throw new APIError(400, 'Please fill in all the required fields.');
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

  if (!username || !email)
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

  const { accessToken, refreshToken, updatedUser } = await generateAuthTokens(
    foundUser._id
  );

  const userDetails = updatedUser.select('-password -refreshToken');

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(
      new APIResponse(
        200,
        { user: userDetails, accessToken, refreshToken },
        'Welcome back! You have logged in successfully.'
      )
    );
});

const logOutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: undefined },
    },
    { new: true }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie('accessToken', options)
    .clearCookie('refreshToken', options)
    .json(new APIResponse(200, {}, 'You have been logged out successfully.'));
});

export { registerUser, loginUser, logOutUser };
