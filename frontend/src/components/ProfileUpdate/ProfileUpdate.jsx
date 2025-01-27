export default function ProfileUpdate() {
  return (
    <div class="m-16 w-full rounded-xl bg-[#FCFCFC] px-5 pt-10 shadow-sm drop-shadow-md sm:w-1/2 lg:w-2/3">
      <div class="bg-red-400">
        <div class="flex flex-wrap gap-y-4 p-4">
          <div class="w-full lg:w-1/2 lg:pr-2">
            <label for="fullname" class="mb-1 inline-block">
              {" "}
              Full Name{" "}
            </label>
            <input
              type="text"
              class="w-full rounded-xl border border-[#C8C8C8] bg-[#FCFCFC] px-5 py-2.5 text-base font-normal text-black duration-200 outline-none placeholder:font-light placeholder:text-[#7c7b7d] focus:border-black"
              id="fullname "
              placeholder="Enter your full name"
              value="Mikasa Ackerman"
            />
          </div>

          <div class="w-full">
            <label for="lastname" class="mb-1 inline-block">
              {" "}
              Email address{" "}
            </label>
            <div class="relative">
              <div class="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <input
                type="email"
                class="w-full rounded-lg border bg-transparent py-1.5 pr-2 pl-10"
                id="lastname"
                placeholder="Enter email address"
                value="mikasa@eldia.com"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end gap-4 p-4">
        <button class="text-md inline-block rounded-lg border px-3.5 py-2 text-black shadow-md duration-75 hover:bg-white/10">
          Cancel
        </button>
        <button class="text-md inline-block rounded-lg bg-black px-5 py-2.5 text-white shadow-md duration-75 hover:bg-[rgba(3,3,3,0.8)]">
          Save changes
        </button>
      </div>
    </div>
  );
}
