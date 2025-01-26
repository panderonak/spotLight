import { Outlet } from "react-router-dom";

export default function Settings() {
  return (
    <section className="mt-16 px-4">
      <h2 className="mb-12 text-left text-4xl leading-tight font-bold">
        Settings
      </h2>
      <header className="sticky inset-x-0 top-0 z-50 w-full rounded-3xl bg-[#f7f7f7]">
        <nav className="mx-auto flex max-w-7xl items-center bg-[#fff] transition-all duration-200">
          <ul className="no-scrollbar sticky top-[66px] z-[2] flex w-full flex-row items-center gap-x-2 overflow-auto rounded-3xl bg-[#f7f7f7] px-2 py-1.5 sm:top-[82px]">
            <li className="w-full rounded-3xl shadow-sm drop-shadow-sm">
              <button className="w-full rounded-3xl bg-white px-3 py-3 text-[#07061a]">
                Account Settings
              </button>
            </li>
            <li className="w-full rounded-4xl">
              <button className="w-full rounded-4xl px-3 py-3 text-[#07061a]">
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
