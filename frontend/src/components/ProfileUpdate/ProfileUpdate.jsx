import { useState } from "react";
import { Input, Button } from "../../components";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import userService from "../../API/user";

export default function ProfileUpdate() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();

  const handleCancel = () => {
    reset();
    navigate("/");
  };

  const updateUserDetails = async (data) => {
    console.log(data);
    setMessage("");
    setLoading(false);
    try {
      setLoading(true);
      const userUpdateResponse = await userService.updateUserInfo(data);
      if (userUpdateResponse.success) {
        setMessage("Your details have been updated successfully.");
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
          Personal Info
        </h3>
        <p className="text-gray-500">Update your photo and personal details.</p>
      </div>
      <div className="w-full rounded-lg bg-[#f9fbfc] shadow-sm drop-shadow-md sm:w-1/2 lg:w-2/3">
        <form onSubmit={handleSubmit(updateUserDetails)}>
          <div className="rounded-lg">
            <div className="flex flex-wrap gap-y-4 p-8">
              <div className="w-full">
                <Input
                  label="Full Name*"
                  placeholder="Enter your name"
                  {...register("fullname", {
                    required: true,
                  })}
                />
              </div>

              <div className="w-full">
                <div>
                  <Input
                    label="Email*"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: true,
                      validate: (value) => {
                        const isValid =
                          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
                            value
                          );
                        if (!isValid) {
                          setMessage(
                            "Please provide a valid email address (e.g., example@domain.com)."
                          );
                        }
                        return isValid;
                      },
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-4 px-8 pb-11 pt-4">
              <Button
                onClick={handleCancel}
                className="border text-base hover:bg-black/5 bg-white !text-black"
              >
                Cancel
              </Button>

              <Button type="submit" className="px-4 hover:bg-[rgba(3,3,3,0.8)]">
                Save changes
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
