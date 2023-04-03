import React, { useRef, useState } from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import useUser from "../hooks/useUser";

import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";

const Header = () => {
  const { user } = useUser();

  const dropdownRef = useRef();

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
      <Login />

      <ResetPassword />

      <Register />

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
            <a href="/">
              {" "}
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="menu-ul">
            <ul className="side-menu-bar nav">
              <li>
                <Link to={"/about"}>About us </Link>
              </li>

              <li>
                {" "}
                <Link to={"/career"}>Career</Link>
              </li>

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
              <a href="/">
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
                  <button
                    type="button"
                    className="head-login-btn btn btn-primary"
                    data-toggle="modal"
                    data-target="#myModal"
                    id="login"
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
