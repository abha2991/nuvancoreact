import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const BannerCareer = () => {
  return (
    <div className="banner-contact">
      <div className="container">
        <div className="contact-banner-s row">
          <AnimationOnScroll
            duration={1.5}
            animateIn="animate__fadeInLeft"
            className="col-lg-6 detailbannerc wow slideInLeft"
            // data-aos="slide-right"
          >
            <h2>
              Come & <mark className="banner-con">Be a Part of</mark> Nuvanco
              Family!
            </h2>
            <p>
              A Successful Career is just one step away. Make your Career Bloom.
            </p>
          </AnimationOnScroll>
          <div className="col-lg-6">
            <img src={require("../.././images/carrer-banner.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCareer;
