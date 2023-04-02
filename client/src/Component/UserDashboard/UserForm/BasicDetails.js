import React, { useState } from "react";
import useUser from "../../../hooks/useUser";
import PropertyDetails from "./PropertyDetails";
import AdditionalDetails from "./AdditionalDetails";
import ConstructionDetails from "./ConstructionDetails";
import { useNavigate } from "react-router";

const BasicDetails = () => {
  const { user } = useUser();

  const navigate = useNavigate();

  const [basicId, setBasicId] = useState();
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

  const getBasicDetails = async () => {
    const { location, city, startPlanning, propertyStatus } = basicDetails;
    let element = document.querySelector("#myTab > li:nth-child(1) > a");
    let element1 = document.querySelector("#myTab > li:nth-child(2) > a");

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

    if (res.status === 400 || !response) {
      window.alert(response.message);
    } else if (res.status === 200) {
      element.classList.add("check-icon");
      window.alert(response.message);
      element1.click();
    }
  };
  return (
    <>
      <div className="tabs-pro form-style">
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
                <option value="">Select</option>

                <option value="Immediate">Immediate</option>
                <option value="Within 1 Month">Within 1 Month</option>
                <option value="1 - 3 Months">1 - 3 Months</option>
                <option value="3 - 6 Months">3 - 6 Months</option>
                <option value="6 Months - 1 Year">6 Months - 1 Year</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Property Status</label>{" "}
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
                <option value="">Select</option>
                <option value="Owned">Owned</option>
                <option value="Exploring">Exploring</option>
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
          <ConstructionDetails basicId={basicId} />
          <AdditionalDetails basicId={basicId} />

          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
};

export default BasicDetails;
