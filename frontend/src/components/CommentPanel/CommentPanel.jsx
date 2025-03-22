import { useState, useEffect } from "react";
import { Button } from "../../components/index";

export default function CommentPanel({
  commentText,
  canEdit,
  onUpdate,
  onCancel,
}) {
  const [comment, setComment] = useState(commentText);
  const [isEditable, setIsEditable] = useState(canEdit);

  useEffect(() => {
    setIsEditable(canEdit);
    if (!canEdit) setComment(commentText); // Reset on cancel
  }, [canEdit, commentText]);

  const handleCommentChange = (evt) => {
    setComment(evt.target.value);
  };

  return (
    <div>
      <input
        readOnly={!isEditable}
        value={comment}
        onChange={handleCommentChange}
        className={`w-full bg-transparent py-1 font-normal text-[#f8f9fa] outline-none placeholder:text-sm placeholder:text-[#f8f9fa] ${
          isEditable ? "border-b border-[#f8f9fa]" : "border-none"
        }`}
      />
      {isEditable && (
        <div className="flex justify-end gap-x-3 pt-2">
          <Button
            onClick={() => onCancel()}
            className="inline-block cursor-pointer !rounded-3xl !bg-white !px-5 !py-2 !text-sm !text-black shadow-md duration-75 hover:bg-black/5"
          >
            Cancel
          </Button>
          <Button
            onClick={() => onUpdate(comment)}
            className="inline-block !rounded-3xl bg-black !px-5 !py-2 !text-sm text-white shadow-md duration-75 hover:bg-[rgba(3,3,3,0.8)]"
          >
            Confirm
          </Button>
        </div>
      )}
    </div>
  );
}
