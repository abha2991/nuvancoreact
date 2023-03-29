import React from "react";
import LogoFooter from "../images/footer-logo.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row footer-a">
            <div className="row1">
              <a href="index.html">
                {" "}
                <img src={LogoFooter} alt="" />
              </a>
              <h3>Subscribe to our Newsletter</h3>
              <form>
                <input
                  type="text"
                  name=""
                  placeholder="Email Address"
                  className="form-control footer-in"
                  id=""
                />
                <button className="sub">Subscribe</button>
              </form>
            </div>
            <div className="row2 footer-menu">
              <h3>Our Info</h3>
              <div className="fam">
                <ul className="menu-footer">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/career">Careers</a>
                  </li>
                  <li>
                    <a href="/blog">Blogs</a>
                  </li>
                </ul>
                <ul className="menu-footer">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row4 footer-menu">
              <h3>Customer Support</h3>
              <ul className="menu-footer shs">
                <li>
                  <a href="#">
                    <span>
                      <i
                        className="fa fa-location-arrow"
                        aria-hidden="true"
                      ></i>
                    </span>{" "}
                    U 79, Basement, 17, DLF Phase 3, Sector 24, Gurugram,
                    Haryana 122002
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    </span>{" "}
                    services@nuvanco.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="mob">
                      <i className="fa fa-mobile" aria-hidden="true"></i>
                    </span>{" "}
                    0526431300
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <h4>Copyright © 2022 all rights reserved NUVANCO</h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
