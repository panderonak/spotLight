const subscriptionConfig = {
  subscribersPath: String(import.meta.env.VITE_USER_SUBSCRIBERS_PATH),
  subscriptionPath: String(import.meta.env.VITE_USER_SUBSCRIPTIONS_PATH),
  toggleChannelSubscriptionPath: String(
    import.meta.env.VITE_TOGGLE_CHANNEL_SUBSCRIPTION_PATH
  ),
};

export default subscriptionConfig;
