import { Outlet } from "react-router-dom";
import { Button, Input } from "./components";

export default function App() {
  return (
    <>
      <div className="h-screen overflow-y-auto bg-[#212121] text-white">
        <header className="sticky inset-x-0 top-0 z-50 w-full bg-[#070e13] px-4">
          <nav className="mx-auto flex max-w-7xl items-center py-2 transition-all duration-200">
            <div className="mr-4 w-12 shrink-0 sm:w-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-projector"
              >
                <path d="M5 7 3 5" />
                <path d="M9 6V3" />
                <path d="m13 7 2-2" />
                <circle cx="9" cy="13" r="3" />
                <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
                <path d="M16 16h2" />
              </svg>
            </div>

            <div className="relative mx-auto hidden w-full max-w-md overflow-hidden sm:block">
              <Input
                className="w-full !rounded-3xl border border-gray-500 bg-black py-2 pr-16 pl-5 text-white placeholder-white outline-none sm:py-2"
                placeholder="Search"
              />
              <span className="absolute top-1/2 right-6 inline-block -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </span>
            </div>

            <button className="ml-auto sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </button>
            <button className="group peer ml-4 flex w-6 shrink-0 flex-wrap gap-y-1.5 sm:hidden">
              <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
              <span className="block h-[2px] w-2/3 bg-white group-hover:bg-[#ae7aff]"></span>
              <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
            </button>
            <div className="-none fixed inset-y-0 right-0 flex w-full max-w-xs shrink-0 translate-x-full flex-col bg-[#121212] duration-200 peer-focus:translate-x-0 hover:translate-x-0 sm:static sm:ml-4 sm:w-auto sm:translate-x-0">
              <div className="relative flex w-full items-center justify-between px-4 py-2 sm:hidden">
                <span className="inline-block w-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="lucide lucide-projector"
                  >
                    <path d="M5 7 3 5" />
                    <path d="M9 6V3" />
                    <path d="m13 7 2-2" />
                    <circle cx="9" cy="13" r="3" />
                    <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
                    <path d="M16 16h2" />
                  </svg>
                </span>
                <button className="inline-block w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul className="my-4 flex w-full flex-wrap gap-2 px-4 transition-all duration-200 sm:hidden">
                <li className="w-full">
                  <button className="h flex w-full items-center justify-start gap-x-4 px-4 py-1.5 text-left hover:text-black focus:text-black">
                    <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M7 10v12" />
                        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
                      </svg>
                    </span>
                    <span>Liked Videos</span>
                  </button>
                </li>
                <li className="w-full">
                  <button className="flex w-full items-center justify-start gap-x-4 px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:bg-[#ae7aff] focus:text-black">
                    <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="h-6 w-6"
                      >
                        <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1" />
                      </svg>
                    </span>
                    <span>My Content</span>
                  </button>
                </li>
                <li className="w-full">
                  <button className="flex w-full items-center justify-start gap-x-4 px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:bg-[#ae7aff] focus:text-black">
                    <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                      </svg>
                    </span>
                    <span>Support</span>
                  </button>
                </li>
                <li className="w-full">
                  <button className="flex w-full items-center justify-start gap-x-4 px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:bg-[#ae7aff] focus:text-black">
                    <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="h-6 w-6"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                      </svg>
                    </span>
                    <span>Settings</span>
                  </button>
                </li>
              </ul>
              <div className="mt-auto mb-8 flex w-full flex-wrap gap-4 p-1 px-4 sm:mt-0 sm:mb-0 sm:items-center sm:px-0">
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
        <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
          <aside className="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 bg-[#070e13] px-2 py-2 transition-all duration-200 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:py-6 sm:hover:max-w-[250px] lg:sticky lg:max-w-[250px]">
            <ul className="flex justify-around gap-y-2 transition-all duration-1000 sm:sticky sm:top-[106px] sm:min-h-[calc(100vh-130px)] sm:flex-col">
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
              </li>
              <li className="hidden rounded-lg px-3 py-1.5 hover:bg-slate-800 sm:block">
                <button className="flex flex-col items-center justify-center py-1 focus:text-[#fff] sm:w-full sm:flex-row sm:p-1.5 sm:group-hover:justify-start sm:group-hover:px-4 sm:hover:text-white sm:focus:text-white lg:justify-start lg:px-4">
                  <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M7 10v12" />
                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
                    </svg>
                  </span>
                  <span className="block sm:hidden sm:group-hover:inline lg:inline">
                    Liked Videos
                  </span>
                </button>
              </li>
              <li className="rounded-lg px-3 py-1.5 hover:bg-slate-800">
                <button className="flex cursor-pointer flex-col items-center justify-center focus:text-[#ae7aff] sm:w-full sm:flex-row sm:p-1.5 sm:group-hover:justify-start sm:group-hover:px-4 sm:hover:text-white sm:focus:text-white lg:justify-start lg:px-4">
                  <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="h-6 w-6"
                    >
                      <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
                      <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                      <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
                    </svg>
                  </span>
                  <span className="block sm:hidden sm:group-hover:inline lg:inline">
                    History
                  </span>
                </button>
              </li>
              <li className="hidden rounded-lg px-3 py-1.5 hover:bg-slate-800 sm:block">
                <button className="flex flex-col items-center justify-center focus:text-[#ae7aff] sm:w-full sm:flex-row sm:p-1.5 sm:group-hover:justify-start sm:group-hover:px-4 sm:hover:text-white sm:focus:text-white lg:justify-start lg:px-4">
                  <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="h-6 w-6"
                    >
                      <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1" />
                    </svg>
                  </span>
                  <span className="block sm:hidden sm:group-hover:inline lg:inline">
                    My Content
                  </span>
                </button>
              </li>
              <li className="rounded-lg px-3 py-1.5 hover:bg-slate-800">
                <button className="flex flex-col items-center justify-center sm:w-full sm:flex-row sm:p-1.5 sm:group-hover:justify-start sm:group-hover:px-4 sm:hover:text-white sm:focus:text-white lg:justify-start lg:px-4">
                  <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="h-6 w-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2m0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14" />
                    </svg>
                  </span>
                  <span className="block sm:hidden sm:group-hover:inline lg:inline">
                    Playlist
                  </span>
                </button>
              </li>
              <li className="rounded-lg px-3 py-1.5 hover:bg-slate-800">
                <button className="flex flex-col items-center justify-center py-1 sm:w-full sm:flex-row sm:p-1.5 sm:group-hover:justify-start sm:group-hover:px-4 sm:hover:text-white sm:focus:text-white lg:justify-start lg:px-4">
                  <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="h-6 w-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                    </svg>
                  </span>
                  <span className="block sm:hidden sm:group-hover:inline lg:inline">
                    Subscriptions
                  </span>
                </button>
              </li>
              <li className="mt-auto hidden rounded-lg px-3 py-1.5 hover:bg-slate-800 sm:block">
                <button className="flex flex-col items-center justify-center py-1 sm:w-full sm:flex-row sm:p-1.5 sm:group-hover:justify-start sm:group-hover:px-4 sm:hover:text-white sm:focus:text-white lg:justify-start lg:px-4">
                  <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                    </svg>
                  </span>
                  <span className="block sm:hidden sm:group-hover:inline lg:inline">
                    Support
                  </span>
                </button>
              </li>
              <li className="hidden rounded-lg px-3 py-1.5 hover:bg-slate-800 sm:block">
                <button className="flex flex-col items-center justify-center py-1 sm:w-full sm:flex-row sm:p-1.5 sm:group-hover:justify-start sm:group-hover:px-4 sm:hover:text-white sm:focus:text-white lg:justify-start lg:px-4">
                  <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="h-6 w-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                  </span>
                  <span className="block sm:hidden sm:group-hover:inline lg:inline">
                    Settings
                  </span>
                </button>
              </li>

              <div className="mt-4 hidden border-t border-gray-700 pt-4 sm:block">
                <li className="rounded-lg px-2 py-1.5 hover:bg-slate-800">
                  <button className="flex flex-col items-center justify-center rounded-lg px-4 py-3 sm:w-full sm:flex-row sm:p-1.5 sm:group-hover:justify-start sm:group-hover:px-4 sm:hover:text-white sm:focus:text-white lg:justify-start lg:px-4">
                    <span className="inline-block w-10 shrink-0 rounded-full sm:group-hover:mr-2 lg:mr-2">
                      <img
                        src="https://picsum.photos/200"
                        alt="Joe Doe Picture"
                        className="h-10 w-10 rounded-full"
                      />
                    </span>
                    <span className="block sm:hidden sm:group-hover:inline lg:inline">
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col items-start">
                          <p className="text-base font-medium">Jane Doe</p>
                          <p className="text-left text-sm text-wrap text-gray-400">
                            @olwenKelly
                          </p>
                        </div>
                        <a href="#logout" className="mt-2 block text-red-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#F71735"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                            />
                          </svg>
                        </a>
                      </div>
                    </span>
                  </button>
                </li>
              </div>
            </ul>
          </aside>
          <section className="w-full bg-orange-900 pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
            <Outlet />
          </section>
        </div>
      </div>
    </>
  );
}
