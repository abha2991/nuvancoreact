import Logo from "../images/logo.png";
import React, { useState } from "react";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import $ from "jquery";
import styled, { keyframes } from "styled-components";
import { fadeInLeft } from "react-animations";
import useUser from "../hooks/useUser";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Test = () => {
  const { user } = useUser();
  const bounceAnimation = keyframes`${fadeInLeft}`;

  const BouncyDiv = styled.div`
    animation: 2s ${bounceAnimation};
  `;

  return <></>;
};

export default Test;
