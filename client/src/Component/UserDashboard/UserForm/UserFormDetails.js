import { useEffect, useState } from "react";
import useUser from "../../../hooks/useUser";
import Header from "../Header";
import SideBar from "../SideBar";
import Footer from "../Footer";

const UserFormDetails = () => {
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UserFormDetails;
