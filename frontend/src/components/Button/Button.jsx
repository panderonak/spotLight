// TODO: Improve this component.

export default function Button({
  children,
  type = "button",
  bgColor = "bg-[#0C090D]",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`text - md rounded-lg bg-black px-10 py-2.5 text - white shadow - md duration - 75 hover: bg - [rgba(3, 3, 3, 0.8)] {bgColor} ${textColor} ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
