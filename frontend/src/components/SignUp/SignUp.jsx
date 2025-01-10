import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeRegistrationDetails } from "../../features/registrationSlice";
import { authenticateUser } from "../../features/authSlice";
import { Button } from "../../components/index";
import authService from "../../API/authentication";

export default function SignUp() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadAvatar = (evt) => {
    const image = evt.target.files[0];
    setAvatar(image);
    setAvatarPreview(URL.createObjectURL(image));
  };

  const userDetails = useSelector(
    (state) => state.registration.registrationInfo
  );

  console.log(userDetails);

  const createNewAccount = async () => {
    setMessage("");
    setLoading(false);
    try {
      setLoading(true);
      const response = await authService.createAccount({
        ...userDetails,
        avatar,
      });
      if (response.success) {
        setMessage("Successfully created your account.");
        dispatch(authenticateUser(response.data));
        dispatch(removeRegistrationDetails());
        navigate("/channel");
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (avatarPreview)
    return (
      <div>
        {message && <p>{message}</p>}
        <div class="m-10 flex h-20 w-20 items-center justify-center rounded-full bg-slate-200">
          <img
            src={avatarPreview}
            class="rounded-full object-cover shadow-sm drop-shadow-md"
            alt="Avatar"
          />
        </div>
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
          <Button type="submit" onClick={createNewAccount}>
            Sign Up
          </Button>
        )}
      </div>
    );

  return (
    <div
      class="m-10 flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 shadow-sm drop-shadow-md"
      onClick={() => inputRef.current.click()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
      </svg>
      <input
        type="file"
        name="avatar"
        accept="image/jpeg, image/png"
        className="hidden"
        ref={inputRef}
        required="true"
        onChange={uploadAvatar}
      />
    </div>
  );
}
