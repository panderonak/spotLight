import mongoose, { isValidObjectId } from 'mongoose';
import { Subscription } from '../models/subscription.models.js';
import APIError from '../utils/APIError.js';
import APIResponse from '../utils/APIResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

const toggleChannelSubscription = asyncHandler(async (req, res) => {
  const { channelId } = req.params;

  try {
    if (!isValidObjectId(channelId))
      throw new APIError(
        400,
        'The provided channel Id is invalid or malformed.'
      );

    const isSubscribed = await Subscription.findOne({
      subscriber: req.user?._id,
      channel: channelId,
    });

    if (isSubscribed) {
      const deletedSubscription = await Subscription.findOneAndDelete({
        subscriber: req.user?._id,
        channel: channelId,
      });

      if (!deletedSubscription)
        throw new APIError(
          500,
          'Failed to remove or unsubscribe. Please try again later or contact support if issue persists.'
        );

      return res
        .status(200)
        .json(
          new APIResponse(
            200,
            deletedSubscription,
            'You have successfully removed your subscription from this channel.'
          )
        );
    } else {
      const addedSubscription = await Subscription.create({
        subscriber: req.user?._id,
        channel: channelId,
      });

      if (!addedSubscription)
        throw new APIError(
          500,
          'Unable to add subscription at this moment. Please try again later, or contact support if the issue persists.'
        );

      return res
        .status(200)
        .json(
          new APIResponse(
            200,
            addedSubscription,
            'You have successfully subscribed to this channel.'
          )
        );
    }
  } catch (error) {
    console.log(`CHANNEL SUBSCRIPTION ERROR: ${error?.message}`);
    throw new APIError(
      500,
      'An unexpected error occurred while subscribing to the channel. Please try again later. If the issue persists, contact support.'
    );
  }
});

const getChannelSubscribers = asyncHandler(async (req, res) => {
  const { channelId } = req.params;

  if (!isValidObjectId(channelId))
    throw new APIError(400, 'The provided channel Id is invalid or malformed.');

  try {
    const channelSubscribersAggregationPipeline = [
      {
        $match: {
          channel: new mongoose.Types.ObjectId(channelId),
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'subscriber',
          foreignField: '_id',
          as: 'subscriber',
          pipeline: [
            {
              $project: {
                username: 1,
                avatar: 1,
              },
            },
          ],
        },
      },
      {
        $addFields: {
          subscriber: {
            $first: '$subscriber',
          },
        },
      },
      {
        $project: {
          subscriber: 1,
          channel: 1,
          created: 1,
          createdAt: 1,
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
    ];

    const options = {
      page: 1,
      limit: 10,
    };

    const paginatedSubscribers = await Subscription.aggregatePaginate(
      channelSubscribersAggregationPipeline,
      options
    );

    if (paginatedSubscribers.docs.length === 0)
      return res
        .status(200)
        .json(new APIResponse(200, {}, 'You currently have no subscribers.'));

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          paginatedSubscribers.docs,
          'Subscribers fetched successfully.'
        )
      );
  } catch (error) {
    console.log(`CHANNEL SUBSCRIBERS ERROR: ${error?.message}`);
    throw new APIError(
      500,
      "An unexpected error occurred while retrieving the channel's subscribers. Please try again later. If the issue persists, contact support."
    );
  }
});

const getSubscribedChannels = asyncHandler(async (req, res) => {
  const { subscriberId } = req.params;

  if (!isValidObjectId(subscriberId))
    throw new APIError(
      400,
      'The provided subscriber Id is invalid or malformed.'
    );
  try {
    const subscribedChannelsAggregationPipeline = [
      {
        $match: {
          subscriber: new mongoose.Types.ObjectId(subscriberId),
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'channel',
          foreignField: '_id',
          as: 'channel',
          pipeline: [
            {
              $project: {
                username: 1,
                avatar: 1,
              },
            },
          ],
        },
      },
      {
        $addFields: {
          channel: {
            $first: '$channel',
          },
        },
      },
      {
        $project: {
          subscriber: 1,
          channel: 1,
          createdAt: 1,
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
    ];

    const options = {
      page: 1,
      limit: 10,
    };

    const paginatedSubscriptions = await Subscription.aggregatePaginate(
      subscribedChannelsAggregationPipeline,
      options
    );

    if (paginatedSubscriptions.length === 0)
      return res
        .status(200)
        .json(
          new APIResponse(
            200,
            {},
            'This channel has not subscribed to any users yet.'
          )
        );

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          paginatedSubscriptions.docs,
          "Successfully fetched the channel 's subscriptions."
        )
      );
  } catch (error) {
    console.log(`SUBSCRIBED CHANNELS ERROR: ${error?.message}`);
    throw new APIError(
      500,
      'An unexpected error occurred while retrieving your subscribed channels. Please try again later. If the issue persists, contact support.'
    );
  }
});

export {
  toggleChannelSubscription,
  getChannelSubscribers,
  getSubscribedChannels,
};
