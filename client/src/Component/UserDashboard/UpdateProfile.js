import "../../UserDashboard.css";
import useUser from "../../hooks/useUser";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { user } = useUser();
  const { fetchUser } = useUser();
  const navigate = useNavigate();
  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  const [country, setCountry] = useState({
    Country: user[0]?.customer_country,
  });
  const [state, setState] = useState({
    State: user[0]?.customer_state,
  });
  const [city, setCity] = useState({
    City: user[0]?.customer_city,
  });

  const CountryOptions = async (e) => {
    const res = await fetch(`http://localhost:8001/getCountry`);
    const options = await res.json();
    setCountryOptions(options);
  };
  useEffect(() => {
    CountryOptions().then((r) => console.log(r));
  }, []);

  let name1, value1;
  const handleCountry = async (e) => {
    name1 = e.target.name;
    value1 = e.target.value;

    setCountry({ ...country, [name1]: value1 });
  };

  const StateOptions = async () => {
    try {
      const res = await fetch(`http://localhost:8001/getState`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          countryId: country.Country,
        }),
      });
      const getState = await res.json();
      setStateOptions(getState);
    } catch (e) {
      setStateOptions(undefined);
    }
  };

  useEffect(() => {
    StateOptions();
  }, [country.Country]);

  let name2, value2;
  const handleState = async (e) => {
    name2 = e.target.name;
    value2 = e.target.value;

    setState({ ...state, [name2]: value2 });
  };

  let name3, value3;
  const handleCity = (e) => {
    name3 = e.target.name;
    value3 = e.target.value;

    setCity({ ...city, [name3]: value3 });
  };

  const CityOptions = async () => {
    try {
      const res = await fetch(`http://localhost:8001/getCity`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          stateId: state.State,
        }),
      });
      const getCity = await res.json();
      setCityOptions(getCity);
    } catch (e) {
      setCityOptions(undefined);
    }
  };

  useEffect(() => {
    CityOptions();
  }, [state.State]);

  const [userData, setUserData] = useState({
    name: user[0]?.customer_name,
    email: user[0]?.customer_email,
    phoneNumber: user[0]?.customer_mobile,
    pin: user[0]?.customer_zipcode,
    address: user[0]?.customer_address,
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const updateUser = async (e) => {
    e.preventDefault();

    const { name, email, phoneNumber, pin, address } = userData;
    const { Country } = country;
    const { State } = state;
    const { City } = city;

    let countryName = countryOptions?.data?.find(
      (o) => o.country_id == Country
    );

    let stateName = stateOptions?.data?.find((o) => o.state_id == State);

    let cityName = cityOptions?.data?.find((o) => o.city_id == City);

    const res = await fetch("http://localhost:8001/user-update-profile", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
        country: Country,
        state: State,
        city: City,
        pin,
        address,
      }),
    });
    const response = await res.json();

    if (res.status === 400 || !response) {
      window.alert(response.message);
    } else if (res.status === 200) {
      await fetchUser();
      navigate("/user-profile");
    }
  };

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header sty-one">
          <h1> Personal Informarion </h1>
          <ol className="breadcrumb">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <i className="fa fa-angle-right"></i> Personal Informarion{" "}
            </li>
          </ol>
        </div>

        <div className="content">
          <div className="card">
            <div className="card-body">
              <form onSubmit={updateUser}>
                <div className="row">
                  <div className="col-lg-4">
                    <fieldset className="form-group">
                      <label>Full Name </label>
                      <input
                        type="text"
                        name="name"
                        value={userData.name}
                        className="form-control"
                        required=""
                        onChange={handleInputs}
                      />
                    </fieldset>
                  </div>

                  <div className="col-lg-4">
                    <fieldset className="form-group">
                      <label> Email </label>
                      <input
                        type="email"
                        name="email"
                        value={userData.email}
                        className="form-control"
                        onChange={handleInputs}
                      />
                    </fieldset>
                  </div>

                  <div className="col-lg-4">
                    <fieldset className="form-group">
                      <label> Mobile/Phone </label>
                      <input
                        type="number"
                        name="phoneNumber"
                        value={userData.phoneNumber}
                        className="form-control"
                        onChange={handleInputs}
                      />
                    </fieldset>
                  </div>

                  <div className="col-lg-4">
                    <fieldset className="form-group">
                      <label>Country Name </label>
                      <select
                        id="Country"
                        name="Country"
                        value={country.Country}
                        onChange={handleCountry}
                        className="form-control"
                      >
                        {countryOptions?.data?.map((val, index) => {
                          if (!val) return null;

                          return (
                            <>
                              <option value={val.country_id}>
                                {val.country_name}
                              </option>
                            </>
                          );
                        })}
                      </select>
                    </fieldset>
                  </div>

                  <div className="col-lg-4">
                    <fieldset className="form-group">
                      <label>State Name </label>
                      <select
                        id="State"
                        name="State"
                        value={state.State}
                        className="form-control"
                        onChange={handleState}
                      >
                        {stateOptions?.data?.map((val, index) => {
                          if (!val) return null;

                          return (
                            <>
                              <option value={val.state_id}>
                                {val.state_name}
                              </option>
                            </>
                          );
                        })}
                      </select>
                    </fieldset>
                  </div>

                  <div className="col-lg-4">
                    <fieldset className="form-group">
                      <label>City Name </label>
                      <select
                        id="city-dd"
                        name="City"
                        className="form-control"
                        value={city.City}
                        onChange={handleCity}
                      >
                        {cityOptions?.data?.map((val, index) => {
                          if (!val) return null;

                          return (
                            <>
                              <option value={val.city_id}>
                                {val.city_name}
                              </option>
                            </>
                          );
                        })}
                      </select>
                    </fieldset>
                  </div>

                  <div className="col-lg-4">
                    <fieldset className="form-group">
                      <label>Pin Code </label>
                      <input
                        type="text"
                        name="pin"
                        value={userData.pin}
                        className="form-control"
                        placeholder="Enter Pin Code"
                        onChange={handleInputs}
                      />
                    </fieldset>
                  </div>

                  <div className="col-lg-8">
                    <fieldset className="form-group">
                      <label> Address </label>
                      <input
                        type="text"
                        name="address"
                        value={userData.address}
                        className="form-control"
                        placeholder="Enter Address"
                        onChange={handleInputs}
                      />
                    </fieldset>
                  </div>
                </div>
                <div
                  className="mt-2"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <button className="btn btn-primary" type="submit">
                    <i className="fa fa-edit"></i> Update{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
