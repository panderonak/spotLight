export default function App() {
  return (
    <>
      <div className="h-screen overflow-y-auto bg-[#121212] text-white">
        <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-white bg-[#121212] px-4">
          <nav className="bg-pink400 flex mx-auto max-w-7xl items-center py-2">
            <div className="mr-4 w-32 shrink-0 bg-red-400 sm:w-32">
              <div className="flex items-center justify-center">
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
                <span className="font-extrabold text-white">SpotLight</span>
              </div>
            </div>
            <div className="relative mx-auto hidden w-full max-w-md overflow-hidden sm:block">
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
            {/* small screen below */}
            <button className="ml-auto bg-green-400 sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </button>
            <button className="flex group peer ml-4 w-6 shrink-0 flex-wrap gap-y-1.5 bg-blue-500 sm:hidden">
              <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
              <span className="block h-[2px] w-2/3 bg-white group-hover:bg-[#ae7aff]"></span>
              <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
            </button>
            {/* small screen above */}

            {/* sidebar in small screen */}
            <div className="flex fixed inset-y-0 right-0 w-full max-w-xs shrink-0 translate-x-full flex-col border-l border-white bg-red-400 duration-200 hover:translate-x-0 peer-focus:translate-x-0 sm:static sm:ml-4 sm:w-auto sm:translate-x-0 sm:border-none">
              <div className="flex relative w-full items-center justify-between border-b border-white bg-pink-400 px-4 py-2 sm:hidden">
                <span className="inline-block w-12">
                  <svg
                    style="width:100%"
                    viewBox="0 0 63 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.25 47.458C55.9485 38.7595 55.9485 24.6565 47.25 15.958C38.5515 7.25952 24.4485 7.25952 15.75 15.958C7.05151 24.6565 7.05151 38.7595 15.75 47.458C24.4485 56.1565 38.5515 56.1565 47.25 47.458Z"
                      stroke="#E9FCFF"
                      stroke-width="1.38962"
                      stroke-miterlimit="10"
                    ></path>
                    <path
                      d="M10.5366 47.7971V17.5057C10.5366 16.9599 11.1511 16.6391 11.599 16.9495L33.4166 32.0952C33.8041 32.3639 33.8041 32.9368 33.4166 33.2076L11.599 48.3533C11.1511 48.6657 10.5366 48.3429 10.5366 47.7971Z"
                      stroke="url(#paint0_linear_53_10115)"
                      stroke-width="6.99574"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M18.1915 27.6963C20.1641 27.6963 21.7285 28.7066 21.7285 30.9021C21.7285 33.0976 20.1621 34.2433 18.1915 34.2433H16.8854V37.8677H14.1733V27.6984H18.1915V27.6963Z"
                      fill="#E9FCFF"
                    ></path>
                    <path
                      d="M25.2053 27.6963V35.4868H28.484V37.8657H22.4932V27.6963H25.2053Z"
                      fill="#E9FCFF"
                    ></path>
                    <path
                      d="M35.3142 27.6963L39.4553 37.8657H36.5328L35.9162 36.1763H32.1939L31.5773 37.8657H28.6548L32.7959 27.6963H35.3101H35.3142ZM34.9143 33.5663L34.2144 31.7832C34.1582 31.6395 33.954 31.6395 33.8978 31.7832L33.1979 33.5663C33.1541 33.6767 33.2354 33.7975 33.3562 33.7975H34.756C34.8747 33.7975 34.958 33.6767 34.9143 33.5663Z"
                      fill="#E9FCFF"
                    ></path>
                    <path
                      d="M40.9491 27.6963L42.8592 30.5188L44.7694 27.6963H48.0355L44.2132 33.2559V37.8657H41.5011V33.2559L37.6787 27.6963H40.9449H40.9491Z"
                      fill="#E9FCFF"
                    ></path>
                    <path
                      d="M16.894 32.1396V29.9129C16.894 29.8212 16.9982 29.7671 17.0732 29.8191L18.6771 30.9315C18.7417 30.9773 18.7417 31.0731 18.6771 31.1189L17.0732 32.2313C16.9982 32.2834 16.894 32.2313 16.894 32.1375V32.1396Z"
                      fill="#232323"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_53_10115"
                        x1="2.23416"
                        y1="20.3361"
                        x2="26.863"
                        y2="44.9649"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#007EF8"></stop>
                        <stop offset="1" stop-color="#FF4A9A"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <button className="inline-block w-8">
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
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul className="flex my-4 w-full flex-wrap gap-2 px-4 sm:hidden">
                <li className="w-full">
                  <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                    <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                      <svg
                        style="width:100%"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 21V10M1 12V19C1 20.1046 1.89543 21 3 21H16.4262C17.907 21 19.1662 19.9197 19.3914 18.4562L20.4683 11.4562C20.7479 9.6389 19.3418 8 17.5032 8H14C13.4477 8 13 7.55228 13 7V3.46584C13 2.10399 11.896 1 10.5342 1C10.2093 1 9.91498 1.1913 9.78306 1.48812L6.26394 9.40614C6.10344 9.76727 5.74532 10 5.35013 10H3C1.89543 10 1 10.8954 1 12Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span>Liked Videos</span>
                  </button>
                </li>
                <li className="w-full">
                  <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                    <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                      <svg
                        style="width:100%"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 4.93137C21 4.32555 21 4.02265 20.8802 3.88238C20.7763 3.76068 20.6203 3.69609 20.4608 3.70865C20.2769 3.72312 20.0627 3.93731 19.6343 4.36569L16 8L19.6343 11.6343C20.0627 12.0627 20.2769 12.2769 20.4608 12.2914C20.6203 12.3039 20.7763 12.2393 20.8802 12.1176C21 11.9774 21 11.6744 21 11.0686V4.93137Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M1 5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H11.2C12.8802 1 13.7202 1 14.362 1.32698C14.9265 1.6146 15.3854 2.07354 15.673 2.63803C16 3.27976 16 4.11984 16 5.8V10.2C16 11.8802 16 12.7202 15.673 13.362C15.3854 13.9265 14.9265 14.3854 14.362 14.673C13.7202 15 12.8802 15 11.2 15H5.8C4.11984 15 3.27976 15 2.63803 14.673C2.07354 14.3854 1.6146 13.9265 1.32698 13.362C1 12.7202 1 11.8802 1 10.2V5.8Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span>My Content</span>
                  </button>
                </li>
                <li className="w-full">
                  <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                    <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                      <svg
                        style="width:100%"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.09 8C8.3251 7.33167 8.78915 6.76811 9.39995 6.40913C10.0108 6.05016 10.7289 5.91894 11.4272 6.03871C12.1255 6.15849 12.7588 6.52152 13.2151 7.06353C13.6713 7.60553 13.9211 8.29152 13.92 9C13.92 11 10.92 12 10.92 12M11 16H11.01M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span>Support</span>
                  </button>
                </li>
                <li className="w-full">
                  <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                    <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                      <svg
                        style="width:100%"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M17.7273 13.7273C17.6063 14.0015 17.5702 14.3056 17.6236 14.6005C17.6771 14.8954 17.8177 15.1676 18.0273 15.3818L18.0818 15.4364C18.2509 15.6052 18.385 15.8057 18.4765 16.0265C18.568 16.2472 18.6151 16.4838 18.6151 16.7227C18.6151 16.9617 18.568 17.1983 18.4765 17.419C18.385 17.6397 18.2509 17.8402 18.0818 18.0091C17.913 18.1781 17.7124 18.3122 17.4917 18.4037C17.271 18.4952 17.0344 18.5423 16.7955 18.5423C16.5565 18.5423 16.3199 18.4952 16.0992 18.4037C15.8785 18.3122 15.678 18.1781 15.5091 18.0091L15.4545 17.9545C15.2403 17.745 14.9682 17.6044 14.6733 17.5509C14.3784 17.4974 14.0742 17.5335 13.8 17.6545C13.5311 17.7698 13.3018 17.9611 13.1403 18.205C12.9788 18.4489 12.8921 18.7347 12.8909 19.0273V19.1818C12.8909 19.664 12.6994 20.1265 12.3584 20.4675C12.0174 20.8084 11.5549 21 11.0727 21C10.5905 21 10.1281 20.8084 9.78708 20.4675C9.4461 20.1265 9.25455 19.664 9.25455 19.1818V19.1C9.24751 18.7991 9.15011 18.5073 8.97501 18.2625C8.79991 18.0176 8.55521 17.8312 8.27273 17.7273C7.99853 17.6063 7.69437 17.5702 7.39947 17.6236C7.10456 17.6771 6.83244 17.8177 6.61818 18.0273L6.56364 18.0818C6.39478 18.2509 6.19425 18.385 5.97353 18.4765C5.7528 18.568 5.51621 18.6151 5.27727 18.6151C5.03834 18.6151 4.80174 18.568 4.58102 18.4765C4.36029 18.385 4.15977 18.2509 3.99091 18.0818C3.82186 17.913 3.68775 17.7124 3.59626 17.4917C3.50476 17.271 3.45766 17.0344 3.45766 16.7955C3.45766 16.5565 3.50476 16.3199 3.59626 16.0992C3.68775 15.8785 3.82186 15.678 3.99091 15.5091L4.04545 15.4545C4.25503 15.2403 4.39562 14.9682 4.4491 14.6733C4.50257 14.3784 4.46647 14.0742 4.34545 13.8C4.23022 13.5311 4.03887 13.3018 3.79497 13.1403C3.55107 12.9788 3.26526 12.8921 2.97273 12.8909H2.81818C2.33597 12.8909 1.87351 12.6994 1.53253 12.3584C1.19156 12.0174 1 11.5549 1 11.0727C1 10.5905 1.19156 10.1281 1.53253 9.78708C1.87351 9.4461 2.33597 9.25455 2.81818 9.25455H2.9C3.2009 9.24751 3.49273 9.15011 3.73754 8.97501C3.98236 8.79991 4.16883 8.55521 4.27273 8.27273C4.39374 7.99853 4.42984 7.69437 4.37637 7.39947C4.3229 7.10456 4.18231 6.83244 3.97273 6.61818L3.91818 6.56364C3.74913 6.39478 3.61503 6.19425 3.52353 5.97353C3.43203 5.7528 3.38493 5.51621 3.38493 5.27727C3.38493 5.03834 3.43203 4.80174 3.52353 4.58102C3.61503 4.36029 3.74913 4.15977 3.91818 3.99091C4.08704 3.82186 4.28757 3.68775 4.50829 3.59626C4.72901 3.50476 4.96561 3.45766 5.20455 3.45766C5.44348 3.45766 5.68008 3.50476 5.9008 3.59626C6.12152 3.68775 6.32205 3.82186 6.49091 3.99091L6.54545 4.04545C6.75971 4.25503 7.03183 4.39562 7.32674 4.4491C7.62164 4.50257 7.9258 4.46647 8.2 4.34545H8.27273C8.54161 4.23022 8.77093 4.03887 8.93245 3.79497C9.09397 3.55107 9.18065 3.26526 9.18182 2.97273V2.81818C9.18182 2.33597 9.37338 1.87351 9.71435 1.53253C10.0553 1.19156 10.5178 1 11 1C11.4822 1 11.9447 1.19156 12.2856 1.53253C12.6266 1.87351 12.8182 2.33597 12.8182 2.81818V2.9C12.8193 3.19253 12.906 3.47834 13.0676 3.72224C13.2291 3.96614 13.4584 4.15749 13.7273 4.27273C14.0015 4.39374 14.3056 4.42984 14.6005 4.37637C14.8954 4.3229 15.1676 4.18231 15.3818 3.97273L15.4364 3.91818C15.6052 3.74913 15.8057 3.61503 16.0265 3.52353C16.2472 3.43203 16.4838 3.38493 16.7227 3.38493C16.9617 3.38493 17.1983 3.43203 17.419 3.52353C17.6397 3.61503 17.8402 3.74913 18.0091 3.91818C18.1781 4.08704 18.3122 4.28757 18.4037 4.50829C18.4952 4.72901 18.5423 4.96561 18.5423 5.20455C18.5423 5.44348 18.4952 5.68008 18.4037 5.9008C18.3122 6.12152 18.1781 6.32205 18.0091 6.49091L17.9545 6.54545C17.745 6.75971 17.6044 7.03183 17.5509 7.32674C17.4974 7.62164 17.5335 7.9258 17.6545 8.2V8.27273C17.7698 8.54161 17.9611 8.77093 18.205 8.93245C18.4489 9.09397 18.7347 9.18065 19.0273 9.18182H19.1818C19.664 9.18182 20.1265 9.37338 20.4675 9.71435C20.8084 10.0553 21 10.5178 21 11C21 11.4822 20.8084 11.9447 20.4675 12.2856C20.1265 12.6266 19.664 12.8182 19.1818 12.8182H19.1C18.8075 12.8193 18.5217 12.906 18.2778 13.0676C18.0339 13.2291 17.8425 13.4584 17.7273 13.7273Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span>Settings</span>
                  </button>
                </li>
              </ul>
              <div className="flex mb-8 mt-auto w-full flex-wrap gap-4 px-4 sm:mb-0 sm:mt-0 sm:items-center sm:px-0">
                <button className="w-full bg-[#383737] px-3 py-2 hover:bg-[#4f4e4e] sm:w-auto sm:bg-transparent">
                  Log in
                </button>
                <button className="mr-1 w-full bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                  Sign up
                </button>
              </div>
            </div>
            {/* sidebar in small screen */}
          </nav>
        </header>
        {/* main screen */}
        <div className="flex min-h-[calc(100vh-66px)] bg-red-400 sm:min-h-[calc(100vh-82px)]">
          <aside className="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 border-t border-white bg-[#070e13] px-2 py-2 duration-200 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:py-6 sm:hover:max-w-[250px] lg:sticky lg:max-w-[250px]">
            <ul className="flex justify-around gap-y-2 sm:sticky sm:top-[106px] sm:min-h-[calc(100vh-130px)] sm:flex-col">
              <li className="rounded-lg px-4 py-3 duration-200 hover:bg-slate-800">
                <button className="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
                  <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                  <span className="block font-medium sm:hidden sm:group-hover:inline lg:inline">
                    Home
                  </span>
                </button>
              </li>
            </ul>
          </aside>
          <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
            <div className="flex h-full items-center justify-center">
              <div className="w-full max-w-sm text-center">
                <p className="mb-3 w-full">
                  <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      ></path>
                    </svg>
                  </span>
                </p>
                <h5 className="mb-2 font-semibold">No videos available</h5>
                <p>
                  There are no videos here available. Please try to search some
                  thing else.
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* main screen */}
      </div>
      <div className="h-screen overflow-y-auto bg-[#121212] text-white">
        <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-white bg-[#121212] px-4">
          <nav className="bg-pink400 mx-auto flex max-w-7xl items-center py-2">
            <div className="mr-4 w-32 shrink-0 bg-red-400 sm:w-32">
              <div className="flex items-center justify-center">
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
                <span className="font-extrabold text-white">SpotLight</span>
              </div>
            </div>
            <div className="relative mx-auto hidden w-full max-w-md overflow-hidden sm:block">
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
            {/* small screen below */}
            <button className="ml-auto bg-green-400 sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </button>
            <button className="group peer ml-4 flex w-6 shrink-0 flex-wrap gap-y-1.5 bg-blue-500 sm:hidden">
              <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
              <span className="block h-[2px] w-2/3 bg-white group-hover:bg-[#ae7aff]"></span>
              <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
            </button>
            {/* small screen above */}

            {/* sidebar in small screen */}
            <div className="fixed inset-y-0 right-0 flex w-full max-w-xs shrink-0 translate-x-full flex-col border-l border-white bg-red-400 duration-200 hover:translate-x-0 peer-focus:translate-x-0 sm:static sm:ml-4 sm:w-auto sm:translate-x-0 sm:border-none">
              <div className="relative flex w-full items-center justify-between border-b border-white bg-pink-400 px-4 py-2 sm:hidden">
                <span className="inline-block w-12">
                  <svg
                    style="width:100%"
                    viewBox="0 0 63 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.25 47.458C55.9485 38.7595 55.9485 24.6565 47.25 15.958C38.5515 7.25952 24.4485 7.25952 15.75 15.958C7.05151 24.6565 7.05151 38.7595 15.75 47.458C24.4485 56.1565 38.5515 56.1565 47.25 47.458Z"
                      stroke="#E9FCFF"
                      stroke-width="1.38962"
                      stroke-miterlimit="10"
                    ></path>
                    <path
                      d="M10.5366 47.7971V17.5057C10.5366 16.9599 11.1511 16.6391 11.599 16.9495L33.4166 32.0952C33.8041 32.3639 33.8041 32.9368 33.4166 33.2076L11.599 48.3533C11.1511 48.6657 10.5366 48.3429 10.5366 47.7971Z"
                      stroke="url(#paint0_linear_53_10115)"
                      stroke-width="6.99574"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M18.1915 27.6963C20.1641 27.6963 21.7285 28.7066 21.7285 30.9021C21.7285 33.0976 20.1621 34.2433 18.1915 34.2433H16.8854V37.8677H14.1733V27.6984H18.1915V27.6963Z"
                      fill="#E9FCFF"
                    ></path>
                    <path
                      d="M25.2053 27.6963V35.4868H28.484V37.8657H22.4932V27.6963H25.2053Z"
                      fill="#E9FCFF"
                    ></path>
                    <path
                      d="M35.3142 27.6963L39.4553 37.8657H36.5328L35.9162 36.1763H32.1939L31.5773 37.8657H28.6548L32.7959 27.6963H35.3101H35.3142ZM34.9143 33.5663L34.2144 31.7832C34.1582 31.6395 33.954 31.6395 33.8978 31.7832L33.1979 33.5663C33.1541 33.6767 33.2354 33.7975 33.3562 33.7975H34.756C34.8747 33.7975 34.958 33.6767 34.9143 33.5663Z"
                      fill="#E9FCFF"
                    ></path>
                    <path
                      d="M40.9491 27.6963L42.8592 30.5188L44.7694 27.6963H48.0355L44.2132 33.2559V37.8657H41.5011V33.2559L37.6787 27.6963H40.9449H40.9491Z"
                      fill="#E9FCFF"
                    ></path>
                    <path
                      d="M16.894 32.1396V29.9129C16.894 29.8212 16.9982 29.7671 17.0732 29.8191L18.6771 30.9315C18.7417 30.9773 18.7417 31.0731 18.6771 31.1189L17.0732 32.2313C16.9982 32.2834 16.894 32.2313 16.894 32.1375V32.1396Z"
                      fill="#232323"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_53_10115"
                        x1="2.23416"
                        y1="20.3361"
                        x2="26.863"
                        y2="44.9649"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#007EF8"></stop>
                        <stop offset="1" stop-color="#FF4A9A"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <button className="inline-block w-8">
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
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul className="my-4 flex w-full flex-wrap gap-2 bg-purple-950 px-4 sm:hidden">
                <li className="w-full">
                  <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                    <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                      <svg
                        style="width:100%"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 21V10M1 12V19C1 20.1046 1.89543 21 3 21H16.4262C17.907 21 19.1662 19.9197 19.3914 18.4562L20.4683 11.4562C20.7479 9.6389 19.3418 8 17.5032 8H14C13.4477 8 13 7.55228 13 7V3.46584C13 2.10399 11.896 1 10.5342 1C10.2093 1 9.91498 1.1913 9.78306 1.48812L6.26394 9.40614C6.10344 9.76727 5.74532 10 5.35013 10H3C1.89543 10 1 10.8954 1 12Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span>Liked Videos</span>
                  </button>
                </li>
                <li className="w-full">
                  <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                    <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                      <svg
                        style="width:100%"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 4.93137C21 4.32555 21 4.02265 20.8802 3.88238C20.7763 3.76068 20.6203 3.69609 20.4608 3.70865C20.2769 3.72312 20.0627 3.93731 19.6343 4.36569L16 8L19.6343 11.6343C20.0627 12.0627 20.2769 12.2769 20.4608 12.2914C20.6203 12.3039 20.7763 12.2393 20.8802 12.1176C21 11.9774 21 11.6744 21 11.0686V4.93137Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M1 5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H11.2C12.8802 1 13.7202 1 14.362 1.32698C14.9265 1.6146 15.3854 2.07354 15.673 2.63803C16 3.27976 16 4.11984 16 5.8V10.2C16 11.8802 16 12.7202 15.673 13.362C15.3854 13.9265 14.9265 14.3854 14.362 14.673C13.7202 15 12.8802 15 11.2 15H5.8C4.11984 15 3.27976 15 2.63803 14.673C2.07354 14.3854 1.6146 13.9265 1.32698 13.362C1 12.7202 1 11.8802 1 10.2V5.8Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span>My Content</span>
                  </button>
                </li>
                <li className="w-full">
                  <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                    <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                      <svg
                        style="width:100%"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.09 8C8.3251 7.33167 8.78915 6.76811 9.39995 6.40913C10.0108 6.05016 10.7289 5.91894 11.4272 6.03871C12.1255 6.15849 12.7588 6.52152 13.2151 7.06353C13.6713 7.60553 13.9211 8.29152 13.92 9C13.92 11 10.92 12 10.92 12M11 16H11.01M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span>Support</span>
                  </button>
                </li>
                <li className="w-full">
                  <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                    <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                      <svg
                        style="width:100%"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M17.7273 13.7273C17.6063 14.0015 17.5702 14.3056 17.6236 14.6005C17.6771 14.8954 17.8177 15.1676 18.0273 15.3818L18.0818 15.4364C18.2509 15.6052 18.385 15.8057 18.4765 16.0265C18.568 16.2472 18.6151 16.4838 18.6151 16.7227C18.6151 16.9617 18.568 17.1983 18.4765 17.419C18.385 17.6397 18.2509 17.8402 18.0818 18.0091C17.913 18.1781 17.7124 18.3122 17.4917 18.4037C17.271 18.4952 17.0344 18.5423 16.7955 18.5423C16.5565 18.5423 16.3199 18.4952 16.0992 18.4037C15.8785 18.3122 15.678 18.1781 15.5091 18.0091L15.4545 17.9545C15.2403 17.745 14.9682 17.6044 14.6733 17.5509C14.3784 17.4974 14.0742 17.5335 13.8 17.6545C13.5311 17.7698 13.3018 17.9611 13.1403 18.205C12.9788 18.4489 12.8921 18.7347 12.8909 19.0273V19.1818C12.8909 19.664 12.6994 20.1265 12.3584 20.4675C12.0174 20.8084 11.5549 21 11.0727 21C10.5905 21 10.1281 20.8084 9.78708 20.4675C9.4461 20.1265 9.25455 19.664 9.25455 19.1818V19.1C9.24751 18.7991 9.15011 18.5073 8.97501 18.2625C8.79991 18.0176 8.55521 17.8312 8.27273 17.7273C7.99853 17.6063 7.69437 17.5702 7.39947 17.6236C7.10456 17.6771 6.83244 17.8177 6.61818 18.0273L6.56364 18.0818C6.39478 18.2509 6.19425 18.385 5.97353 18.4765C5.7528 18.568 5.51621 18.6151 5.27727 18.6151C5.03834 18.6151 4.80174 18.568 4.58102 18.4765C4.36029 18.385 4.15977 18.2509 3.99091 18.0818C3.82186 17.913 3.68775 17.7124 3.59626 17.4917C3.50476 17.271 3.45766 17.0344 3.45766 16.7955C3.45766 16.5565 3.50476 16.3199 3.59626 16.0992C3.68775 15.8785 3.82186 15.678 3.99091 15.5091L4.04545 15.4545C4.25503 15.2403 4.39562 14.9682 4.4491 14.6733C4.50257 14.3784 4.46647 14.0742 4.34545 13.8C4.23022 13.5311 4.03887 13.3018 3.79497 13.1403C3.55107 12.9788 3.26526 12.8921 2.97273 12.8909H2.81818C2.33597 12.8909 1.87351 12.6994 1.53253 12.3584C1.19156 12.0174 1 11.5549 1 11.0727C1 10.5905 1.19156 10.1281 1.53253 9.78708C1.87351 9.4461 2.33597 9.25455 2.81818 9.25455H2.9C3.2009 9.24751 3.49273 9.15011 3.73754 8.97501C3.98236 8.79991 4.16883 8.55521 4.27273 8.27273C4.39374 7.99853 4.42984 7.69437 4.37637 7.39947C4.3229 7.10456 4.18231 6.83244 3.97273 6.61818L3.91818 6.56364C3.74913 6.39478 3.61503 6.19425 3.52353 5.97353C3.43203 5.7528 3.38493 5.51621 3.38493 5.27727C3.38493 5.03834 3.43203 4.80174 3.52353 4.58102C3.61503 4.36029 3.74913 4.15977 3.91818 3.99091C4.08704 3.82186 4.28757 3.68775 4.50829 3.59626C4.72901 3.50476 4.96561 3.45766 5.20455 3.45766C5.44348 3.45766 5.68008 3.50476 5.9008 3.59626C6.12152 3.68775 6.32205 3.82186 6.49091 3.99091L6.54545 4.04545C6.75971 4.25503 7.03183 4.39562 7.32674 4.4491C7.62164 4.50257 7.9258 4.46647 8.2 4.34545H8.27273C8.54161 4.23022 8.77093 4.03887 8.93245 3.79497C9.09397 3.55107 9.18065 3.26526 9.18182 2.97273V2.81818C9.18182 2.33597 9.37338 1.87351 9.71435 1.53253C10.0553 1.19156 10.5178 1 11 1C11.4822 1 11.9447 1.19156 12.2856 1.53253C12.6266 1.87351 12.8182 2.33597 12.8182 2.81818V2.9C12.8193 3.19253 12.906 3.47834 13.0676 3.72224C13.2291 3.96614 13.4584 4.15749 13.7273 4.27273C14.0015 4.39374 14.3056 4.42984 14.6005 4.37637C14.8954 4.3229 15.1676 4.18231 15.3818 3.97273L15.4364 3.91818C15.6052 3.74913 15.8057 3.61503 16.0265 3.52353C16.2472 3.43203 16.4838 3.38493 16.7227 3.38493C16.9617 3.38493 17.1983 3.43203 17.419 3.52353C17.6397 3.61503 17.8402 3.74913 18.0091 3.91818C18.1781 4.08704 18.3122 4.28757 18.4037 4.50829C18.4952 4.72901 18.5423 4.96561 18.5423 5.20455C18.5423 5.44348 18.4952 5.68008 18.4037 5.9008C18.3122 6.12152 18.1781 6.32205 18.0091 6.49091L17.9545 6.54545C17.745 6.75971 17.6044 7.03183 17.5509 7.32674C17.4974 7.62164 17.5335 7.9258 17.6545 8.2V8.27273C17.7698 8.54161 17.9611 8.77093 18.205 8.93245C18.4489 9.09397 18.7347 9.18065 19.0273 9.18182H19.1818C19.664 9.18182 20.1265 9.37338 20.4675 9.71435C20.8084 10.0553 21 10.5178 21 11C21 11.4822 20.8084 11.9447 20.4675 12.2856C20.1265 12.6266 19.664 12.8182 19.1818 12.8182H19.1C18.8075 12.8193 18.5217 12.906 18.2778 13.0676C18.0339 13.2291 17.8425 13.4584 17.7273 13.7273Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span>Settings</span>
                  </button>
                </li>
              </ul>
              <div className="mb-8 mt-auto flex w-full flex-wrap gap-4 bg-blue-400 p-1 px-4 sm:mb-0 sm:mt-0 sm:items-center sm:px-0">
                <button className="w-full rounded-3xl bg-[#27272a] px-5 py-2 text-white hover:bg-[#4f4e4e] sm:w-auto">
                  Log in
                </button>
                <button className="mr-1 w-full rounded-3xl bg-[#424245] px-6 py-2 text-center font-semibold text-white transition-all duration-150 ease-in-out sm:w-auto sm:px-3">
                  Sign up
                </button>
              </div>
            </div>
            {/* sidebar in small screen */}
          </nav>
        </header>
        {/* main screen */}
        <div className="flex min-h-[calc(100vh-66px)] bg-red-400 sm:min-h-[calc(100vh-82px)]">
          <aside className="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 bg-pink-500 px-2 py-2 duration-200 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:bg-[#070e13] sm:py-6 sm:hover:max-w-[250px] lg:sticky lg:max-w-[250px]">
            <div className="hidden h-full sm:block">
              <div className="flex h-full flex-col justify-evenly">
                <div className="mt-4">
                  <ul className="mt-2 space-y-2">
                    <li className="rounded-lg px-4 py-3 duration-200 hover:bg-slate-800">
                      <button className="flex flex-col items-center gap-2 sm:w-full sm:flex-row lg:justify-start">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
                            fill="#fff"
                          />
                        </svg>
                        <span className="font-medium">Home</span>
                      </button>
                    </li>

                    <li className="rounded-lg px-4 py-3 duration-200 hover:bg-slate-800">
                      <button className="flex flex-col items-center gap-2 sm:w-full sm:flex-row lg:justify-start">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 -0.5 21 21"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <title>like [#1385]</title>
                          <desc>Created with Sketch.</desc>
                          <defs></defs>
                          <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              id="Dribbble-Light-Preview"
                              transform="translate(-259.000000, -760.000000)"
                              fill="#fff"
                            >
                              <g
                                id="icons"
                                transform="translate(56.000000, 160.000000)"
                              >
                                <path
                                  d="M203,620 L207.200006,620 L207.200006,608 L203,608 L203,620 Z M223.924431,611.355 L222.100579,617.89 C221.799228,619.131 220.638976,620 219.302324,620 L209.300009,620 L209.300009,608.021 L211.104962,601.825 C211.274012,600.775 212.223214,600 213.339366,600 C214.587817,600 215.600019,600.964 215.600019,602.153 L215.600019,608 L221.126177,608 C222.97313,608 224.340232,609.641 223.924431,611.355 L223.924431,611.355 Z"
                                  id="like-[#1385]"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <span>Liked Videos</span>
                      </button>
                    </li>

                    <li className="rounded-lg px-4 py-3 duration-200 hover:bg-slate-800">
                      <button className="flex flex-col items-center gap-2 sm:w-full sm:flex-row lg:justify-start">
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.07868 5.06891C8.87402 1.27893 15.0437 1.31923 18.8622 5.13778C22.6824 8.95797 22.7211 15.1313 18.9262 18.9262C15.1312 22.7211 8.95793 22.6824 5.13774 18.8622C2.87389 16.5984 1.93904 13.5099 2.34047 10.5812C2.39672 10.1708 2.775 9.88377 3.18537 9.94002C3.59575 9.99627 3.88282 10.3745 3.82658 10.7849C3.4866 13.2652 4.27782 15.881 6.1984 17.8016C9.44288 21.0461 14.6664 21.0646 17.8655 17.8655C21.0646 14.6664 21.046 9.44292 17.8015 6.19844C14.5587 2.95561 9.33889 2.93539 6.13935 6.12957L6.88705 6.13333C7.30126 6.13541 7.63535 6.47288 7.63327 6.88709C7.63119 7.3013 7.29372 7.63539 6.87951 7.63331L4.33396 7.62052C3.92269 7.61845 3.58981 7.28556 3.58774 6.8743L3.57495 4.32874C3.57286 3.91454 3.90696 3.57707 4.32117 3.57498C4.73538 3.5729 5.07285 3.907 5.07493 4.32121L5.07868 5.06891ZM11.9999 7.24992C12.4141 7.24992 12.7499 7.58571 12.7499 7.99992V11.6893L15.0302 13.9696C15.3231 14.2625 15.3231 14.7374 15.0302 15.0302C14.7373 15.3231 14.2624 15.3231 13.9696 15.0302L11.2499 12.3106V7.99992C11.2499 7.58571 11.5857 7.24992 11.9999 7.24992Z"
                            fill="#fff"
                          />
                        </svg>
                        <span>History</span>
                      </button>
                    </li>

                    <li className="rounded-lg px-4 py-3 duration-200 hover:bg-slate-800">
                      <button className="flex flex-col items-center gap-2 sm:w-full sm:flex-row lg:justify-start">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#fff"
                        >
                          <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z" />
                        </svg>
                        <span>My Content</span>
                      </button>
                    </li>

                    <li className="rounded-lg px-4 py-3 duration-200 hover:bg-slate-800">
                      <button className="flex flex-col items-center gap-2 sm:w-full sm:flex-row lg:justify-start">
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H21C21.4142 9.25 21.75 9.58579 21.75 10C21.75 10.4142 21.4142 10.75 21 10.75H3C2.58579 10.75 2.25 10.4142 2.25 10ZM19.2053 13.4431L19.2948 13.4948C20.0836 13.9501 20.7374 14.3276 21.2037 14.681C21.6788 15.041 22.105 15.4808 22.2158 16.1093C22.2614 16.3678 22.2614 16.6322 22.2158 16.8907C22.105 17.5192 21.6788 17.959 21.2037 18.319C20.7374 18.6724 20.0836 19.0499 19.2947 19.5053L19.2053 19.5569C18.4165 20.0124 17.7626 20.3899 17.2235 20.617C16.6741 20.8485 16.0802 20.9977 15.4805 20.7794C15.2338 20.6896 15.0048 20.5574 14.8037 20.3887C14.3148 19.9784 14.1471 19.3894 14.0728 18.798C14 18.2175 14 17.4625 14 16.5517V16.4483C14 15.5375 14 14.7825 14.0728 14.202C14.1471 13.6106 14.3148 13.0216 14.8037 12.6113C15.0048 12.4426 15.2338 12.3104 15.4805 12.2206C16.0802 12.0023 16.6741 12.1515 17.2235 12.383C17.7626 12.6101 18.4165 12.9876 19.2053 13.4431ZM16.6411 13.7653C16.1992 13.5791 16.051 13.6092 15.9935 13.6302C15.9113 13.6601 15.8349 13.7042 15.7679 13.7604C15.721 13.7998 15.6209 13.913 15.5611 14.3888C15.5014 14.8646 15.5 15.5243 15.5 16.5C15.5 17.4757 15.5014 18.1354 15.5611 18.6112C15.6209 19.087 15.721 19.2002 15.7679 19.2396C15.8349 19.2958 15.9113 19.3399 15.9935 19.3698C16.051 19.3908 16.1992 19.4209 16.6411 19.2347C17.083 19.0485 17.655 18.7199 18.5 18.2321C19.345 17.7442 19.9156 17.4131 20.2978 17.1235C20.68 16.8339 20.728 16.6905 20.7386 16.6302C20.7538 16.5441 20.7538 16.4559 20.7386 16.3698C20.728 16.3095 20.68 16.1661 20.2978 15.8765C19.9156 15.5869 19.345 15.2558 18.5 14.7679C17.655 14.2801 17.083 13.9515 16.6411 13.7653ZM2.25 14C2.25 13.5858 2.58579 13.25 3 13.25H11C11.4142 13.25 11.75 13.5858 11.75 14C11.75 14.4142 11.4142 14.75 11 14.75H3C2.58579 14.75 2.25 14.4142 2.25 14ZM2.25 18C2.25 17.5858 2.58579 17.25 3 17.25H11C11.4142 17.25 11.75 17.5858 11.75 18C11.75 18.4142 11.4142 18.75 11 18.75H3C2.58579 18.75 2.25 18.4142 2.25 18Z"
                            fill="#fff"
                          />
                        </svg>
                        <span>Playlists</span>
                      </button>
                    </li>

                    <li className="rounded-lg px-4 py-3 duration-200 hover:bg-slate-800">
                      <button className="flex flex-col items-center gap-2 sm:w-full sm:flex-row lg:justify-start">
                        <svg
                          className="h-6 w-6"
                          width="800px"
                          height="800px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 19.2857L15.8 21L20 17M4 21C4 17.134 7.13401 14 11 14C12.4872 14 13.8662 14.4638 15 15.2547M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z"
                            stroke="#fff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span>Subscriptions</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <h2 className="text-lg font-semibold">Settings</h2>
                  <ul className="mt-2 space-y-2">
                    <li className="rounded-lg px-4 py-3 duration-200 hover:bg-slate-800">
                      <a
                        href="#settings"
                        title="Settings"
                        className="flex items-center gap-2 text-white"
                      >
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="style=fill">
                            <g id="setting">
                              <path
                                id="Subtract"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10.8946 3.00654C10.2226 1.87704 8.75191 1.45656 7.59248 2.14193L5.86749 3.12906C4.59518 3.85639 4.16378 5.48726 4.8906 6.74522L4.89112 6.74611C5.26606 7.39298 5.20721 7.8062 5.09018 8.00929C4.97308 8.21249 4.64521 8.47001 3.9 8.47001C2.43322 8.47001 1.25 9.66837 1.25 11.12V12.88C1.25 14.3317 2.43322 15.53 3.9 15.53C4.64521 15.53 4.97308 15.7875 5.09018 15.9907C5.20721 16.1938 5.26606 16.607 4.89112 17.2539L4.8906 17.2548C4.16378 18.5128 4.59558 20.1439 5.8679 20.8712L7.59257 21.8581C8.75199 22.5434 10.2226 22.123 10.8946 20.9935L11.0091 20.7958C11.3841 20.1489 11.773 19.9925 12.0087 19.9925C12.2434 19.9925 12.6293 20.1476 12.9993 20.793L13.0009 20.7958L13.1109 20.9858L13.1154 20.9935C13.7874 22.123 15.258 22.5434 16.4174 21.8581L18.1425 20.871C19.4157 20.1431 19.8444 18.5235 19.1212 17.2579L19.1189 17.2539C18.7439 16.607 18.8028 16.1938 18.9198 15.9907C19.0369 15.7875 19.3648 15.53 20.11 15.53C21.5768 15.53 22.76 14.3317 22.76 12.88V11.12C22.76 9.65323 21.5616 8.47001 20.11 8.47001C19.3648 8.47001 19.0369 8.21249 18.9198 8.00929C18.8028 7.8062 18.7439 7.39298 19.1189 6.74611L19.1194 6.74522C19.8463 5.48713 19.4147 3.85604 18.1421 3.12883L16.4175 2.14193C15.2581 1.45656 13.7874 1.877 13.1154 3.00651L13.0009 3.20423C12.6259 3.85115 12.237 4.00751 12.0012 4.00751C11.7666 4.00751 11.3807 3.85247 11.0107 3.20701L11.0091 3.20423L10.8991 3.01421L10.8946 3.00654ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                fill="#fff"
                              />
                            </g>
                          </g>
                        </svg>
                        <span>Settings</span>
                      </a>
                    </li>
                    <li className="rounded-lg px-4 py-3 duration-200 hover:bg-slate-800">
                      <a
                        href="#settings"
                        title="Settings"
                        className="flex items-center gap-2 text-white"
                      >
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 7.184C16 3.14 12.86 0 9 0S2 3.14 2 7c-1.163.597-2 1.696-2 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1 5 5 0 0 1 10 0 1 1 0 0 0-1 1v6a1 1 0 0 0 1 1v1h-2.592c-.206-.581-.756-1-1.408-1H8a1.5 1.5 0 0 0 0 3h6a2 2 0 0 0 2-2v-1.183A2.992 2.992 0 0 0 18 12v-2a2.99 2.99 0 0 0-2-2.816L-7 62"
                            fill="#fff"
                            fill-rule="evenodd"
                          />
                        </svg>
                        <span>Support</span>
                      </a>
                    </li>
                  </ul>
                  <div className="mt-4 border-t border-gray-700 pt-4">
                    <div className="flex items-center gap-4">
                      <img
                        src="https://picsum.photos/200"
                        alt="Joe Doe Picture"
                        className="h-12 w-12 rounded-full"
                      />
                      <div>
                        <p className="font-medium">Joe Doe</p>
                        <p className="text-sm text-gray-400">
                          joe.doe@atheros.ai
                        </p>
                      </div>
                      <a href="#logout" className="mt-2 block text-red-500">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 12L13 12"
                            stroke="#F71735"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"
                            stroke="#F71735"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
                            stroke="#F71735"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block h-full w-full bg-amber-950 sm:hidden">
              <ul className="flex h-full w-full items-center justify-evenly bg-black">
                <li className="rounded-lg px-4 py-3 duration-200 hover:bg-slate-800">
                  <a href="#dashboard" title="Dashboard">
                    <svg
                      className="h-7 w-7"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
                        fill="#fff"
                      />
                    </svg>
                  </a>
                </li>

                <li className="rounded-lg px-4 py-3 duration-200 hover:bg-slate-800">
                  <a href="#dashboard" title="Dashboard">
                    <svg
                      className="h-7 w-7"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fff"
                    >
                      <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z" />
                    </svg>
                  </a>
                </li>
                <li className="rounded-lg px-4 py-3 duration-200 hover:bg-slate-800">
                  <a
                    href="#dashboard"
                    title="Dashboard"
                    className="flex items-center gap-2 text-white"
                  >
                    <svg
                      className="h-7 w-7"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 19.2857L15.8 21L20 17M4 21C4 17.134 7.13401 14 11 14C12.4872 14 13.8662 14.4638 15 15.2547M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li className="rounded-lg px-4 py-3 duration-200 hover:bg-slate-800">
                  <a href="#dashboard" title="Dashboard">
                    <div className="flex items-center gap-4">
                      <img
                        src="https://picsum.photos/200"
                        alt="Joe Doe Picture"
                        className="h-9 w-9 rounded-full p-[2px] ring-2 ring-gray-300 dark:ring-gray-500"
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          {/* main container */}
          <section className="w-full bg-blue-950 pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
            <div className="flex h-full items-center justify-center">
              <div className="w-full max-w-sm text-center">
                <p className="mb-3 w-full">
                  <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      ></path>
                    </svg>
                  </span>
                </p>
                <h5 className="mb-2 font-semibold">No videos available</h5>
                <p>
                  There are no videos here available. Please try to search some
                  thing else.
                </p>
              </div>
            </div>
          </section>
          {/* main container */}
        </div>
        {/* main screen */}
      </div>
    </>
  );
}
