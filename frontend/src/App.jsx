import { Outlet } from "react-router-dom";
import { Button, Input } from "./components";
import { useState, memo } from "react";

// Icon components (assumed to be in './icons')

import {
  ProjectorIcon,
  SearchIcon,
  MenuIcon,
  CloseIcon,
  HomeIcon,
  LikedIcon,
  HistoryIcon,
  ContentIcon,
  PlaylistIcon,
  SubscriptionsIcon,
  SupportIcon,
  SettingsIcon,
  LogoutIcon,
} from "./icons/index";

// Menu items configuration
const menuItems = [
  { id: "home", icon: HomeIcon, label: "Home", bottomNav: true, sidebar: true },
  {
    id: "liked",
    icon: LikedIcon,
    label: "Liked Videos",
    sidebar: true,
    mobile: true,
  },
  {
    id: "history",
    icon: HistoryIcon,
    label: "History",
    bottomNav: true,
    sidebar: true,
  },
  {
    id: "content",
    icon: ContentIcon,
    label: "My Content",
    sidebar: true,
    mobile: true,
  },
  {
    id: "playlist",
    icon: PlaylistIcon,
    label: "Playlist",
    bottomNav: true,
    sidebar: true,
  },
  {
    id: "subscriptions",
    icon: SubscriptionsIcon,
    label: "Subscriptions",
    bottomNav: true,
    sidebar: true,
  },
  {
    id: "support",
    icon: SupportIcon,
    label: "Support",
    sidebar: true,
    mobile: true,
  },
  {
    id: "settings",
    icon: SettingsIcon,
    label: "Settings",
    sidebar: true,
    mobile: true,
  },
];

// Reusable Menu Item Component
const MenuItem = memo(({ icon: Icon, label }) => (
  <li
    className="rounded-lg font-normal py-1.5 duration-200 
    hover:bg-[rgba(108,117,125,0.25)] ease-in-out"
  >
    <button
      className="flex flex-col items-center justify-center rounded-lg px-4 py-3 sm:w-full sm:flex-row sm:p-1.5   sm:group-hover:justify-start sm:group-hover:px-4 sm:hover:text-white sm:focus:text-white lg:justify-start lg:px-4"
      aria-label={label}
    >
      <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
        <Icon className="h-5 w-5" />
      </span>
      <span className="block sm:hidden sm:group-hover:inline lg:inline">
        {label}
      </span>
    </button>
  </li>
));

<li className="rounded-lg px-3 py-1.5 hover:bg-slate-800">
  <button className="flex flex-col items-center justify-center rounded-lg px-4 py-3 sm:w-full sm:flex-row sm:p-1.5 sm:group-hover:justify-start sm:group-hover:px-4 sm:hover:text-white sm:focus:text-white lg:justify-start lg:px-4">
    <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="h-6 w-6"
      >
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
      </svg>
    </span>
    <span className="block sm:hidden sm:group-hover:inline lg:inline">
      Home
    </span>
  </button>
</li>;

// Reusable Mobile Dropdown Item
const MobileMenuItem = memo(({ icon: Icon, label }) => (
  <li className="w-full">
    <button
      className="flex w-full items-center justify-start gap-x-4 px-4 py-1.5 text-left focus:text-white rounded-lg font-normal duration-200 
    hover:bg-[rgba(108,117,125,0.25)] ease-in-out"
      aria-label={label}
    >
      <span className="inline-block w-5 shrink-0">
        <Icon className="h-6 w-6" />
      </span>
      <span>{label}</span>
    </button>
  </li>
));

// User Profile Component
const UserProfile = memo(() => (
  <li className="border-t mt-auto border-gray-700 pt-4 sm:block hidden">
    <button
      className="flex flex-col items-center justify-center rounded-lg px-4 py-3 sm:w-full sm:flex-row sm:p-1.5 sm:group-hover:justify-start sm:group-hover:px-4 sm:hover:text-white sm:focus:text-white lg:justify-start lg:px-4"
      aria-label="User Profile"
    >
      <span className="inline-block w-10 shrink-0 rounded-full sm:group-hover:mr-2 lg:mr-2">
        <img
          src="https://picsum.photos/200"
          alt="Jane Doe"
          className="h-10 w-10 rounded-full"
          loading="lazy"
        />
      </span>
      <span className="block sm:hidden sm:group-hover:inline lg:inline">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-start">
            <p className="text-base font-medium">Jane Doe</p>
            <p className="text-sm text-gray-400">@olwenKelly</p>
          </div>
          <a
            href="#logout"
            className="mt-2 block text-red-500"
            aria-label="Logout"
          >
            <LogoutIcon className="h-4 w-4" />
          </a>
        </div>
      </span>
    </button>
  </li>
));

// Header Component
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full bg-[#0a0a0a] px-4">
      <nav className="mx-auto flex max-w-7xl items-center py-2 transition-all duration-200">
        <div className="mr-4 w-12 shrink-0 sm:w-16">
          <ProjectorIcon className="h-12 w-12" aria-hidden="true" />
        </div>

        <div className="relative mx-auto hidden w-full max-w-md sm:block">
          <Input
            className="w-full !rounded-3xl border border-gray-500 bg-black py-2 pl-5 pr-16 text-white placeholder-white outline-none"
            placeholder="Search"
            aria-label="Search"
          />
          <span className="absolute right-6 top-1/2 -translate-y-2.5">
            <SearchIcon className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>

        <button className="ml-auto sm:hidden" aria-label="Search">
          <SearchIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        <button
          className="group ml-4 w-6 shrink-0 sm:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        <div
          className={`fixed inset-y-0 right-0 flex w-full max-w-xs flex-col bg-[#121212] duration-200 sm:static sm:ml-4 sm:w-auto sm:translate-x-0 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="relative flex w-full items-center justify-between px-4 py-2 sm:hidden">
            <span className="inline-block w-12">
              <ProjectorIcon className="h-12 w-12" aria-hidden="true" />
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <ul className="my-4 flex w-full flex-col gap-2 px-4 transition-all duration-200 sm:hidden">
            {menuItems
              .filter((item) => item.mobile)
              .map((item) => (
                <MobileMenuItem
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                />
              ))}
          </ul>

          <div className="mt-auto bg-[#0a0a0a] mb-8 flex w-full flex-wrap gap-4 p-1 px-4 sm:mt-0 sm:mb-0 sm:items-center sm:px-0">
            <Button className="!hover:bg-[#4f4e4e] w-full !rounded-3xl !bg-[#27272a] px-5 py-2 text-white sm:w-auto">
              Log In
            </Button>
            <Button className="mr-1 w-full !rounded-3xl !bg-[#424245] px-6 py-2 text-center font-semibold text-white transition-all duration-150 ease-in-out sm:w-auto sm:px-3">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Sidebar Component
const Sidebar = () => (
  <aside className="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 bg-[#0a0a0a] px-2 py-2 transition-all duration-200 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:py-6 sm:hover:max-w-[250px] lg:sticky lg:max-w-[250px]">
    <ul className="flex gap-y-2 sm:sticky sm:top-[106px] sm:min-h-[calc(100vh-130px)] sm:flex-col">
      {menuItems.map((item) => (
        <li
          key={item.id}
          className={`rounded-lg px-3 py-1.5  ${
            item.bottomNav ? "" : "hidden sm:block"
          }`}
        >
          <MenuItem icon={item.icon} label={item.label} />
        </li>
      ))}
      <UserProfile />
    </ul>
  </aside>
);

// Main App Component
export default function App() {
  return (
    <div className="h-screen overflow-y-auto bg-[#212121] text-white">
      <Header />
      <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
        <Sidebar />
        <main className="w-full bg-orange-900 pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
