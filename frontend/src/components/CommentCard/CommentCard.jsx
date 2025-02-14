export default function CommentCard() {
  return (
    <div className="py-6">
      <div className="flex gap-x-4">
        <div className="mt-2 h-11 w-11 shrink-0">
          <img
            src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-woman-reading-book-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="lorem"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="block">
          <p className="flex items-center font-semibold text-sm text-gray-200">
            @lorem · 
            <span className="text-xs text-[#aaaaaa]">19 hour ago</span>
          </p>
          <p className="mt-3 text-sm font-normal text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            dignissimos. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Maxime, impedit.
          </p>
        </div>
      </div>
    </div>
  );
}
