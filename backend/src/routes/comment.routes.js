import { Router } from 'express';
import {
  postComment,
  editComment,
  deleteComment,
  fetchVideoComments,
} from '../controllers/comment.controllers.js';
import verifyJWT from '../middlewares/auth.middlewares.js';

const router = Router();

router.use(verifyJWT);

router.route('/:videoId').post(postComment).get(fetchVideoComments);

router.route('/:commentId').delete(deleteComment).patch(editComment);

export default router;
