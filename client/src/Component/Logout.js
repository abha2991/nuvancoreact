import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useUser from "../hooks/useUser";
const Logout = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const logout = async (e) => {
    const res = await fetch("http://localhost:8001/user-logout", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();

    if (response.status == "success") {
      setUser(null);
      navigate("/");
    } else {
      alert("Please Try Again. Something Went Wong!!");
    }
  };

  useEffect(() => {
    logout().then((r) => console.log(r));
  }, []);

  return <></>;
};

export default Logout;
