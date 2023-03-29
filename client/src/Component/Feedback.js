import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Feedback = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,

    smartSpeed: 3000,
    responsive: {
      0: {
        items: 1,
        loop: true,
      },
      400: {
        items: 1,
        loop: true,
      },
      600: {
        items: 1,
        loop: true,
      },
      700: {
        items: 1,
        loop: true,
      },
      1000: {
        items: 1,
        loop: true,
      },
    },
  };
  return (
    <div className="feedback">
      <div className="container">
        <div className="headiiing-feed">
          <h2>
            Our Client's <mark className="banner-con">Feedback</mark>
          </h2>
          <p>
            Many peoples give their feedback accordingly. You can also check out
            this one as well.
          </p>
        </div>

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner parent-sl">
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item active himanshu-slider-testimonial">
                <img src={require("../images/feedback.png")} alt="" />
                <div className="cont-test">
                  <h2>Geneva Robel</h2>
                  <p>
                    Nuvanco is one of the best feature-providing companies. This
                    company help me a lot to make my Dream House and My House is
                    more beautiful than I expected. Very Good Job! advance thank
                    you for providing me with my Dream House.
                  </p>
                </div>
              </div>
              <div className="item himanshu-slider-testimonial">
                <img src={require("../images/feedback.png")} alt="" />
                <div className="cont-test">
                  <h2>Geneva Robel</h2>
                  <p>
                    This company works well, but for some reason, I went to
                    another location they are providing me with all details of
                    my house total reporting and I can also see my work. That is
                    amazing. All of you give a chance to this. the company
                    always gives you amazing work.
                  </p>
                </div>
              </div>
              <div className="item himanshu-slider-testimonial">
                <img src={require("../images/feedback.png")} alt="" />
                <div className="cont-test">
                  <h2>Geneva Robel</h2>
                  <p>
                    One of the best companies to make my dream house from the
                    start to the end of the project. They also provide me with
                    all the material details providers nearby me which help me
                    as good material and cost-friendly also.
                  </p>
                </div>
              </div>
              <div className="item himanshu-slider-testimonial">
                <img src={require("../images/feedback.png")} alt="" />
                <div className="cont-test">
                  <h2>Geneva Robel</h2>
                  <p>
                    Here the layout design by artificial intelligence is good.
                    But I am not interested in any of them, but the team
                    individually provides me with and guides me as per my
                    requirements and needs for my home.
                  </p>
                </div>
              </div>
              <div className="item himanshu-slider-testimonial">
                <img src={require("../images/feedback.png")} alt="" />
                <div className="cont-test">
                  <h2>Geneva Robel</h2>
                  <p>
                    All process is simple and easy to understand and they build
                    step by step which is also easy to manage. Thank you to all
                    for providing me with such support to build my beautiful
                    home.
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
