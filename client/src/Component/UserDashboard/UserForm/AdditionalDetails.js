import React, { useState, useRef } from "react";
import useUser from "../../../hooks/useUser";
import { useLocation } from "react-router-dom";

const AdditionalDetails = (props) => {
  const { user } = useUser();
  const inputRef = useRef(null);
  const location = useLocation();
  let sessionId = JSON.parse(sessionStorage.getItem("basicId"));
  let parsedId = sessionId?.basic_id;
  let BasicId = location?.state?.basicId;

  let expirationTime = sessionId?.expirationDate;

  if (new Date(expirationTime) > new Date()) {
  } else {
    sessionStorage.removeItem("basicId");
  }

  if (BasicId) {
    BasicId = BasicId;
  } else {
    BasicId = parsedId;
  }

  const [additionalDetails, setAdditionalDetails] = useState({
    additionalRequirement: "No Additional Requirements",
  });

  let name1, value1;
  const handleAdditionalDetails = (e) => {
    name1 = e.target.name;
    value1 = e.target.value;

    setAdditionalDetails({ ...additionalDetails, [name1]: value1 });
  };

  const getAdditionalDetails = async () => {
    let element = document.querySelector("#myTab > li:nth-child(4) > a");

    const formData = new FormData();
    let inputFile = inputRef?.current?.files[0];

    if (inputFile) {
      formData.append("file", inputRef.current.files[0]);
    } else {
    }
    const { additionalRequirement } = additionalDetails;

    formData.append(
      "additionalRequirement",
      additionalDetails.additionalRequirement
    );
    formData.append("additionalCustomerId", user?.[0]?.customer_id);
    formData.append("additionalBasicId", BasicId);

    const res = await fetch(
      "http://localhost:8001/user-additional-details/AdditionalRequirements",
      {
        method: "POST",
        credentials: "include",

        body: formData,
      }
    );
    const response = await res.json();

    if (res.status === 400 || !response) {
      window.alert(response.message);
    } else if (res.status === 200) {
      element.classList.add("check-icon", "active");
      window.alert(response.message);
      if (response?.bookingStatus?.[0]?.booking_status === "Complete") {
        sessionStorage.removeItem("basicId");
        window.location.reload();
      }
    }
  };
  return (
    <>
      <div className="tab-pane" role="tabpanel" id="complete">
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            Write More About Your Requirement
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="additionalRequirement"
            value={additionalDetails.additionalRequirement}
            onChange={handleAdditionalDetails}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1" className="mt-4">
            <small>Upload Sample Design (If you wish to share with us)</small>
          </label>
          <span>
            <input
              type="file"
              id="attach_file"
              name="attach_file"
              accept="image/webp, image/jpeg"
              multiple
              ref={inputRef}
            />
          </span>
        </div>
        <div className="sub-lat">
          <button
            type="button"
            className="btn btn-primary next-step"
            onClick={() => getAdditionalDetails()}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AdditionalDetails;
