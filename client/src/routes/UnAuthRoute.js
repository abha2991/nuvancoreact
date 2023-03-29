import useUser from "../hooks/useUser";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const UnAuthRoute = ({ disallow = [] }) => {
  const { user } = useUser();

  const location = useLocation();
  const navigate = useNavigate();
  const isDisallowed =
    !user && disallow.some((route) => location.pathname.includes(route));
  useEffect(() => {
    if (isDisallowed) {
      navigate({
        pathname: "/",
        state: { from: location },
      });
    }
  }, [isDisallowed, navigate, location.pathname]);
  return null;
};

export default UnAuthRoute;
