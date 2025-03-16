export default function PlaylistCard({
  playlistTitle,
  playlistDescription,
  thumbnailImage,
  totalVideos,
}) {
  return (
    <div class="w-full p-0.5">
      <div class="relative mb-2 w-full pt-[56%]">
        <div class="absolute inset-0">
          <img
            src={`${thumbnailImage}`}
            alt={`${playlistTitle} Playlist`}
            class="h-full w-full rounded-2xl object-cover"
          />
          <div class="absolute inset-x-0 bottom-0">
            <div class="relative px-2 py-2">
              <div class="relative z-[1]">
                <p class="flex justify-end">
                  <span class="flex items-center justify-center gap-1.5 rounded-md bg-[rgba(0,0,0,0.4)] px-1.5 py-1 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 12H3" />
                      <path d="M16 6H3" />
                      <path d="M12 18H3" />
                      <path d="m16 12 5 3-5 3v-6Z" />
                    </svg>
                    <span class="inline-block text-sm font-semibold">
                      {`${totalVideos} videos`}
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h6 class="mb-1 font-semibold text-white">{playlistTitle}</h6>
      <p class="flex text-sm text-gray-200">{playlistDescription}</p>
    </div>
  );
}
