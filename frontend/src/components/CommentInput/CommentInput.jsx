import { forwardRef } from "react";

function CommentInput(
  {
    type = "text",
    className = "",
    placeholder,
    commentSubmit,
    isCommentSubmitting,
    ...props
  },
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
      {isCommentSubmitting ? (
        <svg
          onClick={() => commentSubmit()}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 right-1 -translate-x-1/2 -translate-y-1/2 transform"
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
      ) : (
        <div className="absolute top-1/2 right-1 -translate-x-1/2 -translate-y-1/2 transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin duration-300"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 2v4" stroke="#464646" />
            <path d="m16.2 7.8 2.9-2.9" stroke="#464646" />
            <path d="M18 12h4" stroke="#575757" />
            <path d="m16.2 16.2 2.9 2.9" stroke="#575757" />
            <path d="M12 18v4" stroke="#696969" />
            <path d="m4.9 19.1 2.9-2.9" stroke="#696969" />
            <path d="M2 12h4" stroke="#7a7a7a" />
            <path d="m4.9 4.9 2.9 2.9" stroke="#7a7a7a" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default forwardRef(CommentInput);
