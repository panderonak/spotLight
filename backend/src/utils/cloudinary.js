import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import APIError from '../utils/APIError.js';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto',
    });
    console.log('File is uploaded successfully on cloudinary.');

    console.log(response);
    console.log(response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const deleteFromCloudinary = async (url) => {
  try {
    if (!url) return null;

    const extractPublicId = (url) => {
      const regex =
        /\/v\d+\/(.*)\.(jpg|jpeg|png|gif|webp|bmp|tiff|pdf|mp4|mov)/;
      const match = url.match(regex);
      console.log(match);
      return match ? match[1] : null;
    };

    const publicID = extractPublicId(url);

    if (!publicID)
      throw new APIError(400, 'Invalid Cloudinary URL or public ID not found.');

    const response = await cloudinary.uploader.destroy(publicID);
    return response;
  } catch (error) {
    console.log(
      'An unexpected error occurred while deleting the file. Please try again later.'
    );
    return null;
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
