import { useDispatch } from "react-redux";
import { Button, Input } from "../../components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function PasswordUpdate() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

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
              <p className="mt-0.5 text-sm text-gray-400">
                Your new password must be at least 8 characters long.
              </p>
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
            <Button className="border text-base hover:bg-black/5 bg-white !text-black">
              Cancel
            </Button>

            <Button className="px-4">Change Password</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
