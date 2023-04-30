import { useEffect, useState } from "react";
import useUser from "../../../hooks/useUser";
import Header from "../Header";
import SideBar from "../SideBar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const UserFormDetails = () => {
  const { user } = useUser();
  const [data, setData] = useState();
  const navigate = useNavigate();

  const getBasicDetails = async () => {
    const res = await fetch(
      "http://localhost:8001/user-basic-details-list-complete",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: user?.[0]?.customer_id,
        }),
      }
    );
    const response = await res.json();

    if (res.status === 200) {
      setData(response);
    }
  };

  useEffect(() => {
    getBasicDetails();
  }, [user[0].customer_id]);

  const viewDetails = (id) => {
    navigate("/form-details", { state: { basicId: id } });
  };
  return (
    <>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        <div className="content-header sty-one">
          <h1>Form Details</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <i className="fa fa-angle-right"></i>Form Details
            </li>
          </ol>
        </div>

        <div className="content">
          <div className="card">
            <div className="card-body">
              <h4 className="text-black">Form Details</h4>

              <p></p>

              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr className="table-heading">
                      <th scope="col">S No</th>
                      <th scope="col">Location</th>
                      <th scope="col">City</th>
                      <th scope="col">Time To Construct</th>
                      <th scope="col">Property Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data?.map((val, index) => {
                      return (
                        <>
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{val.basic_details_location}</td>
                            <td>{val.basic_details_city}</td>
                            <td>{val.basic_details_startplanning}</td>
                            <td>{val.property_status}</td>

                            <td
                              onClick={() => viewDetails(val.basic_details_id)}
                            >
                              <a>View</a>
                              <i
                                className="fas fa-eye fa-xs ml-3"
                                style={{ color: "#999", cursor: "pointer" }}
                              ></i>
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

      <Footer />
    </>
  );
};

export default UserFormDetails;
