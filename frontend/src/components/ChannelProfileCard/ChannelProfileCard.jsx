import userService from "../../API/user";

export default function ChannelProfileCard({ username }) {
  const [channelProfile, setChannelProfile] = useState({});

  useEffect(() => {
    const subscription = async () => {
      try {
        const channelInfo = await userService.getChannelProfile({ username });
        if (channelInfo.success) setChannelProfile(channelInfo?.data);
      } catch (error) {
        console.error(error?.message);
      }
    };

    return () => {
      subscription.unsubscribe();
    };
  }, [third]);

  const [hasSubscription, setHasSubscription] = useState(
    channelProfile?.isSubscribed
  );

  const toggleSubscriptionStatus = async ({ channelId }) => {
    try {
      const response = await subscriptionService.toggleChannelSubscription({
        channelId,
      });

      if (response?.success) {
        console.log("You have successfully subscribed to the channel!");
        setHasSubscription((prev) => !prev);
      } else {
        console.log("Failed to subscribe to the channel. Please try again.");
      }
    } catch (error) {
      console.error(
        "An error occurred while subscribing to the channel:",
        error?.message || error
      );
    }
  };

  return (
    <div class="flex flex-wrap gap-4 bg-amber-200 pt-6 pb-4">
      <span class="relative inline-block h-35 w-35 shrink-0 overflow-hidden rounded-full">
        <img src={channelProfile?.avatar} alt="Channel" class="h-full w-full" />
      </span>
      <div class="mr-auto">
        <div class="flex h-full w-full flex-col justify-center">
          <h1 class="pb-2 text-4xl font-bold text-white">
            {channelProfile?.fullname}
          </h1>
          <div class="flex items-center gap-x-2">
            <p class="text-sm font-medium text-white">
              {`@${channelProfile?.username}`}
            </p>
            <p class="text-sm font-normal text-[#aaaaaa]">
              • {channelProfile?.subscribersCount}
            </p>
          </div>
        </div>
      </div>
      <div class="inline-block">
        <div class="inline-flex h-full min-w-[145px] items-center justify-start">
          <button
            onClick={() =>
              toggleSubscriptionStatus({ channelId: channelProfile?._id })
            }
            className={`
              ${
                hasSubscription
                  ? "bg-[#f1f1f1] hover:bg-[#f1f1f1]/80 text-[#272727]"
                  : "bg-[#272727] hover:bg-[#272727]/80 text-[#f1f1f1]"
              } group/btn w-full rounded-3xl  px-4 py-2 text-center text-sm font-medium transition-all duration-200 ease-in-out  sm:w-auto cursor-pointer`}
          >
            <span>{hasSubscription ? "Subscribed" : "Subscribe"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
