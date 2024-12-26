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

router.route('/current-user').get(getCurrentUser);

router.route('/update-user').post(verifyJWT, updateUserProfile);

router
  .route('/update-avatar')
  .post(verifyJWT, upload.single('avatar'), updateAvatar);

router
  .route('/update-cover')
  .post(upload.single('coverImage'), updateCoverImage);

export default router;
