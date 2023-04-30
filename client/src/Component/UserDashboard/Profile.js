import "../../UserDashboard.css";
import useUser from "../../hooks/useUser";
import { useEffect, useState } from "react";

const Profile = () => {
  const { user } = useUser();

  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  const CountryOptions = async (e) => {
    const res = await fetch(`http://localhost:8001/getCountry`);
    const options = await res.json();
    setCountryOptions(options);
  };
  useEffect(() => {
    CountryOptions().then((r) => console.log(r));
  }, []);

  const StateOptions = async () => {
    try {
      const res = await fetch(`http://localhost:8001/getState`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          countryId: user[0]?.customer_country,
        }),
      });
      const getState = await res.json();
      setStateOptions(getState);
    } catch (e) {
      setStateOptions(undefined);
    }
  };
  useEffect(() => {
    StateOptions().then((r) => console.log(r));
  }, []);

  const CityOptions = async () => {
    try {
      const res = await fetch(`http://localhost:8001/getCity`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          stateId: user[0]?.customer_state,
        }),
      });
      const getCity = await res.json();
      setCityOptions(getCity);
    } catch (e) {
      setCityOptions(undefined);
    }
  };
  useEffect(() => {
    CityOptions().then((r) => console.log(r));
  }, []);

  let countryName = countryOptions?.data?.find(
    (o) => o.country_id == user[0]?.customer_country
  );

  let stateName = stateOptions?.data?.find(
    (o) => o.state_id == user[0]?.customer_state
  );

  let cityName = cityOptions?.data?.find(
    (o) => o.city_id == user[0]?.customer_city
  );

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header sty-one">
          <h1> Personal Information </h1>
          <ol className="breadcrumb">
            <li>
              <a href="https://nuvanco.com/astrologer/dashboard">Home</a>
            </li>
            <li>
              <i className="fa fa-angle-right"></i> Personal Information{" "}
            </li>
          </ol>
        </div>

        <div className="content">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4">
                  <fieldset className="form-group">
                    <label> Registration No </label>
                    <input
                      type="text"
                      value={user?.[0]?.customer_registration_id}
                      className="form-control"
                      readOnly
                    />
                  </fieldset>
                </div>

                <div className="col-lg-4">
                  <fieldset className="form-group">
                    <label>Full Name </label>
                    <input
                      type="text"
                      value={user?.[0]?.customer_name}
                      className="form-control"
                      readOnly
                    />
                  </fieldset>
                </div>

                <div className="col-lg-4">
                  <fieldset className="form-group">
                    <label> Email </label>
                    <input
                      type="text"
                      value={user?.[0]?.customer_email}
                      className="form-control"
                      readOnly
                    />
                  </fieldset>
                </div>

                <div className="col-lg-4">
                  <fieldset className="form-group">
                    <label> Mobile/Phone </label>
                    <input
                      type="text"
                      value={user?.[0]?.customer_mobile}
                      className="form-control"
                      readOnly
                    />
                  </fieldset>
                </div>

                <div className="col-lg-4">
                  <fieldset className="form-group">
                    <label> Country </label>
                    <input
                      type="text"
                      value={countryName?.country_name}
                      className="form-control"
                      readOnly
                    />
                  </fieldset>
                </div>

                <div className="col-lg-4">
                  <fieldset className="form-group">
                    <label> State </label>
                    <input
                      type="text"
                      value={stateName?.state_name}
                      className="form-control"
                      readOnly
                    />
                  </fieldset>
                </div>

                <div className="col-lg-4">
                  <fieldset className="form-group">
                    <label> City </label>
                    <input
                      type="text"
                      value={cityName?.city_name}
                      className="form-control"
                      readOnly
                    />
                  </fieldset>
                </div>

                <div className="col-lg-4">
                  <fieldset className="form-group">
                    <label> Zip Code </label>
                    <input
                      type="text"
                      value={user?.[0]?.customer_zipcode}
                      className="form-control"
                      readOnly
                    />
                  </fieldset>
                </div>

                <div className="col-lg-12">
                  <fieldset className="form-group">
                    <label> Address </label>
                    <input
                      type="text"
                      value={user?.[0]?.customer_address}
                      className="form-control"
                      readOnly
                    />
                  </fieldset>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <a href="/user-profile-update">
                    <button className="btn btn-primary">
                      <i className="fa fa-edit"></i> Update{" "}
                    </button>
                  </a>
                </div>

                <div
                  className="col-lg-6"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <a href="/user-update-image">
                    <button className="btn btn-warning">
                      <i className="fa fa-upload"></i> Upload Image{" "}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
