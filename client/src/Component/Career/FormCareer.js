import React from "react";

import styled, { keyframes } from "styled-components";
import { bounceInUp } from "react-animations";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const FormCareer = () => {
  const bounceAnimation = keyframes`${bounceInUp}`;

  const BouncyDiv = styled.div`
    animation: 3s ${bounceAnimation};
  `;
  return (
    <div className="contactForm seactionPadding seactionPaddinggggg">
      <div className="container">
        <div className="row">
          <div className="fotm col-md-5 col-sm-12">
            <div className="startWrap">
              <div className="quate_details">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                <h2 className="num">4.9 / 5.0</h2>
              </div>
              <div className="networking row">
                <div className="col-md-2 col-sm-2 col-xs-2 email text-center">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="col-md-10 col-sm-10 col-xs-10 skype1">
                  <p>Let's Talk!</p>
                  <a href="mailto:info@nuvanco.com">info@nuvanco.com</a>
                </div>
              </div>
              <div className="networking row">
                <div className="col-md-2 col-sm-2 col-xs-2 skype text-center">
                  <i className="fab fa-skype"></i>
                </div>
                <div className="col-md-10 col-sm-10 col-xs-10 skype1">
                  <p>Skype</p>
                  <a href="mailto:info@nuvanco.com">info@nuvanco.com</a>
                </div>
              </div>
            </div>
          </div>

          <AnimationOnScroll
            duration={4}
            animateIn="animate__bounceInUp"
            className="fot col-md-7 col-sm-12 wow bounceInUp"
            style={{ visibility: "visible" }}
          >
            <form>
              <h2>
                Choose A <mark className="banner-con">Career With Us</mark>
              </h2>
              <p>
                We are looking for some exceptionally talented people to join
                our team. Fill up the form, we will assess and come back to you
              </p>
              <div className="form-group">
                <div className="row">
                  <label>
                    <input
                      className="form-control"
                      placeholder="Name"
                      id="userName"
                      type="text"
                    />
                  </label>
                  <label className="phone-lap">
                    <input
                      className="form-control"
                      placeholder="Email"
                      id="userEmail"
                      type="text"
                    />
                  </label>
                </div>
                <div className="row">
                  <label>
                    <input
                      className="form-control"
                      placeholder="Phone"
                      id="userphone"
                      type="text"
                    />
                  </label>
                  <label className="phone-lap">
                    <input
                      className="form-control"
                      placeholder="Position Applied For"
                      id="userposition"
                      type="text"
                    />
                  </label>
                </div>
                <div className="row">
                  <label>
                    <input
                      className="form-control"
                      placeholder="Experience ( Years )"
                      id="userexp"
                      type="text"
                    />
                  </label>
                  <span className="choose_file">
                    <input
                      type="file"
                      id="attach_file"
                      name="attach_file"
                      accept="image/webp, image/jpeg"
                    />
                  </span>
                </div>
                <div className="clearfix" style={{ clear: "both" }}></div>
              </div>

              <div className="clearfix" style={{ clear: "both" }}></div>
              <a className="dedcription-btn" href="#">
                <span className="name-descripeion">SUBMIT</span>
                <div className="btn-icon book">
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
                </div>
              </a>
            </form>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default FormCareer;
