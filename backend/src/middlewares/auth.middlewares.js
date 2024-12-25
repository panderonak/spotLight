import asyncHandler from '../utils/asyncHandler.js';
import APIError from '../utils/APIError.js';
import jwt from 'jsonwebtoken';
import User from '../models/user.models.js';

const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header('Authorization')?.replace('Bearer ', '');

    if (!token)
      throw APIError(401, 'Unauthorized access. Please provide a valid token.');

    const decodedUserInfo = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const authenticatedUser = await User.findById(decodedUserInfo?._id).select(
      '-password -refreshToken'
    );

    if (!authenticatedUser)
      throw new APIError(
        401,
        'Invalid or expired access token. Please log in again.'
      );

    req.user = authenticatedUser;

    next();
  } catch (error) {
    throw new APIError(
      401,
      error?.message || 'Invalid or expired access token. Please log in again.'
    );
  }
});

export default verifyJWT;
