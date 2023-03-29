import React from "react";

const GenrateAi = () => {
  return (
    <div className="genearte-ai">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6-col-sm-12 ai-gn">
            <h2>
              Want to Build Your Dream House?{" "}
              <mark className="banner-con">Let’s Build It</mark>
            </h2>
            <p>You are few steps away to build your Dream Home.</p>
            <ul>
              <li>Select your plot area in Length and Breadth.</li>
              <li>Choose your plot dimension according to your plot.</li>
              <li>
                Tell us your all requirement to build your Dream House
                perfectly.
              </li>
              <li>
                Artificial Intelligence will generate your dream house layout.
                Select one of them.
              </li>
              <li>
                AI layouts are not interesting. Our team will provide you with
                architecture design.
              </li>
            </ul>
            <a className="ads" href="start-project.html">
              Start Your Project
            </a>
          </div>
          <div className="col-lg-6 col-md-6-col-sm-12 ai-gn">
            <div className="vido1">
              <button
                type="button"
                className="btn btn-primary video-btn"
                data-toggle="modal"
                data-src="https://www.youtube.com/embed/JJUo8Fe3_JY"
                data-target="#myModal"
              >
                <img
                  className="pulse-video"
                  src={require("../images/play.png")}
                  alt=""
                />
              </button>
              <img src={require("../images/video1.png")} alt="" />
            </div>
            <div className="other-video">
              <img src={require("../images/video2.png")} alt="" />
              <img src={require("../images/video3.png")} alt="" />
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="myModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>

                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src=""
                    id="video"
                    allowscriptaccess="always"
                    allow="autoplay"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenrateAi;
