import { useNavigate } from "react-router";
import { useEffect } from "react";

const Logout = () => {
  const navigate = useNavigate();
  const logout = async (e) => {
    const res = await fetch("http://localhost:8001/user-logout", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
    console.log({ response });
    if (response.status == "success") {
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
