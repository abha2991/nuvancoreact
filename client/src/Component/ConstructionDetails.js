import React, { useState } from "react";

import FloorDetails from "./FloorDetails";

const ConstructionDetails = (props) => {
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
      getDiv1.style.display = "block";
      getDiv2.style.display = "block";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }
    if (optionValue == "second-floorbedroom-three") {
      getDiv1.style.display = "block";
      getDiv2.style.display = "block";
      getDiv3.style.display = "block";
      getDiv4.style.display = "none";
    }
    if (optionValue == "second-floorbedroom-four") {
      getDiv1.style.display = "block";
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
      getDiv1.style.display = "block";
      getDiv2.style.display = "block";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }
    if (optionValue == "third-floorbedroom-three") {
      getDiv1.style.display = "block";
      getDiv2.style.display = "block";
      getDiv3.style.display = "block";
      getDiv4.style.display = "none";
    }
    if (optionValue == "third-floorbedroom-four") {
      getDiv1.style.display = "block";
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
    optionValue = document.getElementById("forth-floor-roomset")?.value;

    getDiv1 = document.getElementById("forth-floorbedroom-one");
    getDiv2 = document.getElementById("forth-floorbedroom-two");
    getDiv3 = document.getElementById("forth-floorbedroom-three");
    getDiv4 = document.getElementById("forth-floorbedroom-four");

    if (!optionValue) {
      getDiv1.style.display = "none";
      getDiv2.style.display = "none";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }

    if (optionValue == "forth-floorbedroom-one") {
      getDiv1.style.display = "block";
      getDiv2.style.display = "none";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }
    if (optionValue == "forth-floorbedroom-two") {
      getDiv1.style.display = "block";
      getDiv2.style.display = "block";
      getDiv3.style.display = "none";
      getDiv4.style.display = "none";
    }
    if (optionValue == "forth-floorbedroom-three") {
      getDiv1.style.display = "block";
      getDiv2.style.display = "block";
      getDiv3.style.display = "block";
      getDiv4.style.display = "none";
    }
    if (optionValue == "forth-floorbedroom-four") {
      getDiv1.style.display = "block";
      getDiv2.style.display = "block";
      getDiv3.style.display = "block";
      getDiv4.style.display = "block";
    }
  };

  // const [constructionDetails, setConstructionDetails] = useState({
  //   noOfBuilding: "",
  //   buildingType: "",
  //   parking: "",
  //   guardRoom: "",
  //   flat: "",
  //   noOfBed: "",
  //   luxuryBed: "",
  //   cosyBed: "",
  //   normalBed: "",
  //   tityBed: "",
  //   bathroom: "",
  //   balcony: "",
  //   dressing: "",
  //   kitchen: "",
  //   kids: "",
  //   washing: "",
  //   commonWashroom: "",
  //   lift: "",
  //   livingRoom: "",
  //   dining: "",
  //   poojaRoom: "",
  //   storeRoom: "",
  // });
  return (
    <>
      <div className="tab-pane" role="tabpanel" id="step3">
        <h2>
          Construction Requirement{" "}
          <span>(Describe about your desired construction requirement)</span>
        </h2>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Number Of Floors</label>
          <select
            onChange={() => displayFunc("result")}
            id="result"
            name="result"
            style={{
              fontSize: "20px!important",
              margin: "3px!important",
            }}
          >
            <option value=""> </option>
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
          </select>
        </div>
        <div id="one" style={{ display: "none" }}>
          <div className="three-floor-sec">
            <h4>Ground Floor</h4>
            <div className="floor-th-a">
              <div id="flat-sh" className="floor-th">
                <input
                  type="radio"
                  className="parking-o"
                  id="chec"
                  name="weekday-2"
                  value="Saturday"
                />
                <label htmlFor="chec">Parking</label>

                <input
                  type="radio"
                  className="parking-g"
                  id="check"
                  name="weekday-2"
                  value="Saturday"
                />
                <label htmlFor="check">Parking with Guardroom</label>

                <input
                  className="flat-class"
                  type="radio"
                  id="flat-show"
                  name="weekday-2"
                  value="Saturday"
                />
                <label className="aja" htmlFor="flat-show">
                  Flat
                </label>
              </div>
            </div>
          </div>
        </div>

        <div id="two" style={{ display: "none" }}>
          <FloorDetails
            floorNo={1}
            floor={"First Floor"}
            id={"second-floor-room"}
            bedRoomId={"second-floor-roomset"}
            displayFunction={displaySecondFloorBedroom}
            value1={"second-floorbedroom-one"}
            value2={"second-floorbedroom-two"}
            value3={"second-floorbedroom-three"}
            value4={"second-floorbedroom-four"}
          />
        </div>

        <div id="three" className="three-flrset" style={{ display: "none" }}>
          <FloorDetails
            floorNo={2}
            floor={"Second Floor"}
            id={"second-floor-room"}
            bedRoomId={"third-floor-roomset"}
            displayFunction={displayThirdFloorBedroom}
            value1={"third-floorbedroom-one"}
            value2={"third-floorbedroom-two"}
            value3={"third-floorbedroom-three"}
            value4={"third-floorbedroom-four"}
          />
        </div>

        <div id="four" style={{ display: "none" }}>
          <FloorDetails
            floorNo={3}
            floor={"Third Floor"}
            id={"second-floor-room"}
            bedRoomId={"forth-floor-roomset"}
            displayFunction={displayFourthFloorBedroom}
            value1={"forth-floorbedroom-one"}
            value2={"forth-floorbedroom-two"}
            value3={"forth-floorbedroom-three"}
            value4={"forth-floorbedroom-four"}
          />
        </div>
        <div className="btn-sav-ex">
          <button
            type="button"
            className="btn btn-default prev-step"
            id="p-btn2"
            style={{
              backgroundColor: "#f0f0f0",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Previous
          </button>

          <button
            type="button"
            className="btn btn-primary next-step"
            id="n-btn3"
            style={{ fontWeight: "500" }}
          >
            Save and continue
          </button>
        </div>
      </div>
    </>
  );
};

export default ConstructionDetails;
