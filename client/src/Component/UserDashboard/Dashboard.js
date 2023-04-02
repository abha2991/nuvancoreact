const Dashboard = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header sty-one">
          <h1>
            Dashboard
            <span
              style={{
                fontSize: "15px",
                color: "red",
                borderBottom: "1px solid",
                marginLeft: "15%",
                fontWeight: "600",
              }}
            >
              <a href="/start-project" className="btn btn-danger">
                {" "}
                Start Your Project{" "}
                <i className="fa fa-fast-forward" aria-hidden="true"></i>{" "}
              </a>
            </span>
          </h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <i className="fa fa-angle-right"></i> Dashboard
            </li>
          </ol>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-lg-6 m-b-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Latest Draft <hr />
                  </h5>

                  <div className="box-draft" style={{ width: "100%" }}>
                    <div className="content-pending-draft">
                      <span className="page-icon">
                        <img src="dist/img/page-icon.png" alt="" />
                      </span>
                      <h2>Complete Your Form Details</h2>
                      <p>Property Details</p>
                      <div className="row sall">
                        <div className="cir-check check-one">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-success"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            >
                              <circle
                                className="success-circle-outline"
                                cx="12"
                                cy="12"
                                r="11.5"
                              ></circle>
                              <circle
                                className="success-circle-fill"
                                cx="12"
                                cy="12"
                                r="11.5"
                              ></circle>
                              <polyline
                                className="success-tick"
                                points="17,8.5 9.5,15.5 7,13"
                              ></polyline>
                            </g>
                          </svg>
                        </div>
                        <div className="cir-check check-two">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-success"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            >
                              <circle
                                className="success-circle-outline"
                                cx="12"
                                cy="12"
                                r="11.5"
                              ></circle>
                              <circle
                                className="success-circle-fill"
                                cx="12"
                                cy="12"
                                r="11.5"
                              ></circle>
                              <polyline
                                className="success-tick"
                                points="17,8.5 9.5,15.5 7,13"
                              ></polyline>
                            </g>
                          </svg>
                        </div>
                        <div className="cir-check check-three">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-success"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            >
                              <circle
                                className="success-circle-outline"
                                cx="12"
                                cy="12"
                                r="11.5"
                              ></circle>
                              <circle
                                className="success-circle-fill"
                                cx="12"
                                cy="12"
                                r="11.5"
                              ></circle>
                              <polyline
                                className="success-tick"
                                points="17,8.5 9.5,15.5 7,13"
                              ></polyline>
                            </g>
                          </svg>
                        </div>
                        <div className="cir-check check-four">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-success"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            >
                              <circle
                                className="success-circle-outline"
                                cx="12"
                                cy="12"
                                r="11.5"
                              ></circle>
                              <circle
                                className="success-circle-fill"
                                cx="12"
                                cy="12"
                                r="11.5"
                              ></circle>
                              <polyline
                                className="success-tick"
                                points="17,8.5 9.5,15.5 7,13"
                              ></polyline>
                            </g>
                          </svg>
                        </div>
                      </div>
                      <a
                        className="right-icon-jyu"
                        href="https://nuvanco.com/customer/draft"
                      >
                        <img
                          src="https://nuvanco.com/admin/dist/img/path9413.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 m-b-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Latest Design Request <hr />
                  </h5>

                  <div className="box-draft" style={{ width: "100%" }}>
                    <div className="content-pending-draft">
                      <span className="page-icon">
                        <img src="dist/img/page-icon.png" alt="" />
                      </span>
                      <h2>Check Your Submitted Form</h2>
                      <div className="row sall compke">
                        <div className="cir-check check-one">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-success"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            >
                              <circle
                                className="success-circle-outline"
                                cx="12"
                                cy="12"
                                r="11.5"
                              ></circle>
                              <circle
                                className="success-circle-fill"
                                cx="12"
                                cy="12"
                                r="11.5"
                              ></circle>
                              <polyline
                                className="success-tick"
                                points="17,8.5 9.5,15.5 7,13"
                              ></polyline>
                            </g>
                          </svg>
                        </div>
                        <div className="cir-check check-two">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-success"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            >
                              <circle
                                className="success-circle-outline"
                                cx="12"
                                cy="12"
                                r="11.5"
                              ></circle>
                              <circle
                                className="success-circle-fill"
                                cx="12"
                                cy="12"
                                r="11.5"
                              ></circle>
                              <polyline
                                className="success-tick"
                                points="17,8.5 9.5,15.5 7,13"
                              ></polyline>
                            </g>
                          </svg>
                        </div>
                        <div className="cir-check">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-success"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            >
                              <circle
                                className="success-circle-outline"
                                cx="12"
                                cy="12"
                                r="11.5"
                              ></circle>
                              <circle
                                className="success-circle-fill"
                                cx="12"
                                cy="12"
                                r="11.5"
                              ></circle>
                              <polyline
                                className="success-tick"
                                points="17,8.5 9.5,15.5 7,13"
                              ></polyline>
                            </g>
                          </svg>
                        </div>
                        <div className="cir-check last-ch">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-success"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            >
                              <circle
                                className="success-circle-outline"
                                cx="12"
                                cy="12"
                                r="11.5"
                              ></circle>
                              <circle
                                className="success-circle-fill"
                                cx="12"
                                cy="12"
                                r="11.5"
                              ></circle>
                              <polyline
                                className="success-tick"
                                points="17,8.5 9.5,15.5 7,13"
                              ></polyline>
                            </g>
                          </svg>
                        </div>
                      </div>
                      <a
                        className="right-icon-jyu"
                        href="https://nuvanco.com/customer/design-request"
                      >
                        <img
                          src="https://nuvanco.com/admin/dist/img/path9413.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="botom-box">
            <div className="row jus">
              <div className="left-con-box">
                <h2>Custom Layout</h2>
                <p>
                  Are you looking for custom layout, Kindly contact our best
                  professional architectural team
                </p>
                <a className="cont-btn" href="https://nuvanco.com/contact-us">
                  Contact Us
                </a>
              </div>
              <div className="right-con-box">
                <img className="img-upo" src="dist/img/hous1.png" alt="" />
                <img className="img-dow" src="dist/img/house2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
