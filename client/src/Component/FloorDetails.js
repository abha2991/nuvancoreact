import BedRoomSpecifications from "./BedRoomSpecifications";

import React from "react";

const FloorDetails = (props) => {
  return (
    <>
      <div className="three-floor-sec">
        {/*<h4>Second Floor</h4>*/}

        <h4>{props.floor}</h4>
        <div id={props.id}>
          <div className="form-group mt-5">
            <label htmlFor="exampleFormControlSelect1">
              Number Of Bedrooms
            </label>
            <select
              id={props.bedRoomId}
              name="secondbedroom"
              onChange={() => props.displayFunction(props.bedRoomId)}
            >
              <option value=""> </option>
              <option value={props.value1}>1</option>
              <option value={props.value2}>2</option>
              <option value={props.value3}>3</option>
              <option value={props.value4}>4</option>
            </select>
          </div>

          <div id={props.value1} style={{ display: "none" }}>
            <div className="three-floor-sec">
              <h5 className="mt-4">Bedroom 1</h5>
              <BedRoomSpecifications
                value={props.value1}
                id={props.id}
                index={"one"}
                floorNo={props.floorNo}
                bedRoomNo={1}
              />
            </div>
          </div>

          <div id={props.value2} style={{ display: "none" }}>
            {/*<h5 className="mt-4">Bedroom 1</h5>*/}
            {/*<BedRoomSpecifications2 />*/}
            <h5 className="mt-4">Bedroom 2</h5>
            <BedRoomSpecifications
              value={props.value2}
              id={props.id}
              index={"two"}
              floorNo={props.floorNo}
              bedRoomNo={2}
            />
          </div>

          <div id={props.value3} style={{ display: "none" }}>
            <div className="three-floor-sec">
              <h5 className="mt-4">Bedroom 3</h5>
              <BedRoomSpecifications
                value={props.value3}
                id={props.id}
                index={"three"}
                floorNo={props.floorNo}
                bedRoomNo={3}
              />
            </div>
          </div>

          <div id={props.value4} style={{ display: "none" }}>
            <div className="three-floor-sec">
              <h5 className="mt-4">Bedroom 4</h5>
              <BedRoomSpecifications
                value={props.value4}
                id={props.id}
                index={"four"}
                floorNo={props.floorNo}
                bedRoomNo={4}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloorDetails;
