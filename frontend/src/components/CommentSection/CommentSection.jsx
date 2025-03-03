import { useSelector } from "react-redux";
import {
  CommentCard,
  CommentInput,
  InfiniteScrollContainer,
} from "../../components";
import { useForm } from "react-hook-form";
import { createNewComment, fetchComments } from "../../features/commentSlice";

export default function CommentSection({ videoId }) {
  const { register, handleSubmit, reset } = useForm();
  const userData = useSelector((state) => state.userInfo);
  console.log(userData.user);
  const [page, setPage] = useState(1);

  const { isLoading, comments, totalCommentCount, hasMoreComments } =
    useSelector((state) => state.comment);

  const fetchMoreComments = useCallback(() => {
    if (!isLoading && hasNextPage) {
      dispatch(fetchComments({ videoId, page: page + 1 }));
      setPage((prev) => prev + 1);
    }
  }, [page, isLoading, hasNextPage, dispatch, videoId]);

  const handleCommentSubmit = async (data) => {
    const [isSubmittingComment, setIsSubmittingComment] = useState(false);
    const [error, setError] = useState(null);
    try {
      setIsSubmittingComment(true);
      const action = await dispatch(createNewComment({ videoId, ...data }));

      if (action.type === "createNewComment/fulfilled") {
        reset();
      } else {
        setError("Failed to post comment. Please try again.");
      }
    } catch (error) {
      console.error("Error creating comment:", error.message);
      setError(
        "An error occurred while posting the comment. Please try again."
      );
    } finally {
      setIsSubmittingComment(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleCommentSubmit)}>
      <div class="fixed inset-x-0 top-full z-[60] h-[calc(100%-69px)] overflow-auto rounded-lg border bg-teal-700 p-4 duration-200 peer-focus:top-[67px] hover:top-[67px] sm:static sm:h-auto sm:max-h-[500px] lg:max-h-none">
        <div class="block pb-10">
          <h6 class="mb-4 text-xl font-semibold">{totalCommentCount}</h6>
          <div class="flex items-center gap-x-4">
            <span class="inline-block w-10 shrink-0 rounded-full sm:group-hover:mr-2 lg:mr-2">
              <img
                src={`userData?.user?.avatar`}
                alt={`userData.user.username`}
                class="h-10 w-10 rounded-full"
              />
            </span>
            <CommentInput
              {...register("content", { required: true })}
              placeholder="Add a comment..."
              commentSubmit={handleCommentSubmit}
              isCommentSubmitting={isSubmittingComment}
            />
          </div>
        </div>
        <InfiniteScrollContainer
          fetchNextPage={fetchMoreComments}
          hasNextPage={hasMoreComments}
        >
          {comments?.map((comment) => (
            <CommentCard key={comment?._id} content={comment?.content} />
          ))}
        </InfiniteScrollContainer>
      </div>
    </form>
  );
}
