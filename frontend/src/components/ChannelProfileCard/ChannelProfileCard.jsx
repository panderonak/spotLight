export default function ChannelProfileCard() {
  return (
    <div class="flex flex-wrap gap-4 bg-amber-200 pt-6 pb-4">
      <span class="relative inline-block h-35 w-35 shrink-0 overflow-hidden rounded-full">
        <img
          src="https://images.pexels.com/photos/30724332/pexels-photo-30724332/free-photo-of-woman-embracing-calm-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt="Channel"
          class="h-full w-full"
        />
      </span>
      <div class="mr-auto">
        <div class="flex h-full w-full flex-col justify-center">
          <h1 class="pb-2 text-4xl font-bold text-white">The Eren Yeager</h1>
          <div class="flex items-center gap-x-2">
            <p class="text-sm font-medium text-white">@TheErenYeager</p>
            <p class="text-sm font-normal text-[#aaaaaa]">
              • 800M subscribers • 13 videos
            </p>
          </div>
        </div>
      </div>
      <div class="inline-block">
        <div class="inline-flex h-full min-w-[145px] items-center justify-start">
          <button class="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
            <span class="group-focus/btn:hidden">Subscribe</span>
            <span class="hidden group-focus/btn:block">Subscribed</span>
          </button>
        </div>
      </div>
    </div>
  );
}
