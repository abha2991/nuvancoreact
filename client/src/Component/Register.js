import React, { useState } from "react";
import { useNavigate } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
const Register = () => {
  const navigate = useNavigate();
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

    setRegisterData({ ...registerData, [name1]: value1 });
  };

  const register = async (e) => {
    e.preventDefault();
    const { user_email, user_password, user_name, user_phoneNumber } =
      registerData;

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
  return (
    <>
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
                              value={registerData.user_name}
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
                              value={registerData.user_email}
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
                              value={registerData.user_phoneNumber}
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
                              value={registerData.user_password}
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
    </>
  );
};

export default Register;
