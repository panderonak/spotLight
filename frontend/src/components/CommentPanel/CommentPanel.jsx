import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeUpdating, startUpdating } from "../../features/commentSlice";
import { Button } from "../../components/index";

export default function CommentPanel({ commentText, canEdit }) {
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(canEdit);
  const [comment, setComment] = useState(commentText);

  const { editable } = useSelector((state) => state.comment);

  useEffect(() => {
    if (editable) setIsEditable(editable);
  }, [editable]);

  const handleCommentChange = (evt) => {
    setComment(evt.target.value);
  };

  return (
    <div>
      <input
        readOnly={!isEditable}
        value={comment}
        onChange={handleCommentChange}
        className={`
          ${isEditable ? "border-b" : "border-none"}
          w-full border-[#f8f9fa] bg-transparent py-1 font-normal text-[#f8f9fa] outline-none placeholder:text-sm placeholder:text-[#f8f9fa]`}
      />
      <div className="flex justify-end gap-x-3 pt-2">
        <Button
          onClick={() => dispatch(completeUpdating())}
          className="inline-block cursor-pointer !rounded-3xl !bg-white !px-5 !py-2 !text-sm !text-black shadow-md duration-75 hover:bg-black/5"
        >
          Cancel
        </Button>
        <Button
          onClick={() => dispatch(startUpdating({ modifiedComment: comment }))}
          className="inline-block !rounded-3xl bg-black !px-5 !py-2 !text-sm text-white shadow-md duration-75 hover:bg-[rgba(3,3,3,0.8)]"
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}
