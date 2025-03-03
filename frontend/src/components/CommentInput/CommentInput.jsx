import { forwardRef } from "react";

function CommentInput(
  { type = "text", className = "", placeholder, commentSubmit, ...props },
  ref
) {
  return (
    <div className="relative">
      <input
        type={type}
        ref={ref}
        {...props}
        placeholder={placeholder}
        className={`${className} w-full border-b border-[#3f3f3f] bg-transparent py-1 font-normal outline-none placeholder:text-sm placeholder:text-[#aaaaaa]`}
      />
      <svg
        onClick={() => commentSubmit}
        xmlns="http://www.w3.org/2000/svg"
        class="absolute top-1/2 right-1 -translate-x-1/2 -translate-y-1/2 transform"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
        <path d="M6 12h16" />
      </svg>
    </div>
  );
}

export default forwardRef(CommentInput);
