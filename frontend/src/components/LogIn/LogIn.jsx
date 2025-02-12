import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../API/authentication";
import { authenticateUser } from "../../features/authSlice";
import { Input, Button, Container } from "../../components";

export default function LogIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState("");

  const handleLogin = async (data) => {
    console.log("Handle Login", data);
    setMessage("");
    try {
      const authSession = await authService.loginUser(data);
      if (authSession?.success) {
        const authenticatedUserDetails = await authService.getCurrentUser();
        if (authenticatedUserDetails) {
          dispatch(authenticateUser(authenticatedUserDetails));
          navigate("/");
        }
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <Container>
      <div className="mx-auto w-full max-w-lg bg-[#f9fbfc] rounded-xl p-10 shadow-sm drop-shadow-md">
        <div className="mb-1 flex justify-center flex-col gap-3">
          <h2 className="text-center text-2xl font-bold leading-tight">
            Welcome Back
          </h2>
          <p className="text-center mb-5">
            Don&apos;t have any account?&nbsp;
            <Link
              to="/auth/sign-up"
              className="font-medium transition-all duration-200 hover:underline"
            >
              Sign Up
            </Link>
          </p>
          {message && (
            <p className="text-red-600 mt-8 text-center">{message}</p>
          )}
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="space-y-8 py-4">
              <Input
                label="Username*"
                placeholder="Enter your email"
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
              <div className="pt-3">
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
