import { useSelector, useDispatch } from "react-redux";
import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { createNewComment, fetchComments } from "../../features/commentSlice";
import {
  CommentCard,
  CommentInput,
  InfiniteScrollContainer,
} from "../../components";

export default function CommentSection({ videoId }) {
  const { register, handleSubmit, reset } = useForm();
  const [page, setPage] = useState(1);
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, comments, totalCommentCount, hasMoreComments } =
    useSelector((state) => state.comment);
  const userData = useSelector((state) => state.userInfo);

  const fetchMoreComments = useCallback(() => {
    if (!isLoading && hasMoreComments) {
      dispatch(fetchComments({ videoId, page: page + 1 }));
      setPage((prev) => prev + 1);
    }
  }, [dispatch, hasMoreComments, isLoading, page, videoId]);

  const handleCommentSubmit = useCallback(
    async (data) => {
      try {
        setIsSubmittingComment(true);
        const action = await dispatch(createNewComment({ videoId, ...data }));
        if (action.type === "createNewComment/fulfilled") {
          reset();
        } else {
          console.error("Failed to post comment.");
        }
      } catch (error) {
        console.error("Error creating comment:", error.message || error);
      } finally {
        setIsSubmittingComment(false);
      }
    },
    [dispatch, reset, videoId]
  );

  return (
    <form onSubmit={handleSubmit(handleCommentSubmit)}>
      <div className="fixed inset-x-0 top-full z-[60] h-[calc(100%-69px)] overflow-auto rounded-lg border bg-teal-700 p-4 duration-200 peer-focus:top-[67px] hover:top-[67px] sm:static sm:h-auto sm:max-h-[500px] lg:max-h-none">
        <div className="block pb-10">
          <h6 className="mb-4 text-xl font-semibold">
            {totalCommentCount} Comments
          </h6>
          <div className="flex items-center gap-x-4">
            <span className="inline-block w-10 shrink-0 rounded-full">
              <img
                src={userData?.user?.avatar}
                alt={userData?.user?.username}
                className="h-10 w-10 rounded-full"
              />
            </span>
            <CommentInput
              {...register("content", { required: true })}
              placeholder="Add a comment..."
              isCommentSubmitting={isSubmittingComment}
            />
            <div>
              <button
                className="rounded-md bg-blue-400 px-2 py-1.5"
                type="submit"
                aria-label={
                  isSubmittingComment ? "Submitting comment" : "Submit comment"
                }
                disabled={isSubmittingComment}
              >
                {isSubmittingComment ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="animate-spin"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v4" stroke="#212529" />
                    <path d="m16.2 7.8 2.9-2.9" stroke="#212529" />
                    <path d="M18 12h4" stroke="#343a40" />
                    <path d="m16.2 16.2 2.9 2.9" stroke="#343a40" />
                    <path d="M12 18v4" stroke="#495057" />
                    <path d="m4.9 19.1 2.9-2.9" stroke="#495057" />
                    <path d="M2 12h4" stroke="#6c757d" />
                    <path d="m4.9 4.9 2.9 2.9" stroke="#6c757d" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
                    <path d="M6 12h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <InfiniteScrollContainer
          fetchNextPage={fetchMoreComments}
          hasNextPage={hasMoreComments}
        >
          {comments?.map((comment) => (
            <CommentCard
              key={comment?._id}
              commentId={comment?._id}
              author={comment?.owner?.username}
              authorAvatar={comment?.owner?.avatar}
              content={comment?.content}
              createdAt={comment?.createdAt}
              likeCount={comment?.likes}
              isLikedByUser={comment?.likedByUser}
            />
          ))}
        </InfiniteScrollContainer>
      </div>
    </form>
  );
}
