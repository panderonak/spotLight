export default function VideoCard() {
  return (
    <div className="w-full">
      <div className="relative mb-2 w-full pt-[56%]">
        <div className="absolute inset-0 rounded-md">
          <img
            src=""
            alt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            itaque!"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <span className="absolute right-2 bottom-2 inline-block rounded-md bg-[rgba(0,0,0,0.5)] px-1.5 py-0.5 text-sm text-[#ffffff]">
          20:45
        </span>
      </div>
      <div className="flex gap-x-2">
        <div className="mt-1.5 h-10 w-10 shrink-0">
          <img
            src="https://picsum.photos/200"
            alt="lorem"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="w-full">
          <h6 className="mb-1 font-bold text-[#f1f1f1]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            itaque!
          </h6>
          <p className="mb-0.5 text-sm text-[#aaaaaa]">Lorem, ipsum.</p>
          <p className="flex text-sm text-[#aaaaaa]">
            10.3M Views · 49 minutes ago
          </p>
        </div>
      </div>
    </div>
  );
}
