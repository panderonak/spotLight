export default function VideoUploadModal() {
  return (
    <div class="absolute inset-x-0 top-0 z-10 flex h-[calc(100vh-66px)] items-center justify-center bg-black/50 px-4 pt-4 pb-[86px] sm:h-[calc(100vh-82px)] sm:px-14 sm:py-8">
      <div class="w-full max-w-lg overflow-auto rounded-xl bg-[#f9fbfc] p-6">
        <div class="mb-4 flex items-start justify-between">
          <h2 class="text-xl font-semibold">Uploading Video</h2>
          <button class="h-6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div class="mb-6 flex gap-x-2 rounded-2xl border border-[#C8C8C8] bg-red-400 p-5">
          <div class="w-8 shrink-0">
            <span class="inline-block w-full rounded-full bg-[#f7f7f7] p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-film"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 3v18" />
                <path d="M3 7.5h4" />
                <path d="M3 12h18" />
                <path d="M3 16.5h4" />
                <path d="M17 3v18" />
                <path d="M17 7.5h4" />
                <path d="M17 16.5h4" />
              </svg>
            </span>
          </div>
          <div class="flex flex-col">
            <h6>Dashboard prototype recording.mp4</h6>
            <p class="text-sm">16 MB</p>
            <div class="mt-2">
              <span class="loader rounded-2xl"></span>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <button
            class="bg-[#ae7aff] px-4 py-3 text-black disabled:bg-[#E4D3FF]"
            disabled=""
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}
