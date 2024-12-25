import APIError from '../utils/APIError.js';
import User from '../models/user.models.js';

const generateAuthTokens = async (userId) => {
  try {
    const foundUser = await User.findById(userId);

    const generatedAccessToken = foundUser.generateAccessToken();

    const generatedRefreshToken = foundUser.generateRefreshToken();

    foundUser.refreshToken = generatedRefreshToken;

    const updatedUser = await foundUser.save({ validateBeforeSave: false });

    const { password, refreshToken, ...userDetails } = updatedUser._doc;

    return { generatedAccessToken, generatedRefreshToken, userDetails };
  } catch (error) {
    throw new APIError(
      500,
      'An error occurred while generating the access and refresh tokens. Please try again.'
    );
  }
};

export default generateAuthTokens;
