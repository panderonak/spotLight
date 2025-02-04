import { forwardRef, useId } from "react";

function TextArea({ label, className = "", placeholder, ...props }, ref) {
  const Id = useId();
  return (
    <div className="mb-3">
      {label && (
        <label
          htmlFor={Id}
          className="mb-3 inline-block pl-1 text-base font-normal text-[#2d2d2d]"
        >
          {label}
        </label>
      )}

      <textarea
        id={Id}
        ref={ref}
        {...props}
        placeholder={placeholder}
        className={`${className} h-40 resize-none w-full rounded-xl border border-[#C8C8C8] bg-[#FCFCFC] px-5 py-2.5 text-base font-normal text-black outline-none duration-200 placeholder:font-light placeholder:text-[#7c7b7d] focus:border-black`}
      />
    </div>
  );
}

export default forwardRef(TextArea);
