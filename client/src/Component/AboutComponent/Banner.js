import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Banner = () => {
  return (
    <div className="banner-blog about-banner">
      <div className="container">
        <AnimationOnScroll animateIn="animate__bounceInUp" duration={1.5}>
          <div
            className="banner-details-center wow bounceInUp"
            // data-aos="slide-up"
            // data-aos-easing="linear"
          >
            <h2>
              One <mark className="banner-con">Stop Solution </mark>For Your
              Dream House!
            </h2>
            <p>
              Everyone's dream is to build their own Dream House as more
              beautiful than others. Brings your plot dimension, we will help
              from design to the completion of your Dream House. Step by Step.
            </p>
          </div>{" "}
        </AnimationOnScroll>
      </div>
    </div>
  );
};
export default Banner;
