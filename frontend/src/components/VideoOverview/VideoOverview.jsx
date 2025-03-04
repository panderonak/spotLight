import likeService from "../../API/like";
import subscriptionService from "../../API/subscription";
import { timeAgoFromTimestamp } from "../../dateTimeUtils/timeFunctions";

export default function VideoOverview({
  videoId,
  title,
  description,
  views,
  avatar,
  owner,
  createdAt,
  likes,
  subscribers,
  isSubscribed,
  likedByCurrentUser,
}) {
  const [hasSubscription, setHasSubscription] = useState(isSubscribed);
  const [hasUserLiked, setHasUserLiked] = useState(likedByCurrentUser);

  const toggleLikeStatus = async ({ videoId }) => {
    try {
      const response = await likeService.toggleVideoLike({ videoId });

      if (response?.success) {
        console.log("You have successfully liked the video!");
        setHasUserLiked((prev) => !prev);
      } else {
        console.log("Failed to like the video. Please try again.");
      }
    } catch (error) {
      console.error(
        "An error occurred while liking the video:",
        error?.message || error
      );
    }
  };

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
    <div
      className="group mb-4 w-full rounded-lg border bg-red-400 p-4 duration-200 hover:bg-white/5 focus:bg-white/5"
      role="button"
      tabindex="0"
    >
      <div className="flex flex-wrap gap-y-2 text-white">
        <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="flex text-xs text-gray-200">
            {views} Views · {timeAgoFromTimestamp(createdAt)} ago
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
          <div className="flex items-center justify-between gap-x-4 md:justify-end lg:justify-between xl:justify-end">
            <div className="flex overflow-hidden rounded-3xl bg-[#272727] text-white">
              <button
                className="group/btn flex items-center gap-x-2 px-4 py-2 after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)]"
                data-like={`${likes}`}
                data-like-alt={`${likes}`}
              >
                <span
                  onClick={() => toggleLikeStatus({ videoId })}
                  className="inline-block w-5"
                >
                  <svg
                    className={`${
                      hasUserLiked ? "fill-white" : "fill-black"
                    } cursor-pointer`}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          stroke="#f1f1f1"
                          stroke-width="1.2"
                          d="M2 9h3v12H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1zm5.293-1.293l6.4-6.4a.5.5 0 0 1 .654-.047l.853.64a1.5 1.5 0 0 1 .553 1.57L14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H8a1 1 0 0 1-1-1V8.414a1 1 0 0 1 .293-.707z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </button>
            </div>
            <div className="relative block">
              <button className="peer flex cursor-pointer items-center gap-x-2 rounded-3xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-slate-200">
                <span className="inline-block w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-view-list"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2m0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14"></path>
                  </svg>
                </span>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div className="mt-2 h-12 w-12 shrink-0">
            <img
              src={`${avatar}`}
              alt="reactpatterns"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <p className="text-gray-200">{owner}</p>
            <p className="text-sm text-gray-400">{subscribers} Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button
            onClick={() => toggleSubscriptionStatus({ channelId: owner?._id })}
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
      <hr className="my-4 border-[#3f3f3f]" />
      <div className="h-5 overflow-hidden bg-red-400 group-focus:h-auto">
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
