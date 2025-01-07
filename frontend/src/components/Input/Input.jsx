// TODO: Improve this component. Add label and accept props to make it re-usable.
import { forwardRef, useId } from "react";

function Input({ label, type = "text", className = "", ...props }, ref) {
  const Id = useId();

  return (
    <div class="mb-3">
      {label && (
        <label
          htmlFor={Id}
          className="mb-1 inline-block pl-1 text-base font-light"
        >
          {label}
        </label>
      )}

      <input
        type={type}
        ref={ref}
        {...props}
        id={Id}
        placeholder="Enter your email"
        className={`${className} w-full rounded-lg border-2 border-[#f5f7fa] bg-[#f5f7fa] px-5 py-2.5 text-base font-normal text-black outline-none duration-200 placeholder:font-light placeholder:text-[#858586] focus:border-black`}
      />
    </div>
  );
}

export default forwardRef(Input);
