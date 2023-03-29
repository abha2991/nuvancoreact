import useUser from "../hooks/useUser";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const AuthRoute = ({ disallow, children = [] }) => {
  const { user } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  const isDisallowed =
    user && disallow.some((route) => location.pathname.includes(route));

  useEffect(() => {
    if (isDisallowed) {
      navigate({
        pathname: "/",
        state: { from: location },
      });
    }
  }, [isDisallowed, navigate, location.pathname]);
  return !isDisallowed && user ? children : null;
};

export default AuthRoute;
