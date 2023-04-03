import useUser from "../hooks/useUser";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import Logo from "../images/logo.png";
const Login = () => {
  const { user } = useUser();
  const { fetchUser } = useUser();

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();
    let element = document.getElementById("login");
    element.setAttribute("data-dismiss", "modal");

    const { email, password } = data;

    const res = await fetch("http://localhost:8001/user-login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const response = await res.json();

    if (res.status === 400 || !response) {
      window.alert(response.message);
    } else if (res.status === 200) {
      window.alert("Logged In Successfully");

      await fetchUser();
      let save = document.getElementById("save");
      save.setAttribute("data-dismiss", "modal");
      save.click();
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content img-bg-login">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body in-lgin">
              <div className="row justify-content-space-between">
                <div className="left-detils-login col-lg-5">
                  <h2>Hello Again!</h2>
                  <p>To keep connected with please login for best experience</p>
                </div>
                <div className="right-login-form col-lg-7">
                  <img src={Logo} alt="" />
                  <form onSubmit={login}>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example1">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        required
                        name="email"
                        value={data.email}
                        onChange={handleInputs}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example2">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form2Example2"
                        required
                        className="form-control"
                        name="password"
                        value={data.password}
                        onChange={handleInputs}
                      />
                    </div>

                    <div className="row mb-4">
                      <div className="col d-flex justify-content-center"></div>

                      <div className="col-lg-7 text-right">
                        <a
                          className="forgot-modal"
                          data-target="#forgot-password"
                          data-toggle="modal"
                          href="#!"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>

                    <button
                      id="save"
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Login
                    </button>

                    <div className="text-center bottom-sin">
                      <p>
                        Don’t have an account?{" "}
                        <a
                          className="signup-mod"
                          data-target="#signUp"
                          data-dismiss="modal"
                          data-toggle="modal"
                          href="#"
                        >
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
