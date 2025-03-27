import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useCallback } from "react";
import { deleteComment, updateComment } from "../../features/commentSlice";
import likeService from "../../API/like";
import { timeAgoFromTimestamp } from "../../dateTimeUtils/timeFunctions";
import { CommentPanel } from "../../components/index";

const CommentCard = ({
  owner,
  commentId,
  author,
  authorAvatar,
  content,
  createdAt,
  likeCount,
  isLikedByUser,
}) => {
  const [totalLikes, setTotalLikes] = useState(likeCount);
  const [hasUserLiked, setHasUserLiked] = useState(isLikedByUser);
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();

  const toggleLikeStatus = useCallback(async () => {
    try {
      const response = await likeService.toggleCommentLike({ commentId });
      if (response?.success) {
        setHasUserLiked((prev) => !prev);
        setTotalLikes((prev) => (hasUserLiked ? prev - 1 : prev + 1));
      } else {
        console.error("Failed to like the comment.");
      }
    } catch (error) {
      console.error("Error liking comment:", error.message || error);
    }
  }, [commentId, hasUserLiked]);

  const removeComment = useCallback(async () => {
    try {
      const action = await dispatch(deleteComment({ commentId }));
      if (deleteComment.fulfilled.match(action)) {
        console.log("Comment deleted successfully.");
      } else {
        console.error("Failed to delete comment.");
      }
    } catch (error) {
      console.error("Error deleting comment:", error.message || error);
    } finally {
      setIsActionModalOpen(false);
    }
  }, [commentId, dispatch]);

  const handleUpdate = useCallback(
    async (updatedComment) => {
      try {
        const action = await dispatch(
          updateComment({ commentId, updatedComment })
        );
        if (updateComment.fulfilled.match(action)) {
          console.log("Comment updated successfully.");
          setIsEditable(false);
        } else {
          console.error("Failed to update comment.");
        }
      } catch (error) {
        console.error("Error updating comment:", error.message || error);
      } finally {
        setIsActionModalOpen(false);
      }
    },
    [commentId, dispatch]
  );

  const handleCancel = useCallback(() => {
    setIsEditable(false);
  }, []);

  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="relative">
      <div className="w-full bg-[#0f0f0f] p-4">
        <div className="flex items-start gap-x-4">
          <div className="mt-2 h-11 w-11 shrink-0">
            <img
              src={authorAvatar}
              alt={`${author} profile`}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="flex items-center justify-between text-sm font-semibold text-gray-200">
              <span>
                {`@${author}`} ·{" "}
                <span className="text-xs text-[#aaaaaa]">
                  {timeAgoFromTimestamp(createdAt)} ago
                </span>
              </span>

              {userInfo.user._id === owner && (
                <button
                  onClick={() => setIsActionModalOpen((prev) => !prev)}
                  className="cursor-pointer pr-3"
                  aria-label="More actions"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </button>
              )}
            </p>
            <p className="mt-3 pr-5 text-sm font-normal text-white">
              <CommentPanel
                commentText={content}
                canEdit={isEditable}
                onUpdate={handleUpdate}
                onCancel={handleCancel}
              />
            </p>
            <div className="flex w-full items-center p-0.5 pt-2 ease-in-out">
              <span
                onClick={() => toggleLikeStatus()}
                className="inline-flex justify-center items-center cursor-pointer rounded-full p-2 duration-200 ease-in-out hover:bg-[rgba(229,229,229,0.25)]"
                aria-label="Like comment"
              >
                <svg
                  className={
                    hasUserLiked
                      ? "fill-red-400 stroke-red-400"
                      : "fill-black stroke-white"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
              </span>
              <span className="text-xs text-[rgb(170,170,170)]">
                {totalLikes}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-10 right-10 w-36 rounded-xl bg-[rgba(40,40,40)] px-2 py-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-10 transition-all duration-200 ${
          isActionModalOpen
            ? "block opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul>
          <li>
            <button
              onClick={() => removeComment()}
              className="mb-1.5 flex w-full items-center cursor-pointer rounded-md p-2 text-white hover:bg-[rgb(83,83,83)]"
              aria-label="Delete comment"
            >
              <span className="mr-2 text-sm font-normal">Delete</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f02d3a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" x2="10" y1="11" y2="17" />
                <line x1="14" x2="14" y1="11" y2="17" />
              </svg>
            </button>
            <button
              onClick={() => setIsEditable(true)}
              className="flex w-full cursor-pointer items-center rounded-md p-2 text-white hover:bg-[rgb(83,83,83)]"
              aria-label="Update comment"
            >
              <span className="mr-2 text-sm font-normal">Update</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                <path d="m15 5 4 4" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(CommentCard);
