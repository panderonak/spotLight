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
    dispatch(storeRegistrationDetails(data));
    navigate("/sign-up/avatar");
  };
  return (
    <Container>
      <div className="mx-auto w-full max-w-lg bg-[#F3F3F4] rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center flex-col gap-3">
          <h2 className="text-center text-2xl font-bold leading-tight">
            Create your account
          </h2>
          <p>
            Already have an account?&nbsp;
            <Link
              to="/login"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
          {message && <p className="mt-8 text-center">{message}</p>}

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
                label="Username"
                placeholder="Enter your username"
                {...register("username", {
                  required: true,
                  validate: {
                    matchPattern: (value) =>
                      /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim.test(value) ||
                      "Username must be 1-30 characters long, can only contain letters, numbers, underscores, and periods, and cannot start or end with a period. Consecutive periods are not allowed.",
                  },
                })}
              />
              <Input
                label="Email*"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPattern: (value) =>
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
                        value
                      ) ||
                      "Please provide a valid email address (e.g., example@domain.com).",
                  },
                })}
              />
              <Input
                label="Password*"
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                  matchPattern: (value) =>
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
                      value
                    ) ||
                    "Password must be at least 8 characters long, include both uppercase and lowercase letters, and contain at least one number.",
                })}
              />

              <Button type="submit" className="w-full">
                Next
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
