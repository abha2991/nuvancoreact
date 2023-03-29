import React from "react";
import Counter from "./Counter";
import BannerImage from "../images/about-banner.jpg";
import Banner1 from "../images/bg-consult.png";
import { render } from "react-dom";
import CountUp from "react-countup";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="row">
          <div className="col-6 d-flex align-items-center justify-content-center">
            <div
              className="container d-flex align-items-center justify-content-center"
              style={{
                alignItems: "center!important",
                display: "flex!important",
              }}
            >
              <div className="banner-details col-lg-6 col-sm-12 wow fadeInLeft">
                <AnimationOnScroll
                  duration={0.5}
                  animateIn="animate__fadeInLeft"
                >
                  <h2>
                    Let’s{" "}
                    <mark className="banner-con wow fadeInRight">
                      Build Your Dream
                    </mark>{" "}
                    Project Together!
                  </h2>

                  <div className="input-group ba">
                    <div className="form-outline banenr">
                      <div className="location-bar">
                        <label className="form-label" htmlFor="form1">
                          <i
                            className="fa fa-location-arrow"
                            aria-hidden="true"
                          ></i>{" "}
                          Locations
                        </label>
                        <input
                          placeholder="New Delhi"
                          type="search"
                          id="form1"
                          className="form-control"
                        />
                      </div>
                      <div className="location-bar kaj">
                        <label className="form-label" htmlFor="form1">
                          <i className="fa fa-home" aria-hidden="true"></i> Plot
                          Area
                        </label>
                        <input
                          placeholder="Choose Plot Area"
                          type="search"
                          id="form2"
                          className="form-control"
                        />

                        <button type="button" className="btn btn-primary">
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimationOnScroll>
                <section
                  id="counter-stats"
                  className="wow fadeInRight"
                  data-wow-duration="1.4s"
                >
                  <AnimationOnScroll
                    className="container"
                    duration={1}
                    animateIn="animate__fadeInRight"
                  >
                    <div className="row ml-1">
                      <div className="stats">
                        <div className="counting" data-count="200">
                          <Counter initial={0} final={2400} />
                        </div>
                        <span className="plus-ci">+</span>
                        <h5>Happy Customers</h5>
                      </div>

                      <div className="stats">
                        <div className="counting" data-count="200">
                          <Counter initial={0} final={4000} />
                        </div>
                        <span className="plus-ci">+</span>
                        <h5>Projects Done</h5>
                      </div>
                    </div>
                  </AnimationOnScroll>
                </section>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-4">
            <img
              src={BannerImage}
              className="img-fluid"
              style={{ height: "100%", width: "100%" }}
              alt="banner"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
