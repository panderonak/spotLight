import { Router } from 'express';
import {
  createPlaylist,
  fetchUserPlaylist,
  fetchPlaylistById,
  addToPlaylist,
  removeFromPlaylist,
  updatePlaylist,
  deletePlaylist,
} from '../controllers/playlist.controllers.js';
import verifyJWT from '../middlewares/auth.middlewares.js';

const router = Router();

router.use(verifyJWT);

router.route('/').post(createPlaylist);

router
  .route('/:playlistId')
  .get(fetchPlaylistById)
  .patch(updatePlaylist)
  .delete(deletePlaylist);

router.route('/add/:videoId/:playlistId').patch(addToPlaylist);

router.route('/remove/:videoId/:playlistId').patch(removeFromPlaylist);

router.route('/user/:userId').get(fetchUserPlaylist);

export default router;
