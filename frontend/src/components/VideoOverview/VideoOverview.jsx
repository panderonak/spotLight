export default function VideoOverview({
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
                <span className="inline-block w-5 group-focus/btn:text-[#ae7aff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-thumbs-up"
                  >
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
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
          <button className="group/btn w-full rounded-3xl bg-[#f1f1f1] px-4 py-2 text-center text-sm font-medium transition-all duration-200 ease-in-out hover:bg-white/80 sm:w-auto">
            <span className="group-focus/btn:hidden">Subscribe</span>
            <span className="hidden group-focus/btn:block">Subscribed</span>
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
