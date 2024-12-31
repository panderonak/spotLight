import { Router } from 'express';
import {
  toggleChannelSubscription,
  getChannelSubscribers,
  getSubscribedChannels,
} from '../controllers/subscription.controllers.js';
import verifyJWT from '../middlewares/auth.middlewares.js';

const router = Router();

router.use(verifyJWT);

router
  .route('/channel/:subscriberId')
  .get(getSubscribedChannels)
  .post(toggleChannelSubscription);

router.route('/user/:channelId').get(getChannelSubscribers);

export default router;
