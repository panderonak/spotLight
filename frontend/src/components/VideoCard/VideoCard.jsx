import {
  formatTimeDuration,
  timeAgoFromTimestamp,
} from "../../dateTimeUtils/timeFunctions";

export default function VideoCard({
  videoId,
  thumbnail,
  title,
  duration,
  views,
  username,
  avatar,
  createdAt,
}) {
  navigate("/video", { state: { videoId } }); // TODO: Fix this line.
  return (
    <div className="w-full">
      <div className="relative mb-2 w-full pt-[56%]">
        <div className="absolute inset-0 rounded-xl">
          <img
            src={`${thumbnail}`}
            alt={`${title}`}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <span className="absolute right-2 bottom-2 inline-block rounded-md bg-[rgba(0,0,0,0.5)] px-1.5 py-0.5 text-sm text-[#ffffff]">
          {`${formatTimeDuration(duration)}`}
        </span>
      </div>
      <div className="flex gap-x-3">
        <div className="mt-1.5 h-10 w-10 shrink-0">
          <img
            src={`${avatar}`}
            alt={`${username}`}
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="w-full">
          <h6 className="mb-1 font-semibold text-[#f1f1f1]">{`${title}`}</h6>
          <p className="mb-0.5 text-sm font-normal text-[#aaaaaa]">{`${username}`}</p>
          <p className="flex text-sm font-normal text-[#aaaaaa]">
            {`${views} views`}
            <span className="font-black px-1"> · </span>
            {`${timeAgoFromTimestamp(createdAt)}`}
          </p>
        </div>
      </div>
    </div>
  );
}

// TODO: Implement navigation to the channel profile and video pages for video viewing.
