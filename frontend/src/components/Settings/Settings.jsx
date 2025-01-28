import { isAction } from "@reduxjs/toolkit";
import { NavLink, Outlet } from "react-router-dom";

export default function Settings() {
  return (
    <section className="mt-16 px-4">
      <h2 className="mb-12 text-left text-4xl leading-tight font-bold">
        Settings
      </h2>
      <header className="sticky inset-x-0 top-0 z-50 w-full rounded-3xl bg-[#f7f7f7] mb-5">
        <nav className="mx-auto flex max-w-7xl items-center bg-[#fff] transition-all duration-200">
          <ul className="no-scrollbar sticky top-[66px] z-[2] flex w-full flex-row items-center gap-x-2 overflow-auto rounded-[60px] bg-[#f7f7f7] shadow-inner px-2 py-1.5 sm:top-[82px]">
            <li className="w-full rounded-3xl">
              <NavLink
                to="/profile/settings/update-profile"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#07061a] bg-white shadow-sm drop-shadow-sm"
                      : "text-gray-500"
                  }
                  w-full block text-center rounded-3xl bg-[#f7f7f7] hover:bg-white hover:text-[#07061a] px-3 py-3 transition-all duration-200 hover:shadow-sm hover:drop-shadow-sm text-base font-semibold`
                }
              >
                Account Settings
              </NavLink>
            </li>
            <li className="w-full rounded-3xl">
              <NavLink
                to="/profile/settings/update-password"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#07061a] bg-white shadow-sm drop-shadow-sm"
                      : "text-gray-500"
                  }
                  w-full block text-center rounded-3xl bg-[#f7f7f7] hover:bg-white hover:text-[#07061a] px-3 py-3 transition-all duration-200 hover:shadow-sm hover:drop-shadow-sm text-base font-semibold`
                }
              >
                Security
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="py-5">
        <Outlet />
      </div>
    </section>
  );
}
