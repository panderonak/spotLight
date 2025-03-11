export default function ChannelProfileList() {
  return (
    <div class="flex w-full cursor-pointer items-center justify-between rounded-md bg-red-400 px-4 py-2.5 duration-200 hover:bg-[rgba(211,211,211,0.2)]">
      <div class="flex items-center gap-x-3">
        <div class="h-14 w-14 shrink-0 rounded-full">
          <img
            src="https://images.pexels.com/photos/29879992/pexels-photo-29879992/free-photo-of-dreamy-outdoor-portrait-of-woman-at-twilight.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="Code Master"
            class="h-full w-full rounded-full"
          />
        </div>
        <div class="block">
          <h6 class="font-medium text-white">Lorem, ipsum.</h6>
          <p class="text-sm font-normal text-[#aaaaaa]">20K Subscribers</p>
        </div>
      </div>
      <div class="block">
        <button class="group/btn rounded-md bg-[#fff] px-3 py-2 text-black focus:bg-white">
          <span class="group-focus/btn:hidden">Subscribed</span>
          <span class="hidden group-focus/btn:inline">Subscribe</span>
        </button>
      </div>
    </div>
  );
}
