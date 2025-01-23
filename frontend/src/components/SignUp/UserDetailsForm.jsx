import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { storeRegistrationDetails } from "../../features/registrationSlice";
import { Input, Button, Container } from "../../components/index";

export default function UserDetailsForm() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleUserDetails = async (data) => {
    console.log(data);
    setMessage("");
    try {
      dispatch(storeRegistrationDetails(data));
      navigate("/auth/sign-up/avatar");
    } catch (error) {
      setMessage(error.message);
    }
  };
  return (
    <Container>
      <div className="mx-auto w-full max-w-lg bg-[#f9fbfc] rounded-xl p-10 shadow-sm drop-shadow-md">
        <div className="mb-2 flex justify-center flex-col gap-3">
          <h2 className="text-center text-2xl font-bold leading-tight">
            Create your account
          </h2>
          <p className="mb-3 text-center text-base text-black/60">
            Already have an account?&nbsp;
            <Link
              to="/auth/sign-in"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
          {message && (
            <p className="my-3 text-center text-red-400">{message}</p>
          )}
          <form onSubmit={handleSubmit(handleUserDetails)}>
            <div className="space-y-8">
              <Input
                label="Full Name*"
                placeholder="Enter your name"
                {...register("fullname", {
                  required: true,
                })}
              />
              <Input
                label="Username*"
                placeholder="Enter your username"
                {...register("username", {
                  minLength: 8,
                  maxLength: 15,
                  required: true,
                  validate: (value) => {
                    const isValid =
                      /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim.test(value);
                    if (!isValid) {
                      setMessage(
                        "Username must be 1-15 characters long, can only contain letters, numbers, underscores, and periods, and cannot start or end with a period. Consecutive periods are not allowed."
                      );
                    }
                    return isValid;
                  },
                })}
              />
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
              <Input
                label="Password*"
                placeholder="Enter your password"
                {...register("password", {
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

              <div className="py-3">
                <Button type="submit" className="w-full">
                  Next
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
