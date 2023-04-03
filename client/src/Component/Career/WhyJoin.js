import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
const WhyJoin = () => {
  return (
    <div className="career-about-next">
      <div className="container">
        <AnimationOnScroll
          duration={1.5}
          animateIn="animate__fadeInLeft"
          className="col-md-12 cont-car wow slideInLeft"
          style={{ visibility: "visible" }}
        >
          <h2>
            Why <mark className="banner-con">Join NuvanCo Family!</mark>{" "}
          </h2>
          <p>
            We are offering new talent to do work with us. We always open the
            doors of opportunities for talented and skilled minds people. We
            allow you to show your skills and talent here.
          </p>
          <p>
            The working environment is professional and peaceful. We work on
            innovative technology, respect for clients, a strong workforce, and
            new creative and meaningful ideas.
          </p>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default WhyJoin;
