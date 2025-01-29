import { useDispatch } from "react-redux";
import { Button, Input } from "../../components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import userService from "../../API/user";

export default function PasswordUpdate() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [isLowercaseValid, setIsLowercaseValid] = useState(false);
  const [isUppercaseValid, setIsUppercaseValid] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isSpecialCharacterValid, setIsSpecialCharacterValid] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
    watch,
  } = useForm({
    mode: "onChange",
  });

  const handleCancel = () => {
    reset();
    navigate("/");
  };

  const createNewPassword = async (data) => {
    console.log(data);
    setMessage("");
    setLoading(false);
    try {
      setLoading(true);
      const updateResponse = await userService.updatePassword(data);
      if (updateResponse.success) {
        setMessage("Your password has been successfully updated.");
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const newPassword = watch("newPassword", "");

  useEffect(() => {
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /\d/;
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const lengthValid = newPassword.length >= 8;

    setIsLowercaseValid(lowercaseRegex.test(newPassword));
    setIsUppercaseValid(uppercaseRegex.test(newPassword));
    setIsNumberValid(numberRegex.test(newPassword));
    setIsSpecialCharacterValid(specialCharacterRegex.test(newPassword));
    setIsLengthValid(lengthValid);

    if (!lengthValid) {
      setMessage("Password must be at least 8 characters long.");
    } else if (!lowercaseRegex.test(newPassword)) {
      setMessage("Password must contain at least one lowercase letter.");
    } else if (!uppercaseRegex.test(newPassword)) {
      setMessage("Password must contain at least one uppercase letter.");
    } else if (!numberRegex.test(newPassword)) {
      setMessage("Password must contain at least one number.");
    } else if (!specialCharacterRegex.test(newPassword)) {
      setMessage("Password must contain at least one special character.");
    } else {
      setMessage("");
    }
  }, [newPassword]);

  return (
    <div className="flex flex-col flex-wrap justify-center gap-y-4 bg-[#fff] py-4 sm:flex-row mt-4">
      <div className="w-full sm:w-1/2 lg:w-1/3 sm:pr-5">
        <h3 className="mb-4 text-left text-3xl leading-tight font-semibold">
          Password
        </h3>
        <p className="text-gray-500">
          To ensure account security, please enter your current password to
          proceed with updating your password.
        </p>
        {message && <p className="my-3 text-center text-red-400">{message}</p>}
      </div>
      <div className="w-full rounded-lg bg-[#f9fbfc] shadow-sm drop-shadow-md sm:w-1/2 lg:w-2/3">
        <form onSubmit={handleSubmit(createNewPassword)}>
          <div className="rounded-lg">
            <div className="flex flex-wrap gap-y-4 p-8">
              <div className="w-full">
                <Input
                  label="Current Password*"
                  type="password"
                  placeholder="Enter your current password"
                  {...register("currentPassword", {
                    required: true,
                    minLength: 8,
                    maxLength: 30,
                    validate: (value) => {
                      const isValid =
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
                          value
                        );
                      if (!isValid) {
                        setMessage(
                          "Password must be at least 8 characters long, include both uppercase and lowercase letters, and contain at least one number."
                        );
                      }
                      return isValid;
                    },
                  })}
                />
              </div>
              <div className="w-full">
                <Input
                  label="New password*"
                  type="password"
                  placeholder="Enter your new password"
                  {...register("newPassword", {
                    required: true,
                    minLength: 8,
                    maxLength: 30,
                    validate: (value) => {
                      const isValid =
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
                          value
                        );
                      if (!isValid) {
                        setMessage(
                          "Password must be at least 8 characters long, include both uppercase and lowercase letters, and contain at least one number."
                        );
                      }
                      return isValid;
                    },
                  })}
                />
                <div className="pl-1.5">
                  <div className="flex w-full items-center">
                    <p
                      className={`mt-0.5 text-base transition-all duration-200 ease-in-out ${
                        isLowercaseValid ? "text-gray-950" : "text-gray-500"
                      }`}
                    >
                      Includes lowercase letter(s)
                    </p>
                    <div className="flex items-center justify-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#2ba84a"
                        stroke="#fff"
                        strokeWidth="2"
                        className={`transition-all duration-200 ease-in-out ${
                          isLowercaseValid ? "block" : "hidden"
                        }`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" stroke="#2ba84a" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#f21b3f"
                        stroke="#fff"
                        strokeWidth="2"
                        className={`transition-all duration-200 ease-in-out ${
                          isLowercaseValid ? "hidden" : "block"
                        } rotate-45`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" stroke="#f21b3f" />
                        <path d="M8 12h8" />
                        <path d="M12 8v8" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <p
                      className={`mt-0.5 text-base transition-all duration-200 ease-in-out ${
                        isUppercaseValid ? "text-gray-950" : "text-gray-500"
                      }`}
                    >
                      Includes uppercase letter(s)
                    </p>
                    <div className="flex items-center justify-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#2ba84a"
                        stroke="#fff"
                        className={`transition-all duration-200 ease-in-out ${
                          isUppercaseValid ? "block" : "hidden"
                        }`}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" stroke="#2ba84a" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#f21b3f"
                        stroke="#fff"
                        strokeWidth="2"
                        className={`transition-all duration-200 ease-in-out ${
                          isUppercaseValid ? "hidden" : "block"
                        } rotate-45`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" stroke="#f21b3f" />
                        <path d="M8 12h8" />
                        <path d="M12 8v8" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <p
                      className={`mt-0.5 text-base transition-all duration-200 ease-in-out ${
                        isNumberValid ? "text-gray-950" : "text-gray-500"
                      }`}
                    >
                      Includes numeric digit(s)
                    </p>
                    <div className="flex items-center justify-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#2ba84a"
                        stroke="#fff"
                        strokeWidth="2"
                        className={`transition-all duration-200 ease-in-out ${
                          isNumberValid ? "block" : "hidden"
                        }`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" stroke="#2ba84a" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#f21b3f"
                        stroke="#fff"
                        strokeWidth="2"
                        className={`transition-all duration-200 ease-in-out ${
                          isNumberValid ? "hidden" : "block"
                        } rotate-45`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" stroke="#f21b3f" />
                        <path d="M8 12h8" />
                        <path d="M12 8v8" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <p
                      className={`mt-0.5 text-base transition-all duration-200 ease-in-out ${
                        isSpecialCharacterValid
                          ? "text-gray-950"
                          : "text-gray-500"
                      }`}
                    >
                      Includes special character(s)
                    </p>
                    <div className="flex items-center justify-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#2ba84a"
                        stroke="#fff"
                        strokeWidth="2"
                        className={`transition-all duration-200 ease-in-out ${
                          isSpecialCharacterValid ? "block" : "hidden"
                        }`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" stroke="#2ba84a" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#f21b3f"
                        stroke="#fff"
                        strokeWidth="2"
                        className={`transition-all duration-200 ease-in-out ${
                          isSpecialCharacterValid ? "hidden" : "block"
                        } rotate-45`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" stroke="#f21b3f" />
                        <path d="M8 12h8" />
                        <path d="M12 8v8" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <p
                      className={`mt-0.5 text-base transition-all duration-200 ease-in-out ${
                        isLengthValid ? "text-gray-950" : "text-gray-500"
                      }`}
                    >
                      Minimum 8 characters in length
                    </p>
                    <div className="flex items-center justify-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#2ba84a"
                        stroke="#fff"
                        strokeWidth="2"
                        className={`transition-all duration-200 ease-in-out ${
                          isLengthValid ? "block" : "hidden"
                        }`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" stroke="#2ba84a" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#f21b3f"
                        stroke="#fff"
                        strokeWidth="2"
                        className={`${
                          isLengthValid ? "hidden" : "block"
                        } rotate-45`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" stroke="#f21b3f" />
                        <path d="M8 12h8" />
                        <path d="M12 8v8" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <Input
                  label="Re-enter Password*"
                  type="password"
                  placeholder="Re-enter your password"
                  {...register("confirmNewPassword", {
                    required: true,
                    minLength: 8,
                    maxLength: 30,
                    validate: (value) => {
                      const isValid =
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
                          value
                        );
                      if (!isValid) {
                        setMessage(
                          "Password must be at least 8 characters long, include both uppercase and lowercase letters, and contain at least one number."
                        );
                      }
                      return isValid;
                    },
                  })}
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-4 p-4">
              <Button
                onClick={handleCancel}
                className="border text-base hover:bg-black/5 bg-white !text-black"
              >
                Cancel
              </Button>

              <Button type="submit" className="px-4">
                Change Password
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
