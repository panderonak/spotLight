export default function CommentCard() {
  return (
    <div class="relative">
      <div class="w-full bg-[#0f0f0f] p-4">
        <div class="flex items-start gap-x-4">
          <div class="mt-2 h-11 w-11 shrink-0">
            <img
              src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-woman-reading-book-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="User profile"
              class="h-full w-full rounded-full object-cover"
            />
          </div>

          <div class="flex-1">
            <p class="flex items-center justify-between text-sm font-semibold text-gray-200">
              <span>
                @lorem ·<span class="text-xs text-[#aaaaaa]">19 hours ago</span>
              </span>
              <button class="cursor-pointer pr-3">
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
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
            </p>
            <p class="mt-3 pr-5 text-sm font-normal text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
              dignissimos. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Maxime, impedit.
            </p>

            <div class="flex w-full items-center p-0.5 pt-2 transition-all ease-in-out">
              <span class="cursor-pointer rounded-full p-2 transition duration-200 ease-in-out hover:bg-[rgba(229,229,229,0.25)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f1f1f1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-thumbs-up"
                >
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute top-10 right-10 w-36 rounded-xl bg-[rgba(40,40,40)] px-2 py-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <ul>
          <li>
            <button
              class="mb-1.5 flex w-full cursor-pointer items-center rounded-md p-2 text-white hover:bg-[rgb(83,83,83)]"
              aria-label="Delete post"
            >
              <span class="mr-2 text-sm font-normal">Delete</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f02d3a"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" x2="10" y1="11" y2="17" />
                <line x1="14" x2="14" y1="11" y2="17" />
              </svg>
            </button>
            <button
              class="flex w-full cursor-pointer items-center rounded-md p-2 text-white hover:bg-[rgb(83,83,83)]"
              aria-label="Update post"
            >
              <span class="mr-2 text-sm font-normal">Update</span>
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
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                <path d="m15 5 4 4" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
