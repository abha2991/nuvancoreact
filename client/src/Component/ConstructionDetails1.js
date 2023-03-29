import FloorDetails from "./FloorDetails";
import React, { useState } from "react";
import BedRoomSpecifications from "./BedRoomSpecifications";
import luxury from "../images/luxury.png";
import normal from "../images/normal.png";
import tight from "../images/tity.png";

const ConstructionDetails1 = (props) => {
  const specifications = {
    bedRoomNo: props.bedRoomNo,
    foorNo: props.floorNo,
    floor: props.index,
    luxury: "",
    cosy: "",
    normal: "",
    tight: "",
    bathroom: "",
    balcony: "",
    dressingArea: "",
    kitchen: "",
    kidsArea: "",
    washingArea: "",
    washingRoom: "",
    lift: "",
    livingArea: "",
    diningArea: "",
    poojaRoom: "",
    storeRoom: "",
  };

  const [data, setData] = useState([specifications]);

  let name, value;

  const handleInputs = (i) => (e) => {
    name = e.target.name;
    value = e.target.value;
    setData((existing) => {
      existing[i] = { ...existing[i], [name]: value };

      return [...existing];
    });
  };

  const addRow = () => {
    let getDiv1 = document.getElementById("forth-floorbedroom-one");
    getDiv1.style.display = "block";
    setData((existing) => [...existing, specifications]);
  };

  console.log({ data });
  return (
    <>
      <div className="three-floor-sec">
        <h4>{props.floor}</h4>
        <div id={props.id}>
          <div className="form-group mt-5">
            <label htmlFor="exampleFormControlSelect1">
              Number Of Bedrooms
            </label>
            <select
              id={props.bedRoomId}
              name="secondbedroom"
              //onChange={() => props.displayFunction(props.bedRoomId)}

              onChange={() => addRow()}
            >
              <option value=""> </option>
              <option value={props.value1}>1</option>
              <option value={props.value2}>2</option>
              <option value={props.value3}>3</option>
              <option value={props.value4}>4</option>
            </select>
          </div>
          <div id={props.value1} style={{ display: "none" }}>
            {data.map((obj, i) => (
              <div key={i}>
                <div className="three-floor-sec">
                  <h5 className="mt-4">Bedroom {i + 1}</h5>
                  <div className="floor-th">
                    <div className="selector-check">
                      <div className="selecotr-item">
                        <input
                          type="radio"
                          //id="floor1"
                          id={"floor1" + "-" + props.id + "-" + props.index}
                          name="luxury"
                          value={obj.luxury}
                          onChange={handleInputs(i)}
                          className="selector-item_radio"
                        />
                        <label
                          htmlFor={
                            "floor1" + "-" + props.id + "-" + props.index
                          }
                          className="selector-item_label"
                        >
                          <img src={luxury} alt="" /> Luxury
                        </label>
                      </div>
                      <div className="selecotr-item">
                        <input
                          type="radio"
                          //id="floor2"
                          id={"floor2" + "-" + props.id + "-" + props.index}
                          name="cosy"
                          value={obj.cosy}
                          onChange={handleInputs(i)}
                          className="selector-item_radio"
                        />
                        <label htmlFor="floor2" className="selector-item_label">
                          <img
                            src={"floor2" + "-" + props.id + "-" + props.index}
                            alt=""
                          />{" "}
                          Cosy
                        </label>
                      </div>
                      <div className="selecotr-item">
                        <input
                          type="radio"
                          //id="floor3"
                          id={"floor3" + "-" + props.id + "-" + props.index}
                          name="normal"
                          value={obj.normal}
                          onChange={handleInputs(i)}
                          className="selector-item_radio"
                        />
                        <label
                          htmlFor={
                            "floor3" + "-" + props.id + "-" + props.index
                          }
                          className="selector-item_label"
                        >
                          <img src={normal} alt="" /> Normal
                        </label>
                      </div>
                      <div className="selecotr-item">
                        <input
                          type="radio"
                          //id="floor4"
                          id={"floor4" + "-" + props.id + "-" + props.index}
                          name="tight"
                          value={obj.tight}
                          onChange={handleInputs(i)}
                          className="selector-item_radio"
                        />
                        <label
                          htmlFor={
                            "floor4" + "-" + props.id + "-" + props.index
                          }
                          className="selector-item_label"
                        >
                          <img src={tight} alt="" />
                          Tight
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="floor-th form-group mt-4">
                    <input
                      type="checkbox"
                      //id="bath-yes"
                      id={"bath-yes" + "-" + props.id + "-" + props.index}
                      name="bathroom"
                      value={obj.bathroom}
                      onChange={handleInputs(i)}
                    />
                    <label
                      htmlFor={"bath-yes" + "-" + props.id + "-" + props.index}
                    >
                      Bathroom
                    </label>

                    <input
                      type="checkbox"
                      //id="bal-yes"
                      id={"bal-yes" + "-" + props.id + "-" + props.index}
                      name="balcony"
                      value={obj.balcony}
                      onChange={handleInputs(i)}
                    />
                    <label
                      htmlFor={"bal-yes" + "-" + props.id + "-" + props.index}
                    >
                      Balcony
                    </label>

                    <input
                      type="checkbox"
                      //id="dress-yes"
                      id={"dress-yes" + "-" + props.id + "-" + props.index}
                      name="dressingArea"
                      value={obj.dressingArea}
                      onChange={handleInputs(i)}
                    />
                    <label
                      htmlFor={"dress-yes" + "-" + props.id + "-" + props.index}
                    >
                      Dressing Area
                    </label>
                  </div>
                  <h5 className="mt-4">Common Area</h5>
                  <div className="floor-th form-group mt-4">
                    <div className="col-lg-6 pd-0">
                      <input
                        type="checkbox"
                        //id="bath-yesabs"
                        id={"bath-yesabs" + "-" + props.id + "-" + props.index}
                        name="kitchen"
                        value={obj.kitchen}
                        onChange={handleInputs(i)}
                      />
                      <label
                        htmlFor={
                          "bath-yesabs" + "-" + props.id + "-" + props.index
                        }
                      >
                        Kitchen
                      </label>
                    </div>
                    <div className="col-lg-6 pd-0">
                      <input
                        type="checkbox"
                        //id="bal-yesabs"
                        id={"bal-yesabs" + "-" + props.id + "-" + props.index}
                        name="kidsArea"
                        value={obj.kidsArea}
                        onChange={handleInputs(i)}
                      />
                      <label
                        htmlFor={
                          "bal-yesabs" + "-" + props.id + "-" + props.index
                        }
                      >
                        Kids Room
                      </label>
                    </div>
                    <div className="col-lg-6 pd-0">
                      <input
                        type="checkbox"
                        //id="dress-yesabs"
                        id={"dress-yesabs" + "-" + props.id + "-" + props.index}
                        name="washingArea"
                        value={obj.washingArea}
                        onChange={handleInputs(i)}
                      />
                      <label
                        htmlFor={
                          "dress-yesabs" + "-" + props.id + "-" + props.index
                        }
                      >
                        Washing Area
                      </label>
                    </div>
                    <div className="col-lg-6 pd-0">
                      <input
                        type="checkbox"
                        //id="bath-yesaabs"
                        id={"bath-yesaabs" + "-" + props.id + "-" + props.index}
                        name="washingRoom"
                        value={obj.washingRoom}
                        onChange={handleInputs(i)}
                      />
                      <label
                        htmlFor={
                          "bath-yesaabs" + "-" + props.id + "-" + props.index
                        }
                      >
                        Common Washroom
                      </label>
                    </div>
                    <div className="col-lg-6 pd-0">
                      <input
                        type="checkbox"
                        //id="bal-yeabss"
                        id={"bal-yeabss" + "-" + props.id + "-" + props.index}
                        name="lift"
                        value={obj.lift}
                        onChange={handleInputs(i)}
                      />
                      <label
                        htmlFor={
                          "bal-yeabss" + "-" + props.id + "-" + props.index
                        }
                      >
                        Lift
                      </label>
                    </div>
                    <div className="col-lg-6 pd-0">
                      <input
                        type="checkbox"
                        //id="dress-yeabss"
                        id={"dress-yeabss" + "-" + props.id + "-" + props.index}
                        name="livingArea"
                        value={obj.livingArea}
                        onChange={handleInputs(i)}
                      />
                      <label
                        htmlFor={
                          "dress-yeabss" + "-" + props.id + "-" + props.index
                        }
                      >
                        Living Area
                      </label>
                    </div>
                    <div className="col-lg-6 pd-0">
                      <input
                        type="checkbox"
                        //id="bath-yeabss"
                        id={"bath-yeabss" + "-" + props.id + "-" + props.index}
                        name="diningArea"
                        value={obj.diningArea}
                        onChange={handleInputs(i)}
                      />
                      <label
                        htmlFor={
                          "bath-yeabss" + "-" + props.id + "-" + props.index
                        }
                      >
                        Dining Area
                      </label>
                    </div>
                    <div className="col-lg-6 pd-0">
                      <input
                        type="checkbox"
                        //id="bal-yabses"
                        id={"bal-yabses" + "-" + props.id + "-" + props.index}
                        name="poojaRoom"
                        value={obj.poojaRoom}
                        onChange={handleInputs(i)}
                      />
                      <label
                        htmlFor={
                          "bal-yabses" + "-" + props.id + "-" + props.index
                        }
                      >
                        Pooja Room
                      </label>
                    </div>
                    <div className="col-lg-6 pd-0">
                      <input
                        type="checkbox"
                        //id="dress-yabses"
                        id={"dress-yabses" + "-" + props.id + "-" + props.index}
                        name="storeRoom"
                        value={obj.storeRoom}
                        onChange={handleInputs(i)}
                      />
                      <label
                        htmlFor={
                          "dress-yabses" + "-" + props.id + "-" + props.index
                        }
                      >
                        Store Room
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstructionDetails1;
