import useUser from "../../../hooks/useUser";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";
import Footer from "../Footer";

const FormDetails = () => {
  const { user } = useUser();
  const [data, setData] = useState();
  const location = useLocation();
  const [floor, setFloor] = useState();
  let det;
  const getDetails = async () => {
    const res = await fetch("http://localhost:8001/user-get-details", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerId: user[0]?.customer_id,
        basicId: location?.state?.basicId,
      }),
    });
    const response = await res.json();
    det = JSON.parse(response?.data?.[0]?.cd_details);

    console.log({ det });
    if (res.status === 400 || !response) {
      window.alert(response.message);
    } else if (res.status === 200) {
      setData(response);
      setFloor(det);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  floor?.floors?.map((val, ind) => {
    console.log(val.bedrooms);
  });

  for (let i = 1; i < floor?.floors?.length; i++) {
    console.log(`Floor ${i}`);
    for (let j = 0; j < floor?.floors?.[i].bedrooms?.length; j++) {
      console.log(`Bedroom ${j + 1}`);
      console.log(floor?.floors?.[i].bedrooms?.[j]?.balcony);

      floor?.floors?.map((user, index) => {
        console.log(`Floor : ${index + 1}`);

        {
          floor?.floors?.[index].bedrooms?.map((bed, v) => {
            console.log(`BedRoom : ${v + 1}`);

            floor?.floors?.[index].bedrooms?.map((details, u) => {
              console.log(details.lift);
            });
          });
        }

        // {
        //   user?.bedrooms?.[0]?.map((skill, subIndex) => {
        //     console.log(`Skill # ${subIndex}: ${skill} `);
        //   });
        // }
      });
      //   for (let k = 0; k < floor?.floors?.[i].bedrooms?.[j]?.length; k++) {}
    }
  }
  if (data) {
    return (
      <>
        <Header />
        <SideBar />

        <div className="content-wrapper">
          <div className="content-header sty-one">
            <h1>Dashboard</h1>
            <ol className="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Form Details
              </li>
            </ol>
          </div>

          <div className="content">
            <div className="card">
              <div className="row">
                <div className="col-6 mt-5 mb-3">
                  <div className="user-form-div">
                    <label>Location :&nbsp;</label>
                    <p>{data?.data?.[0]?.basic_details_location}</p>
                  </div>
                  <div className="user-form-div">
                    <label>City :&nbsp;</label>
                    <p>{data?.data?.[0]?.basic_details_city}</p>
                  </div>
                  <div className="user-form-div">
                    <label>Start Planning :&nbsp;</label>
                    <p>{data?.data?.[0]?.basic_details_startplanning}</p>
                  </div>
                  <div className="user-form-div">
                    <label>Property Status :&nbsp;</label>
                    <p>{data?.data?.[0]?.property_status}</p>
                  </div>
                  <div className="user-form-div">
                    <label>Top Size :&nbsp;</label>
                    <p>{data?.data?.[0]?.pd_top_size}</p>
                  </div>
                  <div className="user-form-div">
                    <label>Top Name :&nbsp;</label>
                    <p>{data?.data?.[0]?.pd_top_name}</p>
                  </div>

                  <div className="user-form-div">
                    <label>Right Size :&nbsp;</label>
                    <p>{data?.data?.[0]?.pd_right_size}</p>
                  </div>

                  <div className="user-form-div">
                    <label>Right Name :&nbsp;</label>
                    <p>{data?.data?.[0]?.pd_right_name}</p>
                  </div>
                </div>
                <div className="col-6 mt-5 mb-3">
                  <div className="user-form-div">
                    <label>Bottom Size :&nbsp;</label>
                    <p>{data?.data?.[0]?.pd_bottom_size}</p>
                  </div>
                  <div className="user-form-div">
                    <label>Bottom Name :&nbsp;</label>
                    <p>{data?.data?.[0]?.pd_bottom_name}</p>
                  </div>
                  <div className="user-form-div">
                    <label>Left Size :&nbsp;</label>
                    <p>{data?.data?.[0]?.pd_left_size}</p>
                  </div>
                  <div className="user-form-div">
                    <label>Left Name :&nbsp;</label>
                    <p>{data?.data?.[0]?.pd_left_name}</p>
                  </div>
                  <div className="user-form-div">
                    <label>Street facing :&nbsp;</label>
                    <p>{data?.data?.[0]?.pd_street_facing}</p>
                  </div>
                  <div className="user-form-div">
                    <label>Built Area :&nbsp;</label>
                    <p>{data?.data?.[0]?.pd_built_area}</p>
                  </div>
                  <div className="user-form-div">
                    <label>Additional Requirement :&nbsp;</label>
                    <p>{data?.data?.[0]?.ad_requirement}</p>
                  </div>
                  <div className="user-form-div">
                    <label>Additional Image :&nbsp;</label>
                    <p>
                      {" "}
                      <img
                        src={
                          "http://localhost:8001/uploads/AdditionalRequirements/" +
                          data?.data?.[0]?.ad_image
                        }
                        className="logomobiletop mr-1"
                      />
                    </p>
                  </div>
                </div>

                <div className="col">
                  {/*{floor?.floors?.map((val, i) => (*/}
                  {/*  <div style={{ display: "flex" }}>*/}
                  {/*    <label>Floor :&nbsp;</label>*/}
                  {/*    <p>{val}</p>*/}
                  {/*  </div>*/}
                  {/*))}*/}

                  <div className="card-body">
                    <table
                      id="example1"
                      className="table table-striped table-bordered"
                    >
                      <thead>
                        <tr>
                          <th>Floors</th>
                        </tr>
                      </thead>
                      <tbody>
                        {floor?.floors?.map((val, index) => {
                          return (
                            <>
                              <tr>
                                <td>
                                  {index == 0
                                    ? "Ground Floor"
                                    : `Floor No ${index}`}

                                  {floor?.floors?.[index]?.type ? (
                                    <td>{floor?.floors?.[index]?.type}</td>
                                  ) : (
                                    ""
                                  )}
                                  {floor?.floors?.[index].bedrooms?.map(
                                    (bed, ind) => {
                                      return (
                                        <>
                                          <tr>
                                            <td>
                                              Bedroom No {ind + 1}
                                              {bed.type ? (
                                                <td>Bed Type : {bed.type}</td>
                                              ) : (
                                                ""
                                              )}
                                              {bed.balcony ? (
                                                <td>Balcony</td>
                                              ) : (
                                                ""
                                              )}
                                              {bed.kitchen ? (
                                                <td>Kitchen</td>
                                              ) : (
                                                ""
                                              )}
                                              {bed.bathroom ? (
                                                <td>Bathroom</td>
                                              ) : (
                                                ""
                                              )}{" "}
                                              {bed.dressingArea ? (
                                                <td>Dressing Area</td>
                                              ) : (
                                                ""
                                              )}
                                              {bed.kidsRoom ? (
                                                <td>Kids Room</td>
                                              ) : (
                                                ""
                                              )}
                                              {bed.washingArea ? (
                                                <td>Washing Area</td>
                                              ) : (
                                                ""
                                              )}
                                              {bed.commonWashroom ? (
                                                <td>Common Washroom</td>
                                              ) : (
                                                ""
                                              )}
                                              {bed.lift ? <td>Lift</td> : ""}
                                              {bed.livingArea ? (
                                                <td>Living Area</td>
                                              ) : (
                                                ""
                                              )}
                                              {bed.diningArea ? (
                                                <td>Dining Area</td>
                                              ) : (
                                                ""
                                              )}
                                              {bed.storeRoom ? (
                                                <td>Store Room</td>
                                              ) : (
                                                ""
                                              )}
                                              {bed.poojaRoom ? (
                                                <td>Pooja Room</td>
                                              ) : (
                                                ""
                                              )}
                                            </td>
                                          </tr>
                                        </>
                                      );
                                    }
                                  )}
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
};

export default FormDetails;
