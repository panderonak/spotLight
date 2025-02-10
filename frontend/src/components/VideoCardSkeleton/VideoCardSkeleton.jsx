export default function VideoCardSkeleton() {
  return (
    <div class="w-full">
      <div class="relative mb-2 w-full pt-[56%]">
        <div class="absolute inset-0 animate-pulse rounded-xl bg-[#252525] duration-200 ease-in-out"></div>
      </div>
      <div class="flex justify-center gap-x-2 py-1">
        <div class="mt-1 h-10 w-10 shrink-0 animate-pulse rounded-full bg-[#252525] duration-200 ease-in-out"></div>
        <div class="flex w-full flex-col justify-between gap-2.5">
          <div class="h-5 w-60 animate-pulse rounded bg-[#252525] duration-200 ease-in-out"></div>
          <div class="h-5 w-44 animate-pulse rounded bg-[#252525] duration-200 ease-in-out"></div>
        </div>
      </div>
    </div>
  );
}
