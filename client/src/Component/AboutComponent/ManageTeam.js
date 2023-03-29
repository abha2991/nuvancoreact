import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const ManageTeam = () => {
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
        items: 4,
        loop: true,
      },
    },
  };
  return (
    <section className="mangementTeam">
      <div className="teamManagementBG"></div>
      <div className="container">
        <div className="service-contt8">
          <h2>
            Meet Our
            <mark className="banner-con" /> Creative Team
          </h2>
        </div>

        <div className="managementTTeam">
          <OwlCarousel className="owl-theme" {...options}>
            <div className="team-item">
              <div className="thumb">
                <img src={require("../.././images/team-img.png")} alt="image" />
              </div>
              <div className="content text-center">
                <h4 className="name">Admin</h4>
                <span className="designation">UI/UX Development</span>
                <ul className="socials-links team-social-link">
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="team-item">
              <div className="thumb">
                <img src={require("../.././images/team-img.png")} alt="image" />
              </div>
              <div className="content text-center">
                <h4 className="name">Admin</h4>
                <span className="designation">Digital Marketing Head</span>
                <ul className="socials-links team-social-link">
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="team-item">
              <div className="thumb">
                <img src={require("../.././images/team-img.png")} alt="image" />
              </div>
              <div className="content text-center">
                <h4 className="name">Admin</h4>
                <span className="designation">Designer</span>
                <ul className="socials-links team-social-link">
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="team-item">
              <div className="thumb">
                <img src={require("../.././images/team-img.png")} alt="image" />
              </div>
              <div className="content text-center">
                <h4 className="name">Admin</h4>
                <span className="designation">Business Developer</span>
                <ul className="socials-links team-social-link">
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default ManageTeam;
