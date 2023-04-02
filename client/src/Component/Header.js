import React, { useRef, useState } from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import useUser from "../hooks/useUser";
import { useQuery } from "react-query";
import Login from "./Login";

const Header = () => {
  const { user } = useUser();
  const { fetchUser } = useUser();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dropdownRef = useRef();
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

  const [registerData, setRegisterData] = useState({
    user_email: "",
    user_password: "",
    user_name: "",
    user_phoneNumber: "",
  });

  let name1, value1;
  const handleRegistrationInputs = (e) => {
    name1 = e.target.name;
    value1 = e.target.value;

    setData({ ...data, [name1]: value1 });
  };

  // const login = async (e) => {
  //   e.preventDefault();
  //   let element = document.getElementById("login");
  //   element.setAttribute("data-dismiss", "modal");
  //
  //   console.log({ element });
  //
  //   const { email, password } = data;
  //
  //   const res = await fetch("http://localhost:8001/user-login", {
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     }),
  //   });
  //   const response = await res.json();
  //
  //   if (res.status === 400 || !response) {
  //     window.alert(response.message);
  //   } else if (res.status === 200) {
  //     window.alert("Logged In Successfully");
  //
  //     await fetchUser();
  //     let save = document.getElementById("save");
  //     save.setAttribute("data-dismiss", "modal");
  //     save.click();
  //     navigate("/dashboard");
  //   }
  // };

  const register = async (e) => {
    e.preventDefault();
    const { user_email, user_password, user_name, user_phoneNumber } = data;

    const res = await fetch("http://localhost:8001/user-register", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user_email,
        password: user_password,
        name: user_name,
        phoneNumber: user_phoneNumber,
      }),
    });
    const response = await res.json();

    if (res.status === 400 || !response) {
      window.alert(response.message);
    } else if (res.status === 200) {
      window.alert("Registered Successfully");
      window.location.reload();
    }
  };

  const startProject = () => {
    alert("Please Login First!!!");
  };

  if (user) {
    return (
      <>
        <div className="top-header">
          <div className="container">
            <div className="row header-top">
              <div className="logo-header">
                <a href="index.html">
                  {" "}
                  <img src={Logo} alt="" />
                </a>
              </div>

              <div className="right-menu-bar">
                <ul className="nav">
                  <li
                    onMouseEnter={() => {
                      dropdownRef.current.classList.add("show");
                    }}
                    onMouseLeave={() => {
                      dropdownRef.current.classList.remove("show");
                    }}
                    className="company-hoev"
                  >
                    <a href="#">
                      Company{" "}
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <div ref={dropdownRef} className="doen asd">
                      <ul>
                        <li>
                          {" "}
                          <Link to={"/about"}>About us </Link>
                        </li>

                        <li>
                          {" "}
                          <Link to={"/career"}>Career</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/blog"}>Blog</Link>
                  </li>

                  <li className="login-nav">
                    <a href="/dashboard">
                      <img
                        src={
                          "http://localhost:8001/uploads/ProfileImage/" +
                          user?.[0]?.customer_photo
                        }
                        className="logomobiletop mr-1"
                      />
                      {user?.[0]?.customer_name}
                    </a>
                  </li>
                  <li className="btn-head">
                    <a className="headbtn" href="/start-project">
                      Start Your Project
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

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

            <Login />

            {/*<div className="modal-body in-lgin">*/}
            {/*  <div className="row justify-content-space-between">*/}
            {/*    <div className="left-detils-login col-lg-5">*/}
            {/*      <h2>Hello Again!</h2>*/}
            {/*      <p>To keep connected with please login for best experience</p>*/}
            {/*    </div>*/}
            {/*    <div className="right-login-form col-lg-7">*/}
            {/*      <img src={Logo} alt="" />*/}
            {/*      <form onSubmit={login}>*/}
            {/*        <div className="form-outline mb-4">*/}
            {/*          <label className="form-label" htmlFor="form2Example1">*/}
            {/*            Email address*/}
            {/*          </label>*/}
            {/*          <input*/}
            {/*            type="email"*/}
            {/*            className="form-control"*/}
            {/*            required*/}
            {/*            name="email"*/}
            {/*            value={data.email}*/}
            {/*            onChange={handleInputs}*/}
            {/*          />*/}
            {/*        </div>*/}

            {/*        <div className="form-outline mb-4">*/}
            {/*          <label className="form-label" htmlFor="form2Example2">*/}
            {/*            Password*/}
            {/*          </label>*/}
            {/*          <input*/}
            {/*            type="password"*/}
            {/*            id="form2Example2"*/}
            {/*            required*/}
            {/*            className="form-control"*/}
            {/*            name="password"*/}
            {/*            value={data.password}*/}
            {/*            onChange={handleInputs}*/}
            {/*          />*/}
            {/*        </div>*/}

            {/*        <div className="row mb-4">*/}
            {/*          <div className="col d-flex justify-content-center"></div>*/}

            {/*          <div className="col-lg-7 text-right">*/}
            {/*            <a*/}
            {/*              className="forgot-modal"*/}
            {/*              data-target="#forgot-password"*/}
            {/*              data-toggle="modal"*/}
            {/*              href="#!"*/}
            {/*            >*/}
            {/*              Forgot password?*/}
            {/*            </a>*/}
            {/*          </div>*/}
            {/*        </div>*/}

            {/*        <button*/}
            {/*          id="save"*/}
            {/*          type="submit"*/}
            {/*          className="btn btn-primary btn-block mb-4"*/}
            {/*        >*/}
            {/*          Login*/}
            {/*        </button>*/}

            {/*        <div className="text-center bottom-sin">*/}
            {/*          <p>*/}
            {/*            Don’t have an account?{" "}*/}
            {/*            <a*/}
            {/*              className="signup-mod"*/}
            {/*              data-target="#signUp"*/}
            {/*              data-dismiss="modal"*/}
            {/*              data-toggle="modal"*/}
            {/*              href="#!"*/}
            {/*            >*/}
            {/*              Sign Up*/}
            {/*            </a>*/}
            {/*          </p>*/}
            {/*        </div>*/}
            {/*      </form>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="forgot-password"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content img-bg-login">
            <div className="modal-header head-login">
              <button
                type="button"
                className="close login-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body in-lgin">
              <div className="row justify-content-space-between">
                <div className="left-detils-login forgot-left col-lg-5">
                  <h2>Forgot Password</h2>
                  <p>Enter the email address in order to reset your password</p>
                </div>
                <div className="right-login-form col-lg-7">
                  <img src={Logo} alt="" />
                  <form>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example1">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="form2Example1"
                        className="form-control"
                      />
                    </div>

                    <button
                      type="button"
                      className="rest-pass btn btn-primary btn-block mt-5"
                    >
                      Reset Password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ============================forgot -->
    <!-- ============================signup --> */}
      <div className="modal" id="signUp">
        <div className="modal-dialog">
          <div className="modal-content img-bg-login">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body in-lgin">
              <div className="row justify-content-space-between">
                <div className="left-detils-login cops forgot-left col-lg-5">
                  <h2>Signup As</h2>
                  <p>
                    Enter the new &amp; confirm password in order to reset your
                    password
                  </p>
                </div>
                <div className="right-login-form col-lg-7">
                  <img
                    src="https://nuvanco.com/assets/images/logo.png"
                    alt=""
                  />
                  <div role="tabpanel">
                    <div
                      id="individualSubmitError"
                      className="text-success text-center "
                    ></div>
                    <div className="tab-content newtabcontent">
                      <div
                        role="tabpanel"
                        className="tab-pane active"
                        id="Individual"
                      >
                        <form onSubmit={register}>
                          <input type="hidden" name="_token" />
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form2Example1"
                            >
                              Full Name{" "}
                            </label>
                            <input
                              type="text"
                              id="customer_name"
                              required=""
                              className="form-control"
                              name="user_name"
                              required
                              value={data.user_name}
                              onChange={handleRegistrationInputs}
                            />
                            <span
                              id="fullNameError"
                              className="text-danger"
                            ></span>
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form2Example1"
                            >
                              Email address{" "}
                            </label>
                            <input
                              type="email"
                              id="customer_email"
                              required
                              className="form-control"
                              name="user_email"
                              value={data.user_email}
                              onChange={handleRegistrationInputs}
                            />
                            <span
                              id="emailAddressError"
                              className="text-danger"
                            ></span>
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form2Example2"
                            >
                              Contact Number{" "}
                            </label>
                            <input
                              type="number"
                              id="customer_mobile"
                              required=""
                              className="form-control"
                              name="user_phoneNumber"
                              value={data.user_phoneNumber}
                              onChange={handleRegistrationInputs}
                            />
                            <span
                              id="contactNumberError"
                              className="text-danger"
                            ></span>
                          </div>

                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form2Example2"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="customer_password"
                              required=""
                              className="form-control"
                              name="user_password"
                              value={data.user_password}
                              onChange={handleRegistrationInputs}
                            />
                            <span
                              id="passwordError"
                              className="text-danger"
                            ></span>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-primary btn-block mb-4"
                          >
                            Sign Up
                          </button>
                        </form>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="Corporate">
                        <form
                          className="form-ind"
                          id="corporateRegistration"
                          method="post"
                          action="'/submitCorporateRegistration'"
                        >
                          <input
                            type="hidden"
                            name="_token"
                            value="jqFPFYtfnWrqKLunJ5O3Ux7D9o6dvJvw9SBXyvcH"
                          />
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form2Example1"
                            >
                              Full Name{" "}
                            </label>
                            <input
                              type="text"
                              id="customer_name"
                              name="customer_name"
                              required=""
                              className="form-control"
                            />
                            <span
                              id="fullNameError1"
                              className="text-danger"
                            ></span>
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form2Example1"
                            >
                              Email address{" "}
                            </label>
                            <input
                              type="email"
                              id="customer_email"
                              name="customer_email"
                              required=""
                              className="form-control"
                            />
                            <span
                              id="emailAddressError1"
                              className="text-danger"
                            ></span>
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form2Example2"
                            >
                              Contact Number{" "}
                            </label>
                            <input
                              type="number"
                              id="customer_mobile"
                              name="customer_mobile"
                              required=""
                              className="form-control"
                            />
                            <span
                              id="contactNumberError1"
                              className="text-danger"
                            ></span>
                          </div>

                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form2Example1"
                            >
                              Company Name{" "}
                            </label>
                            <input
                              type="text"
                              id="customer_company_name"
                              name="customer_company_name"
                              required=""
                              className="form-control"
                            />
                            <span
                              id="companyNameError1"
                              className="text-danger"
                            ></span>
                          </div>

                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form2Example2"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="customer_password"
                              name="customer_password"
                              required=""
                              className="form-control"
                            />
                            <span
                              id="passwordError1"
                              className="text-danger"
                            ></span>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-primary btn-block mb-4"
                          >
                            Sign Up
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ============================signup --> */}
      <div className="mob-menu">
        <div className="container">
          <div className="row himanshu-mob-menu">
            <div className="mobile-menu">
              <div className="burger-menu">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="logo-header ma-logo">
                <a href="index.html">
                  {" "}
                  <img src={Logo} alt="" />
                </a>
              </div>
              <div className="menu-login-mobile">
                <ul className="login-mobile xma">
                  <li>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <i className="fa fa-sign-in" aria-hidden="true"></i> Login
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-bar">
          <div className="cros-bar">
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
          <div className="logo">
            <a href="index.html">
              {" "}
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="menu-ul">
            <ul className="side-menu-bar nav">
              <li>
                <Link to={"/about"}>About us </Link>
              </li>
              {/* <li><a href="about-us.html">About Us</a></li> */}
              <li>
                {" "}
                <Link to={"/career"}>Career</Link>
              </li>
              {/* <li><a href="career.html">Career</a></li> */}
              <li>
                {" "}
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                {" "}
                <Link to={"/blog"}>Blog</Link>
              </li>
            </ul>
            <ul className="login-mobile">
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <i className="fa fa-sign-in" aria-hidden="true"></i> Login
              </button>
            </ul>
          </div>
        </div>
      </div>
      <div className="top-header">
        <div className="container">
          <div className="row header-top">
            <div className="logo-header">
              <a href="index.html">
                {" "}
                <img src={Logo} alt="" />
              </a>
            </div>

            <div className="right-menu-bar">
              <ul className="nav">
                <li
                  onMouseEnter={() => {
                    dropdownRef.current.classList.add("show");
                  }}
                  onMouseLeave={() => {
                    dropdownRef.current.classList.remove("show");
                  }}
                  className="company-hoev"
                >
                  <a href="#">
                    Company{" "}
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <div ref={dropdownRef} className="doen asd">
                    <ul>
                      <li>
                        {" "}
                        <Link to={"/about"}>About us </Link>
                      </li>
                      {/* <li><a href="about-us.html">About Us</a></li> */}
                      <li>
                        {" "}
                        <Link to={"/career"}>Career</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  {" "}
                  <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li className="login-nav">
                  <button
                    type="button"
                    className="head-login-btn btn btn-primary"
                    data-toggle="modal"
                    data-target="#myModal"
                    id="login"
                    //onClick={handleShow}
                    style={{ fontSize: "18px", fontWeight: "500" }}
                  >
                    <i className="fa fa-sign-in" aria-hidden="true"></i> Login
                  </button>
                </li>
                <li className="btn-head">
                  <a className="headbtn" onClick={() => startProject()}>
                    Start Your Project
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
