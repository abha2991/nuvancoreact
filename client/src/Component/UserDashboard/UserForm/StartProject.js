import React, { useState } from "react";
import construction from "../../../images/constructiion.mp4";
import logo from "../../../images/logo.png";
import Header from "../../Header";

import useUser from "../../../hooks/useUser";
import Footer from "../../Footer";

import BasicDetails from "./BasicDetails";

const StartProject = () => {
  const { user } = useUser();

  return (
    <>
      <Header />
      <div className="banner-project">
        <video autoPlay muted loop playsInline preload="metadata">
          <source src={construction} type="video/mp4" />
        </video>
        <h2>
          Let’s{" "}
          <mark
            className="banner-con wow fadeInRight"
            style={{ visibility: "visible" }}
          >
            Build Your Dream
          </mark>{" "}
          House Together!
        </h2>
      </div>
      {/*Our Story*/}
      <div className="container">
        <section>
          <div className="tabs-satrt">
            <div className="left-atab">
              <img className="astab" src={logo} alt="" />
              <h2>Form Details</h2>
              <ul
                className="nav nav-tabs start-project-ul"
                id="myTab"
                role="tablist"
              >
                <li role="presentation" className="nav-item">
                  <a
                    href="#step1"
                    className="nav-link active st1"
                    data-toggle="tab"
                    aria-controls="step1"
                    role="tab"
                    title="Step 1"
                  >
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    Basic Details
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    href="#step2"
                    className="nav-link st2"
                    data-toggle="tab"
                    aria-controls="step2"
                    role="tab"
                    title="Step 2"
                  >
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    Property Details
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    href="#step3"
                    className="nav-link st3"
                    data-toggle="tab"
                    aria-controls="step3"
                    role="tab"
                    title="Step 3"
                  >
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    Construction Details
                  </a>
                </li>

                <li role="presentation" className="nav-item lstli">
                  <a
                    href="#complete"
                    className="nav-link st4"
                    data-toggle="tab"
                    aria-controls="complete"
                    role="tab"
                    title="Complete"
                  >
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    Additional Details
                  </a>
                </li>
              </ul>
            </div>
            <BasicDetails />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default StartProject;
