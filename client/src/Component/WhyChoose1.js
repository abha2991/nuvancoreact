// import React from "react";
// import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
//
// const WhyChoose = () => {
//   setInterval(() => {
//     let heading1 = document.getElementById("head1")?.classList;
//     let progress1 = document.getElementsByClassName("inProgress1");
//
//     let heading2 = document.getElementById("head2")?.classList;
//     let progress2 = document.getElementsByClassName("inProgress2");
//
//     let heading3 = document.getElementById("head3")?.classList;
//     let progress3 = document.getElementsByClassName("inProgress3");
//     let link1 = document.querySelector('[data-mdb-target="0"]');
//
//     let link2 = document.querySelector('[data-mdb-target="1"]');
//     let link3 = document.querySelector('[data-mdb-target="2"]');
//
//     if (link1?.classList?.contains("active")) {
//       heading1?.add("yellow-text");
//       progress1?.[0]?.classList?.add("inProgress");
//       progress1?.[0]?.classList?.add("widthTransition");
//     } else {
//       heading1?.remove("yellow-text");
//       progress1?.[0]?.classList?.remove("inProgress");
//       progress1?.[0]?.classList?.remove("widthTransition");
//     }
//
//     if (link2?.classList?.contains("active")) {
//       heading2?.add("yellow-text");
//       progress2?.[0].classList?.add("inProgress");
//       progress2?.[0].classList?.add("widthTransition");
//     } else {
//       heading2?.remove("yellow-text");
//       progress2?.[0]?.classList?.remove("inProgress");
//       progress2?.[0]?.classList?.remove("widthTransition");
//     }
//
//     if (link3?.classList?.contains("active")) {
//       heading3?.add("yellow-text");
//       progress3?.[0].classList?.add("inProgress");
//       progress3?.[0]?.classList?.add("widthTransition");
//     } else {
//       heading3?.remove("yellow-text");
//       progress3?.[0]?.classList?.remove("inProgress");
//       progress3?.[0]?.classList?.remove("widthTransition");
//     }
//   }, 0);
//
//   return (
//     <>
//       <div className="whychooseus">
//         <div className="container">
//           <div className="sliderContainer dots-whychoose">
//             <div className="row">
//               <div className="col-6">
//                 <div className="slider single-item">
//                   <MDBCarousel showIndicators dark fade delay={3000}>
//                     <MDBCarouselItem
//                       className="w-100 d-block image-size"
//                       itemId={1}
//                       src={require("../images/caree-point.png")}
//                       alt="..."
//                     ></MDBCarouselItem>
//                     <MDBCarouselItem
//                       className="w-100 d-block image-size"
//                       itemId={2}
//                       src={require("../images/career-ab-bg.png")}
//                       alt="..."
//                     ></MDBCarouselItem>
//
//                     <MDBCarouselItem
//                       className="w-100 d-block image-size"
//                       itemId={3}
//                       src={require("../images/carrer-banner.png")}
//                       alt="..."
//                     ></MDBCarouselItem>
//                   </MDBCarousel>
//                 </div>
//               </div>
//               <div className="col-6">
//                 <div className="progressBarContainer">
//                   <div className="heading-why">
//                     <h2>
//                       Why <mark className="banner-con">Choose Us?</mark>
//                     </h2>
//                   </div>
//                   <div className="head-wh" id="head1">
//                     <h3>Quality of Product</h3>
//                     <p>
//                       Nuvanco provides the best quality of product with best
//                       services and experience near by you.
//                     </p>
//                     <span
//                       data-slick-index="0"
//                       className="progressBar"
//                       id="slick1"
//                     >
//                       <div
//                         className="inProgress1 duration-1"
//                         style={{ width: "0%" }}
//                       ></div>
//                     </span>
//                   </div>
//                   <div className="head-wh" id="head2">
//                     <h3>100% Transparency </h3>
//                     <p>
//                       Nuvanco also gives you the 100% Transparency of all the
//                       details while you are working in project with us.
//                     </p>
//                     <span
//                       data-slick-index="1"
//                       className="progressBar"
//                       id="slick2"
//                     >
//                       <div
//                         className="inProgress2 duration-1"
//                         style={{ width: "0%" }}
//                       ></div>
//                     </span>
//                   </div>
//                   <div className="head-wh" id="head3">
//                     <h3>AI Process</h3>
//                     <p>
//                       Nuvanco provides you with the architecture design using
//                       artificial intelligence, which is a much faster and more
//                       innovative process to build it.
//                     </p>
//                     <span
//                       data-slick-index="2"
//                       className="progressBar"
//                       id="slick3"
//                     >
//                       <div
//                         className="inProgress3 duration-1"
//                         style={{ width: "0%" }}
//                       ></div>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
//
// export default WhyChoose;

import React from "react";
import career from "../images/career-ab-bg.png";
import career1 from "../images/caree-point.png";
import career2 from "../images/carrer-banner.png";

const WhyChoose = () => {
  setInterval(() => {
    let heading1 = document.getElementById("head1")?.classList;
    let progress1 = document.getElementsByClassName("inProgress1");

    let heading2 = document.getElementById("head2")?.classList;
    let progress2 = document.getElementsByClassName("inProgress2");

    let heading3 = document.getElementById("head3")?.classList;
    let progress3 = document.getElementsByClassName("inProgress3");
    let link1 = document.querySelector('[data-slide-to="0"]');

    let link2 = document.querySelector('[data-slide-to="1"]');
    let link3 = document.querySelector('[data-slide-to="2"]');

    if (link1?.classList?.contains("active")) {
      heading1?.add("yellow-text");
      progress1?.[0]?.classList?.add("inProgress", "widthTransition");
    } else {
      heading1?.remove("yellow-text");
      progress1?.[0]?.classList?.remove("inProgress", "widthTransition");
    }

    if (link2?.classList?.contains("active")) {
      heading2?.add("yellow-text");
      progress2?.[0].classList?.add("inProgress", "widthTransition");
    } else {
      heading2?.remove("yellow-text");
      progress2?.[0]?.classList?.remove("inProgress", "widthTransition");
    }

    if (link3?.classList?.contains("active")) {
      heading3?.add("yellow-text");
      progress3?.[0].classList?.add("inProgress", "widthTransition");
    } else {
      heading3?.remove("yellow-text");
      progress3?.[0]?.classList?.remove("inProgress", "widthTransition");
    }
  }, 0);

  return (
    <>
      <div className="whychooseus">
        <div className="container">
          <div className="sliderContainer dots-whychoose">
            <div className="row">
              <div className="col-6">
                {/*<div className="slider single-item">*/}
                {/*<div*/}
                {/*  id="carouselExampleIndicators"*/}
                {/*  className="carousel slide"*/}
                {/*  data-ride="carousel"*/}
                {/*>*/}
                {/*  <ol className="carousel-indicators">*/}
                {/*    <li*/}
                {/*      data-target="#carouselExampleIndicators"*/}
                {/*      data-slide-to="0"*/}
                {/*      className="active"*/}
                {/*    ></li>*/}
                {/*    <li*/}
                {/*      data-target="#carouselExampleIndicators"*/}
                {/*      data-slide-to="1"*/}
                {/*    ></li>*/}
                {/*    <li*/}
                {/*      data-target="#carouselExampleIndicators"*/}
                {/*      data-slide-to="2"*/}
                {/*    ></li>*/}
                {/*  </ol>*/}
                {/*  <div className="carousel-inner">*/}
                {/*    <div className="carousel-item active">*/}
                {/*      <img*/}
                {/*        className="w-100 d-block image-size"*/}
                {/*        src={career}*/}
                {/*        alt="First slide"*/}
                {/*      />*/}
                {/*    </div>*/}
                {/*    <div className="carousel-item">*/}
                {/*      <img*/}
                {/*        className="w-100 d-block image-size"*/}
                {/*        src={career1}*/}
                {/*        alt="Second slide"*/}
                {/*      />*/}
                {/*    </div>*/}
                {/*    <div className="carousel-item">*/}
                {/*      <img*/}
                {/*        className="w-100 d-block image-size"*/}
                {/*        src={career2}*/}
                {/*        alt="Third slide"*/}
                {/*      />*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  <a*/}
                {/*    className="carousel-control-prev"*/}
                {/*    href="#carouselExampleIndicators"*/}
                {/*    role="button"*/}
                {/*    data-slide="prev"*/}
                {/*  >*/}
                {/*    <span*/}
                {/*      className="carousel-control-prev-icon"*/}
                {/*      aria-hidden="true"*/}
                {/*    ></span>*/}
                {/*    <span className="sr-only">Previous</span>*/}
                {/*  </a>*/}
                {/*  <a*/}
                {/*    className="carousel-control-next"*/}
                {/*    href="#carouselExampleIndicators"*/}
                {/*    role="button"*/}
                {/*    data-slide="next"*/}
                {/*  ></a>*/}
                {/*</div>*/}

                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="w-100 d-block image-size"
                        src={career}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100 d-block image-size"
                        src={career1}
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100 d-block image-size"
                        src={career2}
                        alt="Third slide"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  ></a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  ></a>
                </div>
              </div>
              {/*</div>*/}
              <div className="col-6">
                <div className="progressBarContainer">
                  <div className="heading-why">
                    <h2>
                      Why <mark className="banner-con">Choose Us?</mark>
                    </h2>
                  </div>
                  <div className="head-wh" id="head1">
                    <h3>Quality of Product</h3>
                    <p>
                      Nuvanco provides the best quality of product with best
                      services and experience near by you.
                    </p>
                    <span
                      data-slick-index="0"
                      className="progressBar"
                      id="slick1"
                    >
                      <div
                        className="inProgress1 duration-1"
                        style={{ width: "0%" }}
                      ></div>
                    </span>
                  </div>
                  <div className="head-wh" id="head2">
                    <h3>100% Transparency </h3>
                    <p>
                      Nuvanco also gives you the 100% Transparency of all the
                      details while you are working in project with us.
                    </p>
                    <span
                      data-slick-index="1"
                      className="progressBar"
                      id="slick2"
                    >
                      <div
                        className="inProgress2 duration-1"
                        style={{ width: "0%" }}
                      ></div>
                    </span>
                  </div>
                  <div className="head-wh" id="head3">
                    <h3>AI Process</h3>
                    <p>
                      Nuvanco provides you with the architecture design using
                      artificial intelligence, which is a much faster and more
                      innovative process to build it.
                    </p>
                    <span
                      data-slick-index="2"
                      className="progressBar"
                      id="slick3"
                    >
                      <div
                        className="inProgress3 duration-1"
                        style={{ width: "0%" }}
                      ></div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
