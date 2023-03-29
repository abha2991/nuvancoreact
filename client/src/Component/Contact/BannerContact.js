import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const BannerContact = () => {
  return (
    <div className="banner-contact">
      <div className="container">
        <div className="contact-banner-s row">
          <AnimationOnScroll
            duration={1.5}
            animateIn="animate__fadeInLeft"
            className="col-lg-6 detailbannerc wow slideInLeft"
          >
            {/*<div*/}
            {/*  className="col-lg-6 detailbannerc wow slideInLeft"*/}
            {/*  // data-aos="slide-right"*/}
            {/*>*/}
            <h2>
              What Can <mark className="banner-con">We Do For You?</mark>
            </h2>
            <p>
              If you have any queries regarding any doubt about your dream house
              project. Let’s discuss it together and find the best solution for
              it!
            </p>
            {/*</div>*/}
          </AnimationOnScroll>
          <div className="col-lg-6">
            <img src={require("../.././images/contact-banner.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContact;
