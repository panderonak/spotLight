import { Router } from 'express';
import {
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
} from '../controllers/user.controllers.js';
import upload from '../middlewares/multer.middlewares.js';
import verifyJWT from '../middlewares/auth.middlewares.js';

const router = Router();

router.route('/register').post(
  upload.fields([
    {
      name: 'avatar',
      maxCount: 1,
    },
    {
      name: 'coverImage',
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route('/login').post(loginUser);

router.route('/logout').post(verifyJWT, logOutUser);

router.route('/refresh-token').post(renewAccessToken);

router.route('/update-password').post(verifyJWT, updateUserPassword);

router.route('/current-user').get(verifyJWT, getCurrentUser);

router.route('/update-user').patch(verifyJWT, updateUserProfile);

router
  .route('/update-avatar')
  .patch(verifyJWT, upload.single('avatar'), updateAvatar);

router
  .route('/update-cover')
  .patch(verifyJWT, upload.single('coverImage'), updateCoverImage);

router.route('/channel/:username').get(verifyJWT, fetchUserChannelProfile);

router.route('/feed/history').get(verifyJWT, getWatchHistory);

export default router;
