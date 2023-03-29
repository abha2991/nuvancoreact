import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Blog = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    dots: true,
    autoplay: true,

    smartSpeed: 200,
    responsive: {
      0: {
        items: 1,
        loop: true,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
        loop: true,
      },
      700: {
        items: 3,
        loop: true,
      },
      1000: {
        items: 3,
        loop: true,
      },
    },
  };
  return (
    <div className="blog-section project-build mb-4">
      <div className="container">
        <div className="heading-blog">
          <h5>BUILDING THE FUTURE</h5>
          <h2>
            Our Latest <mark className="banner-con work-mark">Projects</mark>
          </h2>
        </div>

        <div className="our-latest-project">
          <OwlCarousel className="owl-theme" {...options}>
            <div className="item pos-rel">
              <div className="blogb pro-sj">
                <div className="card-hov">
                  <img src={require("../images/project-1.png")} alt="" />
                  <div className="per-hov-show">
                    <h2>New Delhi</h2>
                  </div>
                  <div className="info-hov">
                    <h2>New Delhi</h2>
                    <p>
                      <b>Property Category</b> - Commercial
                    </p>
                    <p>
                      <b>Property Type</b> - Office
                    </p>
                    <p>
                      <b>State</b> - Uttar Pradesh
                    </p>
                    <p>
                      <b>Area</b> - 500 sq feet
                    </p>
                    <p>
                      <b>Maintenance Cost</b> - ₹ 0
                    </p>
                    <p>
                      <b>Furnished</b> - Yes
                    </p>
                    <p>
                      <b>Lift</b> - Yes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item pos-rel">
              <div className="blogb pro-sj">
                <div className="card-hov">
                  <img src={require("../images/project-3.png")} alt="" />
                  <div className="per-hov-show">
                    <h2>Mumbai</h2>
                  </div>
                  <div className="info-hov">
                    <h2>Mumbai</h2>
                    <p>
                      <b>Property Category</b> - Commercial
                    </p>
                    <p>
                      <b>Property Type</b> - Office
                    </p>
                    <p>
                      <b>State</b> - Uttar Pradesh
                    </p>
                    <p>
                      <b>Area</b> - 500 sq feet
                    </p>
                    <p>
                      <b>Maintenance Cost</b> - ₹ 0
                    </p>
                    <p>
                      <b>Furnished</b> - Yes
                    </p>
                    <p>
                      <b>Lift</b> - Yes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item pos-rel">
              <div className="blogb pro-sj">
                <div className="card-hov">
                  <img src={require("../images/project-2.png")} alt="" />
                  <div className="per-hov-show">
                    <h2>Ghaziabad</h2>
                  </div>
                  <div className="info-hov">
                    <h2>Ghaziabad</h2>
                    <p>
                      <b>Property Category</b> - Commercial
                    </p>
                    <p>
                      <b>Property Type</b> - Office
                    </p>
                    <p>
                      <b>State</b> - Uttar Pradesh
                    </p>
                    <p>
                      <b>Area</b> - 500 sq feet
                    </p>
                    <p>
                      <b>Maintenance Cost</b> - ₹ 0
                    </p>
                    <p>
                      <b>Furnished</b> - Yes
                    </p>
                    <p>
                      <b>Lift</b> - Yes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item pos-rel">
              <div className="blogb pro-sj">
                <div className="card-hov">
                  <img src={require("../images/project-3.png")} alt="" />
                  <div className="per-hov-show">
                    <h2>Mumbai</h2>
                  </div>
                  <div className="info-hov">
                    <h2>Mumbai</h2>
                    <p>
                      <b>Property Category</b> - Commercial
                    </p>
                    <p>
                      <b>Property Type</b> - Office
                    </p>
                    <p>
                      <b>State</b> - Uttar Pradesh
                    </p>
                    <p>
                      <b>Area</b> - 500 sq feet
                    </p>
                    <p>
                      <b>Maintenance Cost</b> - ₹ 0
                    </p>
                    <p>
                      <b>Furnished</b> - Yes
                    </p>
                    <p>
                      <b>Lift</b> - Yes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Blog;
