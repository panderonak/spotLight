export default function ChannelBanner({ channelProfile }) {
  return (
    <div class="relative min-h-[200px] w-full pt-[16.28%] bg-amber-600">
      <div class="absolute inset-0 overflow-hidden p-2">
        <img
          className={`${channelProfile?.coverImage}`}
          alt={`${channelProfile?.username}`}
        />
      </div>
    </div>
  );
}
