import { Router } from 'express';
import {
  publishVideo,
  getVideoById,
  fetchAllVideos,
  updateVideo,
  deleteVideo,
  updatePublishStatus,
} from '../controllers/video.controllers.js';
import upload from '../middlewares/multer.middlewares.js';
import verifyJWT from '../middlewares/auth.middlewares.js';

const router = Router();
router.use(verifyJWT);

router
  .route('/')
  .get(fetchAllVideos)
  .post(
    upload.fields([
      {
        name: 'videoFile',
        maxCount: 1,
      },
      {
        name: 'thumbnail',
        maxCount: 1,
      },
    ]),
    publishVideo
  );

router
  .route('/:videoId')
  .get(getVideoById)
  .delete(deleteVideo)
  .patch(upload.single('thumbnail'), updateVideo);

router.route('/toggle/publish/:videoId').patch(updatePublishStatus);

export default router;
