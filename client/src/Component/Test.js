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

import PropertyDetails from "./PropertyDetails";

const Test = () => {
  const { user } = useUser();
  const bounceAnimation = keyframes`${fadeInLeft}`;

  const BouncyDiv = styled.div`
    animation: 2s ${bounceAnimation};
  `;

  const displayFunc = (id) => {
    let optionValue;

    let getDiv1;
    let getDiv2;
    let getDiv3;
    let getDiv4;
    optionValue = document.getElementById("result")?.value;

    getDiv1 = document.getElementById("one");
    getDiv2 = document.getElementById("two");
    getDiv3 = document.getElementById("three");
    getDiv4 = document.getElementById("four");

    if (!optionValue) {
      getDiv1.style.display = "none";
      getDiv2.style.display = "none";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }

    if (optionValue == "one") {
      getDiv1.style.display = "block";
      getDiv2.style.display = "none";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }
    if (optionValue == "two") {
      getDiv1.style.display = "block";
      getDiv2.style.display = "block";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }
    if (optionValue == "three") {
      getDiv1.style.display = "block";
      getDiv2.style.display = "block";
      getDiv3.style.display = "block";
      getDiv4.style.display = "none";
    }
    if (optionValue == "four") {
      getDiv1.style.display = "block";
      getDiv2.style.display = "block";
      getDiv3.style.display = "block";
      getDiv4.style.display = "block";
    }
  };

  const displayTwoBedroom = (id) => {
    let optionValue;

    let getDiv1;
    let getDiv2;
    let getDiv3;
    let getDiv4;
    optionValue = document.getElementById("twobedroom-no")?.value;

    getDiv1 = document.getElementById("twobedroom-one");
    getDiv2 = document.getElementById("twobedroom-two");
    getDiv3 = document.getElementById("twobedroom-three");
    getDiv4 = document.getElementById("twobedroom-four");

    if (!optionValue) {
      getDiv1.style.display = "none";
      getDiv2.style.display = "none";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }

    if (optionValue == "twobedroom-one") {
      getDiv1.style.display = "block";
      getDiv2.style.display = "none";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }
    if (optionValue == "twobedroom-two") {
      getDiv1.style.display = "none";
      getDiv2.style.display = "block";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }
    if (optionValue == "twobedroom-three") {
      getDiv1.style.display = "none";
      getDiv2.style.display = "none";
      getDiv3.style.display = "block";
      getDiv4.style.display = "none";
    }
    if (optionValue == "twobedroom-four") {
      getDiv1.style.display = "none";
      getDiv2.style.display = "none";
      getDiv3.style.display = "none";
      getDiv4.style.display = "block";
    }
  };

  const displaySecondFloorBedroom = (id) => {
    let optionValue;

    let getDiv1;
    let getDiv2;
    let getDiv3;
    let getDiv4;
    optionValue = document.getElementById("second-floor-roomset")?.value;

    getDiv1 = document.getElementById("second-floorbedroom-one");
    getDiv2 = document.getElementById("second-floorbedroom-two");
    getDiv3 = document.getElementById("second-floorbedroom-three");
    getDiv4 = document.getElementById("second-floorbedroom-four");

    if (!optionValue) {
      getDiv1.style.display = "none";
      getDiv2.style.display = "none";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }

    if (optionValue == "second-floorbedroom-one") {
      getDiv1.style.display = "block";
      getDiv2.style.display = "none";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }
    if (optionValue == "second-floorbedroom-two") {
      getDiv1.style.display = "none";
      getDiv2.style.display = "block";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }
    if (optionValue == "second-floorbedroom-three") {
      getDiv1.style.display = "none";
      getDiv2.style.display = "block";
      getDiv3.style.display = "block";
      getDiv4.style.display = "none";
    }
    if (optionValue == "second-floorbedroom-four") {
      getDiv1.style.display = "none";
      getDiv2.style.display = "block";
      getDiv3.style.display = "block";
      getDiv4.style.display = "block";
    }
  };

  const displayThirdFloorBedroom = (id) => {
    let optionValue;

    let getDiv1;
    let getDiv2;
    let getDiv3;
    let getDiv4;
    optionValue = document.getElementById("third-floor-roomset")?.value;

    getDiv1 = document.getElementById("third-floorbedroom-one");
    getDiv2 = document.getElementById("third-floorbedroom-two");
    getDiv3 = document.getElementById("third-floorbedroom-three");
    getDiv4 = document.getElementById("third-floorbedroom-four");
    console.log({ optionValue, getDiv1, getDiv2, getDiv3, getDiv4 });
    console.log(getDiv1?.style?.display);
    if (!optionValue) {
      getDiv1.style.display = "none";
      getDiv2.style.display = "none";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }

    if (optionValue == "third-floorbedroom-one") {
      getDiv1.style.display = "block";
      getDiv2.style.display = "none";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }
    if (optionValue == "third-floorbedroom-two") {
      getDiv1.style.display = "none";
      getDiv2.style.display = "block";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }
    if (optionValue == "third-floorbedroom-three") {
      getDiv1.style.display = "none";
      getDiv2.style.display = "block";
      getDiv3.style.display = "block";
      getDiv4.style.display = "none";
    }
    if (optionValue == "third-floorbedroom-four") {
      getDiv1.style.display = "none";
      getDiv2.style.display = "block";
      getDiv3.style.display = "block";
      getDiv4.style.display = "block";
    }
  };

  const displayFourthFloorBedroom = (id) => {
    let optionValue;

    let getDiv1;
    let getDiv2;
    let getDiv3;
    let getDiv4;
    optionValue = document.getElementById("forth-sec-th-floor-roomset")?.value;

    getDiv1 = document.getElementById("forth-sec-th-floorbedroom-one");
    getDiv2 = document.getElementById("forth-sec-th-floorbedroom-two");
    getDiv3 = document.getElementById("forth-sec-th-floorbedroom-three");
    getDiv4 = document.getElementById("forth-sec-th-floorbedroom-four");

    if (!optionValue) {
      getDiv1.style.display = "none";
      getDiv2.style.display = "none";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }

    if (optionValue == "forth-sec-th-floorbedroom-one") {
      getDiv1.style.display = "block";
      getDiv2.style.display = "none";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }
    if (optionValue == "forth-sec-th-floorbedroom-two") {
      getDiv1.style.display = "none";
      getDiv2.style.display = "block";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }
    if (optionValue == "forth-sec-th-floorbedroom-three") {
      getDiv1.style.display = "none";
      getDiv2.style.display = "block";
      getDiv3.style.display = "block";
      getDiv4.style.display = "none";
    }
    if (optionValue == "forth-sec-th-floorbedroom-four") {
      getDiv1.style.display = "none";
      getDiv2.style.display = "block";
      getDiv3.style.display = "block";
      getDiv4.style.display = "block";
    }
  };

  const [basicDetails, setBasicDetails] = useState({
    location: "",
    city: "",
    startPlanning: "",
    propertyStatus: "",
  });

  let name, value;
  const handleBasicDetails = (e) => {
    name = e.target.name;
    value = e.target.value;

    setBasicDetails({ ...basicDetails, [name]: value });
  };

  const [propertyDetails, setPropertyDetails] = useState({
    topSize: "",
    topName: "",
    rightSize: "",
    rightName: "",
    bottomSize: "",
    bottomName: "",
    leftSize: "",
    leftName: "",
    streetFacing: "",
    builtArea: "",
  });

  let name1, value1;
  const handlePropertyDetails = (e) => {
    name1 = e.target.name;
    value1 = e.target.value;

    setPropertyDetails({ ...propertyDetails, [name1]: value1 });
  };

  const [constructionDetails, setConstructionDetails] = useState({
    noOfBuilding: "",
    buildingType: "",
    parking: "",
    guardRoom: "",
    flat: "",
    noOfBed: "",
    luxuryBed: "",
    cosyBed: "",
    normalBed: "",
    tityBed: "",
    bathroom: "",
    balcony: "",
    dressing: "",
    kitchen: "",
    kids: "",
    washing: "",
    commonWashroom: "",
    lift: "",
    livingRoom: "",
    dining: "",
    poojaRoom: "",
    storeRoom: "",
  });

  const [basicId, setBasicId] = useState();
  const [propertyId, setPropertyId] = useState();

  let name2, value2;
  const handleConstructionDetails = (e) => {
    name = e.target.name;
    value = e.target.value;

    setConstructionDetails({ ...constructionDetails, [name2]: value2 });
  };

  const [additionalDetails, setAdditionalDetails] = useState({
    additionalRequirement: "",
    additionalImage: "",
  });

  let name3, value3;
  const handleAdditionalDetails = (e) => {
    name = e.target.name;
    value = e.target.value;

    setAdditionalDetails({ ...additionalDetails, [name3]: value3 });
  };

  const getBasicDetails = async () => {
    const { location, city, startPlanning, propertyStatus } = basicDetails;

    const res = await fetch("http://localhost:8001/user-basic-details", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location,
        city,
        basicDetailsCustomerId: user?.[0]?.customer_id,
        startPlanning,
        propertyStatus,
      }),
    });
    const response = await res.json();
    setBasicId(response?.id);
    console.log(response?.id);

    if (res.status === 400 || !response) {
      window.alert(response.message);
    } else if (res.status === 200) {
      window.alert(response.message);
    }
  };

  const getPropertyDetails = async () => {
    const {
      topSize,
      topName,
      rightSize,
      rightName,
      bottomSize,
      bottomName,
      leftSize,
      leftName,
      streetFacing,
      builtArea,
    } = propertyDetails;

    const res = await fetch("http://localhost:8001/user-property-details", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topSize,
        topName,
        rightSize,
        rightName,
        bottomSize,
        bottomName,
        leftSize,
        leftName,
        streetFacing,
        builtArea,

        propertyDetailsCustomerId: user?.[0]?.customer_id,
        propertyDetailsBasicId: basicId,
      }),
    });
    const response = await res.json();
    setPropertyId(response?.data?.[0]?.pd_id);

    if (res.status === 400 || !response) {
      window.alert(response.message);
    } else if (res.status === 200) {
      window.alert(response.message);
    }
  };

  return (
    <>
      {/*Banner*/}
      <div className="banner-project">
        <video autoPlay muted loop playsInline preload="metadata">
          <source
            src="https://nuvanco.com/assets/images/constructiion.mp4"
            type="video/mp4"
          />
        </video>
        <h2>
          Let’s{" "}
          <mark
            className="banner-con wow fadeInRight"
            style={{ visibility: "visible" }}
          >
            Build Your Dream
          </mark>{" "}
          House Together!
        </h2>
      </div>
      {/*Our Story*/}
      <div className="container">
        <section>
          <div className="tabs-satrt">
            <div className="left-atab">
              <img
                className="astab"
                src="https://nuvanco.com/assets/images/logo.png"
                alt=""
              />
              <h2>Form Details</h2>
              <ul
                className="nav nav-tabs start-project-ul"
                id="myTab"
                role="tablist"
              >
                <li role="presentation" className="nav-item">
                  <a
                    href="#step1"
                    className="nav-link active st1 check-icon"
                    data-toggle="tab"
                    aria-controls="step1"
                    role="tab"
                    title="Step 1"
                  >
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    Basic Details
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    href="#step2"
                    className="nav-link st2"
                    data-toggle="tab"
                    aria-controls="step2"
                    role="tab"
                    title="Step 2"
                  >
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    Property Details
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    href="#step3"
                    className="nav-link st3"
                    data-toggle="tab"
                    aria-controls="step3"
                    role="tab"
                    title="Step 3"
                  >
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    Construction Details
                  </a>
                </li>

                <li role="presentation" className="nav-item lstli">
                  <a
                    href="#complete"
                    className="nav-link st4"
                    data-toggle="tab"
                    aria-controls="complete"
                    role="tab"
                    title="Complete"
                  >
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    Additional Details
                  </a>
                </li>
              </ul>
            </div>
            <form className="tabs-pro">
              <div className="tab-content">
                <div className="tab-pane  active" role="tabpanel" id="step1">
                  <h2>Basic Details</h2>
                  <div className="form-group">
                    <label htmlFor="location">Location</label>{" "}
                    <span id="step1LocationError" className="text-danger">
                      *
                    </span>
                    <input
                      type="location"
                      className="form-control"
                      id="location"
                      placeholder="Location"
                      name="location"
                      value={basicDetails.location}
                      onChange={handleBasicDetails}
                      required
                    />{" "}
                  </div>
                  <div className="form-group">
                    <label htmlFor="City">City</label>{" "}
                    <span id="step1LocationError" className="text-danger">
                      *
                    </span>
                    <input
                      type="location"
                      className="form-control"
                      id="City"
                      placeholder="City"
                      name="city"
                      value={basicDetails.city}
                      onChange={handleBasicDetails}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">
                      How Soon Are You Planning To Construct
                    </label>
                    <span id="step1LocationError" className="text-danger">
                      *
                    </span>
                    <select
                      className="form-control"
                      id=""
                      name="startPlanning"
                      value={basicDetails.startPlanning}
                      onChange={handleBasicDetails}
                      required
                    >
                      <option>Immediate</option>
                      <option>Within 1 Month</option>
                      <option>1 - 3 Months</option>
                      <option>3 - 6 Months</option>
                      <option>6 Months - 1 Year</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">
                      Property Status
                    </label>{" "}
                    <span id="step1LocationError" className="text-danger">
                      *
                    </span>
                    <select
                      className="form-control"
                      id=""
                      name="propertyStatus"
                      value={basicDetails.propertyStatus}
                      onChange={handleBasicDetails}
                      required
                    >
                      <option>Owned</option>
                      <option>Exploring</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary next-step"
                    id="n-btn1"
                    onClick={() => getBasicDetails()}
                  >
                    Save and continue
                  </button>
                </div>

                <PropertyDetails basicId={basicId} />

                {/*<div className="tab-pane" role="tabpanel" id="step2">*/}
                {/*  <h2>*/}
                {/*    Property Details (Describe about your property, where you*/}
                {/*    are planning to construct)*/}
                {/*  </h2>*/}
                {/*  <div className="form-group pofre">*/}
                {/*    <button*/}
                {/*      type="button"*/}
                {/*      className="btn btn-primary posab"*/}
                {/*      data-toggle="modal"*/}
                {/*      data-target="#fillarea"*/}
                {/*    ></button>*/}
                {/*    <label htmlFor="location">*/}
                {/*      Choose Your Property Dimensions ( Top )*/}
                {/*    </label>*/}
                {/*    <span id="step1LocationError" className="text-danger">*/}
                {/*      **/}
                {/*    </span>*/}
                {/*    <div className="input-sec">*/}
                {/*      <input*/}
                {/*        type="text"*/}
                {/*        className="form-control"*/}
                {/*        id="dimension-top"*/}
                {/*        aria-describedby="emailHelp"*/}
                {/*        placeholder="30"*/}
                {/*        name="topSize"*/}
                {/*        value={propertyDetails.topSize}*/}
                {/*        onChange={handlePropertyDetails}*/}
                {/*      />*/}
                {/*      <input*/}
                {/*        type="text"*/}
                {/*        className="form-control"*/}
                {/*        id="dimension-drop-top"*/}
                {/*        aria-describedby="emailHelp"*/}
                {/*        placeholder="Property"*/}
                {/*        name="topName"*/}
                {/*        value={propertyDetails.topName}*/}
                {/*        onChange={handlePropertyDetails}*/}
                {/*      />*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  <div className="form-group pofre">*/}
                {/*    <button*/}
                {/*      type="button"*/}
                {/*      className="btn btn-primary posab"*/}
                {/*      data-toggle="modal"*/}
                {/*      data-target="#fillarea"*/}
                {/*    ></button>*/}
                {/*    <label htmlFor="location">*/}
                {/*      Choose Your Property Dimensions ( Right )*/}
                {/*    </label>*/}
                {/*    <span id="step1LocationError" className="text-danger">*/}
                {/*      **/}
                {/*    </span>*/}
                {/*    <div className="input-sec">*/}
                {/*      <input*/}
                {/*        type="text"*/}
                {/*        className="form-control"*/}
                {/*        id="dimension-right"*/}
                {/*        aria-describedby="emailHelp"*/}
                {/*        placeholder="30"*/}
                {/*        name="rightSize"*/}
                {/*        value={propertyDetails.rightSize}*/}
                {/*        onChange={handlePropertyDetails}*/}
                {/*      />*/}
                {/*      <input*/}
                {/*        type="text"*/}
                {/*        className="form-control"*/}
                {/*        id="dimension-drop-right"*/}
                {/*        aria-describedby="emailHelp"*/}
                {/*        placeholder="Property"*/}
                {/*        name="rightName"*/}
                {/*        value={propertyDetails.rightName}*/}
                {/*        onChange={handlePropertyDetails}*/}
                {/*      />*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  <div className="form-group pofre">*/}
                {/*    <button*/}
                {/*      type="button"*/}
                {/*      className="btn btn-primary posab"*/}
                {/*      data-toggle="modal"*/}
                {/*      data-target="#fillarea"*/}
                {/*    ></button>*/}
                {/*    <label htmlFor="location">*/}
                {/*      Choose Your Property Dimensions ( Bottom )*/}
                {/*    </label>*/}
                {/*    <span id="step1LocationError" className="text-danger">*/}
                {/*      **/}
                {/*    </span>*/}
                {/*    <div className="input-sec">*/}
                {/*      <input*/}
                {/*        type="text"*/}
                {/*        className="form-control"*/}
                {/*        id="dimension-bottom"*/}
                {/*        aria-describedby="emailHelp"*/}
                {/*        placeholder="30"*/}
                {/*        name="bottomSize"*/}
                {/*        value={propertyDetails.bottomSize}*/}
                {/*        onChange={handlePropertyDetails}*/}
                {/*      />*/}
                {/*      <input*/}
                {/*        type="text"*/}
                {/*        className="form-control"*/}
                {/*        id="dimension-drop-bottom"*/}
                {/*        aria-describedby="emailHelp"*/}
                {/*        placeholder="Property"*/}
                {/*        name="bottomName"*/}
                {/*        value={propertyDetails.bottomName}*/}
                {/*        onChange={handlePropertyDetails}*/}
                {/*      />*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  <div className="form-group pofre">*/}
                {/*    <button*/}
                {/*      type="button"*/}
                {/*      className="btn btn-primary posab"*/}
                {/*      data-toggle="modal"*/}
                {/*      data-target="#fillarea"*/}
                {/*    ></button>*/}
                {/*    <label htmlFor="location">*/}
                {/*      Choose Your Property Dimensions ( Left )*/}
                {/*    </label>*/}
                {/*    <span id="step1LocationError" className="text-danger">*/}
                {/*      **/}
                {/*    </span>*/}
                {/*    <div className="input-sec">*/}
                {/*      <input*/}
                {/*        type="text"*/}
                {/*        className="form-control"*/}
                {/*        id="dimension-left"*/}
                {/*        aria-describedby="emailHelp"*/}
                {/*        placeholder="30"*/}
                {/*        name="leftSize"*/}
                {/*        value={propertyDetails.leftSize}*/}
                {/*        disabled*/}
                {/*        // onChange={handlePropertyDetails}*/}
                {/*      />*/}
                {/*      <input*/}
                {/*        type="text"*/}
                {/*        className="form-control"*/}
                {/*        id="dimension-drop-left"*/}
                {/*        aria-describedby="emailHelp"*/}
                {/*        placeholder="Property"*/}
                {/*        name="leftName"*/}
                {/*        value={propertyDetails.leftName}*/}
                {/*        disbaled*/}
                {/*        // onChange={handlePropertyDetails}*/}
                {/*      />*/}
                {/*    </div>*/}
                {/*  </div>*/}

                {/*  <div className="form-group pofre">*/}
                {/*    <button*/}
                {/*      type="button"*/}
                {/*      className="btn btn-primary posab"*/}
                {/*      data-toggle="modal"*/}
                {/*      data-target="#fillarea"*/}
                {/*    ></button>*/}
                {/*    <label htmlFor="City">Directions Street Facing</label>*/}
                {/*    <span id="step1LocationError" className="text-danger">*/}
                {/*      **/}
                {/*    </span>*/}
                {/*    <input*/}
                {/*      type="text"*/}
                {/*      className="form-control"*/}
                {/*      id="direction-property"*/}
                {/*      aria-describedby="emailHelp"*/}
                {/*      placeholder="North"*/}
                {/*      disabled*/}
                {/*      name="streetFacing"*/}
                {/*      value={propertyDetails.streetFacing}*/}
                {/*      onChange={handlePropertyDetails}*/}
                {/*    />*/}
                {/*  </div>*/}
                {/*  <div className="form-group">*/}
                {/*    <label htmlFor="exampleFormControlSelect1">*/}
                {/*      Desired Built-Up Area With Iteration of 5%*/}
                {/*    </label>*/}
                {/*    <span id="step1LocationError" className="text-danger">*/}
                {/*      **/}
                {/*    </span>*/}
                {/*    <select*/}
                {/*      className="form-control"*/}
                {/*      id=""*/}
                {/*      name="builtArea"*/}
                {/*      value={propertyDetails.builtArea}*/}
                {/*      onChange={handlePropertyDetails}*/}
                {/*    >*/}
                {/*      <option>1% - 50%</option>*/}
                {/*      <option>50 - 100%</option>*/}
                {/*    </select>*/}
                {/*  </div>*/}
                {/*  <div className="btn-sav-ex">*/}
                {/*    <button*/}
                {/*      type="button"*/}
                {/*      className="btn btn-default prev-step"*/}
                {/*      id="p-btn1"*/}
                {/*    >*/}
                {/*      Previous*/}
                {/*    </button>*/}

                {/*    <button*/}
                {/*      type="button"*/}
                {/*      className="btn btn-primary next-step"*/}
                {/*      id="n-btn2"*/}
                {/*      onClick={() => getPropertyDetails()}*/}
                {/*    >*/}
                {/*      Save and continue*/}
                {/*    </button>*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/*<div*/}
                {/*  className="modal fade"*/}
                {/*  id="fillarea"*/}
                {/*  tabIndex="-1"*/}
                {/*  role="dialog"*/}
                {/*  aria-labelledby="exampleModalLabel"*/}
                {/*  aria-hidden="true"*/}
                {/*>*/}
                {/*  <div className="modal-dialog pop-fill" role="document">*/}
                {/*    <div className="modal-content">*/}
                {/*      <div className="modal-header">*/}
                {/*        <h2>*/}
                {/*          Choose Your Property Dimensions and What Next Your*/}
                {/*          Property (Other Property / Street)*/}
                {/*        </h2>*/}
                {/*      </div>*/}
                {/*      <div className="modal-body">*/}
                {/*        <input*/}
                {/*          className="fill-value-posab"*/}
                {/*          type="button"*/}
                {/*          value="Save"*/}
                {/*        />*/}
                {/*        <button*/}
                {/*          type="button"*/}
                {/*          className="close mocl"*/}
                {/*          data-dismiss="modal"*/}
                {/*          aria-label="Close"*/}
                {/*        >*/}
                {/*          <span aria-hidden="true">&times;</span>*/}
                {/*        </button>*/}
                {/*        <div className="form-img">*/}
                {/*          <div className="form-group pos-ab pro-ab-1">*/}
                {/*            <input*/}
                {/*              type="text"*/}
                {/*              className="form-control"*/}
                {/*              id="dimension-left-fill"*/}
                {/*              aria-describedby="emailHelp"*/}
                {/*              placeholder="30"*/}
                {/*              name="leftSize"*/}
                {/*              value={propertyDetails.leftSize}*/}
                {/*              onChange={handlePropertyDetails}*/}
                {/*            />*/}
                {/*            <select*/}
                {/*              className="form-control"*/}
                {/*              id="dimension-drop-left-fill"*/}
                {/*              name="leftName"*/}
                {/*              value={propertyDetails.leftName}*/}
                {/*              onChange={handlePropertyDetails}*/}
                {/*            >*/}
                {/*              <option value=""></option>*/}
                {/*              <option value="Other Property">*/}
                {/*                Other Property*/}
                {/*              </option>*/}
                {/*              <option value="Street">Street</option>*/}
                {/*            </select>*/}
                {/*          </div>*/}
                {/*          <div className="form-group pos-ab pro-ab-2">*/}
                {/*            <input*/}
                {/*              type="text"*/}
                {/*              className="form-control"*/}
                {/*              id="dimension-top-fill"*/}
                {/*              aria-describedby="emailHelp"*/}
                {/*              placeholder="30"*/}
                {/*            />*/}
                {/*            <select*/}
                {/*              className="form-control"*/}
                {/*              id="dimension-drop-top-fill"*/}
                {/*            >*/}
                {/*              <option value=""></option>*/}
                {/*              <option value="Other Property">*/}
                {/*                Other Property*/}
                {/*              </option>*/}
                {/*              <option value="Street">Street</option>*/}
                {/*            </select>*/}
                {/*            <select*/}
                {/*              className="form-control"*/}
                {/*              id="direction-property-fill"*/}
                {/*            >*/}
                {/*              <option value=""></option>*/}
                {/*              <option value="North">North</option>*/}
                {/*              <option value="South">South</option>*/}
                {/*              <option value="East">East</option>*/}
                {/*              <option value="West">West</option>*/}
                {/*            </select>*/}
                {/*          </div>*/}
                {/*          <div className="form-group pos-ab pro-ab-3">*/}
                {/*            <input*/}
                {/*              type="text"*/}
                {/*              className="form-control"*/}
                {/*              id="dimension-right-fill"*/}
                {/*              aria-describedby="emailHelp"*/}
                {/*              placeholder="30"*/}
                {/*            />*/}
                {/*            <select*/}
                {/*              className="form-control"*/}
                {/*              id="dimension-drop-right-fill"*/}
                {/*            >*/}
                {/*              <option value=""></option>*/}
                {/*              <option value="Other Property">*/}
                {/*                Other Property*/}
                {/*              </option>*/}
                {/*              <option value="Street">Street</option>*/}
                {/*            </select>*/}
                {/*          </div>*/}
                {/*          <div className="form-group pos-ab pro-ab-4">*/}
                {/*            <input*/}
                {/*              type="text"*/}
                {/*              className="form-control"*/}
                {/*              id="dimension-bottom-fill"*/}
                {/*              aria-describedby="emailHelp"*/}
                {/*              placeholder="30"*/}
                {/*            />*/}
                {/*            <select*/}
                {/*              className="form-control"*/}
                {/*              id="dimension-drop-bottom-fill"*/}
                {/*            >*/}
                {/*              <option value=""></option>*/}
                {/*              <option value="Other Property">*/}
                {/*                Other Property*/}
                {/*              </option>*/}
                {/*              <option value="Street">Street</option>*/}
                {/*            </select>*/}
                {/*          </div>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/*<div className="tab-pane" role="tabpanel" id="step3">*/}
                {/*  <h2>*/}
                {/*    Construction Requirement{" "}*/}
                {/*    <span>*/}
                {/*      (Describe about your desired construction requirement)*/}
                {/*    </span>*/}
                {/*  </h2>*/}
                {/*  <div className="form-group">*/}
                {/*    <label htmlFor="exampleFormControlSelect1">*/}
                {/*      Number Of Floors*/}
                {/*    </label>*/}
                {/*    <select*/}
                {/*      onChange={() => displayFunc("result")}*/}
                {/*      id="result"*/}
                {/*      name="result"*/}
                {/*      style={{*/}
                {/*        fontSize: "20px!important",*/}
                {/*        margin: "3px!important",*/}
                {/*      }}*/}
                {/*    >*/}
                {/*      <option value=""> </option>*/}
                {/*      <option value="one">1</option>*/}
                {/*      <option value="two">2</option>*/}
                {/*      <option value="three">3</option>*/}
                {/*      <option value="four">4</option>*/}
                {/*    </select>*/}
                {/*  </div>*/}
                {/*  <div id="one" style={{ display: "none" }}>*/}
                {/*    <div className="three-floor-sec">*/}
                {/*      <h4>Ground Floor</h4>*/}
                {/*      <div className="floor-th-a">*/}
                {/*        <div id="flat-sh" className="floor-th">*/}
                {/*          <input*/}
                {/*            type="radio"*/}
                {/*            className="parking-o"*/}
                {/*            id="chec"*/}
                {/*            name="weekday-2"*/}
                {/*            value="Saturday"*/}
                {/*          />*/}
                {/*          <label htmlFor="chec">Parking</label>*/}

                {/*          <input*/}
                {/*            type="radio"*/}
                {/*            className="parking-g"*/}
                {/*            id="check"*/}
                {/*            name="weekday-2"*/}
                {/*            value="Saturday"*/}
                {/*          />*/}
                {/*          <label htmlFor="check">Parking with Guardroom</label>*/}

                {/*          <input*/}
                {/*            className="flat-class"*/}
                {/*            type="radio"*/}
                {/*            id="flat-show"*/}
                {/*            name="weekday-2"*/}
                {/*            value="Saturday"*/}
                {/*          />*/}
                {/*          <label className="aja" htmlFor="flat-show">*/}
                {/*            Flat*/}
                {/*          </label>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </div>*/}

                {/*  <div id="two" style={{ display: "none" }}>*/}
                {/*    <div className="three-floor-sec">*/}
                {/*      <div id="flat-shoaas">*/}
                {/*        <div className="form-group mt-5">*/}
                {/*          <label htmlFor="exampleFormControlSelect1">*/}
                {/*            Number Of Bedrooms*/}
                {/*          </label>*/}
                {/*          <select*/}
                {/*            id="twobedroom-no"*/}
                {/*            name="bedroom"*/}
                {/*            style={{*/}
                {/*              fontSize: "20px!important",*/}
                {/*              margin: "3px!important",*/}
                {/*            }}*/}
                {/*            onChange={() => displayTwoBedroom("twobedroom-no")}*/}
                {/*          >*/}
                {/*            <option value=""> </option>*/}
                {/*            <option value="twobedroom-one">1</option>*/}
                {/*            <option value="twobedroom-two">2</option>*/}
                {/*            <option value="twobedroom-three">3</option>*/}
                {/*            <option value="twobedroom-four">4</option>*/}
                {/*            <option value="twobedroom-four">4</option>*/}
                {/*          </select>*/}
                {/*        </div>*/}

                {/*        <div id="twobedroom-one" style={{ display: "none" }}>*/}
                {/*          <div className="three-floor-sec">*/}
                {/*            <h5 className="mt-4">Bedroom 1</h5>*/}
                {/*            <div className="floor-th">*/}
                {/*              <div className="selector-check">*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor1"*/}
                {/*                    name="floor-one"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor1"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Luxury*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor2"*/}
                {/*                    name="floor-one"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor2"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Cosy*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor3"*/}
                {/*                    name="floor-one"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor3"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Normal*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor4"*/}
                {/*                    name="floor-one"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor4"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                      alt=""*/}
                {/*                    />*/}
                {/*                    Tight*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yes"*/}
                {/*                name="weekday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yes">Bathroom</label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yes"*/}
                {/*                name="weekday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yes">Balcony</label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yes"*/}
                {/*                name="weekday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yes">Dressing Area</label>*/}
                {/*            </div>*/}
                {/*            <h5 className="mt-4">Common Area</h5>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesabs">Kitchen</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yesabs"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yesabs">Kids Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yesabs">*/}
                {/*                  Washing Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesaabs"*/}
                {/*                  name="weekday-2abbax"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesaabs">*/}
                {/*                  Common Washroom*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yeabss">Lift</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yeabss">*/}
                {/*                  Living Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yeabss"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yeabss">Dining Area</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yabses">Pooja Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yabses">Store Room</label>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}

                {/*        <div id="twobedroom-two" style={{ display: "none" }}>*/}
                {/*          <div className="three-floor-sec">*/}
                {/*            <h5 className="mt-4">Bedroom 1</h5>*/}
                {/*            <div className="floor-th">*/}
                {/*              <div className="selector-check">*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two1"*/}
                {/*                    name="floor-two"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two1"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Luxury*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two2"*/}
                {/*                    name="floor-two"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two2"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Cosy*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two3"*/}
                {/*                    name="floor-two"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two3"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Normal*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two4"*/}
                {/*                    name="floor-two"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two4"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                      alt=""*/}
                {/*                    />*/}
                {/*                    Tight*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yes-bath-towone"*/}
                {/*                name="bed-two-one-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yes-bath-towone">*/}
                {/*                Bathroom*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yes-bath-towone"*/}
                {/*                name="webed-two-one"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yes-bath-towone">*/}
                {/*                Balcony*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yes-bath-towone"*/}
                {/*                name="bed-two-one-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yes-bath-towone">*/}
                {/*                Dressing Area*/}
                {/*              </label>*/}
                {/*            </div>*/}
                {/*            <h5 className="mt-4">Bedroom 2</h5>*/}

                {/*            <h5 className="mt-4">Bedroom 1</h5>*/}
                {/*            <div className="floor-th">*/}
                {/*              <div className="selector-check">*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor1"*/}
                {/*                    name="floor-one"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor1"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Luxury*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor2"*/}
                {/*                    name="floor-one"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor2"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Cosy*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor3"*/}
                {/*                    name="floor-one"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor3"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Normal*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor4"*/}
                {/*                    name="floor-one"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor4"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                      alt=""*/}
                {/*                    />*/}
                {/*                    Tight*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yes"*/}
                {/*                name="weekday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yes">Bathroom</label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yes"*/}
                {/*                name="weekday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yes">Balcony</label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yes"*/}
                {/*                name="weekday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yes">Dressing Area</label>*/}
                {/*            </div>*/}
                {/*            <div className="floor-th">*/}
                {/*              <div className="selector-check">*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two-bed-two1"*/}
                {/*                    name="floor-two-bed-two"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two-bed-two1"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Luxury*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two-bed-two2"*/}
                {/*                    name="floor-two-bed-two"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two-bed-two2"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Cosy*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two-bed-two3"*/}
                {/*                    name="floor-two-bed-two"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two-bed-two3"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Normal*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two-bed-two4"*/}
                {/*                    name="floor-two-bed-two"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two-bed-two4"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                      alt=""*/}
                {/*                    />*/}
                {/*                    Tight*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yes-bed-two"*/}
                {/*                name="bed-two-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yes-bed-two">Bathroom</label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yes-bed-two"*/}
                {/*                name="bed-two-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yes-bed-two">Balcony</label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yes-bed-two"*/}
                {/*                name="bed-two-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yes-bed-two">*/}
                {/*                Dressing Area*/}
                {/*              </label>*/}
                {/*            </div>*/}
                {/*            <h5 className="mt-4">Common Area</h5>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesabs">Kitchen</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yesabs"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yesabs">Kids Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yesabs">*/}
                {/*                  Washing Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesaabs"*/}
                {/*                  name="weekday-2abbax"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesaabs">*/}
                {/*                  Common Washroom*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yeabss">Lift</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yeabss">*/}
                {/*                  Living Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yeabss"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yeabss">Dining Area</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yabses">Pooja Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yabses">Store Room</label>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}

                {/*        <div id="twobedroom-three" style={{ display: "none" }}>*/}
                {/*          <div className="three-floor-sec">*/}
                {/*            <h5 className="mt-4">Bedroom 1</h5>*/}
                {/*            <div className="floor-th">*/}
                {/*              <div className="selector-check">*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="a"*/}
                {/*                    name="beda"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="a"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Luxury*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="aa"*/}
                {/*                    name="beda"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="aa"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Cosy*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="aaa"*/}
                {/*                    name="beda"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="aaa"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Normal*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="aaaa"*/}
                {/*                    name="beda"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="aaaa"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                      alt=""*/}
                {/*                    />*/}
                {/*                    Tight*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}

                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yes"*/}
                {/*                name="weekday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yes">Bathroom</label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yes"*/}
                {/*                name="weekday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yes">Balcony</label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yes"*/}
                {/*                name="weekday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yes">Dressing Area</label>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*          <div className="three-floor-sec">*/}
                {/*            <h5 className="mt-4">Bedroom 2</h5>*/}
                {/*            <div className="floor-th">*/}
                {/*              <div className="selector-check">*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="b"*/}
                {/*                    name="bed-b"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="b"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Luxury*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="bb"*/}
                {/*                    name="bed-b"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="bb"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Cosy*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="bbb"*/}
                {/*                    name="bed-b"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="bbb"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Normal*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="bbbb"*/}
                {/*                    name="bed-b"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="bbbb"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                      alt=""*/}
                {/*                    />*/}
                {/*                    Tight*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}

                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bedroom-two-bath-yes"*/}
                {/*                name="weekday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bedroom-two-bath-yes">*/}
                {/*                Bathroom*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bedroom-two-bal-yes"*/}
                {/*                name="weekday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bedroom-two-bal-yes">*/}
                {/*                Balcony*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bedroom-two-dress-yes"*/}
                {/*                name="weekday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bedroom-two-dress-yes">*/}
                {/*                Dressing Area*/}
                {/*              </label>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*          <div className="three-floor-sec">*/}
                {/*            <h5 className="mt-4">Bedroom 3</h5>*/}
                {/*            <div className="floor-th">*/}
                {/*              <div className="selector-check">*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="bed3"*/}
                {/*                    name="bed-c"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="bed3"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Luxury*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="bed33"*/}
                {/*                    name="bed-c"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="bed33"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Cosy*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="bed333"*/}
                {/*                    name="bed-c"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="bed333"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Normal*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="bed3333"*/}
                {/*                    name="bed-c"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="bed3333"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                      alt=""*/}
                {/*                    />*/}
                {/*                    Tight*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}

                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bedroom-three-bath-yes"*/}
                {/*                name="weekday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bedroom-three-bath-yes">*/}
                {/*                Bathroom*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bedroom-three-bal-yes"*/}
                {/*                name="weekday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bedroom-three-bal-yes">*/}
                {/*                Balcony*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bedroom-three-dress-yes"*/}
                {/*                name="weekday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bedroom-three-dress-yes">*/}
                {/*                Dressing Area*/}
                {/*              </label>*/}
                {/*            </div>*/}
                {/*            <h5 className="mt-4">Common Area</h5>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesabs">Kitchen</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yesabs"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yesabs">Kids Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yesabs">*/}
                {/*                  Washing Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesaabs"*/}
                {/*                  name="weekday-2abbax"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesaabs">*/}
                {/*                  Common Washroom*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yeabss">Lift</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yeabss">*/}
                {/*                  Living Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yeabss"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yeabss">Dining Area</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yabses">Pooja Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yabses">Store Room</label>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}

                {/*        <div id="twobedroom-four" style={{ display: "none" }}>*/}
                {/*          <div className="three-floor-sec">*/}
                {/*            <h5 className="mt-4">Bedroom 1</h5>*/}
                {/*            <div className="floor-th">*/}
                {/*              <div className="selector-check">*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-twop-bed41"*/}
                {/*                    name="floor-four"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-twop-bed41"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Luxury*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-twop-bed42"*/}
                {/*                    name="floor-four"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-twop-bed42"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Cosy*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-twop-bed43"*/}
                {/*                    name="floor-four"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-twop-bed43"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Normal*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-twop-bed44"*/}
                {/*                    name="floor-four"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-twop-bed44"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                      alt=""*/}
                {/*                    />*/}
                {/*                    Tight*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yes-bath-towonedaa"*/}
                {/*                name="bed-two-obeda"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yes-bath-towonedaa">*/}
                {/*                Bathroom*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yes-bath-towonedaa"*/}
                {/*                name="webed-twobeda"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yes-bath-towonedaa">*/}
                {/*                Balcony*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yes-bath-towonedaa"*/}
                {/*                name="bed-two-obeda"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yes-bath-towonedaa">*/}
                {/*                Dressing Area*/}
                {/*              </label>*/}
                {/*            </div>*/}
                {/*            <h5 className="mt-4">Bedroom 2</h5>*/}
                {/*            <div className="floor-th">*/}
                {/*              <div className="selector-check">*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two1-adad"*/}
                {/*                    name="floor-twoas"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two1-adad"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Luxury*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two2-adad"*/}
                {/*                    name="floor-twoas"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two2-adad"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Cosy*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two3-adad"*/}
                {/*                    name="floor-twoas"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two3-adad"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Normal*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two4-adad"*/}
                {/*                    name="floor-twoas"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two4-adad"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                      alt=""*/}
                {/*                    />*/}
                {/*                    Tight*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yes-bath-towoneadavv"*/}
                {/*                name="bed-two-one-adaae"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yes-bath-towoneadavv">*/}
                {/*                Bathroom*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yes-bath-towoneadavv"*/}
                {/*                name="webed-two-onadaae"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yes-bath-towoneadavv">*/}
                {/*                Balcony*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yes-bath-towoneadavv"*/}
                {/*                name="bed-two-one-adaae"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yes-bath-towoneadavv">*/}
                {/*                Dressing Area*/}
                {/*              </label>*/}
                {/*            </div>*/}
                {/*            <h5 className="mt-4">Bedroom 3</h5>*/}
                {/*            <div className="floor-th">*/}
                {/*              <div className="selector-check">*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two1adac"*/}
                {/*                    name="floor-twoqqa"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two1adac"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Luxury*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two2adac"*/}
                {/*                    name="floor-twoqqa"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two2adac"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Cosy*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two3adac"*/}
                {/*                    name="floor-twoqqa"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two3adac"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Normal*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two4adac"*/}
                {/*                    name="floor-two"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two4adac"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                      alt=""*/}
                {/*                    />*/}
                {/*                    Tight*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yes-bath-towoneqedc"*/}
                {/*                name="bed-two-one-2qesa"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yes-bath-towoneqedc">*/}
                {/*                Bathroom*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yes-bath-towoneqedc"*/}
                {/*                name="webed-two-oneqesa"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yes-bath-towoneqedc">*/}
                {/*                Balcony*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yes-bath-towoneqedc"*/}
                {/*                name="bed-two-one-2qesa"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yes-bath-towoneqedc">*/}
                {/*                Dressing Area*/}
                {/*              </label>*/}
                {/*            </div>*/}
                {/*            <h5 className="mt-4">Bedroom 4</h5>*/}
                {/*            <div className="floor-th">*/}
                {/*              <div className="selector-check">*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two1qwvs"*/}
                {/*                    name="floor-twobjgh"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two1qwvs"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Luxury*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two2qwvs"*/}
                {/*                    name="floor-twobjgh"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two2qwvs"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Cosy*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two3qwvs"*/}
                {/*                    name="floor-twobjgh"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two3qwvs"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Normal*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-two4qwvs"*/}
                {/*                    name="floor-twobjgh"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-two4qwvs"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                      alt=""*/}
                {/*                    />*/}
                {/*                    Tight*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yes-bath-towonevnt"*/}
                {/*                name="bed-two-one-2arv"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yes-bath-towonevnt">*/}
                {/*                Bathroom*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yes-bath-towonevnt"*/}
                {/*                name="webed-two-onearv"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yes-bath-towonevnt">*/}
                {/*                Balcony*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yes-bath-towonevnt"*/}
                {/*                name="bed-two-one-2arv"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yes-bath-towonevnt">*/}
                {/*                Dressing Area*/}
                {/*              </label>*/}
                {/*            </div>*/}
                {/*            <h5 className="mt-4">Common Area</h5>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesabs">Kitchen</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yesabs"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yesabs">Kids Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yesabs">*/}
                {/*                  Washing Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesaabs"*/}
                {/*                  name="weekday-2abbax"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesaabs">*/}
                {/*                  Common Washroom*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yeabss">Lift</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yeabss">*/}
                {/*                  Living Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yeabss"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yeabss">Dining Area</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yabses">Pooja Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yabses">Store Room</label>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*    <div className="three-floor-sec">*/}
                {/*      <h4>First Floor</h4>*/}
                {/*      <div id="second-floor-room">*/}
                {/*        <div className="form-group mt-5">*/}
                {/*          <label htmlFor="exampleFormControlSelect1">*/}
                {/*            Number Of Bedrooms*/}
                {/*          </label>*/}
                {/*          <select*/}
                {/*            id="second-floor-roomset"*/}
                {/*            name="secondbedroom"*/}
                {/*            onChange={() =>*/}
                {/*              displaySecondFloorBedroom("second-floor-roomset")*/}
                {/*            }*/}
                {/*          >*/}
                {/*            <option value=""> </option>*/}
                {/*            <option value="second-floorbedroom-one">1</option>*/}
                {/*            <option value="second-floorbedroom-two">2</option>*/}
                {/*            <option value="second-floorbedroom-three">3</option>*/}
                {/*            <option value="second-floorbedroom-four">4</option>*/}
                {/*          </select>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*          id="second-floorbedroom-one"*/}
                {/*          style={{ display: "none" }}*/}
                {/*        >*/}
                {/*          <div className="three-floor-sec">*/}
                {/*            <h5 className="mt-4">Bedroom 1</h5>*/}
                {/*            <div className="floor-th">*/}
                {/*              <div className="selector-check">*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor1second-floor"*/}
                {/*                    name="floorsecond-floor-one"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor1second-floor"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Luxury*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor2second-floor"*/}
                {/*                    name="floorsecond-floor-one"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor2second-floor"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Cosy*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor3second-floor"*/}
                {/*                    name="floorsecond-floor-one"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor3second-floor"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Normal*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor4second-floor"*/}
                {/*                    name="floorsecond-floor-one"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor4second-floor"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                      alt=""*/}
                {/*                    />*/}
                {/*                    Tight*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yessecond-floor"*/}
                {/*                name="weekday-second-floor2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yessecond-floor">*/}
                {/*                Bathroom*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yessecond-floor"*/}
                {/*                name="weekday-second-floor2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yessecond-floor">*/}
                {/*                Balcony*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yessecond-floor"*/}
                {/*                name="weekday-second-floor2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yessecond-floor">*/}
                {/*                Dressing Area*/}
                {/*              </label>*/}
                {/*            </div>*/}
                {/*            <h5 className="mt-4">Common Area</h5>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesabs">Kitchen</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yesabs"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yesabs">Kids Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yesabs">*/}
                {/*                  Washing Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesaabs"*/}
                {/*                  name="weekday-2abbax"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesaabs">*/}
                {/*                  Common Washroom*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yeabss">Lift</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yeabss">*/}
                {/*                  Living Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yeabss"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yeabss">Dining Area</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yabses">Pooja Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yabses">Store Room</label>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*          id="second-floorbedroom-two"*/}
                {/*          style={{ display: "none" }}*/}
                {/*        >*/}
                {/*          <h5 className="mt-4">Bedroom 1</h5>*/}
                {/*          <div className="floor-th">*/}
                {/*            <div className="selector-check">*/}
                {/*              <div className="selecotr-item">*/}
                {/*                <input*/}
                {/*                  type="radio"*/}
                {/*                  id="floor1second-floor"*/}
                {/*                  name="floorsecond-floor-one"*/}
                {/*                  className="selector-item_radio"*/}
                {/*                />*/}
                {/*                <label*/}
                {/*                  htmlFor="floor1second-floor"*/}
                {/*                  className="selector-item_label"*/}
                {/*                >*/}
                {/*                  <img*/}
                {/*                    src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                    alt=""*/}
                {/*                  />{" "}*/}
                {/*                  Luxury*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="selecotr-item">*/}
                {/*                <input*/}
                {/*                  type="radio"*/}
                {/*                  id="floor2second-floor"*/}
                {/*                  name="floorsecond-floor-one"*/}
                {/*                  className="selector-item_radio"*/}
                {/*                />*/}
                {/*                <label*/}
                {/*                  htmlFor="floor2second-floor"*/}
                {/*                  className="selector-item_label"*/}
                {/*                >*/}
                {/*                  <img*/}
                {/*                    src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                    alt=""*/}
                {/*                  />{" "}*/}
                {/*                  Cosy*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="selecotr-item">*/}
                {/*                <input*/}
                {/*                  type="radio"*/}
                {/*                  id="floor3second-floor"*/}
                {/*                  name="floorsecond-floor-one"*/}
                {/*                  className="selector-item_radio"*/}
                {/*                />*/}
                {/*                <label*/}
                {/*                  htmlFor="floor3second-floor"*/}
                {/*                  className="selector-item_label"*/}
                {/*                >*/}
                {/*                  <img*/}
                {/*                    src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                    alt=""*/}
                {/*                  />{" "}*/}
                {/*                  Normal*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="selecotr-item">*/}
                {/*                <input*/}
                {/*                  type="radio"*/}
                {/*                  id="floor4second-floor"*/}
                {/*                  name="floorsecond-floor-one"*/}
                {/*                  className="selector-item_radio"*/}
                {/*                />*/}
                {/*                <label*/}
                {/*                  htmlFor="floor4second-floor"*/}
                {/*                  className="selector-item_label"*/}
                {/*                >*/}
                {/*                  <img*/}
                {/*                    src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                    alt=""*/}
                {/*                  />*/}
                {/*                  Tight*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*          <div className="floor-th form-group mt-4">*/}
                {/*            <input*/}
                {/*              type="checkbox"*/}
                {/*              id="bath-yessecond-floor"*/}
                {/*              name="weekday-second-floor2"*/}
                {/*              value="Saturday"*/}
                {/*            />*/}
                {/*            <label htmlFor="bath-yessecond-floor">*/}
                {/*              Bathroom*/}
                {/*            </label>*/}

                {/*            <input*/}
                {/*              type="checkbox"*/}
                {/*              id="bal-yessecond-floor"*/}
                {/*              name="weekday-second-floor2"*/}
                {/*              value="Saturday"*/}
                {/*            />*/}
                {/*            <label htmlFor="bal-yessecond-floor">Balcony</label>*/}

                {/*            <input*/}
                {/*              type="checkbox"*/}
                {/*              id="dress-yessecond-floor"*/}
                {/*              name="weekday-second-floor2"*/}
                {/*              value="Saturday"*/}
                {/*            />*/}
                {/*            <label htmlFor="dress-yessecond-floor">*/}
                {/*              Dressing Area*/}
                {/*            </label>*/}
                {/*          </div>*/}
                {/*          <h5 className="mt-4">Bedroom 2</h5>*/}
                {/*          <div className="floor-th">*/}
                {/*            <div className="selector-check">*/}
                {/*              <div className="selecotr-item">*/}
                {/*                <input*/}
                {/*                  type="radio"*/}
                {/*                  id="floor-twstowoneecond-flooro1"*/}
                {/*                  name="flotowoneor-twsecond-flooro"*/}
                {/*                  className="selector-item_radio"*/}
                {/*                />*/}
                {/*                <label*/}
                {/*                  htmlFor="floor-twstowoneecond-flooro1"*/}
                {/*                  className="selector-item_label"*/}
                {/*                >*/}
                {/*                  <img*/}
                {/*                    src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                    alt=""*/}
                {/*                  />{" "}*/}
                {/*                  Luxury*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="selecotr-item">*/}
                {/*                <input*/}
                {/*                  type="radio"*/}
                {/*                  id="floor-twstowoneecond-flooro2"*/}
                {/*                  name="flotowoneor-twsecond-flooro"*/}
                {/*                  className="selector-item_radio"*/}
                {/*                />*/}
                {/*                <label*/}
                {/*                  htmlFor="floor-twstowoneecond-flooro2"*/}
                {/*                  className="selector-item_label"*/}
                {/*                >*/}
                {/*                  <img*/}
                {/*                    src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                    alt=""*/}
                {/*                  />{" "}*/}
                {/*                  Cosy*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="selecotr-item">*/}
                {/*                <input*/}
                {/*                  type="radio"*/}
                {/*                  id="floor-twstowoneecond-flooro3"*/}
                {/*                  name="flotowoneor-twsecond-flooro"*/}
                {/*                  className="selector-item_radio"*/}
                {/*                />*/}
                {/*                <label*/}
                {/*                  htmlFor="floor-twstowoneecond-flooro3"*/}
                {/*                  className="selector-item_label"*/}
                {/*                >*/}
                {/*                  <img*/}
                {/*                    src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                    alt=""*/}
                {/*                  />{" "}*/}
                {/*                  Normal*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="selecotr-item">*/}
                {/*                <input*/}
                {/*                  type="radio"*/}
                {/*                  id="floor-twstowoneecond-flooro4"*/}
                {/*                  name="flotowoneor-twsecond-flooro"*/}
                {/*                  className="selector-item_radio"*/}
                {/*                />*/}
                {/*                <label*/}
                {/*                  htmlFor="floor-twstowoneecond-flooro4"*/}
                {/*                  className="selector-item_label"*/}
                {/*                >*/}
                {/*                  <img*/}
                {/*                    src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                    alt=""*/}
                {/*                  />*/}
                {/*                  Tight*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*          <div className="floor-th form-group mt-4">*/}
                {/*            <input*/}
                {/*              type="checkbox"*/}
                {/*              id="bathsecond-floor-yes-bath-totowonewone"*/}
                {/*              name="bed-twtowoneo-second-floorone-2"*/}
                {/*              value="Saturday"*/}
                {/*            />*/}
                {/*            <label htmlFor="bathsecond-floor-yes-bath-totowonewone">*/}
                {/*              Bathroom*/}
                {/*            </label>*/}

                {/*            <input*/}
                {/*              type="checkbox"*/}
                {/*              id="balsecond-flotowoneor-yes-bath-towone"*/}
                {/*              name="webed-twtowoneo-second-floorone"*/}
                {/*              value="Saturday"*/}
                {/*            />*/}
                {/*            <label htmlFor="balsecond-flotowoneor-yes-bath-towone">*/}
                {/*              Balcony*/}
                {/*            </label>*/}

                {/*            <input*/}
                {/*              type="checkbox"*/}
                {/*              id="dresssecond-fltowoneoor-yes-bath-towone"*/}
                {/*              name="bed-twtowoneo-second-floorone-2"*/}
                {/*              value="Saturday"*/}
                {/*            />*/}
                {/*            <label htmlFor="dresssecond-fltowoneoor-yes-bath-towone">*/}
                {/*              Dressing Area*/}
                {/*            </label>*/}
                {/*          </div>*/}
                {/*          <h5 className="mt-4">Common Area</h5>*/}
                {/*          <div className="floor-th form-group mt-4">*/}
                {/*            <div className="col-lg-6 pd-0">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yesabs"*/}
                {/*                name="weekday-abbx2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yesabs">Kitchen</label>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-6 pd-0">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yesabs"*/}
                {/*                name="weekday-2abbx"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yesabs">Kids Room</label>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-6 pd-0">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yesabs"*/}
                {/*                name="weekday-abbx2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yesabs">Washing Area</label>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-6 pd-0">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yesaabs"*/}
                {/*                name="weekday-2abbax"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yesaabs">*/}
                {/*                Common Washroom*/}
                {/*              </label>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-6 pd-0">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yeabss"*/}
                {/*                name="weekday-2abbx"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yeabss">Lift</label>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-6 pd-0">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yeabss"*/}
                {/*                name="weekday-2abbx"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yeabss">Living Area</label>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-6 pd-0">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yeabss"*/}
                {/*                name="weekday-abbx2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yeabss">Dining Area</label>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-6 pd-0">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yabses"*/}
                {/*                name="weekday-abbx2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yabses">Pooja Room</label>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-6 pd-0">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yabses"*/}
                {/*                name="weekday-abbx2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yabses">Store Room</label>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*          id="second-floorbedroom-three"*/}
                {/*          style={{ display: "none" }}*/}
                {/*        >*/}
                {/*          <div className="three-floor-sec">*/}
                {/*            <h5 className="mt-4">Bedroom 3</h5>*/}
                {/*            <div className="floor-th">*/}
                {/*              <div className="selector-check">*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="besecond-floord3"*/}
                {/*                    name="bedsecond-floor-c"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="besecond-floord3"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Luxury*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="bed3second-floor3"*/}
                {/*                    name="bedsecond-floor-c"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="bed3second-floor3"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Cosy*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="bed33second-floor3"*/}
                {/*                    name="bedsecond-floor-c"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="bed33second-floor3"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Normal*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="bed333second-floor3"*/}
                {/*                    name="bedsecond-floor-c"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="bed333second-floor3"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                      alt=""*/}
                {/*                    />*/}
                {/*                    Tight*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}

                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="besecond-floordroom-three-bath-yes"*/}
                {/*                name="weeksecond-floorday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="besecond-floordroom-three-bath-yes">*/}
                {/*                Bathroom*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="besecond-floordroom-three-bal-yes"*/}
                {/*                name="weeksecond-floorday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="besecond-floordroom-three-bal-yes">*/}
                {/*                Balcony*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="besecond-floordroom-three-dress-yes"*/}
                {/*                name="weeksecond-floorday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="besecond-floordroom-three-dress-yes">*/}
                {/*                Dressing Area*/}
                {/*              </label>*/}
                {/*            </div>*/}
                {/*            <h5 className="mt-4">Common Area</h5>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesabs">Kitchen</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yesabs"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yesabs">Kids Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yesabs">*/}
                {/*                  Washing Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesaabs"*/}
                {/*                  name="weekday-2abbax"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesaabs">*/}
                {/*                  Common Washroom*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yeabss">Lift</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yeabss">*/}
                {/*                  Living Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yeabss"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yeabss">Dining Area</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yabses">Pooja Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yabses">Store Room</label>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*          id="second-floorbedroom-four"*/}
                {/*          style={{ display: "none" }}*/}
                {/*        >*/}
                {/*          <div className="three-floor-sec">*/}
                {/*            <h5 className="mt-4">Bedroom 4</h5>*/}
                {/*            <div className="floor-th">*/}
                {/*              <div className="selector-check">*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floosecond-floorr-two1qwvs"*/}
                {/*                    name="floor-tsecond-floorwobjgh"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floosecond-floorr-two1qwvs"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Luxury*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floosecond-floorr-two2qwvs"*/}
                {/*                    name="floor-tsecond-floorwobjgh"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floosecond-floorr-two2qwvs"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Cosy*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floosecond-floorr-two3qwvs"*/}
                {/*                    name="floor-tsecond-floorwobjgh"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floosecond-floorr-two3qwvs"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Normal*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floosecond-floorr-two4qwvs"*/}
                {/*                    name="floor-tsecond-floorwobjgh"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floosecond-floorr-two4qwvs"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                      alt=""*/}
                {/*                    />*/}
                {/*                    Tight*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yes-batsecond-floorh-towonevnt"*/}
                {/*                name="bedsecond-floor-two-one-2arv"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yes-batsecond-floorh-towonevnt">*/}
                {/*                Bathroom*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yes-batsecond-floorh-towonevnt"*/}
                {/*                name="webedsecond-floor-two-onearv"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yes-batsecond-floorh-towonevnt">*/}
                {/*                Balcony*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yes-batsecond-floorh-towonevnt"*/}
                {/*                name="bsecond-floored-two-one-2arv"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yes-batsecond-floorh-towonevnt">*/}
                {/*                Dressing Area*/}
                {/*              </label>*/}
                {/*            </div>*/}
                {/*            <h5 className="mt-4">Common Area</h5>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesabs">Kitchen</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yesabs"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yesabs">Kids Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yesabs">*/}
                {/*                  Washing Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesaabs"*/}
                {/*                  name="weekday-2abbax"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesaabs">*/}
                {/*                  Common Washroom*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yeabss">Lift</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yeabss">*/}
                {/*                  Living Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yeabss"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yeabss">Dining Area</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yabses">Pooja Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yabses">Store Room</label>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </div>*/}

                {/*  <div*/}
                {/*    id="three"*/}
                {/*    className="three-flrset"*/}
                {/*    style={{ display: "none" }}*/}
                {/*  >*/}
                {/*    <div className="three-floor-sec">*/}
                {/*      <h4>Second Floor</h4>*/}
                {/*      <div id="second-floor-room">*/}
                {/*        <div className="form-group mt-5">*/}
                {/*          <label htmlFor="exampleFormControlSelect1">*/}
                {/*            Number Of Bedrooms*/}
                {/*          </label>*/}
                {/*          <select*/}
                {/*            id="third-floor-roomset"*/}
                {/*            name="secondbedroom"*/}
                {/*            onChange={() =>*/}
                {/*              displayThirdFloorBedroom("third-floor-roomset")*/}
                {/*            }*/}
                {/*          >*/}
                {/*            <option value=""> </option>*/}
                {/*            <option value="third-floorbedroom-one">1</option>*/}
                {/*            <option value="third-floorbedroom-two">2</option>*/}
                {/*            <option value="third-floorbedroom-three">3</option>*/}
                {/*            <option value="third-floorbedroom-four">4</option>*/}
                {/*          </select>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*          id="third-floorbedroom-one"*/}
                {/*          style={{ display: "none" }}*/}
                {/*        >*/}
                {/*          <div className="three-floor-sec">*/}
                {/*            <h5 className="mt-4">Bedroom 1</h5>*/}
                {/*            <div className="floor-th">*/}
                {/*              <div className="selector-check">*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor1second-flooras"*/}
                {/*                    name="cbdfloorsecond-floor-one"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor1second-flooras"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Luxury*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor1second-floorasad"*/}
                {/*                    name="cbdfloorsecond-floor-one"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor1second-floorasad"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Cosy*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor1second-floorasade"*/}
                {/*                    name="cbdfloorsecond-floor-one"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor1second-floorasade"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Normal*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor1second-floorasadecv"*/}
                {/*                    name="cbdfloorsecond-floor-one"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor1second-floorasadecv"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                      alt=""*/}
                {/*                    />*/}
                {/*                    Tight*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yzxyessecond-floor"*/}
                {/*                name="weekzxyday-second-floor2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yzxyessecond-floor">*/}
                {/*                Bathroom*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yzxyessecond-floor"*/}
                {/*                name="weekdzxyay-second-floor2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yzxyessecond-floor">*/}
                {/*                Balcony*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yzxyessecond-floor"*/}
                {/*                name="weekzxyday-second-floor2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yzxyessecond-floor">*/}
                {/*                Dressing Area*/}
                {/*              </label>*/}
                {/*            </div>*/}
                {/*            <h5 className="mt-4">Common Area</h5>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesabs">Kitchen</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yesabs"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yesabs">Kids Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yesabs">*/}
                {/*                  Washing Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesaabs"*/}
                {/*                  name="weekday-2abbax"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesaabs">*/}
                {/*                  Common Washroom*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yeabss">Lift</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yeabss">*/}
                {/*                  Living Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yeabss"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yeabss">Dining Area</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yabses">Pooja Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yabses">Store Room</label>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*          id="third-floorbedroom-two"*/}
                {/*          style={{ display: "none" }}*/}
                {/*        >*/}
                {/*          <h5 className="mt-4">Bedroom 1</h5>*/}
                {/*          <div className="floor-th">*/}
                {/*            <div className="selector-check">*/}
                {/*              <div className="selecotr-item">*/}
                {/*                <input*/}
                {/*                  type="radio"*/}
                {/*                  id="floor1second-flooras"*/}
                {/*                  name="cbdfloorsecond-floor-one"*/}
                {/*                  className="selector-item_radio"*/}
                {/*                />*/}
                {/*                <label*/}
                {/*                  htmlFor="floor1second-flooras"*/}
                {/*                  className="selector-item_label"*/}
                {/*                >*/}
                {/*                  <img*/}
                {/*                    src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                    alt=""*/}
                {/*                  />{" "}*/}
                {/*                  Luxury*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="selecotr-item">*/}
                {/*                <input*/}
                {/*                  type="radio"*/}
                {/*                  id="floor1second-floorasad"*/}
                {/*                  name="cbdfloorsecond-floor-one"*/}
                {/*                  className="selector-item_radio"*/}
                {/*                />*/}
                {/*                <label*/}
                {/*                  htmlFor="floor1second-floorasad"*/}
                {/*                  className="selector-item_label"*/}
                {/*                >*/}
                {/*                  <img*/}
                {/*                    src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                    alt=""*/}
                {/*                  />{" "}*/}
                {/*                  Cosy*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="selecotr-item">*/}
                {/*                <input*/}
                {/*                  type="radio"*/}
                {/*                  id="floor1second-floorasade"*/}
                {/*                  name="cbdfloorsecond-floor-one"*/}
                {/*                  className="selector-item_radio"*/}
                {/*                />*/}
                {/*                <label*/}
                {/*                  htmlFor="floor1second-floorasade"*/}
                {/*                  className="selector-item_label"*/}
                {/*                >*/}
                {/*                  <img*/}
                {/*                    src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                    alt=""*/}
                {/*                  />{" "}*/}
                {/*                  Normal*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="selecotr-item">*/}
                {/*                <input*/}
                {/*                  type="radio"*/}
                {/*                  id="floor1second-floorasadecv"*/}
                {/*                  name="cbdfloorsecond-floor-one"*/}
                {/*                  className="selector-item_radio"*/}
                {/*                />*/}
                {/*                <label*/}
                {/*                  htmlFor="floor1second-floorasadecv"*/}
                {/*                  className="selector-item_label"*/}
                {/*                >*/}
                {/*                  <img*/}
                {/*                    src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                    alt=""*/}
                {/*                  />*/}
                {/*                  Tight*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*          <div className="floor-th form-group mt-4">*/}
                {/*            <input*/}
                {/*              type="checkbox"*/}
                {/*              id="bath-yzxyessecond-floor"*/}
                {/*              name="weekzxyday-second-floor2"*/}
                {/*              value="Saturday"*/}
                {/*            />*/}
                {/*            <label htmlFor="bath-yzxyessecond-floor">*/}
                {/*              Bathroom*/}
                {/*            </label>*/}

                {/*            <input*/}
                {/*              type="checkbox"*/}
                {/*              id="bal-yzxyessecond-floor"*/}
                {/*              name="weekdzxyay-second-floor2"*/}
                {/*              value="Saturday"*/}
                {/*            />*/}
                {/*            <label htmlFor="bal-yzxyessecond-floor">*/}
                {/*              Balcony*/}
                {/*            </label>*/}

                {/*            <input*/}
                {/*              type="checkbox"*/}
                {/*              id="dress-yzxyessecond-floor"*/}
                {/*              name="weekzxyday-second-floor2"*/}
                {/*              value="Saturday"*/}
                {/*            />*/}
                {/*            <label htmlFor="dress-yzxyessecond-floor">*/}
                {/*              Dressing Area*/}
                {/*            </label>*/}
                {/*          </div>*/}
                {/*          <h5 className="mt-4">Bedroom 2</h5>*/}
                {/*          <div className="floor-th">*/}
                {/*            <div className="selector-check">*/}
                {/*              <div className="selecotr-item">*/}
                {/*                <input*/}
                {/*                  type="radio"*/}
                {/*                  id="floor-twstowoneecasdond-flooro1"*/}
                {/*                  name="flotowoasdneor-twsecond-flooro"*/}
                {/*                  className="selector-item_radio"*/}
                {/*                />*/}
                {/*                <label*/}
                {/*                  htmlFor="floor-twstowoneecasdond-flooro1"*/}
                {/*                  className="selector-item_label"*/}
                {/*                >*/}
                {/*                  <img*/}
                {/*                    src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                    alt=""*/}
                {/*                  />{" "}*/}
                {/*                  Luxury*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="selecotr-item">*/}
                {/*                <input*/}
                {/*                  type="radio"*/}
                {/*                  id="floor-twstowoneecasdond-flooro2"*/}
                {/*                  name="flotoasdwoneor-twsecond-flooro"*/}
                {/*                  className="selector-item_radio"*/}
                {/*                />*/}
                {/*                <label*/}
                {/*                  htmlFor="floor-twstowoneecasdond-flooro2"*/}
                {/*                  className="selector-item_label"*/}
                {/*                >*/}
                {/*                  <img*/}
                {/*                    src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                    alt=""*/}
                {/*                  />{" "}*/}
                {/*                  Cosy*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="selecotr-item">*/}
                {/*                <input*/}
                {/*                  type="radio"*/}
                {/*                  id="floor-twstowoneecasdond-flooro3"*/}
                {/*                  name="flotoasdwoneor-twsecond-flooro"*/}
                {/*                  className="selector-item_radio"*/}
                {/*                />*/}
                {/*                <label*/}
                {/*                  htmlFor="floor-twstowoneecasdond-flooro3"*/}
                {/*                  className="selector-item_label"*/}
                {/*                >*/}
                {/*                  <img*/}
                {/*                    src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                    alt=""*/}
                {/*                  />{" "}*/}
                {/*                  Normal*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="selecotr-item">*/}
                {/*                <input*/}
                {/*                  type="radio"*/}
                {/*                  id="floor-twstowoneecasdond-flooro4"*/}
                {/*                  name="flotoasdwoneor-twsecond-flooro"*/}
                {/*                  className="selector-item_radio"*/}
                {/*                />*/}
                {/*                <label*/}
                {/*                  htmlFor="floor-twstowoneecasdond-flooro4"*/}
                {/*                  className="selector-item_label"*/}
                {/*                >*/}
                {/*                  <img*/}
                {/*                    src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                    alt=""*/}
                {/*                  />*/}
                {/*                  Tight*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*          <div className="floor-th form-group mt-4">*/}
                {/*            <input*/}
                {/*              type="checkbox"*/}
                {/*              id="bathsecond-floor-yes-bath-totowonewonesfd"*/}
                {/*              name="besfdd-twtowoneo-second-floorone-2"*/}
                {/*              value="Saturday"*/}
                {/*            />*/}
                {/*            <label htmlFor="bathsecond-floor-yes-bath-totowonewonesfd">*/}
                {/*              Bathroom*/}
                {/*            </label>*/}

                {/*            <input*/}
                {/*              type="checkbox"*/}
                {/*              id="balsecond-flotowoneor-yes-bath-towonesfd"*/}
                {/*              name="webesfdd-twtowoneo-second-floorone"*/}
                {/*              value="Saturday"*/}
                {/*            />*/}
                {/*            <label htmlFor="balsecond-flotowoneor-yes-bath-towonesfd">*/}
                {/*              Balcony*/}
                {/*            </label>*/}

                {/*            <input*/}
                {/*              type="checkbox"*/}
                {/*              id="dresssecond-fltowoneoor-yes-bath-towonesfd"*/}
                {/*              name="besfdd-twtowoneo-second-floorone-2"*/}
                {/*              value="Saturday"*/}
                {/*            />*/}
                {/*            <label htmlFor="dresssecond-fltowoneoor-yes-bath-towonesfd">*/}
                {/*              Dressing Area*/}
                {/*            </label>*/}
                {/*          </div>*/}
                {/*          <h5 className="mt-4">Common Area</h5>*/}
                {/*          <div className="floor-th form-group mt-4">*/}
                {/*            <div className="col-lg-6 pd-0">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yesabs"*/}
                {/*                name="weekday-abbx2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yesabs">Kitchen</label>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-6 pd-0">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yesabs"*/}
                {/*                name="weekday-2abbx"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yesabs">Kids Room</label>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-6 pd-0">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yesabs"*/}
                {/*                name="weekday-abbx2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yesabs">Washing Area</label>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-6 pd-0">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yesaabs"*/}
                {/*                name="weekday-2abbax"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yesaabs">*/}
                {/*                Common Washroom*/}
                {/*              </label>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-6 pd-0">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yeabss"*/}
                {/*                name="weekday-2abbx"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yeabss">Lift</label>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-6 pd-0">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yeabss"*/}
                {/*                name="weekday-2abbx"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yeabss">Living Area</label>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-6 pd-0">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yeabss"*/}
                {/*                name="weekday-abbx2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yeabss">Dining Area</label>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-6 pd-0">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yabses"*/}
                {/*                name="weekday-abbx2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yabses">Pooja Room</label>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-6 pd-0">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yabses"*/}
                {/*                name="weekday-abbx2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yabses">Store Room</label>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*          id="third-floorbedroom-three"*/}
                {/*          style={{ display: "none" }}*/}
                {/*        >*/}
                {/*          <div className="three-floor-sec">*/}
                {/*            <h5 className="mt-4">Bedroom 3</h5>*/}
                {/*            <div className="floor-th">*/}
                {/*              <div className="selector-check">*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="besecond-floord3pol"*/}
                {/*                    name="bepoldsecond-floor-c"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="besecond-floord3pol"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Luxury*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="bed3second-floor3pol"*/}
                {/*                    name="bedsecond-floor-c"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="bed3second-floor3pol"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Cosy*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="bed33second-floor3pol"*/}
                {/*                    name="bepoldsecond-floor-c"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="bed33second-floor3pol"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Normal*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="bed333second-floor3pol"*/}
                {/*                    name="bepoldsecond-floor-c"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="bed333second-floor3pol"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                      alt=""*/}
                {/*                    />*/}
                {/*                    Tight*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}

                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="besecond-floordroom-three-bath-yeslkj"*/}
                {/*                name="weekslkjecond-floorday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="besecond-floordroom-three-bath-yeslkj">*/}
                {/*                Bathroom*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="besecond-floordroom-three-bal-yeslkj"*/}
                {/*                name="weekslkjecond-floorday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="besecond-floordroom-three-bal-yeslkj">*/}
                {/*                Balcony*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="besecond-floordroom-three-dress-yeslkj"*/}
                {/*                name="weekslkjecond-floorday-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="besecond-floordroom-three-dress-yeslkj">*/}
                {/*                Dressing Area*/}
                {/*              </label>*/}
                {/*            </div>*/}
                {/*            <h5 className="mt-4">Common Area</h5>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesabs">Kitchen</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yesabs"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yesabs">Kids Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yesabs">*/}
                {/*                  Washing Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesaabs"*/}
                {/*                  name="weekday-2abbax"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesaabs">*/}
                {/*                  Common Washroom*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yeabss">Lift</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yeabss">*/}
                {/*                  Living Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yeabss"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yeabss">Dining Area</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yabses">Pooja Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yabses">Store Room</label>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*          id="third-floorbedroom-four"*/}
                {/*          style={{ display: "none" }}*/}
                {/*        >*/}
                {/*          <div className="three-floor-sec">*/}
                {/*            <h5 className="mt-4">Bedroom 4</h5>*/}
                {/*            <div className="floor-th">*/}
                {/*              <div className="selector-check">*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="flloloosecond-floorr-two1qwvs"*/}
                {/*                    name="flloloor-tsecond-floorwobjgh"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="flloloosecond-floorr-two1qwvs"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Luxury*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="flloloosecond-floorr-two2qwvs"*/}
                {/*                    name="flloloor-tsecond-floorwobjgh"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="flloloosecond-floorr-two2qwvs"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Cosy*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="flloloosecond-floorr-two3qwvs"*/}
                {/*                    name="flloloor-tsecond-floorwobjgh"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="flloloosecond-floorr-two3qwvs"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Normal*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="flloloosecond-floorr-two4qwvs"*/}
                {/*                    name="flloloor-tsecond-floorwobjgh"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="flloloosecond-floorr-two4qwvs"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                      alt=""*/}
                {/*                    />*/}
                {/*                    Tight*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bath-yes-batsecond-floorh-tlpidowonevnt"*/}
                {/*                name="bedslpidecond-floor-two-one-2arv"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bath-yes-batsecond-floorh-tlpidowonevnt">*/}
                {/*                Bathroom*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bal-yes-batsecond-floorh-tlpidowonevnt"*/}
                {/*                name="webedlpidsecond-floor-two-onearv"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bal-yes-batsecond-floorh-tlpidowonevnt">*/}
                {/*                Balcony*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dress-yes-batsecond-floorh-tlpidowonevnt"*/}
                {/*                name="bseclpidond-floored-two-one-2arv"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dress-yes-batsecond-floorh-tlpidowonevnt">*/}
                {/*                Dressing Area*/}
                {/*              </label>*/}
                {/*            </div>*/}
                {/*            <h5 className="mt-4">Common Area</h5>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesabs">Kitchen</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yesabs"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yesabs">Kids Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yesabs">*/}
                {/*                  Washing Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesaabs"*/}
                {/*                  name="weekday-2abbax"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesaabs">*/}
                {/*                  Common Washroom*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yeabss">Lift</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yeabss">*/}
                {/*                  Living Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yeabss"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yeabss">Dining Area</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yabses">Pooja Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yabses">Store Room</label>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  <div id="four" style={{ display: "none" }}>*/}
                {/*    <div className="three-floor-sec">*/}
                {/*      <div className="three-floor-sec">*/}
                {/*        <h4>Third Floor</h4>*/}
                {/*        <div id="second-floor-room">*/}
                {/*          <div className="form-group mt-5">*/}
                {/*            <label htmlFor="exampleFormControlSelect1">*/}
                {/*              Number Of Bedrooms*/}
                {/*            </label>*/}
                {/*            <select*/}
                {/*              id="forth-sec-th-floor-roomset"*/}
                {/*              name="secondbedroom"*/}
                {/*              onChange={() =>*/}
                {/*                displayFourthFloorBedroom(*/}
                {/*                  "forth-sec-th-floor-roomset"*/}
                {/*                )*/}
                {/*              }*/}
                {/*            >*/}
                {/*              <option value=""> </option>*/}
                {/*              <option value="forth-sec-th-floorbedroom-one">*/}
                {/*                1*/}
                {/*              </option>*/}
                {/*              <option value="forth-sec-th-floorbedroom-two">*/}
                {/*                2*/}
                {/*              </option>*/}
                {/*              <option value="forth-sec-th-floorbedroom-three">*/}
                {/*                3*/}
                {/*              </option>*/}
                {/*              <option value="forth-sec-th-floorbedroom-four">*/}
                {/*                4*/}
                {/*              </option>*/}
                {/*            </select>*/}
                {/*          </div>*/}

                {/*          <div*/}
                {/*            id="forth-sec-th-floorbedroom-one"*/}
                {/*            style={{ display: "none" }}*/}
                {/*          >*/}
                {/*            <div className="three-floor-sec">*/}
                {/*              <h5 className="mt-4">Bedroom 1</h5>*/}
                {/*              <div className="floor-th">*/}
                {/*                <div className="selector-check">*/}
                {/*                  <div className="selecotr-item">*/}
                {/*                    <input*/}
                {/*                      type="radio"*/}
                {/*                      id="floor1second-flooras"*/}
                {/*                      name="cbdfloorsecond-floor-one"*/}
                {/*                      className="selector-item_radio"*/}
                {/*                    />*/}
                {/*                    <label*/}
                {/*                      htmlFor="floor1second-flooras"*/}
                {/*                      className="selector-item_label"*/}
                {/*                    >*/}
                {/*                      <img*/}
                {/*                        src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                        alt=""*/}
                {/*                      />{" "}*/}
                {/*                      Luxury*/}
                {/*                    </label>*/}
                {/*                  </div>*/}
                {/*                  <div className="selecotr-item">*/}
                {/*                    <input*/}
                {/*                      type="radio"*/}
                {/*                      id="floor1second-floorasad"*/}
                {/*                      name="cbdfloorsecond-floor-one"*/}
                {/*                      className="selector-item_radio"*/}
                {/*                    />*/}
                {/*                    <label*/}
                {/*                      htmlFor="floor1second-floorasad"*/}
                {/*                      className="selector-item_label"*/}
                {/*                    >*/}
                {/*                      <img*/}
                {/*                        src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                        alt=""*/}
                {/*                      />{" "}*/}
                {/*                      Cosy*/}
                {/*                    </label>*/}
                {/*                  </div>*/}
                {/*                  <div className="selecotr-item">*/}
                {/*                    <input*/}
                {/*                      type="radio"*/}
                {/*                      id="floor1second-floorasade"*/}
                {/*                      name="cbdfloorsecond-floor-one"*/}
                {/*                      className="selector-item_radio"*/}
                {/*                    />*/}
                {/*                    <label*/}
                {/*                      htmlFor="floor1second-floorasade"*/}
                {/*                      className="selector-item_label"*/}
                {/*                    >*/}
                {/*                      <img*/}
                {/*                        src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                        alt=""*/}
                {/*                      />{" "}*/}
                {/*                      Normal*/}
                {/*                    </label>*/}
                {/*                  </div>*/}
                {/*                  <div className="selecotr-item">*/}
                {/*                    <input*/}
                {/*                      type="radio"*/}
                {/*                      id="floor1second-floorasadecv"*/}
                {/*                      name="cbdfloorsecond-floor-one"*/}
                {/*                      className="selector-item_radio"*/}
                {/*                    />*/}
                {/*                    <label*/}
                {/*                      htmlFor="floor1second-floorasadecv"*/}
                {/*                      className="selector-item_label"*/}
                {/*                    >*/}
                {/*                      <img*/}
                {/*                        src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                        alt=""*/}
                {/*                      />*/}
                {/*                      Tight*/}
                {/*                    </label>*/}
                {/*                  </div>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*              <div className="floor-th form-group mt-4">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yzxyessecond-floor"*/}
                {/*                  name="weekzxyday-second-floor2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yzxyessecond-floor">*/}
                {/*                  Bathroom*/}
                {/*                </label>*/}

                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yzxyessecond-floor"*/}
                {/*                  name="weekdzxyay-second-floor2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yzxyessecond-floor">*/}
                {/*                  Balcony*/}
                {/*                </label>*/}

                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yzxyessecond-floor"*/}
                {/*                  name="weekzxyday-second-floor2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yzxyessecond-floor">*/}
                {/*                  Dressing Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <h5 className="mt-4">Common Area</h5>*/}
                {/*              <div className="floor-th form-group mt-4">*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="bath-yesabs"*/}
                {/*                    name="weekday-abbx2"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="bath-yesabs">Kitchen</label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="bal-yesabs"*/}
                {/*                    name="weekday-2abbx"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="bal-yesabs">Kids Room</label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="dress-yesabs"*/}
                {/*                    name="weekday-abbx2"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="dress-yesabs">*/}
                {/*                    Washing Area*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="bath-yesaabs"*/}
                {/*                    name="weekday-2abbax"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="bath-yesaabs">*/}
                {/*                    Common Washroom*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="bal-yeabss"*/}
                {/*                    name="weekday-2abbx"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="bal-yeabss">Lift</label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="dress-yeabss"*/}
                {/*                    name="weekday-2abbx"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="dress-yeabss">*/}
                {/*                    Living Area*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="bath-yeabss"*/}
                {/*                    name="weekday-abbx2"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="bath-yeabss">*/}
                {/*                    Dining Area*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="bal-yabses"*/}
                {/*                    name="weekday-abbx2"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="bal-yabses">Pooja Room</label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="dress-yabses"*/}
                {/*                    name="weekday-abbx2"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="dress-yabses">*/}
                {/*                    Store Room*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}

                {/*          <div*/}
                {/*            id="forth-sec-th-floorbedroom-two"*/}
                {/*            style={{ display: "none" }}*/}
                {/*          >*/}
                {/*            <div className="three-floor-sec">*/}
                {/*              <h5 className="mt-4">Bedroom 1</h5>*/}
                {/*              <div className="floor-th">*/}
                {/*                <div className="selector-check">*/}
                {/*                  <div className="selecotr-item">*/}
                {/*                    <input*/}
                {/*                      type="radio"*/}
                {/*                      id="floor-qawtwsecond-flooro1"*/}
                {/*                      name="floor-twseqawcond-flooro"*/}
                {/*                      className="selector-item_radio"*/}
                {/*                    />*/}
                {/*                    <label*/}
                {/*                      htmlFor="floor-qawtwsecond-flooro1"*/}
                {/*                      className="selector-item_label"*/}
                {/*                    >*/}
                {/*                      <img*/}
                {/*                        src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                        alt=""*/}
                {/*                      />{" "}*/}
                {/*                      Luxury*/}
                {/*                    </label>*/}
                {/*                  </div>*/}
                {/*                  <div className="selecotr-item">*/}
                {/*                    <input*/}
                {/*                      type="radio"*/}
                {/*                      id="floor-qawtwsecond-flooro2"*/}
                {/*                      name="floor-twseqawcond-flooro"*/}
                {/*                      className="selector-item_radio"*/}
                {/*                    />*/}
                {/*                    <label*/}
                {/*                      htmlFor="floor-qawtwsecond-flooro2"*/}
                {/*                      className="selector-item_label"*/}
                {/*                    >*/}
                {/*                      <img*/}
                {/*                        src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                        alt=""*/}
                {/*                      />{" "}*/}
                {/*                      Cosy*/}
                {/*                    </label>*/}
                {/*                  </div>*/}
                {/*                  <div className="selecotr-item">*/}
                {/*                    <input*/}
                {/*                      type="radio"*/}
                {/*                      id="floor-twsecond-flooro3"*/}
                {/*                      name="floor-twseqawcond-flooro"*/}
                {/*                      className="selector-item_radio"*/}
                {/*                    />*/}
                {/*                    <label*/}
                {/*                      htmlFor="floor-qawtwsecond-flooro3"*/}
                {/*                      className="selector-item_label"*/}
                {/*                    >*/}
                {/*                      <img*/}
                {/*                        src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                        alt=""*/}
                {/*                      />{" "}*/}
                {/*                      Normal*/}
                {/*                    </label>*/}
                {/*                  </div>*/}
                {/*                  <div className="selecotr-item">*/}
                {/*                    <input*/}
                {/*                      type="radio"*/}
                {/*                      id="floor-qawtwsecond-flooro4"*/}
                {/*                      name="floor-twseqawcond-flooro"*/}
                {/*                      className="selector-item_radio"*/}
                {/*                    />*/}
                {/*                    <label*/}
                {/*                      htmlFor="floor-qawtwsecond-flooro4"*/}
                {/*                      className="selector-item_label"*/}
                {/*                    >*/}
                {/*                      <img*/}
                {/*                        src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                        alt=""*/}
                {/*                      />*/}
                {/*                      Tight*/}
                {/*                    </label>*/}
                {/*                  </div>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*              <div className="floor-th form-group mt-4">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bathsecondmat-floor-yes-bath-towone"*/}
                {/*                  name="bed-two-matsecond-floorone-2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bathsecondmat-floor-yes-bath-towone">*/}
                {/*                  Bathroom*/}
                {/*                </label>*/}

                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="balsecondmat-floor-yes-bath-towone"*/}
                {/*                  name="webed-twmato-second-floorone"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="balsecondmat-floor-yes-bath-towone">*/}
                {/*                  Balcony*/}
                {/*                </label>*/}

                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dresssecondmat-floor-yes-bath-towone"*/}
                {/*                  name="bed-tmatwo-second-floorone-2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dresssecondmat-floor-yes-bath-towone">*/}
                {/*                  Dressing Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            <h5 className="mt-4">Bedroom 2</h5>*/}
                {/*            <div className="floor-th">*/}
                {/*              <div className="selector-check">*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-twstowoneecasdond-flooro1"*/}
                {/*                    name="flotowoasdneor-twsecond-flooro"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-twstowoneecasdond-flooro1"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Luxury*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-twstowoneecasdond-flooro2"*/}
                {/*                    name="flotoasdwoneor-twsecond-flooro"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-twstowoneecasdond-flooro2"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Cosy*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-twstowoneecasdond-flooro3"*/}
                {/*                    name="flotoasdwoneor-twsecond-flooro"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-twstowoneecasdond-flooro3"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                      alt=""*/}
                {/*                    />{" "}*/}
                {/*                    Normal*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="selecotr-item">*/}
                {/*                  <input*/}
                {/*                    type="radio"*/}
                {/*                    id="floor-twstowoneecasdond-flooro4"*/}
                {/*                    name="flotoasdwoneor-twsecond-flooro"*/}
                {/*                    className="selector-item_radio"*/}
                {/*                  />*/}
                {/*                  <label*/}
                {/*                    htmlFor="floor-twstowoneecasdond-flooro4"*/}
                {/*                    className="selector-item_label"*/}
                {/*                  >*/}
                {/*                    <img*/}
                {/*                      src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                      alt=""*/}
                {/*                    />*/}
                {/*                    Tight*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="bathsecond-floor-yes-bath-totowonewonesfd"*/}
                {/*                name="besfdd-twtowoneo-second-floorone-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="bathsecond-floor-yes-bath-totowonewonesfd">*/}
                {/*                Bathroom*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="balsecond-flotowoneor-yes-bath-towonesfd"*/}
                {/*                name="webesfdd-twtowoneo-second-floorone"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="balsecond-flotowoneor-yes-bath-towonesfd">*/}
                {/*                Balcony*/}
                {/*              </label>*/}

                {/*              <input*/}
                {/*                type="checkbox"*/}
                {/*                id="dresssecond-fltowoneoor-yes-bath-towonesfd"*/}
                {/*                name="besfdd-twtowoneo-second-floorone-2"*/}
                {/*                value="Saturday"*/}
                {/*              />*/}
                {/*              <label htmlFor="dresssecond-fltowoneoor-yes-bath-towonesfd">*/}
                {/*                Dressing Area*/}
                {/*              </label>*/}
                {/*            </div>*/}
                {/*            <h5 className="mt-4">Common Area</h5>*/}
                {/*            <div className="floor-th form-group mt-4">*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesabs">Kitchen</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yesabs"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yesabs">Kids Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yesabs"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yesabs">*/}
                {/*                  Washing Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yesaabs"*/}
                {/*                  name="weekday-2abbax"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yesaabs">*/}
                {/*                  Common Washroom*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yeabss">Lift</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yeabss"*/}
                {/*                  name="weekday-2abbx"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yeabss">*/}
                {/*                  Living Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yeabss"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yeabss">Dining Area</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yabses">Pooja Room</label>*/}
                {/*              </div>*/}
                {/*              <div className="col-lg-6 pd-0">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yabses"*/}
                {/*                  name="weekday-abbx2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yabses">Store Room</label>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}

                {/*          <div*/}
                {/*            id="forth-sec-th-floorbedroom-three"*/}
                {/*            style={{ display: "none" }}*/}
                {/*          >*/}
                {/*            <div className="three-floor-sec">*/}
                {/*              <h5 className="mt-4">Bedroom 3</h5>*/}
                {/*              <div className="floor-th">*/}
                {/*                <div className="selector-check">*/}
                {/*                  <div className="selecotr-item">*/}
                {/*                    <input*/}
                {/*                      type="radio"*/}
                {/*                      id="besecond-floord3pol"*/}
                {/*                      name="bepoldsecond-floor-c"*/}
                {/*                      className="selector-item_radio"*/}
                {/*                    />*/}
                {/*                    <label*/}
                {/*                      htmlFor="besecond-floord3pol"*/}
                {/*                      className="selector-item_label"*/}
                {/*                    >*/}
                {/*                      <img*/}
                {/*                        src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                        alt=""*/}
                {/*                      />{" "}*/}
                {/*                      Luxury*/}
                {/*                    </label>*/}
                {/*                  </div>*/}
                {/*                  <div className="selecotr-item">*/}
                {/*                    <input*/}
                {/*                      type="radio"*/}
                {/*                      id="bed3second-floor3pol"*/}
                {/*                      name="bedsecond-floor-c"*/}
                {/*                      className="selector-item_radio"*/}
                {/*                    />*/}
                {/*                    <label*/}
                {/*                      htmlFor="bed3second-floor3pol"*/}
                {/*                      className="selector-item_label"*/}
                {/*                    >*/}
                {/*                      <img*/}
                {/*                        src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                        alt=""*/}
                {/*                      />{" "}*/}
                {/*                      Cosy*/}
                {/*                    </label>*/}
                {/*                  </div>*/}
                {/*                  <div className="selecotr-item">*/}
                {/*                    <input*/}
                {/*                      type="radio"*/}
                {/*                      id="bed33second-floor3pol"*/}
                {/*                      name="bepoldsecond-floor-c"*/}
                {/*                      className="selector-item_radio"*/}
                {/*                    />*/}
                {/*                    <label*/}
                {/*                      htmlFor="bed33second-floor3pol"*/}
                {/*                      className="selector-item_label"*/}
                {/*                    >*/}
                {/*                      <img*/}
                {/*                        src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                        alt=""*/}
                {/*                      />{" "}*/}
                {/*                      Normal*/}
                {/*                    </label>*/}
                {/*                  </div>*/}
                {/*                  <div className="selecotr-item">*/}
                {/*                    <input*/}
                {/*                      type="radio"*/}
                {/*                      id="bed333second-floor3pol"*/}
                {/*                      name="bepoldsecond-floor-c"*/}
                {/*                      className="selector-item_radio"*/}
                {/*                    />*/}
                {/*                    <label*/}
                {/*                      htmlFor="bed333second-floor3pol"*/}
                {/*                      className="selector-item_label"*/}
                {/*                    >*/}
                {/*                      <img*/}
                {/*                        src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                        alt=""*/}
                {/*                      />*/}
                {/*                      Tight*/}
                {/*                    </label>*/}
                {/*                  </div>*/}
                {/*                </div>*/}
                {/*              </div>*/}

                {/*              <div className="floor-th form-group mt-4">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="besecond-floordroom-three-bath-yeslkj"*/}
                {/*                  name="weekslkjecond-floorday-2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="besecond-floordroom-three-bath-yeslkj">*/}
                {/*                  Bathroom*/}
                {/*                </label>*/}

                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="besecond-floordroom-three-bal-yeslkj"*/}
                {/*                  name="weekslkjecond-floorday-2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="besecond-floordroom-three-bal-yeslkj">*/}
                {/*                  Balcony*/}
                {/*                </label>*/}

                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="besecond-floordroom-three-dress-yeslkj"*/}
                {/*                  name="weekslkjecond-floorday-2"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="besecond-floordroom-three-dress-yeslkj">*/}
                {/*                  Dressing Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <h5 className="mt-4">Common Area</h5>*/}
                {/*              <div className="floor-th form-group mt-4">*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="bath-yesabs"*/}
                {/*                    name="weekday-abbx2"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="bath-yesabs">Kitchen</label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="bal-yesabs"*/}
                {/*                    name="weekday-2abbx"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="bal-yesabs">Kids Room</label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="dress-yesabs"*/}
                {/*                    name="weekday-abbx2"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="dress-yesabs">*/}
                {/*                    Washing Area*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="bath-yesaabs"*/}
                {/*                    name="weekday-2abbax"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="bath-yesaabs">*/}
                {/*                    Common Washroom*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="bal-yeabss"*/}
                {/*                    name="weekday-2abbx"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="bal-yeabss">Lift</label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="dress-yeabss"*/}
                {/*                    name="weekday-2abbx"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="dress-yeabss">*/}
                {/*                    Living Area*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="bath-yeabss"*/}
                {/*                    name="weekday-abbx2"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="bath-yeabss">*/}
                {/*                    Dining Area*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="bal-yabses"*/}
                {/*                    name="weekday-abbx2"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="bal-yabses">Pooja Room</label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="dress-yabses"*/}
                {/*                    name="weekday-abbx2"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="dress-yabses">*/}
                {/*                    Store Room*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}

                {/*          <div*/}
                {/*            id="forth-sec-th-floorbedroom-four"*/}
                {/*            style={{ display: "none" }}*/}
                {/*          >*/}
                {/*            <div className="three-floor-sec">*/}
                {/*              <h5 className="mt-4">Bedroom 4</h5>*/}
                {/*              <div className="floor-th">*/}
                {/*                <div className="selector-check">*/}
                {/*                  <div className="selecotr-item">*/}
                {/*                    <input*/}
                {/*                      type="radio"*/}
                {/*                      id="flloloosecond-floorr-two1qwvs"*/}
                {/*                      name="flloloor-tsecond-floorwobjgh"*/}
                {/*                      className="selector-item_radio"*/}
                {/*                    />*/}
                {/*                    <label*/}
                {/*                      htmlFor="flloloosecond-floorr-two1qwvs"*/}
                {/*                      className="selector-item_label"*/}
                {/*                    >*/}
                {/*                      <img*/}
                {/*                        src="https://nuvanco.com/assets/images/luxury.png"*/}
                {/*                        alt=""*/}
                {/*                      />{" "}*/}
                {/*                      Luxury*/}
                {/*                    </label>*/}
                {/*                  </div>*/}
                {/*                  <div className="selecotr-item">*/}
                {/*                    <input*/}
                {/*                      type="radio"*/}
                {/*                      id="flloloosecond-floorr-two2qwvs"*/}
                {/*                      name="flloloor-tsecond-floorwobjgh"*/}
                {/*                      className="selector-item_radio"*/}
                {/*                    />*/}
                {/*                    <label*/}
                {/*                      htmlFor="flloloosecond-floorr-two2qwvs"*/}
                {/*                      className="selector-item_label"*/}
                {/*                    >*/}
                {/*                      <img*/}
                {/*                        src="https://nuvanco.com/assets/images/cosy.png"*/}
                {/*                        alt=""*/}
                {/*                      />{" "}*/}
                {/*                      Cosy*/}
                {/*                    </label>*/}
                {/*                  </div>*/}
                {/*                  <div className="selecotr-item">*/}
                {/*                    <input*/}
                {/*                      type="radio"*/}
                {/*                      id="flloloosecond-floorr-two3qwvs"*/}
                {/*                      name="flloloor-tsecond-floorwobjgh"*/}
                {/*                      className="selector-item_radio"*/}
                {/*                    />*/}
                {/*                    <label*/}
                {/*                      htmlFor="flloloosecond-floorr-two3qwvs"*/}
                {/*                      className="selector-item_label"*/}
                {/*                    >*/}
                {/*                      <img*/}
                {/*                        src="https://nuvanco.com/assets/images/normal.png"*/}
                {/*                        alt=""*/}
                {/*                      />{" "}*/}
                {/*                      Normal*/}
                {/*                    </label>*/}
                {/*                  </div>*/}
                {/*                  <div className="selecotr-item">*/}
                {/*                    <input*/}
                {/*                      type="radio"*/}
                {/*                      id="flloloosecond-floorr-two4qwvs"*/}
                {/*                      name="flloloor-tsecond-floorwobjgh"*/}
                {/*                      className="selector-item_radio"*/}
                {/*                    />*/}
                {/*                    <label*/}
                {/*                      htmlFor="flloloosecond-floorr-two4qwvs"*/}
                {/*                      className="selector-item_label"*/}
                {/*                    >*/}
                {/*                      <img*/}
                {/*                        src="https://nuvanco.com/assets/images/tity.png"*/}
                {/*                        alt=""*/}
                {/*                      />*/}
                {/*                      Tight*/}
                {/*                    </label>*/}
                {/*                  </div>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*              <div className="floor-th form-group mt-4">*/}
                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bath-yes-batsecond-floorh-tlpidowonevnt"*/}
                {/*                  name="bedslpidecond-floor-two-one-2arv"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bath-yes-batsecond-floorh-tlpidowonevnt">*/}
                {/*                  Bathroom*/}
                {/*                </label>*/}

                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="bal-yes-batsecond-floorh-tlpidowonevnt"*/}
                {/*                  name="webedlpidsecond-floor-two-onearv"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="bal-yes-batsecond-floorh-tlpidowonevnt">*/}
                {/*                  Balcony*/}
                {/*                </label>*/}

                {/*                <input*/}
                {/*                  type="checkbox"*/}
                {/*                  id="dress-yes-batsecond-floorh-tlpidowonevnt"*/}
                {/*                  name="bseclpidond-floored-two-one-2arv"*/}
                {/*                  value="Saturday"*/}
                {/*                />*/}
                {/*                <label htmlFor="dress-yes-batsecond-floorh-tlpidowonevnt">*/}
                {/*                  Dressing Area*/}
                {/*                </label>*/}
                {/*              </div>*/}
                {/*              <h5 className="mt-4">Common Area</h5>*/}
                {/*              <div className="floor-th form-group mt-4">*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="bath-yesabs"*/}
                {/*                    name="weekday-abbx2"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="bath-yesabs">Kitchen</label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="bal-yesabs"*/}
                {/*                    name="weekday-2abbx"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="bal-yesabs">Kids Room</label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="dress-yesabs"*/}
                {/*                    name="weekday-abbx2"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="dress-yesabs">*/}
                {/*                    Washing Area*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="bath-yesaabs"*/}
                {/*                    name="weekday-2abbax"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="bath-yesaabs">*/}
                {/*                    Common Washroom*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="bal-yeabss"*/}
                {/*                    name="weekday-2abbx"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="bal-yeabss">Lift</label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="dress-yeabss"*/}
                {/*                    name="weekday-2abbx"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="dress-yeabss">*/}
                {/*                    Living Area*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="bath-yeabss"*/}
                {/*                    name="weekday-abbx2"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="bath-yeabss">*/}
                {/*                    Dining Area*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="bal-yabses"*/}
                {/*                    name="weekday-abbx2"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="bal-yabses">Pooja Room</label>*/}
                {/*                </div>*/}
                {/*                <div className="col-lg-6 pd-0">*/}
                {/*                  <input*/}
                {/*                    type="checkbox"*/}
                {/*                    id="dress-yabses"*/}
                {/*                    name="weekday-abbx2"*/}
                {/*                    value="Saturday"*/}
                {/*                  />*/}
                {/*                  <label htmlFor="dress-yabses">*/}
                {/*                    Store Room*/}
                {/*                  </label>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  <div className="btn-sav-ex">*/}
                {/*    <button*/}
                {/*      type="button"*/}
                {/*      className="btn btn-default prev-step"*/}
                {/*      id="p-btn2"*/}
                {/*      style={{*/}
                {/*        backgroundColor: "#f0f0f0",*/}
                {/*        fontSize: "18px",*/}
                {/*        fontWeight: "500",*/}
                {/*      }}*/}
                {/*    >*/}
                {/*      Previous*/}
                {/*    </button>*/}

                {/*    <button*/}
                {/*      type="button"*/}
                {/*      className="btn btn-primary next-step"*/}
                {/*      id="n-btn3"*/}
                {/*      style={{ fontWeight: "500" }}*/}
                {/*    >*/}
                {/*      Save and continue*/}
                {/*    </button>*/}
                {/*  </div>*/}
                {/*</div>*/}
                <div className="tab-pane" role="tabpanel" id="complete">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Write More About Your Requirement
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <span className="choose_file propery-sy">
                      <input
                        type="file"
                        id="attach_file"
                        name="attach_file"
                        accept="image/webp, image/jpeg"
                      />
                    </span>
                  </div>
                  <div className="sub-lat">
                    <button type="button" className="btn btn-primary next-step">
                      Submit
                    </button>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Test;
