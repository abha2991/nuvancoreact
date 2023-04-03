import Logo from "../images/logo.png";
import React, { useState } from "react";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import $ from "jquery";
import styled, { keyframes } from "styled-components";
import { fadeInLeft } from "react-animations";
import useUser from "../hooks/useUser";
import a from "../images/carrer-banner.png";
import b from "../images/bg-consult.png";
import c from "../images/patner4.png";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Carousel from "react-bootstrap/Carousel";

const Test = () => {
  const { user } = useUser();
  const bounceAnimation = keyframes`${fadeInLeft}`;

  const BouncyDiv = styled.div`
    animation: 2s ${bounceAnimation};
  `;

  $("#myCarousel").carousel({
    interval: 30,
    cycle: true,
  });

  return (
    <>
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
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 image-size"
              src={a}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 image-size"
              src={b}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 image-size"
              src={c}
              alt="Third slide"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <Carousel controls={false}>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 image-size"
              src={a}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              style={{ height: "200px", width: "200px" }}
              src={b}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "200px", width: "200px" }}
              src={c}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Test;
