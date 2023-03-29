import "../../UserDashboard.css";
import React, { useEffect, useRef, useState } from "react";

const UploadImage = () => {
  const inputRef = useRef(null);
  const getData = async () => {
    const formData = new FormData();
    formData.append("file", inputRef.current.files[0]);
    console.log({ formData });

    const response = await fetch(
      `http://localhost:8001/user-update-profilepic`,
      {
        method: "POST",
        credentials: "include",

        body: formData,
      }
    );
    const data = await response.json();

    console.log({ data });
  };
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header sty-one">
          <h1>Upload Image</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <i className="fa fa-angle-right"></i> Draft
            </li>
          </ol>
        </div>

        <div className="content">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <form onSubmit={getData} encType="multipart/form-data">
                      <div className="col-lg-12">
                        <fieldset className="form-group">
                          <label> Photo </label>
                          <input
                            type="file"
                            name="file"
                            className="form-control"
                            ref={inputRef}
                            required=""
                          />
                          <span className="text-danger"></span>
                        </fieldset>
                        <p className="text-danger">
                          {" "}
                          Note : Image type : jpg,png,jpeg Only , Image Size :
                          80*80px{" "}
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <button className="btn btn-primary" type="submit">
                          {" "}
                          Update{" "}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-lg-6">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadImage;
