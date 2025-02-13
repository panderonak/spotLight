export default function VideoDetailView() {
  return (
    <section class="w-full bg-black pb-[70px] sm:ml-[70px] sm:pb-0">
      <div class="flex w-full flex-wrap gap-4 p-4 lg:flex-nowrap">
        <div class="col-span-12 w-full">
          <div class="relative mb-4 w-full pt-[56%]">
            <div class="absolute inset-0">
              <video class="h-full w-full" controls="" autoplay="" muted="">
                <source
                  src="https://videos.pexels.com/video-files/30070218/12897557_2560_1440_30fps.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div
            class="group mb-4 w-full rounded-lg border p-4 duration-200 hover:bg-white/5 focus:bg-white/5"
            role="button"
            tabindex="0"
          >
            <div class="flex flex-wrap gap-y-2 text-white">
              <div class="w-full md:w-1/2 lg:w-full xl:w-1/2">
                <h1 class="text-2xl font-bold">Lorem, ipsum dolor.</h1>
                <p class="flex text-xs text-gray-200">
                  30,164 Views · 18 hours ago
                </p>
              </div>
              <div class="w-full md:w-1/2 lg:w-full xl:w-1/2">
                <div class="flex items-center justify-between gap-x-4 md:justify-end lg:justify-between xl:justify-end">
                  <div class="flex overflow-hidden rounded-3xl bg-[#272727] text-white">
                    <button
                      class="group/btn flex items-center gap-x-2 px-4 py-2 after:content-[attr(data-like)] hover:bg-white/10 focus:after:content-[attr(data-like-alt)]"
                      data-like="3050"
                      data-like-alt="3051"
                    >
                      <span class="inline-block w-5 group-focus/btn:text-[#ae7aff]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-thumbs-up"
                        >
                          <path d="M7 10v12" />
                          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div class="relative block">
                    <button class="peer flex cursor-pointer items-center gap-x-2 rounded-3xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-slate-200">
                      <span class="inline-block w-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-view-list"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2m0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14"></path>
                        </svg>
                      </span>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4 flex items-center justify-between">
              <div class="flex items-center gap-x-4">
                <div class="mt-2 h-12 w-12 shrink-0">
                  <img
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="reactpatterns"
                    class="h-full w-full rounded-full"
                  />
                </div>
                <div class="block">
                  <p class="text-gray-200">Lorem, ipsum.</p>
                  <p class="text-sm text-gray-400">757K Subscribers</p>
                </div>
              </div>
              <div class="block">
                <button class="group/btn w-full rounded-3xl bg-[#f1f1f1] px-4 py-2 text-center text-sm font-medium transition-all duration-200 ease-in-out hover:bg-white/80 sm:w-auto">
                  <span class="group-focus/btn:hidden">Subscribe</span>
                  <span class="hidden group-focus/btn:block">Subscribed</span>
                </button>
              </div>
            </div>
            <hr class="my-4 border-[#3f3f3f]" />
            <div class="h-5 overflow-hidden bg-red-400 group-focus:h-auto">
              <p class="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis saepe aperiam delectus obcaecati minus, nam architecto,
                cupiditate incidunt culpa mollitia possimus, necessitatibus odio
                odit labore eum tempora eos doloribus molestias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
