import React from "react";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const OurValue = () => {
  return (
    <div className="mv-sec">
      <div className="container">
        <div className="row mv-sec-d">
          <AnimationOnScroll
            duration={2}
            animateIn="animate__fadeInLeft"
            className="col-lg-6 col-sm-12 our-value img-be wow slideInLeft"
            //data-aos="slide-right"
          >
            <img src={require("../.././images/mission.png")} alt="" />
          </AnimationOnScroll>

          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            duration={2}
            className="col-lg-6 col-sm-12 our-value cont-vs wow slideInRight"
            // data-aos="slide-left"
            // data-aos-easing="ease-in-sine"
          >
            <h2>
              Our <mark className="banner-con work-mark">Values</mark>
            </h2>
            <p>
              Our value is your satisfaction this is our achievement. It’s our
              pleasure that you all are giving us a chance to provide services
              to you. Our success and much of learning, improvement, and fun
              lies in developing new ways to do things. We are focused on the
              user. And we are promoting team member growth and happiness.
            </p>
          </AnimationOnScroll>
        </div>

        <div className="row mv-sec-d resp-maar">
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            duration={2}
            className="col-lg-6 col-sm-12 our-value cont-vs wow slideInLeft"
            // data-aos="slide-right"
          >
            <h2>
              Our <mark className="banner-con work-mark">Vision</mark>
            </h2>
            <p>
              Our Vision is to adopt more new technology to grow well and faster
              as well. This is an AI project. We make it more innovative and
              futuristic also. Our Vision is to become a more usable and useful
              product for everyone. And fulfilling all the requirements of the
              people is our achievement. And we build everyone's desire and the
              dream house is our priority. The goal of our team is to build it
              more beautifully without any recommendations.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            duration={2}
            className="col-lg-6 col-sm-12 our-value img-be wow slideInRight"
            // data-aos="slide-left"
          >
            <img src={require("../.././images/vision.png")} alt="" />
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default OurValue;
