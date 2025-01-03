import { Router } from 'express';
import {
  toggleChannelSubscription,
  getChannelSubscribers,
  getSubscribedChannels,
} from '../controllers/subscription.controllers.js';
import verifyJWT from '../middlewares/auth.middlewares.js';

const router = Router();

router.use(verifyJWT);

router.route('/user/:subscriberId').get(getSubscribedChannels);

router
  .route('/channel/:channelId')
  .get(getChannelSubscribers)
  .post(toggleChannelSubscription);

export default router;
