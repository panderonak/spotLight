import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import userService from "../../API/user";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function AvatarUpdater() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(
    "https://picsum.photos/200"
  );
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    navigate("/");
  };

  const handleAvatarFileChange = (evt) => {
    const image = evt.target.files[0];
    setAvatar(image);
    setAvatarPreview(URL.createObjectURL(image));
  };

  // const currentUserAvatar = useSelector((state) => state.auth.userInfo.avatar);

  // setAvatarPreview(currentUserAvatar);

  const handleAvatarUpdate = async () => {
    setMessage("");
    setLoading(false);
    try {
      setLoading(true);
      const avatarUpdateResponse = await userService.changeAvatar({ avatar });
      if (avatarUpdateResponse.success) {
        setMessage("Your avatar has been successfully updated.");
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-wrap justify-center gap-y-4 bg-[#fff] py-4 w-full sm:flex-row mt-4">
      <div className="w-full sm:w-1/2 lg:w-1/3 sm:pr-5">
        <h3 className="mb-4 text-left text-3xl leading-tight font-semibold">
          Your Photo
        </h3>
        <p className="text-gray-500">This will be displayed on your account.</p>
      </div>
      <div className="w-full rounded-lg shadow-sm drop-shadow-md sm:w-1/2 lg:w-2/3">
        <div className="rounded-lg border">
          <div className="flex flex-wrap">
            <div
              className="relative m-12 flex h-36 w-36 rounded-3xl bg-slate-200 shadow-sm drop-shadow-md"
              onClick={() => inputRef.current.click()}
            >
              <div className="absolute w-full h-full rounded-3xl -z-20">
                <input
                  type="file"
                  name="avatar"
                  accept="image/jpeg, image/png"
                  className="hidden"
                  ref={inputRef}
                  required="true"
                  onChange={handleAvatarFileChange}
                />
                <img
                  src={`${avatarPreview}`}
                  class="rounded-3xl object-cover w-full h-full"
                  alt="Avatar"
                />
              </div>
              <div className="flex justify-center items-center z-20 absolute w-full h-full rounded-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className=""
                  fill="#f9fbfc"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                  <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
                </svg>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end gap-4 px-8 pb-11 pt-4">
            <Button
              onClick={handleCancel}
              className="border text-base hover:bg-black/5 bg-white !text-black"
            >
              Cancel
            </Button>
            {loading ? (
              <Button>
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="inline h-8 w-8 animate-spin fill-gray-600 text-gray-200 dark:fill-gray-300 dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </Button>
            ) : (
              <Button
                onClick={handleAvatarUpdate}
                type="submit"
                className="px-4 hover:bg-[rgba(3,3,3,0.8)]"
              >
                Save changes
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
