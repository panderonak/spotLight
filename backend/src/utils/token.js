import APIError from '../utils/APIError.js';
import User from '../models/user.models.js';

const generateAuthTokens = async (userId) => {
  try {
    const foundUser = await User.findById(userId);

    const accessToken = foundUser.generateAccessToken();

    const refreshToken = foundUser.generateRefreshToken();

    foundUser.refreshToken = refreshToken;

    const updatedUser = await foundUser.save({ validateBeforeSave: false });

    return { accessToken, refreshToken, updatedUser };
  } catch (error) {
    throw new APIError(
      500,
      'An error occurred while generating the access and refresh tokens. Please try again.'
    );
  }
};

export default generateAuthTokens;
