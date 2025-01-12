import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AuthLayout({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.isAuthenticated);

  if (authentication && authStatus !== authentication) navigate("sign-up");
  else if (!authentication && authStatus !== authentication) navigate("/");
  return loader ? <>Loading...</> : <>{children}</>;
}
