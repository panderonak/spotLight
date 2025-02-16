import { CommentCard } from "../../components";

export default function CommentSection({ children }) {
  return (
    <div class="fixed inset-x-0 top-full z-[60] h-[calc(100%-69px)] overflow-auto rounded-lg border bg-teal-700 p-4 duration-200 peer-focus:top-[67px] hover:top-[67px] sm:static sm:h-auto sm:max-h-[500px] lg:max-h-none">
      <div class="block pb-10">
        <h6 class="mb-4 text-xl font-semibold">573 Comments</h6>
        <input
          type="text"
          class="w-full border-b border-[#3f3f3f] bg-transparent py-1 font-normal outline-none placeholder:text-sm placeholder:text-[#aaaaaa]"
          placeholder="Add a comment..."
        />
      </div>
      // TODO: Apply loop here.
      <CommentCard />
    </div>
  );
}

// TODO: Combine all parts to achieve the functionality.
// Share on X that completed 55-60% project.

// Algorithm:
// 1) Use the videoId to fetch the video.
// 2) Then fetch the comments.
// 3)
