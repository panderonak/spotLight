import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="max-w-screen sticky inset-x-0 top-0 z-50 mt-5 flex w-full content-center border-b border-white">
      <nav className="mx-auto flex max-w-7xl items-center gap-9 rounded-[50px] bg-[#121315] px-3 py-3">
        <div
          onClick={navigate("/")}
          className="flex items-center justify-center"
        >
          <div className="ml-2 flex h-10 w-10 shrink-0 items-center justify-center p-2 sm:w-16">
            <svg
              fill="#fff"
              className="scale-x-[-1] transform"
              width="30"
              height="30"
              viewBox="-9.2 0 122.88 122.88"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              style="enable-background:new 0 0 104.49 122.88"
              xml:space="preserve"
            >
              <g>
                <path
                  className="st0"
                  d="M67.73,0h6.64c1.52,0,2.76,1.24,2.76,2.76v23.62l8.14,8.14c0.05-0.02,0.11-0.03,0.16-0.04 c16.77-3.97,14.19-15.88,11.89-26.5c-0.31-1.41-0.61-2.8-0.91-4.4c-0.27-1.43,0.68-2.81,2.11-3.08c1.43-0.27,2.81,0.68,3.08,2.11 c0.23,1.21,0.56,2.73,0.89,4.26c2.68,12.4,5.67,26.22-12.92,31.97l7.75,7.75c1.57,1.57,2.35,3.63,2.35,5.69s-0.78,4.13-2.35,5.69 l-20.9,20.9c-0.18,0.18-0.39,0.33-0.61,0.44c2.11,8.57,0.62,17.36-6.48,24.45l-0.88,0.88c-0.92,0.92-2.42,0.92-3.35,0L54.33,93.88 c-13.72,8.45-33.06-10.06-23.63-23.63L17.86,57.4c-0.92-0.92-0.92-2.42,0-3.35l0.88-0.88c6.38-6.38,14.31-8.12,22.24-6.73 l0.04-0.08c0.12-0.24,0.27-0.45,0.45-0.63l0,0l21.81-21.81c0.52-0.52,1.09-0.95,1.69-1.29V2.76C64.97,1.24,66.21,0,67.73,0L67.73,0 z M77.13,33.09v11.52c0,1.52-1.24,2.76-2.76,2.76h-6.64c-1.52,0-2.76-1.24-2.76-2.76V28.93L47.11,46.78 c4.98,2.63,9.89,5.72,14.54,9.77c4.95,4.31,9.58,9.69,13.64,16.75l18.68-18.68c0.64-0.64,0.96-1.49,0.96-2.34s-0.32-1.7-0.96-2.34 L77.13,33.09L77.13,33.09z M10.92,68.39c1.46,0,2.64,1.18,2.64,2.64c0,1.46-1.18,2.64-2.64,2.64l-8.28,0.03 C1.18,73.69,0,72.51,0,71.06c0-1.46,1.18-2.64,2.64-2.64L10.92,68.39L10.92,68.39z M20.63,96.61c1.12-0.93,2.78-0.78,3.71,0.34 c0.93,1.12,0.78,2.78-0.34,3.71L9.78,112.52c-1.12,0.93-2.78,0.78-3.71-0.34c-0.93-1.12-0.78-2.78,0.34-3.71L20.63,96.61 L20.63,96.61z M31.9,107.73c0.64-1.31,2.22-1.86,3.54-1.22s1.86,2.22,1.22,3.54l-5.54,11.35c-0.64,1.31-2.22,1.86-3.54,1.22 c-1.31-0.64-1.86-2.22-1.22-3.54L31.9,107.73L31.9,107.73z M13.58,81.55c1.39-0.44,2.87,0.33,3.31,1.72 c0.44,1.39-0.33,2.87-1.72,3.31L3.63,90.25c-1.39,0.44-2.87-0.33-3.31-1.72c-0.44-1.39,0.33-2.87,1.72-3.31L13.58,81.55 L13.58,81.55z M48.75,106.87c0.33-1.42,1.74-2.31,3.16-1.99c1.42,0.33,2.31,1.74,1.99,3.16l-2.86,12.41 c-0.33,1.42-1.74,2.31-3.16,1.99c-1.42-0.33-2.31-1.74-1.99-3.16L48.75,106.87L48.75,106.87z M22.91,55.75L66.76,99.6 c6.96-7.69,6.27-17.77,1.52-26.74c-1.99-3.76-4.69-7.33-7.83-10.47c-3.15-3.14-6.74-5.83-10.53-7.84 C40.78,49.71,30.51,48.9,22.91,55.75L22.91,55.75z"
                />
              </g>
            </svg>
          </div>

          <span className="font-extrabold text-white">SpotLight</span>
        </div>

        <div className="relative mx-auto w-full max-w-md overflow-hidden">
          <input
            className="w-full rounded-3xl border border-gray-500 bg-black py-2 pl-5 pr-16 text-white placeholder-white outline-none sm:py-2"
            placeholder="Search"
          />
          <span className="absolute right-6 top-1/2 inline-block -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
          </span>
        </div>
        <div className="mt-auto hidden w-full justify-end gap-4 px-4 sm:mb-0 sm:mt-0 sm:flex sm:items-center sm:px-0">
          <button
            onClick={() => navigate("/login")}
            className="w-full rounded-3xl bg-[#27272a] px-5 py-2 text-white hover:bg-[#4f4e4e] sm:w-auto"
          >
            Log in
          </button>
          <button
            onClick={() => navigate("sign-up")}
            className="mr-1 w-full rounded-3xl bg-[#424245] px-6 py-2 text-center font-semibold text-white transition-all duration-150 ease-in-out sm:w-auto sm:px-3"
          >
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
}