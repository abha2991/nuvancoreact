import FloorDetails from "./FloorDetails";
import React, { useState } from "react";
import BedRoomSpecifications from "./BedRoomSpecifications";
import luxury from "../images/luxury.png";
import normal from "../images/normal.png";
import tight from "../images/tity.png";
import cosy from "../images/cosy.png";

const ConstructionDetails2 = (props) => {
  const [val, setVal] = useState({ val: "" });

  const specifications = {
    bedRoomNo: "",
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

  const [data, setData] = useState([]);

  let name, value;

  const handleInputs = (i) => (e) => {
    name = e.target.name;
    value = e.target.value;
    setData((existing) => {
      existing[i] = { ...existing[i], [name]: !value };

      return [...existing];
    });
  };

  const addRow = async (e) => {
    const name2 = e.target.name;
    const value2 = e.target.value;

    setVal({ ...val, [name2]: value2 });
    let obj = "bed" + "-" + props.bedRoomId;

    for (let j = 1; j <= props.floorNo; j++) {
      let getDiv1 = document.getElementById(obj);
      getDiv1.style.display = "block";
      for (let k = 1; k <= value2; k++) {
        setData([specifications]);
      }
      // if (value2 == "1") {
      //   let getDiv1 = document.getElementById(obj);
      //   getDiv1.style.display = "block";
      //
      //   setData([specifications]);
      // } else if (value2 == "2") {
      //   let getDiv1 = document.getElementById(obj);
      //   getDiv1.style.display = "block";
      //   setData([specifications, specifications]);
      // } else if (value2 == "3") {
      //   setData([specifications, specifications, specifications]);
      // } else if (value2 == "4") {
      //   setData([
      //     specifications,
      //     specifications,
      //     specifications,
      //     specifications,
      //   ]);
      //setData((existing) => [...existing, specifications]);
      //}
    }
  };

  const deleteRow = (i) =>
    setData((existing) => existing.filter((_, index) => i !== index));

  const addRow1 = () => setData((existing) => [...existing, specifications]);

  console.log({ data, val });

  console.log(data.length);
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
              name="val"
              //onChange={() => props.displayFunction(props.bedRoomId)}
              value={val.val}
              onChange={addRow}
            >
              <option value=""> </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div id={"bed" + "-" + props.bedRoomId} style={{ display: "none" }}>
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
                          id={"floor1" + "-" + props.bedRoomId + "-" + i}
                          name="luxury"
                          value={obj.luxury}
                          onChange={handleInputs(i)}
                          className="selector-item_radio"
                        />
                        <label
                          htmlFor={"floor1" + "-" + props.bedRoomId + "-" + i}
                          className="selector-item_label"
                        >
                          <img src={luxury} alt="" /> Luxury
                        </label>
                      </div>

                      <div className="selecotr-item">
                        <input
                          type="radio"
                          //id="floor2"
                          id={"floor2" + "-" + props.bedRoomId + "-" + i}
                          name="cosy"
                          value={obj.cosy}
                          onChange={handleInputs(i)}
                          className="selector-item_radio"
                        />
                        <label
                          htmlFor={"floor2" + "-" + props.bedRoomId + "-" + i}
                          className="selector-item_label"
                        >
                          <img src={cosy} alt="" /> Cosy
                        </label>
                      </div>
                      <div className="selecotr-item">
                        <input
                          type="radio"
                          //id="floor3"
                          id={"floor3" + "-" + props.bedRoomId + "-" + i}
                          name="normal"
                          value={obj.normal}
                          onChange={handleInputs(i)}
                          className="selector-item_radio"
                        />
                        <label
                          htmlFor={"floor3" + "-" + props.bedRoomId + "-" + i}
                          className="selector-item_label"
                        >
                          <img src={normal} alt="" /> Normal
                        </label>
                      </div>
                      <div className="selecotr-item">
                        <input
                          type="radio"
                          //id="floor4"
                          id={"floor4" + "-" + props.bedRoomId + "-" + i}
                          name="tight"
                          value={obj.tight}
                          onChange={handleInputs(i)}
                          className="selector-item_radio"
                        />
                        <label
                          htmlFor={"floor4" + "-" + props.bedRoomId + "-" + i}
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
                      id={"bath-yes" + "-" + props.bedRoomId + "-" + i}
                      name="bathroom"
                      value={obj.bathroom}
                      onChange={handleInputs(i)}
                    />
                    <label
                      htmlFor={"bath-yes" + "-" + props.bedRoomId + "-" + i}
                    >
                      Bathroom
                    </label>

                    <input
                      type="checkbox"
                      //id="bal-yes"
                      id={"bal-yes" + "-" + props.bedRoomId + "-" + i}
                      name="balcony"
                      value={obj.balcony}
                      onChange={handleInputs(i)}
                    />
                    <label
                      htmlFor={"bal-yes" + "-" + props.bedRoomId + "-" + i}
                    >
                      Balcony
                    </label>

                    <input
                      type="checkbox"
                      //id="dress-yes"
                      id={"dress-yes" + "-" + props.bedRoomId + "-" + i}
                      name="dressingArea"
                      value={obj.dressingArea}
                      onChange={handleInputs(i)}
                    />
                    <label
                      htmlFor={"dress-yes" + "-" + props.bedRoomId + "-" + i}
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
                        id={"bath-yesabs" + "-" + i}
                        name="kitchen"
                        value={obj.kitchen}
                        onChange={handleInputs(i)}
                      />
                      <label htmlFor={"bath-yesabs" + "-" + i}>Kitchen</label>
                    </div>
                    <div className="col-lg-6 pd-0">
                      <input
                        type="checkbox"
                        //id="bal-yesabs"
                        id={"bal-yesabs" + "-" + i}
                        name="kidsArea"
                        value={obj.kidsArea}
                        onChange={handleInputs(i)}
                      />
                      <label htmlFor={"bal-yesabs" + "-" + i}>Kids Room</label>
                    </div>
                    <div className="col-lg-6 pd-0">
                      <input
                        type="checkbox"
                        //id="dress-yesabs"
                        id={"dress-yesabs" + "-" + i}
                        name="washingArea"
                        value={obj.washingArea}
                        onChange={handleInputs(i)}
                      />
                      <label htmlFor={"dress-yesabs" + "-" + i}>
                        Washing Area
                      </label>
                    </div>
                    <div className="col-lg-6 pd-0">
                      <input
                        type="checkbox"
                        //id="bath-yesaabs"
                        id={"bath-yesaabs" + "-" + i}
                        name="washingRoom"
                        value={obj.washingRoom}
                        onChange={handleInputs(i)}
                      />
                      <label htmlFor={"bath-yesaabs" + "-" + i}>
                        Common Washroom
                      </label>
                    </div>
                    <div className="col-lg-6 pd-0">
                      <input
                        type="checkbox"
                        //id="bal-yeabss"
                        id={"bal-yeabss" + "-" + i}
                        name="lift"
                        value={obj.lift}
                        onChange={handleInputs(i)}
                      />
                      <label htmlFor={"bal-yeabss" + "-" + i}>Lift</label>
                    </div>
                    <div className="col-lg-6 pd-0">
                      <input
                        type="checkbox"
                        //id="dress-yeabss"
                        id={"dress-yeabss" + "-" + i}
                        name="livingArea"
                        value={obj.livingArea}
                        onChange={handleInputs(i)}
                      />
                      <label htmlFor={"dress-yeabss" + "-" + i}>
                        Living Area
                      </label>
                    </div>
                    <div className="col-lg-6 pd-0">
                      <input
                        type="checkbox"
                        //id="bath-yeabss"
                        id={"bath-yeabss" + "-" + i}
                        name="diningArea"
                        value={obj.diningArea}
                        onChange={handleInputs(i)}
                      />
                      <label htmlFor={"bath-yeabss" + "-" + i}>
                        Dining Area
                      </label>
                    </div>
                    <div className="col-lg-6 pd-0">
                      <input
                        type="checkbox"
                        //id="bal-yabses"
                        id={"bal-yabses" + "-" + i}
                        name="poojaRoom"
                        value={obj.poojaRoom}
                        onChange={handleInputs(i)}
                      />
                      <label htmlFor={"bal-yabses" + "-" + i}>Pooja Room</label>
                    </div>
                    <div className="col-lg-6 pd-0">
                      <input
                        type="checkbox"
                        //id="dress-yabses"
                        id={"dress-yabses" + "-" + i}
                        name="storeRoom"
                        value={obj.storeRoom}
                        onChange={handleInputs(i)}
                      />
                      <label htmlFor={"dress-yabses" + "-" + i}>
                        Store Room
                      </label>
                    </div>

                    <div className="col-lg-6 pd-0">
                      <input
                        type="text"
                        hidden
                        name="bedRoomNo"
                        value={(obj.bedRoomNo = i + 1)}
                        readOnly
                      />
                      <label>Bed Room</label>
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

export default ConstructionDetails2;
