import { Router } from 'express';
import {
  toggleVideoLikeStatus,
  toggleCommentLikeStatus,
  togglePostLikeStatus,
  fetchLikedVideos,
} from '../controllers/like.controllers.js';
import verifyJWT from '../middlewares/auth.middlewares.js';

const router = Router();

router.use(verifyJWT);

router.route('/toggle/video/:videoId').post(toggleVideoLikeStatus);

router.route('/toggle/comment/:commentId').post(toggleCommentLikeStatus);

router.route('/toggle/post/:postId').post(togglePostLikeStatus);

router.route('/videos').get(fetchLikedVideos);

export default router;
