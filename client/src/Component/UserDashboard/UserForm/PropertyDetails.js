import React, { useEffect, useState } from "react";
import useUser from "../../../hooks/useUser";

import { useLocation } from "react-router-dom";

const PropertyDetails = (props) => {
  const { user } = useUser();

  const location = useLocation();
  let sessionId = JSON.parse(sessionStorage.getItem("basicId"));
  let parsedId = sessionId?.basic_id;
  console.log({ sessionId });

  let BasicId = location?.state?.basicId;

  if (BasicId) {
    BasicId = BasicId;
  } else {
    BasicId = parsedId;
  }

  const [data, setData] = useState();

  const getPropertyDetailsByBasicId = async () => {
    const res = await fetch("http://localhost:8001/user-property-details-id", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: BasicId,
      }),
    });
    const response = await res.json();

    if (res.status === 200) {
      setData(response?.data);
    }
  };

  useEffect(() => {
    getPropertyDetailsByBasicId().then((r) => console.log(r));
  }, [BasicId]);
  const [propertyId, setPropertyId] = useState();
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

  useEffect(() => {
    if (data) {
      setPropertyDetails({
        topSize: data?.[0]?.pd_top_size ?? "",
        topName: data?.[0]?.pd_top_name ?? "",
        rightSize: data?.[0]?.pd_right_size ?? "",
        rightName: data?.[0]?.pd_right_name ?? "",
        bottomSize: data?.[0]?.pd_bottom_size ?? "",
        bottomName: data?.[0]?.pd_bottom_name ?? "",
        leftSize: data?.[0]?.pd_left_size ?? "",
        leftName: data?.[0]?.pd_left_name ?? "",
        streetFacing: data?.[0]?.pd_street_facing ?? "",
        builtArea: data?.[0]?.pd_built_area ?? "",
      });
    }
  }, [data]);

  let name1, value1;
  const handlePropertyDetails = (e) => {
    name1 = e.target.name;
    value1 = e.target.value;

    setPropertyDetails({ ...propertyDetails, [name1]: value1 });
  };

  const saveDetails = () => {
    let elementSize1 = document.getElementById("dimension-top");
    let elementName1 = document.getElementById("dimension-drop-top");
    elementSize1.value = propertyDetails.topSize;
    elementName1.value = propertyDetails.topName;
    let elementSize2 = document.getElementById("dimension-right");
    let elementName2 = document.getElementById("dimension-drop-right");
    elementSize2.value = propertyDetails.rightSize;
    elementName2.value = propertyDetails.rightName;
    let elementSize3 = document.getElementById("dimension-bottom");
    let elementName3 = document.getElementById("dimension-drop-bottom");
    elementSize3.value = propertyDetails.bottomSize;
    elementName3.value = propertyDetails.bottomName;
    let elementSize4 = document.getElementById("dimension-left");
    let elementName4 = document.getElementById("dimension-drop-left");
    elementSize4.value = propertyDetails.leftSize;
    elementName4.value = propertyDetails.leftName;
    let element5 = document.getElementById("direction-property");
    element5.value = propertyDetails.streetFacing;

    let save = document.getElementById("save");
    save.setAttribute("data-dismiss", "modal");
    save.click();
  };
  const getPropertyDetails = async () => {
    let element = document.querySelector("#myTab > li:nth-child(2) > a");
    let element1 = document.querySelector("#myTab > li:nth-child(3) > a");
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
        propertyDetailsBasicId: BasicId,
      }),
    });
    const response = await res.json();
    setPropertyId(response?.id);

    if (res.status === 400 || !response) {
      window.alert(response.message);
    } else if (res.status === 200) {
      element.classList.add("check-icon", "active");
      if (response?.bookingStatus?.[0]?.booking_status === "Complete") {
        sessionStorage.removeItem("basicId");
      }
      window.alert(response.message);
      element1.click();
    }
  };
  return (
    <>
      <div className="tab-pane" role="tabpanel" id="step2">
        <h2>
          Property Details (Describe about your property, where you are planning
          to construct)
        </h2>
        <div className="form-group pofre">
          <button
            type="button"
            className="btn btn-primary posab"
            data-toggle="modal"
            data-target="#fillarea"
          ></button>
          <label htmlFor="location">
            Choose Your Property Dimensions ( Top )
          </label>
          <span id="step1LocationError" className="text-danger">
            *
          </span>
          <div className="input-sec">
            <input
              type="text"
              className="form-control"
              id="dimension-top"
              aria-describedby="emailHelp"
              placeholder="30"
              name="topSize"
              //value={propertyDetails.topSize}
              disabled="true"
              // onChange={handlePropertyDetails}
            />
            <input
              type="text"
              className="form-control"
              id="dimension-drop-top"
              aria-describedby="emailHelp"
              placeholder="Property"
              name="topName"
              //value={propertyDetails.topName}
              disabled="true"
              // onChange={handlePropertyDetails}
            />
          </div>
        </div>
        <div className="form-group pofre">
          <button
            type="button"
            className="btn btn-primary posab"
            data-toggle="modal"
            data-target="#fillarea"
          ></button>
          <label htmlFor="location">
            Choose Your Property Dimensions ( Right )
          </label>
          <span id="step1LocationError" className="text-danger">
            *
          </span>
          <div className="input-sec">
            <input
              type="text"
              className="form-control"
              id="dimension-right"
              aria-describedby="emailHelp"
              placeholder="30"
              name="rightSize"
              //value={propertyDetails.rightSize}
              //onChange={handlePropertyDetails}
              disabled="true"
            />
            <input
              type="text"
              className="form-control"
              id="dimension-drop-right"
              aria-describedby="emailHelp"
              placeholder="Property"
              name="rightName"
              //value={propertyDetails.rightName}
              // onChange={handlePropertyDetails}
              disabled="true"
            />
          </div>
        </div>
        <div className="form-group pofre">
          <button
            type="button"
            className="btn btn-primary posab"
            data-toggle="modal"
            data-target="#fillarea"
          ></button>
          <label htmlFor="location">
            Choose Your Property Dimensions ( Bottom )
          </label>
          <span id="step1LocationError" className="text-danger">
            *
          </span>
          <div className="input-sec">
            <input
              type="text"
              className="form-control"
              id="dimension-bottom"
              aria-describedby="emailHelp"
              placeholder="30"
              name="bottomSize"
              //value={propertyDetails.bottomSize}
              //onChange={handlePropertyDetails}
              disabled="true"
            />
            <input
              type="text"
              className="form-control"
              id="dimension-drop-bottom"
              aria-describedby="emailHelp"
              placeholder="Property"
              name="bottomName"
              //value={propertyDetails.bottomName}
              //onChange={handlePropertyDetails}
              disabled="true"
            />
          </div>
        </div>
        <div className="form-group pofre">
          <button
            type="button"
            className="btn btn-primary posab"
            data-toggle="modal"
            data-target="#fillarea"
          ></button>
          <label htmlFor="location">
            Choose Your Property Dimensions ( Left )
          </label>
          <span id="step1LocationError" className="text-danger">
            *
          </span>
          <div className="input-sec">
            <input
              type="text"
              className="form-control"
              id="dimension-left"
              aria-describedby="emailHelp"
              placeholder="30"
              name="leftSize"
              //value={propertyDetails.leftSize}
              disabled="true"
              // onChange={handlePropertyDetails}
            />
            <input
              type="text"
              className="form-control"
              id="dimension-drop-left"
              aria-describedby="emailHelp"
              placeholder="Property"
              name="leftName"
              //value={propertyDetails.leftName}
              disabled="true"
              // onChange={handlePropertyDetails}
            />
          </div>
        </div>

        <div className="form-group pofre">
          <button
            type="button"
            className="btn btn-primary posab"
            data-toggle="modal"
            data-target="#fillarea"
          ></button>
          <label htmlFor="City">Directions Street Facing</label>
          <span id="step1LocationError" className="text-danger">
            *
          </span>
          <input
            type="text"
            className="form-control"
            id="direction-property"
            aria-describedby="emailHelp"
            placeholder="North"
            disabled
            name="streetFacing"
            // value={propertyDetails.streetFacing}
            //onChange={handlePropertyDetails}
            disbaled="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">
            Desired Built-Up Area With Iteration of 5%
          </label>
          <span id="step1LocationError" className="text-danger">
            *
          </span>
          <select
            className="form-control"
            id=""
            name="builtArea"
            value={propertyDetails.builtArea}
            onChange={handlePropertyDetails}
          >
            <option value=""></option>
            <option>1% - 50%</option>
            <option>50 - 100%</option>
          </select>
        </div>
        <div className="btn-sav-ex">
          <button
            type="button"
            className="btn btn-default prev-step"
            id="p-btn1"
          >
            Previous
          </button>

          <button
            type="button"
            className="btn btn-primary next-step"
            id="n-btn2"
            onClick={() => getPropertyDetails()}
          >
            Save and continue
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="fillarea"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog pop-fill" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2>
                Choose Your Property Dimensions and What Next Your Property
                (Other Property / Street)
              </h2>
            </div>
            <div className="modal-body">
              {/*<input className="fill-value-posab" type="button" value="Save" />*/}
              <button
                className="fill-value-posab"
                id="save"
                onClick={saveDetails}
              >
                Save
              </button>
              <button
                type="button"
                className="close mocl"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="form-img">
                <div className="form-group pos-ab pro-ab-1">
                  <input
                    type="text"
                    className="form-control"
                    id="dimension-left-fill"
                    aria-describedby="emailHelp"
                    placeholder="30"
                    name="leftSize"
                    value={propertyDetails.leftSize}
                    onChange={handlePropertyDetails}
                  />
                  <select
                    className="form-control"
                    id="dimension-drop-left-fill"
                    name="leftName"
                    value={propertyDetails.leftName}
                    onChange={handlePropertyDetails}
                  >
                    <option value=""></option>
                    <option value="Other Property">Other Property</option>
                    <option value="Street">Street</option>
                  </select>
                </div>
                <div className="form-group pos-ab pro-ab-2">
                  <input
                    type="text"
                    className="form-control"
                    id="dimension-top-fill"
                    aria-describedby="emailHelp"
                    placeholder="30"
                    name="topSize"
                    value={propertyDetails.topSize}
                    onChange={handlePropertyDetails}
                  />
                  <select
                    className="form-control"
                    id="dimension-drop-top-fill"
                    name="topName"
                    value={propertyDetails.topName}
                    onChange={handlePropertyDetails}
                  >
                    <option value=""></option>
                    <option value="Other Property">Other Property</option>
                    <option value="Street">Street</option>
                  </select>
                  <select
                    className="form-control"
                    id="direction-property-fill"
                    name="streetFacing"
                    value={propertyDetails.streetFacing}
                    onChange={handlePropertyDetails}
                  >
                    <option value=""></option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                  </select>
                </div>
                <div className="form-group pos-ab pro-ab-3">
                  <input
                    type="text"
                    className="form-control"
                    id="dimension-right-fill"
                    aria-describedby="emailHelp"
                    placeholder="30"
                    name="rightSize"
                    value={propertyDetails.rightSize}
                    onChange={handlePropertyDetails}
                  />
                  <select
                    className="form-control"
                    id="dimension-drop-right-fill"
                    name="rightName"
                    value={propertyDetails.rightName}
                    onChange={handlePropertyDetails}
                  >
                    <option value=""></option>
                    <option value="Other Property">Other Property</option>
                    <option value="Street">Street</option>
                  </select>
                </div>
                <div className="form-group pos-ab pro-ab-4">
                  <input
                    type="text"
                    className="form-control"
                    id="dimension-bottom-fill"
                    aria-describedby="emailHelp"
                    placeholder="30"
                    name="bottomSize"
                    value={propertyDetails.bottomSize}
                    onChange={handlePropertyDetails}
                  />
                  <select
                    className="form-control"
                    id="dimension-drop-bottom-fill"
                    name="bottomName"
                    value={propertyDetails.bottomName}
                    onChange={handlePropertyDetails}
                  >
                    <option value=""></option>
                    <option value="Other Property">Other Property</option>
                    <option value="Street">Street</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
