import Logo from "../images/logo.png";
import React from "react";

const ResetPassword = () => {
  let element = document.getElementById("login-modal");

  return (
    <>
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
    </>
  );
};

export default ResetPassword;
