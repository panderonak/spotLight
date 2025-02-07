export default function VideoUploadSuccessModal() {
  return (
    <div class="absolute inset-x-0 top-0 z-10 flex h-[calc(100vh-66px)] items-center justify-center bg-black/50 px-4 pb-[86px] pt-4 sm:h-[calc(100vh-82px)] sm:px-14 sm:py-8">
      <div class="w-full max-w-lg overflow-auto rounded-xl bg-[#f9fbfc] p-7">
        <div class="mb-4 flex items-start justify-between">
          <h2 class="text-xl font-semibold">Uploaded Video</h2>
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
        <div class="mb-6 flex gap-x-2 rounded-2xl border border-[#C8C8C8] p-5">
          <div class="w-8 shrink-0">
            <span class="inline-block w-full rounded-full bg-[#000] p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
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
            <h6 class="font-medium text-lg">
              Dashboard prototype recording.mp4
            </h6>
            <p class="text-sm text-[#a5a5a5]">16 MB</p>
            <div class="mt-2 flex items-center">
              <span class="mr-2 inline-block w-6 text-[#38b000]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <span class="text-[#595959] font-medium">
                Uploaded Successfully
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
