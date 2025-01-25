import { forwardRef, useId } from "react";

function Input(
  { label, type = "text", className = "", placeholder, ...props },
  ref
) {
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

      <input
        type={type}
        ref={ref}
        {...props}
        id={Id}
        placeholder={placeholder}
        className={`${className} w-full rounded-xl border border-[#C8C8C8] bg-[#FCFCFC] px-5 py-2.5 text-base font-normal text-black outline-none duration-200 placeholder:font-light placeholder:text-[#7c7b7d] focus:border-black`}
      />
    </div>
  );
}

export default forwardRef(Input);
