import { memo } from "react";

function PostCard() {
  return (
    <div class="relative min-h-[150px] w-full pt-[16.28%]">
      <div class="bg-red-400 py-4">
        <div class="flex gap-3 border-b border-gray-700 bg-[#0f0f0f] px-3.5 py-4 last:border-b-transparent">
          <div class="h-14 w-14 shrink-0">
            <img
              src="https://images.pexels.com/photos/31197867/pexels-photo-31197867/free-photo-of-young-woman-embracing-nature-in-springtime.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              alt="React Patterns"
              class="h-full w-full rounded-full object-cover"
            />
          </div>
          <div class="w-full">
            <h4 class="mb-1 flex items-center gap-x-2">
              <span class="text-sm font-semibold text-gray-200">
                @Lorem ·<span class="text-xs text-[#aaaaaa]">69 hours ago</span>
              </span>
            </h4>
            <p class="mb-2 text-sm font-normal text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              corporis error eius cupiditate illo ea.
            </p>
            <div class="flex w-full items-center p-0.5 pt-2 transition-all ease-in-out">
              <span class="inline-flex justify-center items-center cursor-pointer rounded-full p-2 transition duration-200 ease-in-out hover:bg-[rgba(229,229,229,0.25)]">
                <svg
                  class="fill-black stroke-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </span>
              <span class="text-xs text-[rgb(170,170,170)]">4000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(PostCard);
