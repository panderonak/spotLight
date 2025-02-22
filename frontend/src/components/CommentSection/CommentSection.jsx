import { useSelector } from "react-redux";
import { CommentCard } from "../../components";
import { useForm } from "react-hook-form";

export default function CommentSection({ children }) {
  const { register, handleSubmit } = useForm();
  const userData = useSelector((state) => state.userInfo);
  console.log(userData.user);
  return (
    <form onSubmit={handleSubmit()}>
      <div class="fixed inset-x-0 top-full z-[60] h-[calc(100%-69px)] overflow-auto rounded-lg border bg-teal-700 p-4 duration-200 peer-focus:top-[67px] hover:top-[67px] sm:static sm:h-auto sm:max-h-[500px] lg:max-h-none">
        <div class="block pb-10">
          <h6 class="mb-4 text-xl font-semibold">573 Comments</h6>
          <div class="flex items-center gap-x-4">
            <span class="inline-block w-10 shrink-0 rounded-full sm:group-hover:mr-2 lg:mr-2">
              <img
                src="https://picsum.photos/200"
                alt="Joe Doe Picture"
                class="h-10 w-10 rounded-full"
              />
            </span>
            <input
              {...register("content", { required: true })}
              type="text"
              class="w-full border-b border-[#3f3f3f] bg-transparent py-1 font-normal outline-none placeholder:text-sm placeholder:text-[#aaaaaa]"
              placeholder="Add a comment..."
            />
          </div>
        </div>
        {comments?.map((comment) => (
          <CommentCard />
        ))}
      </div>
    </form>
  );
}
