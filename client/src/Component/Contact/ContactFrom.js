import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
const ContactFrom = () => {
  return (
    <div className="contact-form">
      <div className="curve-container curve__hv-flip">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="curve-container__curve curve-one"
          viewBox="0 0 1440 68"
          enableBackground="new 0 0 1440 68"
        >
          <path
            d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8"
            fill="#F4F5F7"
            transform="translate(0-1977)"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="heading-form">
          <h2>
            Let’s <mark className="banner-con">Talk</mark>
          </h2>
          <p>
            Fill up the form and find the best solution together for your Dream
            House Project.
          </p>
        </div>
        <AnimationOnScroll
          duration={1}
          animateIn="animate__bounceInUp"
          className="spacer requestAcallback"
        >
          <div className="container">
            <div className="choose-item wow bounceInUp">
              <section className="form-wrapper padding-lg">
                <div className="containera">
                  <form
                    name="contact-form"
                    action="mail.php"
                    method="post"
                    id="ContactForm"
                  >
                    <h2 className="blank_cons">&nbsp;</h2>
                    <div className="row-form">
                      <div className="col-sm-6">
                        <input
                          name="first_name"
                          required=""
                          type="text"
                          placeholder="Your Name*"
                          pattern="[A-Za-z ]{3,80}"
                          title="*Please Enter only character!!"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          name="email"
                          type="email"
                          required=""
                          placeholder="Email Address*"
                        />
                      </div>
                    </div>
                    <div className="row-form">
                      <div className="col-sm-6">
                        <input
                          name="phone_number"
                          maxLength="10"
                          type="text"
                          required=""
                          placeholder="Contact Number*"
                          pattern="[0-9]{10}"
                          title="*Please Enter Valid Number!!"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          name="business_email"
                          type="text"
                          required=""
                          placeholder="Subject*"
                        />
                      </div>
                    </div>
                    <textarea
                      id="textarea"
                      name="message"
                      placeholder="Message....."
                      required=""
                    ></textarea>
                    <div className="row-form">
                      <div className="col-sm-12">
                        <div className="contact-nuvanco">
                          <button
                            type="submit"
                            className="btn btn-info sub-btn"
                            name="Save"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default ContactFrom;
