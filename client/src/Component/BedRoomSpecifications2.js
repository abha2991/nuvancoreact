import React from "react";
import cosy from "../images/cosy.png";
import tight from "../images/tity.png";
import luxury from "../images/luxury.png";
import normal from "../images/normal.png";
const BedRoomSpecifications2 = () => {
  return (
    <>
      <div className="floor-th">
        <div className="selector-check">
          <div className="selecotr-item">
            <input
              type="radio"
              id="floor-qawtwsecond-flooro1"
              name="floor-twseqawcond-flooro"
              className="selector-item_radio"
            />
            <label
              htmlFor="floor-qawtwsecond-flooro1"
              className="selector-item_label"
            >
              <img src={luxury} alt="" /> Luxury
            </label>
          </div>
          <div className="selecotr-item">
            <input
              type="radio"
              id="floor-qawtwsecond-flooro2"
              name="floor-twseqawcond-flooro"
              className="selector-item_radio"
            />
            <label
              htmlFor="floor-qawtwsecond-flooro2"
              className="selector-item_label"
            >
              <img src={cosy} alt="" /> Cosy
            </label>
          </div>
          <div className="selecotr-item">
            <input
              type="radio"
              id="floor-twsecond-flooro3"
              name="floor-twseqawcond-flooro"
              className="selector-item_radio"
            />
            <label
              htmlFor="floor-qawtwsecond-flooro3"
              className="selector-item_label"
            >
              <img src={cosy} alt="" /> Normal
            </label>
          </div>
          <div className="selecotr-item">
            <input
              type="radio"
              id="floor-qawtwsecond-flooro4"
              name="floor-twseqawcond-flooro"
              className="selector-item_radio"
            />
            <label
              htmlFor="floor-qawtwsecond-flooro4"
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
          id="bathsecondmat-floor-yes-bath-towone"
          name="bed-two-matsecond-floorone-2"
          value="Saturday"
        />
        <label htmlFor="bathsecondmat-floor-yes-bath-towone">Bathroom</label>

        <input
          type="checkbox"
          id="balsecondmat-floor-yes-bath-towone"
          name="webed-twmato-second-floorone"
          value="Saturday"
        />
        <label htmlFor="balsecondmat-floor-yes-bath-towone">Balcony</label>

        <input
          type="checkbox"
          id="dresssecondmat-floor-yes-bath-towone"
          name="bed-tmatwo-second-floorone-2"
          value="Saturday"
        />
        <label htmlFor="dresssecondmat-floor-yes-bath-towone">
          Dressing Area
        </label>
      </div>
    </>
  );
};

export default BedRoomSpecifications2;
