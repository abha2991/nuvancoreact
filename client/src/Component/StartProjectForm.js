import Header from "./Header";
const StartProjectForm = () => {
  return (
    <>
      <div className="banner-project">
        <video autoPlay muted loop playsInline preload="metadata">
          <source
            src="https://nuvanco.com/assets/images/constructiion.mp4"
            type="video/mp4"
          />
        </video>
        <h2>
          Let’s{" "}
          <mark className="banner-con wow fadeInRight">Build Your Dream</mark>{" "}
          House Together!
        </h2>
      </div>

      <div className="container">
        <section>
          <div className="tabs-satrt">
            <div className="left-atab">
              <img
                className="astab"
                src="https://nuvanco.com/assets/images/logo.png"
                alt=""
              />
              <h2>Form Details</h2>
              <ul
                className="nav nav-tabs start-project-ul"
                id="myTab"
                role="tablist"
              >
                <li role="presentation" className="nav-item">
                  <a
                    href="#step1"
                    className="nav-link active st1 check-icon"
                    data-toggle="tab"
                    aria-controls="step1"
                    role="tab"
                    title="Step 1"
                  >
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    Basic Details
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    href="#step2"
                    className="nav-link st2"
                    data-toggle="tab"
                    aria-controls="step2"
                    role="tab"
                    title="Step 2"
                  >
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    Property Details
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    href="#step3"
                    className="nav-link st3"
                    data-toggle="tab"
                    aria-controls="step3"
                    role="tab"
                    title="Step 3"
                  >
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    Construction Details
                  </a>
                </li>

                <li role="presentation" className="nav-item lstli">
                  <a
                    href="#complete"
                    className="nav-link st4"
                    data-toggle="tab"
                    aria-controls="complete"
                    role="tab"
                    title="Complete"
                  >
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    Additional Details
                  </a>
                </li>
              </ul>
            </div>

            <form className="tabs-pro" role="form">
              <div className="tab-content">
                <div className="tab-pane  active" role="tabpanel" id="step1">
                  <p
                    className="mb-5"
                    style={{ fontWeight: "700", fontSize: "20px" }}
                  >
                    Basic Details
                  </p>
                  <div className="form-group">
                    <label htmlFor="location">
                      Location <sup className="text-danger">*</sup>
                    </label>
                    <input
                      type="location"
                      className="form-control-input pac-target-input"
                      id="location"
                      name="location"
                      aria-describedby="emailHelp"
                      placeholder="Location"
                      required
                    />
                    <span
                      id="step1LocationError"
                      className="text-danger"
                    ></span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="City">
                      City <sup className="text-danger">*</sup>
                    </label>
                    <input
                      type="location"
                      className="form-control-input"
                      id="city"
                      name="city"
                      aria-describedby="emailHelp"
                      placeholder="City"
                      required
                    />
                    <span id="step1CityError" className="text-danger"></span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">
                      How Soon Are You Planning To Construct{" "}
                      <sup className="text-danger">*</sup>
                    </label>
                    <select
                      className="form-control-input form-select-input"
                      id="startplanning"
                      name="startplanning"
                      required
                    >
                      <option> - Select - </option>
                      <option value="Immediate">Immediate</option>
                      <option value="Within 1 Month">Within 1 Month</option>
                      <option value="1 - 3 Months">1 - 3 Months</option>
                      <option value="3 - 6 Months">3 - 6 Months</option>
                      <option value="6 Months - 1 Year">
                        6 Months - 1 Year
                      </option>
                    </select>
                    <span
                      id="step1PlanningError"
                      className="text-danger"
                    ></span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">
                      Property Status <sup className="text-danger">*</sup>
                    </label>
                    <select
                      className="form-control-input form-select-input"
                      id="propertystatus"
                      name="propertystatus"
                      required
                    >
                      <option> - Select - </option>
                      <option value="Owned">Owned</option>
                      <option value="Exploring">Exploring</option>
                    </select>
                    <span
                      id="step1PropertyError"
                      className="text-danger"
                    ></span>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary next-step"
                    id="n-btn1"
                  >
                    Save and continue
                  </button>
                </div>

                <div className="tab-pane" role="tabpanel" id="step2">
                  <h2>
                    Property Details (Describe about your property, where you
                    are planning to construct)
                  </h2>
                  <div
                    id="basicDetailsFormMessage"
                    className="text-danger text-center"
                  ></div>
                  <div className="form-group pofre">
                    <button
                      type="button"
                      className="btn btn-primary posab"
                      data-toggle="modal"
                      data-target="#fillarea"
                    ></button>
                    <label htmlFor="location">
                      Choose Your Property Dimensions ( Top ){" "}
                      <sup className="text-danger">*</sup>
                    </label>
                    <div className="input-sec">
                      <input
                        type="text"
                        className="form-control-input form-select-input"
                        id="pd_top_size"
                        aria-describedby="emailHelp"
                        placeholder="30"
                        disabled
                        required
                      />
                      <input
                        type="text"
                        className="form-control-input form-select-input"
                        id="pd_top_name"
                        aria-describedby="emailHelp"
                        placeholder="Property"
                        disabled
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group pofre">
                    <button
                      type="button"
                      className="btn btn-primary posab"
                      data-toggle="modal"
                      data-target="#fillarea"
                    ></button>
                    <label htmlFor="location">
                      Choose Your Property Dimensions ( Right ){" "}
                      <sup className="text-danger">*</sup>
                    </label>
                    <div className="input-sec">
                      <input
                        type="text"
                        className="form-control-input form-select-input"
                        id="pd_right_size"
                        aria-describedby="emailHelp"
                        placeholder="30"
                        disabled
                        required
                      />
                      <input
                        type="text"
                        className="form-control-input form-select-input"
                        id="pd_right_name"
                        aria-describedby="emailHelp"
                        placeholder="Property"
                        disabled
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group pofre">
                    <button
                      type="button"
                      className="btn btn-primary posab"
                      data-toggle="modal"
                      data-target="#fillarea"
                    ></button>
                    <label htmlFor="location">
                      Choose Your Property Dimensions ( Bottom ){" "}
                      <sup className="text-danger">*</sup>
                    </label>
                    <div className="input-sec">
                      <input
                        type="text"
                        className="form-control-input form-select-input"
                        id="pd_bottom_size"
                        aria-describedby="emailHelp"
                        placeholder="30"
                        disabled
                        required
                      />
                      <input
                        type="text"
                        className="form-control-input form-select-input"
                        id="pd_bottom_name"
                        aria-describedby="emailHelp"
                        placeholder="Property"
                        disabled
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group pofre">
                    <button
                      type="button"
                      className="btn btn-primary posab"
                      data-toggle="modal"
                      data-target="#fillarea"
                    ></button>
                    <label htmlFor="location">
                      Choose Your Property Dimensions ( Left ){" "}
                      <sup className="text-danger">*</sup>
                    </label>
                    <div className="input-sec">
                      <input
                        type="text"
                        className="form-control-input form-select-input"
                        id="pd_left_size"
                        aria-describedby="emailHelp"
                        placeholder="30"
                        disabled
                        required
                      />
                      <input
                        type="text"
                        className="form-control-input form-select-input"
                        id="pd_left_name"
                        aria-describedby="emailHelp"
                        placeholder="Property"
                        disabled
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group pofre">
                    <button
                      type="button"
                      className="btn btn-primary posab"
                      data-toggle="modal"
                      data-target="#fillarea"
                    ></button>
                    <label htmlFor="City">
                      Directions Street Facing{" "}
                      <sup className="text-danger">*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control-input form-select-input"
                      id="pd_street_facing"
                      aria-describedby="emailHelp"
                      placeholder="North"
                      disabled
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">
                      Desired Built-Up Area With Iteration of 5%{" "}
                      <sup className="text-danger">*</sup>
                    </label>
                    <select
                      className="form-control-input form-select-input"
                      id="pd_built_area"
                      required
                    >
                      <option>Select</option>
                      <option>1% - 50%</option>
                      <option>50 - 100%</option>
                    </select>
                  </div>

                  <div className="btn-sav-ex">
                    <button
                      type="button"
                      className="btn btn-default btn-prev"
                      id="p-btn1"
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
                      id="n-btn2"
                      style={{ fontSize: "18px", fontWeight: "500" }}
                    >
                      Save and continue
                    </button>
                  </div>
                </div>

                <div
                  className="modal fade fill-popip"
                  id="fillarea"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog pop-fill" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h2>
                          Choose Your Property Dimensions and What Next Your
                          Property (Other Property / Street)
                        </h2>
                      </div>

                      <div className="modal-body">
                        <input
                          className="fill-value-posab"
                          type="button"
                          onClick="getTextBoxValue();"
                          value="Save"
                        />
                        <button
                          type="button"
                          className="close mocl"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">x</span>
                        </button>
                        <div className="form-img">
                          <div className="form-group pos-ab pro-ab-1">
                            <input
                              type="text"
                              className="form-control"
                              id="dimension-left-fill"
                              aria-describedby="emailHelp"
                              placeholder="30"
                            />
                            <select
                              className="form-control"
                              id="dimension-drop-left-fill"
                            >
                              <option value=""></option>
                              <option value="Other Property">
                                Other Property
                              </option>
                              <option value="Street">Street</option>
                            </select>
                          </div>
                          <div className="form-group pos-ab pro-ab-2">
                            <input
                              type="text"
                              className="form-control"
                              id="dimension-top-fill"
                              aria-describedby="emailHelp"
                              placeholder="30"
                            />
                            <select
                              className="form-control"
                              id="dimension-drop-top-fill"
                            >
                              <option value=""></option>
                              <option value="Other Property">
                                Other Property
                              </option>
                              <option value="Street">Street</option>
                            </select>
                            <select
                              className="form-control"
                              id="direction-property-fill"
                            >
                              <option value=""></option>
                              <option value="North">North</option>
                              <option value="South">South</option>
                              <option value="East">East</option>
                              <option value="West">West</option>
                            </select>
                          </div>
                          <div className="form-group pos-ab pro-ab-3">
                            <input
                              type="text"
                              className="form-control"
                              id="dimension-right-fill"
                              aria-describedby="emailHelp"
                              placeholder="30"
                            />
                            <select
                              className="form-control"
                              id="dimension-drop-right-fill"
                            >
                              <option value=""></option>
                              <option value="Other Property">
                                Other Property
                              </option>
                              <option value="Street">Street</option>
                            </select>
                          </div>
                          <div className="form-group pos-ab pro-ab-4">
                            <input
                              type="text"
                              className="form-control"
                              id="dimension-bottom-fill"
                              aria-describedby="emailHelp"
                              placeholder="30"
                            />
                            <select
                              className="form-control"
                              id="dimension-drop-bottom-fill"
                            >
                              <option value=""></option>
                              <option value="Other Property">
                                Other Property
                              </option>
                              <option value="Street">Street</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      {/*<div className="modal-body">*/}
                      {/*  <input*/}
                      {/*    className="fill-value-posab"*/}
                      {/*    type="button"*/}
                      {/*    value="Save"*/}
                      {/*  />*/}
                      {/*  <button*/}
                      {/*    type="button"*/}
                      {/*    className="close mocl"*/}
                      {/*    data-dismiss="modal"*/}
                      {/*    aria-label="Close"*/}
                      {/*  >*/}
                      {/*    <span aria-hidden="true">&times;</span>*/}
                      {/*  </button>*/}
                      {/*  <div className="form-img">*/}
                      {/*    <div className="form-group pos-ab pro-ab-1">*/}
                      {/*      <input*/}
                      {/*        type="text"*/}
                      {/*        className="form-control-input"*/}
                      {/*        id="dimension-left-fill"*/}
                      {/*        aria-describedby="emailHelp"*/}
                      {/*        placeholder="30"*/}
                      {/*      />*/}
                      {/*      <select*/}
                      {/*        className="form-control-input"*/}
                      {/*        id="dimension-drop-left-fill"*/}
                      {/*      >*/}
                      {/*        <option value=""></option>*/}
                      {/*        <option value="Other Property">*/}
                      {/*          Other Property*/}
                      {/*        </option>*/}
                      {/*        <option value="Street">Street</option>*/}
                      {/*      </select>*/}
                      {/*    </div>*/}
                      {/*    <div className="form-group pos-ab pro-ab-2">*/}
                      {/*      <input*/}
                      {/*        type="text"*/}
                      {/*        className="form-control-input"*/}
                      {/*        id="dimension-top-fill"*/}
                      {/*        aria-describedby="emailHelp"*/}
                      {/*        placeholder="30"*/}
                      {/*      />*/}
                      {/*      <select*/}
                      {/*        className="form-control-input"*/}
                      {/*        id="dimension-drop-top-fill"*/}
                      {/*      >*/}
                      {/*        <option value=""></option>*/}
                      {/*        <option value="Other Property">*/}
                      {/*          Other Property*/}
                      {/*        </option>*/}
                      {/*        <option value="Street">Street</option>*/}
                      {/*      </select>*/}
                      {/*      <select*/}
                      {/*        className="form-control-input"*/}
                      {/*        id="direction-property-fill"*/}
                      {/*      >*/}
                      {/*        <option value=""></option>*/}
                      {/*        <option value="North">North</option>*/}
                      {/*        <option value="South">South</option>*/}
                      {/*        <option value="East">East</option>*/}
                      {/*        <option value="West">West</option>*/}
                      {/*      </select>*/}
                      {/*    </div>*/}
                      {/*    <div className="form-group pos-ab pro-ab-3">*/}
                      {/*      <input*/}
                      {/*        type="text"*/}
                      {/*        className="form-control-input"*/}
                      {/*        id="dimension-right-fill"*/}
                      {/*        aria-describedby="emailHelp"*/}
                      {/*        placeholder="30"*/}
                      {/*      />*/}
                      {/*      <select*/}
                      {/*        className="form-control-input"*/}
                      {/*        id="dimension-drop-right-fill"*/}
                      {/*      >*/}
                      {/*        <option value=""></option>*/}
                      {/*        <option value="Other Property">*/}
                      {/*          Other Property*/}
                      {/*        </option>*/}
                      {/*        <option value="Street">Street</option>*/}
                      {/*      </select>*/}
                      {/*    </div>*/}
                      {/*    <div className="form-group pos-ab pro-ab-4">*/}
                      {/*      <input*/}
                      {/*        type="text"*/}
                      {/*        className="form-control-input"*/}
                      {/*        id="dimension-bottom-fill"*/}
                      {/*        aria-describedby="emailHelp"*/}
                      {/*        placeholder="30"*/}
                      {/*      />*/}
                      {/*      <select*/}
                      {/*        className="form-control-input"*/}
                      {/*        id="dimension-drop-bottom-fill"*/}
                      {/*      >*/}
                      {/*        <option value=""></option>*/}
                      {/*        <option value="Other Property">*/}
                      {/*          Other Property*/}
                      {/*        </option>*/}
                      {/*        <option value="Street">Street</option>*/}
                      {/*      </select>*/}
                      {/*    </div>*/}
                      {/*  </div>*/}
                      {/*</div>*/}
                    </div>
                  </div>
                </div>

                <div className="tab-pane" role="tabpanel" id="step3">
                  <div
                    id="propertyDetailsFormMessage"
                    className="text-danger text-center"
                  ></div>
                  <h2>
                    Construction Requirement{" "}
                    <span>
                      (Describe about your desired construction requirement)
                    </span>
                  </h2>
                  {/*<div className="form-group">*/}
                  {/*  <label htmlFor="exampleFormControlSelect1">*/}
                  {/*    Number Of Floors*/}
                  {/*  </label>*/}
                  {/*  <select*/}
                  {/*    id="result"*/}
                  {/*    name="result"*/}
                  {/*    className="form-control-input form-select-input"*/}
                  {/*  >*/}
                  {/*    <option value=""> Select No of Floors </option>*/}
                  {/*    <option value="one">1</option>*/}
                  {/*  </select>*/}
                  {/*</div>*/}
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">
                      Number Of Floors
                    </label>
                    <select id="result" name="result">
                      <option value=""> </option>
                      <option value="one">1</option>
                      <option value="two">2</option>
                      <option value="three">3</option>
                      <option value="four">4</option>
                    </select>
                  </div>
                  <div id="one">
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
                      <div id="flat-shoa">
                        <div className="form-group mt-5">
                          <label htmlFor="exampleFormControlSelect1">
                            Number Of Bedrooms
                          </label>
                          <select id="bedroom-no" name="bedroom">
                            <option value=""> </option>
                            <option value="bedroom-one">1</option>
                            <option value="bedroom-two">2</option>
                            <option value="bedroom-three">3</option>
                            <option value="bedroom-four">4</option>
                          </select>
                        </div>

                        <div id="bedroom-one" style={{ display: "none" }}>
                          <div className="three-floor-sec">
                            <h5 className="mt-4">Bedroom 1</h5>
                            <div className="floor-th">
                              <div className="selector-check">
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor1"
                                    name="floor-one"
                                    className="selector-item_radio"
                                    checked
                                  />
                                  <label
                                    htmlFor="floor1"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/luxury.png"
                                      alt=""
                                    />{" "}
                                    Luxury
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor2"
                                    name="floor-one"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor2"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/cosy.png" alt="" />{" "}
                                    Cosy
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor3"
                                    name="floor-one"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor3"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/normal.png"
                                      alt=""
                                    />{" "}
                                    Normal
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor4"
                                    name="floor-one"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor4"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/tity.png" alt="" />
                                    Tight
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="floor-th form-group mt-4">
                              <input
                                type="checkbox"
                                id="bath-yes"
                                name="weekday-2"
                                value="Saturday"
                              />
                              <label htmlFor="bath-yes">Bathroom</label>

                              <input
                                type="checkbox"
                                id="bal-yes"
                                name="weekday-2"
                                value="Saturday"
                              />
                              <label htmlFor="bal-yes">Balcony</label>

                              <input
                                type="checkbox"
                                id="dress-yes"
                                name="weekday-2"
                                value="Saturday"
                              />
                              <label htmlFor="dress-yes">Dressing Area</label>
                            </div>
                            <h5 className="mt-4">Common Area</h5>
                            <div className="floor-th form-group mt-4">
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bath-yesabs"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="bath-yesabs">Kitchen</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bal-yesabs"
                                  name="weekday-2abbx"
                                  value="Saturday"
                                />
                                <label htmlFor="bal-yesabs">Kids Room</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="dress-yesabs"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="dress-yesabs">
                                  Washing Area
                                </label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bath-yesaabs"
                                  name="weekday-2abbax"
                                  value="Saturday"
                                />
                                <label htmlFor="bath-yesaabs">
                                  Common Washroom
                                </label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bal-yeabss"
                                  name="weekday-2abbx"
                                  value="Saturday"
                                />
                                <label htmlFor="bal-yeabss">Lift</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="dress-yeabss"
                                  name="weekday-2abbx"
                                  value="Saturday"
                                />
                                <label htmlFor="dress-yeabss">
                                  Living Area
                                </label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bath-yeabss"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="bath-yeabss">Dining Area</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bal-yabses"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="bal-yabses">Pooja Room</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="dress-yabses"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="dress-yabses">Store Room</label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div id="bedroom-two" style={{ display: "none" }}>
                          <div className="three-floor-sec">
                            <h5 className="mt-4">Bedroom 1</h5>
                            <div className="floor-th">
                              <div className="selector-check">
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two1"
                                    name="floor-two"
                                    className="selector-item_radio"
                                    checked
                                  />
                                  <label
                                    htmlFor="floor-two1"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/luxury.png"
                                      alt=""
                                    />{" "}
                                    Luxury
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two2"
                                    name="floor-two"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor-two2"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/cosy.png" alt="" />{" "}
                                    Cosy
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two3"
                                    name="floor-two"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor-two3"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/normal.png"
                                      alt=""
                                    />{" "}
                                    Normal
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two4"
                                    name="floor-two"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor-two4"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/tity.png" alt="" />
                                    Tight
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="floor-th form-group mt-4">
                              <input
                                type="checkbox"
                                id="bath-yes-bath-towone"
                                name="bed-two-one-2"
                                value="Saturday"
                              />
                              <label htmlFor="bath-yes-bath-towone">
                                Bathroom
                              </label>

                              <input
                                type="checkbox"
                                id="bal-yes-bath-towone"
                                name="webed-two-one"
                                value="Saturday"
                              />
                              <label htmlFor="bal-yes-bath-towone">
                                Balcony
                              </label>

                              <input
                                type="checkbox"
                                id="dress-yes-bath-towone"
                                name="bed-two-one-2"
                                value="Saturday"
                              />
                              <label htmlFor="dress-yes-bath-towone">
                                Dressing Area
                              </label>
                            </div>

                            <h5 className="mt-4">Bedroom 2</h5>
                            <div className="floor-th">
                              <div className="selector-check">
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two-bed-two1"
                                    name="floor-two-bed-two"
                                    className="selector-item_radio"
                                    checked
                                  />
                                  <label
                                    htmlFor="floor-two-bed-two1"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/luxury.png"
                                      alt=""
                                    />{" "}
                                    Luxury
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two-bed-two2"
                                    name="floor-two-bed-two"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor-two-bed-two2"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/cosy.png" alt="" />{" "}
                                    Cosy
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two-bed-two3"
                                    name="floor-two-bed-two"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor-two-bed-two3"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/normal.png"
                                      alt=""
                                    />{" "}
                                    Normal
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two-bed-two4"
                                    name="floor-two-bed-two"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor-two-bed-two4"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/tity.png" alt="" />
                                    Tight
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="floor-th form-group mt-4">
                              <input
                                type="checkbox"
                                id="bath-yes-bed-two"
                                name="bed-two-2"
                                value="Saturday"
                              />
                              <label htmlFor="bath-yes-bed-two">Bathroom</label>

                              <input
                                type="checkbox"
                                id="bal-yes-bed-two"
                                name="bed-two-2"
                                value="Saturday"
                              />
                              <label htmlFor="bal-yes-bed-two">Balcony</label>

                              <input
                                type="checkbox"
                                id="dress-yes-bed-two"
                                name="bed-two-2"
                                value="Saturday"
                              />
                              <label htmlFor="dress-yes-bed-two">
                                Dressing Area
                              </label>
                            </div>
                            <h5 className="mt-4">Common Area</h5>
                            <div className="floor-th form-group mt-4">
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bath-yesabs"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="bath-yesabs">Kitchen</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bal-yesabs"
                                  name="weekday-2abbx"
                                  value="Saturday"
                                />
                                <label htmlFor="bal-yesabs">Kids Room</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="dress-yesabs"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="dress-yesabs">
                                  Washing Area
                                </label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bath-yesaabs"
                                  name="weekday-2abbax"
                                  value="Saturday"
                                />
                                <label htmlFor="bath-yesaabs">
                                  Common Washroom
                                </label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bal-yeabss"
                                  name="weekday-2abbx"
                                  value="Saturday"
                                />
                                <label htmlFor="bal-yeabss">Lift</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="dress-yeabss"
                                  name="weekday-2abbx"
                                  value="Saturday"
                                />
                                <label htmlFor="dress-yeabss">
                                  Living Area
                                </label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bath-yeabss"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="bath-yeabss">Dining Area</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bal-yabses"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="bal-yabses">Pooja Room</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="dress-yabses"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="dress-yabses">Store Room</label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div id="bedroom-three" style={{ display: "none" }}>
                          <div className="three-floor-sec">
                            <h5 className="mt-4">Bedroom 1</h5>
                            <div className="floor-th">
                              <div className="selector-check">
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="a"
                                    name="beda"
                                    className="selector-item_radio"
                                    checked
                                  />
                                  <label
                                    htmlFor="a"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/luxury.png"
                                      alt=""
                                    />{" "}
                                    Luxury
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="aa"
                                    name="beda"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="aa"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/cosy.png" alt="" />{" "}
                                    Cosy
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="aaa"
                                    name="beda"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="aaa"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/normal.png"
                                      alt=""
                                    />{" "}
                                    Normal
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="aaaa"
                                    name="beda"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="aaaa"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/tity.png" alt="" />
                                    Tight
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className="floor-th form-group mt-4">
                              <input
                                type="checkbox"
                                id="bath-yes"
                                name="weekday-2"
                                value="Saturday"
                              />
                              <label htmlFor="bath-yes">Bathroom</label>

                              <input
                                type="checkbox"
                                id="bal-yes"
                                name="weekday-2"
                                value="Saturday"
                              />
                              <label htmlFor="bal-yes">Balcony</label>

                              <input
                                type="checkbox"
                                id="dress-yes"
                                name="weekday-2"
                                value="Saturday"
                              />
                              <label htmlFor="dress-yes">Dressing Area</label>
                            </div>
                          </div>
                          <div className="three-floor-sec">
                            <h5 className="mt-4">Bedroom 2</h5>
                            <div className="floor-th">
                              <div className="selector-check">
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="b"
                                    name="bed-b"
                                    className="selector-item_radio"
                                    checked
                                  />
                                  <label
                                    htmlFor="b"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/luxury.png"
                                      alt=""
                                    />{" "}
                                    Luxury
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="bb"
                                    name="bed-b"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="bb"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/cosy.png" alt="" />{" "}
                                    Cosy
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="bbb"
                                    name="bed-b"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="bbb"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/normal.png"
                                      alt=""
                                    />{" "}
                                    Normal
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="bbbb"
                                    name="bed-b"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="bbbb"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/tity.png" alt="" />
                                    Tight
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className="floor-th form-group mt-4">
                              <input
                                type="checkbox"
                                id="bedroom-two-bath-yes"
                                name="weekday-2"
                                value="Saturday"
                              />
                              <label htmlFor="bedroom-two-bath-yes">
                                Bathroom
                              </label>

                              <input
                                type="checkbox"
                                id="bedroom-two-bal-yes"
                                name="weekday-2"
                                value="Saturday"
                              />
                              <label htmlFor="bedroom-two-bal-yes">
                                Balcony
                              </label>

                              <input
                                type="checkbox"
                                id="bedroom-two-dress-yes"
                                name="weekday-2"
                                value="Saturday"
                              />
                              <label htmlFor="bedroom-two-dress-yes">
                                Dressing Area
                              </label>
                            </div>
                          </div>
                          <div className="three-floor-sec">
                            <h5 className="mt-4">Bedroom 3</h5>
                            <div className="floor-th">
                              <div className="selector-check">
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="bed3"
                                    name="bed-c"
                                    className="selector-item_radio"
                                    checked
                                  />
                                  <label
                                    htmlFor="bed3"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/luxury.png"
                                      alt=""
                                    />{" "}
                                    Luxury
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="bed33"
                                    name="bed-c"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="bed33"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/cosy.png" alt="" />{" "}
                                    Cosy
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="bed333"
                                    name="bed-c"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="bed333"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/normal.png"
                                      alt=""
                                    />{" "}
                                    Normal
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="bed3333"
                                    name="bed-c"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="bed3333"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/tity.png" alt="" />
                                    Tight
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className="floor-th form-group mt-4">
                              <input
                                type="checkbox"
                                id="bedroom-three-bath-yes"
                                name="weekday-2"
                                value="Saturday"
                              />
                              <label htmlFor="bedroom-three-bath-yes">
                                Bathroom
                              </label>

                              <input
                                type="checkbox"
                                id="bedroom-three-bal-yes"
                                name="weekday-2"
                                value="Saturday"
                              />
                              <label htmlFor="bedroom-three-bal-yes">
                                Balcony
                              </label>

                              <input
                                type="checkbox"
                                id="bedroom-three-dress-yes"
                                name="weekday-2"
                                value="Saturday"
                              />
                              <label htmlFor="bedroom-three-dress-yes">
                                Dressing Area
                              </label>
                            </div>
                            <h5 className="mt-4">Common Area</h5>
                            <div className="floor-th form-group mt-4">
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bath-yesabs"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="bath-yesabs">Kitchen</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bal-yesabs"
                                  name="weekday-2abbx"
                                  value="Saturday"
                                />
                                <label htmlFor="bal-yesabs">Kids Room</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="dress-yesabs"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="dress-yesabs">
                                  Washing Area
                                </label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bath-yesaabs"
                                  name="weekday-2abbax"
                                  value="Saturday"
                                />
                                <label htmlFor="bath-yesaabs">
                                  Common Washroom
                                </label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bal-yeabss"
                                  name="weekday-2abbx"
                                  value="Saturday"
                                />
                                <label htmlFor="bal-yeabss">Lift</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="dress-yeabss"
                                  name="weekday-2abbx"
                                  value="Saturday"
                                />
                                <label htmlFor="dress-yeabss">
                                  Living Area
                                </label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bath-yeabss"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="bath-yeabss">Dining Area</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bal-yabses"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="bal-yabses">Pooja Room</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="dress-yabses"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="dress-yabses">Store Room</label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div id="bedroom-four" style={{ display: "none" }}>
                          <div className="three-floor-sec">
                            <h5 className="mt-4">Bedroom 1</h5>
                            <div className="floor-th">
                              <div className="selector-check">
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-twop-bed41"
                                    name="floor-four"
                                    className="selector-item_radio"
                                    checked
                                  />
                                  <label
                                    htmlFor="floor-twop-bed41"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/luxury.png"
                                      alt=""
                                    />{" "}
                                    Luxury
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-twop-bed42"
                                    name="floor-four"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor-twop-bed42"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/cosy.png" alt="" />{" "}
                                    Cosy
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-twop-bed43"
                                    name="floor-four"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor-twop-bed43"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/normal.png"
                                      alt=""
                                    />{" "}
                                    Normal
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-twop-bed44"
                                    name="floor-four"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor-twop-bed44"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/tity.png" alt="" />
                                    Tight
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="floor-th form-group mt-4">
                              <input
                                type="checkbox"
                                id="bath-yes-bath-towonedaa"
                                name="bed-two-obeda"
                                value="Saturday"
                              />
                              <label htmlFor="bath-yes-bath-towonedaa">
                                Bathroom
                              </label>

                              <input
                                type="checkbox"
                                id="bal-yes-bath-towonedaa"
                                name="webed-twobeda"
                                value="Saturday"
                              />
                              <label htmlFor="bal-yes-bath-towonedaa">
                                Balcony
                              </label>

                              <input
                                type="checkbox"
                                id="dress-yes-bath-towonedaa"
                                name="bed-two-obeda"
                                value="Saturday"
                              />
                              <label htmlFor="dress-yes-bath-towonedaa">
                                Dressing Area
                              </label>
                            </div>
                            <h5 className="mt-4">Bedroom 2</h5>
                            <div className="floor-th">
                              <div className="selector-check">
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two1-adad"
                                    name="floor-twoas"
                                    className="selector-item_radio"
                                    checked
                                  />
                                  <label
                                    htmlFor="floor-two1-adad"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/luxury.png"
                                      alt=""
                                    />{" "}
                                    Luxury
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two2-adad"
                                    name="floor-twoas"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor-two2-adad"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/cosy.png" alt="" />{" "}
                                    Cosy
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two3-adad"
                                    name="floor-twoas"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor-two3-adad"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/normal.png"
                                      alt=""
                                    />{" "}
                                    Normal
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two4-adad"
                                    name="floor-twoas"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor-two4-adad"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/tity.png" alt="" />
                                    Tight
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="floor-th form-group mt-4">
                              <input
                                type="checkbox"
                                id="bath-yes-bath-towoneadavv"
                                name="bed-two-one-adaae"
                                value="Saturday"
                              />
                              <label htmlFor="bath-yes-bath-towoneadavv">
                                Bathroom
                              </label>

                              <input
                                type="checkbox"
                                id="bal-yes-bath-towoneadavv"
                                name="webed-two-onadaae"
                                value="Saturday"
                              />
                              <label htmlFor="bal-yes-bath-towoneadavv">
                                Balcony
                              </label>

                              <input
                                type="checkbox"
                                id="dress-yes-bath-towoneadavv"
                                name="bed-two-one-adaae"
                                value="Saturday"
                              />
                              <label htmlFor="dress-yes-bath-towoneadavv">
                                Dressing Area
                              </label>
                            </div>
                            <h5 className="mt-4">Bedroom 3</h5>
                            <div className="floor-th">
                              <div className="selector-check">
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two1adac"
                                    name="floor-twoqqa"
                                    className="selector-item_radio"
                                    checked
                                  />
                                  <label
                                    htmlFor="floor-two1adac"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/luxury.png"
                                      alt=""
                                    />{" "}
                                    Luxury
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two2adac"
                                    name="floor-twoqqa"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor-two2adac"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/cosy.png" alt="" />{" "}
                                    Cosy
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two3adac"
                                    name="floor-twoqqa"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor-two3adac"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/normal.png"
                                      alt=""
                                    />{" "}
                                    Normal
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two4adac"
                                    name="floor-two"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor-two4adac"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/tity.png" alt="" />
                                    Tight
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="floor-th form-group mt-4">
                              <input
                                type="checkbox"
                                id="bath-yes-bath-towoneqedc"
                                name="bed-two-one-2qesa"
                                value="Saturday"
                              />
                              <label htmlFor="bath-yes-bath-towoneqedc">
                                Bathroom
                              </label>

                              <input
                                type="checkbox"
                                id="bal-yes-bath-towoneqedc"
                                name="webed-two-oneqesa"
                                value="Saturday"
                              />
                              <label htmlFor="bal-yes-bath-towoneqedc">
                                Balcony
                              </label>

                              <input
                                type="checkbox"
                                id="dress-yes-bath-towoneqedc"
                                name="bed-two-one-2qesa"
                                value="Saturday"
                              />
                              <label htmlFor="dress-yes-bath-towoneqedc">
                                Dressing Area
                              </label>
                            </div>
                            <h5 className="mt-4">Bedroom 4</h5>
                            <div className="floor-th">
                              <div className="selector-check">
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two1qwvs"
                                    name="floor-twobjgh"
                                    className="selector-item_radio"
                                    checked
                                  />
                                  <label
                                    htmlFor="floor-two1qwvs"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/luxury.png"
                                      alt=""
                                    />{" "}
                                    Luxury
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two2qwvs"
                                    name="floor-twobjgh"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor-two2qwvs"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/cosy.png" alt="" />{" "}
                                    Cosy
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two3qwvs"
                                    name="floor-twobjgh"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor-two3qwvs"
                                    className="selector-item_label"
                                  >
                                    <img
                                      src="assets/images/normal.png"
                                      alt=""
                                    />{" "}
                                    Normal
                                  </label>
                                </div>
                                <div className="selecotr-item">
                                  <input
                                    type="radio"
                                    id="floor-two4qwvs"
                                    name="floor-twobjgh"
                                    className="selector-item_radio"
                                  />
                                  <label
                                    htmlFor="floor-two4qwvs"
                                    className="selector-item_label"
                                  >
                                    <img src="assets/images/tity.png" alt="" />
                                    Tight
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="floor-th form-group mt-4">
                              <input
                                type="checkbox"
                                id="bath-yes-bath-towonevnt"
                                name="bed-two-one-2arv"
                                value="Saturday"
                              />
                              <label htmlFor="bath-yes-bath-towonevnt">
                                Bathroom
                              </label>

                              <input
                                type="checkbox"
                                id="bal-yes-bath-towonevnt"
                                name="webed-two-onearv"
                                value="Saturday"
                              />
                              <label htmlFor="bal-yes-bath-towonevnt">
                                Balcony
                              </label>

                              <input
                                type="checkbox"
                                id="dress-yes-bath-towonevnt"
                                name="bed-two-one-2arv"
                                value="Saturday"
                              />
                              <label htmlFor="dress-yes-bath-towonevnt">
                                Dressing Area
                              </label>
                            </div>
                            <h5 className="mt-4">Common Area</h5>
                            <div className="floor-th form-group mt-4">
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bath-yesabs"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="bath-yesabs">Kitchen</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bal-yesabs"
                                  name="weekday-2abbx"
                                  value="Saturday"
                                />
                                <label htmlFor="bal-yesabs">Kids Room</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="dress-yesabs"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="dress-yesabs">
                                  Washing Area
                                </label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bath-yesaabs"
                                  name="weekday-2abbax"
                                  value="Saturday"
                                />
                                <label htmlFor="bath-yesaabs">
                                  Common Washroom
                                </label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bal-yeabss"
                                  name="weekday-2abbx"
                                  value="Saturday"
                                />
                                <label htmlFor="bal-yeabss">Lift</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="dress-yeabss"
                                  name="weekday-2abbx"
                                  value="Saturday"
                                />
                                <label htmlFor="dress-yeabss">
                                  Living Area
                                </label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bath-yeabss"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="bath-yeabss">Dining Area</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="bal-yabses"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="bal-yabses">Pooja Room</label>
                              </div>
                              <div className="col-lg-6 pd-0">
                                <input
                                  type="checkbox"
                                  id="dress-yabses"
                                  name="weekday-abbx2"
                                  value="Saturday"
                                />
                                <label htmlFor="dress-yabses">Store Room</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                      style={{ fontSize: "18px", fontWeight: "500" }}
                    >
                      Save and continue
                    </button>
                  </div>
                </div>

                <div className="tab-pane" role="tabpanel" id="complete">
                  <div
                    id="constructionDetailsFormMessage"
                    className="text-danger text-center"
                  ></div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Write More About Your Requirement
                    </label>
                    <textarea
                      className="form-control-input"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>

                  <div className="sub-lat">
                    <button
                      type="submit"
                      className="btn btn-primary next-step"
                      id="final-submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>

                <div className="clearfix"></div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default StartProjectForm;
