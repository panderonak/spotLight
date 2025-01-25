import { Outlet } from "react-router-dom";

export default function Settings() {
  return (
    <section>
      <h2 class="mb-12 text-left text-4xl leading-tight font-bold">Settings</h2>
      <header class="sticky inset-x-0 top-0 z-50 w-full rounded-4xl bg-[#f7f7f7]">
        <nav class="mx-auto flex max-w-7xl items-center rounded-4xl bg-[#f7f6f9] transition-all duration-200">
          <ul class="no-scrollbar sticky top-[66px] z-[2] flex w-full flex-row items-center gap-x-2 overflow-auto rounded-4xl bg-[#f7f7f7] px-2 py-1.5 sm:top-[82px]">
            <li class="w-full rounded-4xl shadow-sm drop-shadow-sm">
              <button class="w-full rounded-4xl bg-white px-3 py-3 text-[#07061a]">
                Account Settings
              </button>
            </li>

            <li class="w-full rounded-4xl">
              <button class="w-full rounded-4xl px-3 py-3 text-[#07061a]">
                Security
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </section>
  );
}
