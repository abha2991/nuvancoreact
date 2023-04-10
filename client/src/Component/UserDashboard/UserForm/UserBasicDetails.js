import { useEffect, useState } from "react";
import useUser from "../../../hooks/useUser";
import Header from "../Header";
import SideBar from "../SideBar";
import Footer from "../Footer";
import { useNavigate } from "react-router";

const UserBasicDetails = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [data, setData] = useState();

  const getBasicDetails = async () => {
    const res = await fetch("http://localhost:8001/user-basic-details-list", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user?.[0]?.customer_id,
      }),
    });
    const response = await res.json();

    if (res.status === 200) {
      setData(response);
    }
  };

  useEffect(() => {
    getBasicDetails();
  }, [user[0].customer_id]);

  const fillDetails = (id) => {
    navigate("/start-project", { state: { basicId: id } });
  };

  return (
    <>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        <div className="content-header sty-one">
          <h1>Basic Details</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <i className="fa fa-angle-right"></i>Basic Details
            </li>
          </ol>
        </div>

        <div className="content">
          <div className="card">
            <div className="card-body">
              <h4 className="text-black">Basic Details</h4>

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
                              onClick={() => fillDetails(val.basic_details_id)}
                            >
                              <a>Edit/Update</a>
                              <i
                                className="fas fa-edit fa-xs ml-3"
                                style={{ color: "#999" }}
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

export default UserBasicDetails;
