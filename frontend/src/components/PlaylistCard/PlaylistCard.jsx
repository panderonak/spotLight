import { memo } from "react";

function PlaylistCard({
  playlistTitle,
  playlistDescription,
  thumbnailImage,
  totalVideos,
}) {
  return (
    <div className="w-full p-0.5">
      <div className="relative mb-2 w-full pt-[56%]">
        <div className="absolute inset-0">
          <div className="h-full w-full rounded-2xl bg-gray-700">
            <img
              src={thumbnailImage}
              alt={`${playlistTitle} Playlist`}
              className="h-full w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0">
            <div className="relative px-2 py-2">
              <div className="relative z-[1]">
                <p className="flex justify-end">
                  <span className="flex items-center justify-center gap-1.5 rounded-md bg-[rgba(0,0,0,0.4)] px-1.5 py-1 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 12H3" />
                      <path d="M16 6H3" />
                      <path d="M12 18H3" />
                      <path d="m16 12 5 3-5 3v-6Z" />
                    </svg>
                    <span className="inline-block text-sm font-semibold">
                      {`${totalVideos} videos`}
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h6 className="mb-1 font-semibold text-white">{playlistTitle}</h6>
      <p className="flex text-sm text-gray-200">{playlistDescription}</p>
    </div>
  );
}

export default memo(PlaylistCard);
