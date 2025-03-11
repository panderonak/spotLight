export default function ChannelNavigation() {
  return (
    <div>
      <ul class="no-scrollbar sticky top-[66px] z-[2] mb-10 flex flex-row gap-x-2 overflow-auto rounded-lg bg-[#121212]  p-1.5 sm:top-[82px]">
        <li class="w-full rounded-md bg-green-600 hover:bg-amber-300">
          <button class="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
            Videos
          </button>
        </li>
        <li class="w-full">
          <button class="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
            Playlist
          </button>
        </li>
        <li class="w-full">
          <button class="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
            Tweets
          </button>
        </li>
        <li class="w-full">
          <button class="w-full border-b-2 border-[#ae7aff] bg-white px-3 py-1.5 text-[#ae7aff]">
            Subscribed
          </button>
        </li>
      </ul>
    </div>
  );
}
