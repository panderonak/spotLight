import { forwardRef } from "react";

const CommentInput = forwardRef(
  ({ type = "text", className = "", placeholder, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          ref={ref}
          {...props}
          placeholder={placeholder}
          className={`${className} w-full border-b border-[#3f3f3f] bg-transparent py-1 font-normal outline-none placeholder:text-sm placeholder:text-[#aaaaaa]`}
        />
      </div>
    );
  }
);

export default CommentInput;
