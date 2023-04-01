import {
  useForm,
  useFieldArray,
  useFormContext,
  FormProvider,
} from "react-hook-form";
import { range } from "lodash";
import { ChangeEvent } from "react";

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
  // kitchen: false,
  // kidsRoom: false,
  // washingArea: false,
  // commonWashroom: false,
  // lift: false,
  // livingArea: false,
  // diningArea: false,
  // poojaRoom: false,
  // storeRoom: false,
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
    <div>
      <h3>Ground Floor</h3>
      <div>
        {GroundFloorType.Parking}
        <input
          type="radio"
          {...register("floors.0.type")}
          value={GroundFloorType.Parking}
        />
        &nbsp;&nbsp;&nbsp;
        {GroundFloorType.ParkingWithGuardRoom}
        <input
          type="radio"
          {...register("floors.0.type")}
          value={GroundFloorType.ParkingWithGuardRoom}
        />
        &nbsp;&nbsp;&nbsp;
        {GroundFloorType.Flat}
        <input
          type="radio"
          {...register("floors.0.type")}
          value={GroundFloorType.Flat}
        />
      </div>
      <br />
      <br />
    </div>
  );
}

function BedroomComponent({ floorIndex, bedroomIndex }) {
  const { register } = useFormContext();
  return (
    <div>
      <h5>Bedroom {bedroomIndex + 1}</h5>
      <div>
        {BedroomType.Luxury}
        <input
          type="radio"
          {...register(`floors.${floorIndex}.bedrooms.${bedroomIndex}`)}
          value={BedroomType.Luxury}
        />
        &nbsp;&nbsp;&nbsp;
        {BedroomType.Cozy}
        <input
          type="radio"
          {...register(`floors.${floorIndex}.bedrooms.${bedroomIndex}`)}
          value={BedroomType.Cozy}
        />
        &nbsp;&nbsp;&nbsp;
        {BedroomType.Normal}
        <input
          type="radio"
          {...register(`floors.${floorIndex}.bedrooms.${bedroomIndex}`)}
          value={BedroomType.Normal}
        />
        &nbsp;&nbsp;&nbsp;
        {BedroomType.Tight}
        <input
          type="radio"
          {...register(`floors.${floorIndex}.bedrooms.${bedroomIndex}`)}
          value={BedroomType.Tight}
        />
      </div>
      <br />
      <div>
        <div style={{ display: "flex" }}>
          <div>
            Bathroom{" "}
            <input
              type="checkbox"
              {...register(
                `floors.${floorIndex}.bedrooms.${bedroomIndex}.bathroom`
              )}
            />
          </div>
          <div>
            Balcony{" "}
            <input
              type="checkbox"
              {...register(
                `floors.${floorIndex}.bedrooms.${bedroomIndex}.balcony`
              )}
            />
          </div>
          <div>
            Dressing Area{" "}
            <input
              type="checkbox"
              {...register(
                `floors.${floorIndex}.bedrooms.${bedroomIndex}.dressingArea`
              )}
            />
          </div>
        </div>
        <h4>Common Area</h4>
        <div>
          Kitchen{" "}
          <input
            type="checkbox"
            {...register(
              `floors.${floorIndex}.bedrooms.${bedroomIndex}.kitchen`
            )}
          />
        </div>
        <div>
          Kids Room{" "}
          <input
            type="checkbox"
            {...register(
              `floors.${floorIndex}.bedrooms.${bedroomIndex}.kidsRoom`
            )}
          />
        </div>
        <div>
          Washing Area{" "}
          <input
            type="checkbox"
            {...register(
              `floors.${floorIndex}.bedrooms.${bedroomIndex}.washingArea`
            )}
          />
        </div>
        <div>
          Common Washroom{" "}
          <input
            type="checkbox"
            {...register(
              `floors.${floorIndex}.bedrooms.${bedroomIndex}.commonWashroom`
            )}
          />
        </div>
        <div>
          Lift{" "}
          <input
            type="checkbox"
            {...register(`floors.${floorIndex}.bedrooms.${bedroomIndex}.lift`)}
          />
        </div>
        <div>
          Living Room{" "}
          <input
            type="checkbox"
            {...register(
              `floors.${floorIndex}.bedrooms.${bedroomIndex}.livingRoom`
            )}
          />
        </div>{" "}
        <div>
          Dining Room{" "}
          <input
            type="checkbox"
            {...register(
              `floors.${floorIndex}.bedrooms.${bedroomIndex}.diningRoom`
            )}
          />
        </div>
        <div>
          Store Room{" "}
          <input
            type="checkbox"
            {...register(
              `floors.${floorIndex}.bedrooms.${bedroomIndex}.storeRoom`
            )}
          />
        </div>
        <div>
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
    <div>
      <h3>Floor {floorIndex}</h3>
      <div>
        Bedrooms:
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
      {/*<h5>Common Area:</h5>*/}
      {/*<div>*/}
      {/*  Kitchen{" "}*/}
      {/*  <input type="checkbox" {...register(`floors.${floorIndex}.kitchen`)} />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  Kids Room{" "}*/}
      {/*  <input type="checkbox" {...register(`floors.${floorIndex}.kidsRoom`)} />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  Washing Area{" "}*/}
      {/*  <input*/}
      {/*    type="checkbox"*/}
      {/*    {...register(`floors.${floorIndex}.washingArea`)}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  Common Washroom{" "}*/}
      {/*  <input*/}
      {/*    type="checkbox"*/}
      {/*    {...register(`floors.${floorIndex}.commonWashroom`)}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  Lift{" "}*/}
      {/*  <input type="checkbox" {...register(`floors.${floorIndex}.lift`)} />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  Living Area{" "}*/}
      {/*  <input*/}
      {/*    type="checkbox"*/}
      {/*    {...register(`floors.${floorIndex}.livingArea`)}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  Dining Area{" "}*/}
      {/*  <input*/}
      {/*    type="checkbox"*/}
      {/*    {...register(`floors.${floorIndex}.diningArea`)}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  Pooja Room{" "}*/}
      {/*  <input*/}
      {/*    type="checkbox"*/}
      {/*    {...register(`floors.${floorIndex}.poojaRoom`)}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  Store Room{" "}*/}
      {/*  <input*/}
      {/*    type="checkbox"*/}
      {/*    {...register(`floors.${floorIndex}.storeRoom`)}*/}
      {/*  />*/}
      {/*</div>*/}
      <br />
      <br />
    </div>
  );
}

//  function ConstructionDetails4() {
//   const methods = useForm;
//
//   const floorMethods = useFieldArray({
//     name: "floors",
//     control: methods?.control,
//   });
//   const onSubmit = (data) => console.log(data);
//   const changeFloors = (event) => {
//     const floorCount = parseInt(event.target.value, 10);
//     let floors = [];
//     if (floorCount) {
//       floors = range(0, floorCount).map(
//         (_, index) =>
//           floorMethods?.fields[index] || (index === 0 ? groundFloor : floor)
//       );
//     }
//     floorMethods?.replace(floors);
//   };
//   return (
//     <FormProvider {...methods}>
//       <form onSubmit={methods?.handleSubmit(onSubmit)}>
//         <div>
//           Floors:
//           <select onChange={changeFloors}>
//             <option value=""></option>
//             {range(1, 10).map((i) => (
//               <option value={i}>{i}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//           {floorMethods.fields.map((_, floorIndex) =>
//             floorIndex === 0 ? (
//               <GroundFloorComponent />
//             ) : (
//               <FloorComponent floorIndex={floorIndex} />
//             )
//           )}
//         </div>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </FormProvider>
//   );
//
//
// }

export default function App() {
  const methods = useForm();
  const floorMethods = useFieldArray({
    name: "floors",
    control: methods?.control,
  });
  const onSubmit = (data) => console.log(data);
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
    <FormProvider {...methods}>
      {" "}
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div>
          Floors:
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

        <input type="submit" />
      </form>
    </FormProvider>
  );
}

function NestedInput() {
  const { register } = useFormContext(); // retrieve all hook methods
  return <input {...register("test")} />;
}
