import {
  useForm,
  useFieldArray,
  useFormContext,
  FormProvider,
} from "react-hook-form";
import { range } from "lodash";
import React, { ChangeEvent } from "react";
import luxury from "../../../images/luxury.png";
import normal from "../../../images/normal.png";
import tight from "../../../images/tity.png";
import cosy from "../../../images/cosy.png";
import useUser from "../../../hooks/useUser";

const BedroomType = {
  Cozy: "Cozy",
  Luxury: "Luxury",
  Normal: "Normal",
  Tight: "Tight",
};

const GroundFloorType = {
  Parking: "Parking",
  ParkingWithGuardRoom: "ParkingWithGuardRoom",
  Flat: "Flat",
};
const Bedroom = {
  type: BedroomType | null,
  bathroom: false,
  balcony: false,
  dressingArea: false,
};

const GroundFloor = {
  type: GroundFloorType | null,
};

const Floor = {
  bedrooms: Bedroom,
  kitchen: false,
  kidsRoom: false,
  washingArea: false,
  commonWashroom: false,
  lift: false,
  livingArea: false,
  diningArea: false,
  poojaRoom: false,
  storeRoom: false,
};

const bedroom = {
  type: null,
  bathroom: false,
  balcony: false,
  dressingArea: false,
  kitchen: false,
  kidsRoom: false,
  washingArea: false,
  commonWashroom: false,
  lift: false,
  livingArea: false,
  diningArea: false,
  poojaRoom: false,
  storeRoom: false,
};

const floor = {
  bedrooms: [],
};

const groundFloor = {
  type: null,
};

const defaultValues = {
  floors: [],
};

function GroundFloorComponent() {
  const { register } = useFormContext();

  return (
    <div className="three-floor-sec mt-4">
      <h4>Ground Floor</h4>
      <div className="floor-th-a">
        <div className="floor-th " style={{ color: "#B0AFB0" }}>
          {GroundFloorType.Parking}
          <input
            type="radio"
            className="accent"
            {...register("floors.0.type")}
            value={GroundFloorType.Parking}
          />
          &nbsp;&nbsp; Parking With GuardRoom
          <input
            type="radio"
            {...register("floors.0.type")}
            value={GroundFloorType.ParkingWithGuardRoom}
          />
          &nbsp;&nbsp;
          {GroundFloorType.Flat}
          <input
            type="radio"
            {...register("floors.0.type")}
            value={GroundFloorType.Flat}
          />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

function BedroomComponent({ floorIndex, bedroomIndex }) {
  const { register } = useFormContext();
  return (
    <div className="three-floor-sec">
      <h5 style={{ fontWeight: "600", fontSize: "22px" }}>
        Bedroom {bedroomIndex + 1}
      </h5>
      <div className="floor-th">
        <div className="selector-check">
          <div class="selecotr-item">
            <div className="selector-item_div selector-item_label">
              <img src={luxury} alt="" />
              {BedroomType.Luxury}
            </div>
            <input
              type="radio"
              {...register(`floors.${floorIndex}.bedrooms.${bedroomIndex}`)}
              value={BedroomType.Luxury}
            />
          </div>

          <div className="selecotr-item">
            <div className="selector-item_div selector-item_label">
              <img src={cosy} alt="" />
              {BedroomType.Cozy}{" "}
            </div>
            <input
              type="radio"
              {...register(`floors.${floorIndex}.bedrooms.${bedroomIndex}`)}
              value={BedroomType.Cozy}
            />
          </div>
          <div className="selecotr-item">
            <div className="selector-item_div selector-item_label">
              <img src={normal} alt="" />
              {BedroomType.Normal}{" "}
            </div>
            <input
              type="radio"
              {...register(`floors.${floorIndex}.bedrooms.${bedroomIndex}`)}
              value={BedroomType.Normal}
            />
          </div>
          <div className="selecotr-item">
            <div className="selector-item_div selector-item_label">
              <img src={tight} alt="" />
              {BedroomType.Tight}{" "}
            </div>
            <input
              type="radio"
              {...register(`floors.${floorIndex}.bedrooms.${bedroomIndex}`)}
              value={BedroomType.Tight}
            />
          </div>
        </div>
      </div>
      <br />
      <div>
        <div className="floor-th form-group mb-4">
          <div className="text-size">
            Bathroom
            <input
              type="checkbox"
              {...register(
                `floors.${floorIndex}.bedrooms.${bedroomIndex}.bathroom`
              )}
            />
          </div>

          <div className="text-size">
            Balcony{" "}
            <input
              type="checkbox"
              {...register(
                `floors.${floorIndex}.bedrooms.${bedroomIndex}.balcony`
              )}
            />
          </div>
          <div className="text-size">
            Dressing Area{" "}
            <input
              type="checkbox"
              {...register(
                `floors.${floorIndex}.bedrooms.${bedroomIndex}.dressingArea`
              )}
            />
          </div>
        </div>
      </div>
      <h5 style={{ fontWeight: "600", fontSize: "22px" }} className="mb-3">
        Common Area
      </h5>
      <div className="floor-th form-group mt-1">
        <div className="col-lg-3 pd-0 text-size">Kitchen</div>
        <div className="col-lg-3 pd-0">
          <input
            type="checkbox"
            {...register(
              `floors.${floorIndex}.bedrooms.${bedroomIndex}.kitchen`
            )}
          />
        </div>
        <div className="col-lg-3 pd-0 text-size">Kids Room </div>
        <div className="col-lg-3 pd-0">
          <input
            type="checkbox"
            {...register(
              `floors.${floorIndex}.bedrooms.${bedroomIndex}.kidsRoom`
            )}
          />
        </div>
        <div className="col-lg-3 pd-0 text-size">Washing Area </div>
        <div className="col-lg-3 pd-0">
          <input
            type="checkbox"
            {...register(
              `floors.${floorIndex}.bedrooms.${bedroomIndex}.washingArea`
            )}
          />
        </div>
        <div className="col-lg-3 pd-0 text-size">Common Washroom </div>
        <div className="col-lg-3 pd-0">
          <input
            type="checkbox"
            {...register(
              `floors.${floorIndex}.bedrooms.${bedroomIndex}.commonWashroom`
            )}
          />
        </div>
        <div className="col-lg-3 pd-0 text-size">Lift </div>
        <div className="col-lg-3 pd-0">
          <input
            type="checkbox"
            {...register(`floors.${floorIndex}.bedrooms.${bedroomIndex}.lift`)}
          />
        </div>
        <div className="col-lg-3 pd-0 text-size">Living Room </div>
        <div className="col-lg-3 pd-0">
          <input
            type="checkbox"
            {...register(
              `floors.${floorIndex}.bedrooms.${bedroomIndex}.livingRoom`
            )}
          />
        </div>{" "}
        <div className="col-lg-3 pd-0 text-size">Dining Room </div>
        <div className="col-lg-3 pd-0">
          <input
            type="checkbox"
            {...register(
              `floors.${floorIndex}.bedrooms.${bedroomIndex}.diningRoom`
            )}
          />
        </div>
        <div className="col-lg-3 pd-0 text-size">Store Room </div>
        <div className="col-lg-3 pd-0">
          <input
            type="checkbox"
            {...register(
              `floors.${floorIndex}.bedrooms.${bedroomIndex}.storeRoom`
            )}
          />
        </div>
        <div className="col-lg-6 pd-0 text-size">
          Pooja Room{" "}
          <input
            type="checkbox"
            {...register(
              `floors.${floorIndex}.bedrooms.${bedroomIndex}.poojaRoom`
            )}
          />
        </div>
      </div>

      <br />
      <br />
    </div>
  );
}

function FloorComponent({ floorIndex }) {
  const { control, register } = useFormContext();

  const bedroomMethods = useFieldArray({
    name: `floors.${floorIndex}.bedrooms`,
    control,
  });
  const changeBedrooms = (event) => {
    const bedroomCount = parseInt(event.target.value, 10);
    let bedrooms = [];
    if (bedroomCount) {
      bedrooms = range(0, bedroomCount).map(
        (_, index) => bedroomMethods.fields[index] || bedroom
      );
    }
    bedroomMethods?.replace(bedrooms);
  };

  return (
    <div className="three-floor-sec">
      <h4>Floor {floorIndex}</h4>
      <div>
        Number Of Bedrooms &nbsp;
        <select onChange={changeBedrooms}>
          <option value=""></option>
          {range(1, 10).map((i) => (
            <option value={i}>{i}</option>
          ))}
        </select>
      </div>
      <br />
      <div>
        {bedroomMethods?.fields.map((_, bedroomIndex) => (
          <BedroomComponent
            floorIndex={floorIndex}
            bedroomIndex={bedroomIndex}
          />
        ))}
      </div>

      <br />
      <br />
    </div>
  );
}

export default function ConstructionDetails(props) {
  const methods = useForm();
  const floorMethods = useFieldArray({
    name: "floors",
    control: methods?.control,
  });
  let basicId = props.basicId;
  let propertyId = props.propertId;

  const onSubmit = async (data) => {
    const res = await fetch("http://localhost:8001/data", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
        basicId,
        propertyId,
      }),
    });
    const response = await res.json();
  };
  const changeFloors = (event) => {
    const floorCount = parseInt(event.target.value, 10);
    let floors = [];
    if (floorCount) {
      floors = range(0, floorCount).map(
        (_, index) =>
          floorMethods?.fields[index] || (index === 0 ? groundFloor : floor)
      );
    }
    floorMethods?.replace(floors);
  };
  return (
    <div className="tab-pane" role="tabpanel" id="step3">
      <FormProvider {...methods}>
        {" "}
        <h4>
          Construction Requirement{" "}
          <span>
            <small>
              (Describe about your desired construction requirement)
            </small>
          </span>
        </h4>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div>
            Number Of Floors &nbsp;&nbsp;&nbsp;
            <select onChange={changeFloors}>
              <option value=""></option>
              {range(1, 10).map((i) => (
                <option value={i}>{i}</option>
              ))}
            </select>
          </div>

          <div>
            {floorMethods.fields.map((_, floorIndex) =>
              floorIndex === 0 ? (
                <GroundFloorComponent />
              ) : (
                <FloorComponent floorIndex={floorIndex} />
              )
            )}
          </div>
          <div className="btn-sav-ex">
            <button
              type="button"
              className="btn btn-default prev-step"
              id="p-btn1"
            >
              Previous
            </button>
            <input
              type="submit"
              className="btn btn-primary next-step"
              style={{ height: "50px", marginTop: "40px" }}
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

function NestedInput() {
  const { register } = useFormContext(); // retrieve all hook methods
  return <input {...register("test")} />;
}
