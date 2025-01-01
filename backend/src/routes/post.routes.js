import { Router } from 'express';
import verifyJWT from '../middlewares/auth.middlewares.js';
import {
  createPost,
  retrieveUserPosts,
  updatePost,
  deletePost,
} from '../controllers/post.controllers.js';

const router = Router();

router.use(verifyJWT);

router.route('/').post(createPost);

router.route('/user/:userId').get(retrieveUserPosts);

router.route('/:postId').patch(updatePost).delete(deletePost);

export default router;
