import React from "react";

const RecentPost = () => {
  return (
    <section className="design-process-section" id="process-tab">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <ul
              className="nav nav-tabs process-model more-icon-preocess"
              role="tablist"
            >
              <li className="tabs-li-sp" role="presentation">
                <a
                  href="#discover"
                  aria-controls="discover"
                  role="tab"
                  data-toggle="tab"
                >
                  Artificial Intelligence
                </a>
              </li>
              <li className="tabs-li-sp" role="presentation">
                <a
                  href="#strategy"
                  aria-controls="strategy"
                  role="tab"
                  data-toggle="tab"
                >
                  Construction Material
                </a>
              </li>
              <li className="tabs-li-sp" role="presentation">
                <a
                  href="#optimization"
                  aria-controls="optimization"
                  role="tab"
                  data-toggle="tab"
                >
                  Cost Effective Construction
                </a>
              </li>
              <li className="active tabs-li-sp" role="presentation">
                <a
                  href="#content"
                  aria-controls="content"
                  role="tab"
                  data-toggle="tab"
                >
                  All
                </a>
              </li>
            </ul>
            {/* <!-- end design process steps-->
          <!-- Tab panes --> */}
            <div className="tab-content blogs-tab">
              <h2>
                Recently <mark className="banner-con">Posted </mark>
              </h2>
              <div role="tabpanel" className="tab-pane active" id="discover">
                <div className="design-process-content">
                  <div className="all-blog-sh row">
                    <div className="left-blog-details col-lg-6 col-sm-12">
                      <img
                        src={require("../../../images/blog-image.png")}
                        alt=""
                      />
                      <h5>
                        Insulation at a lower cost-simple and effective
                        techniques
                      </h5>
                      <p>
                        There are many techniques and products that can help you
                        save energy efficiently. Here you will find a
                        non-exhaustive list of different techniques to help you
                        reduce your energy costs.
                      </p>
                      <div className="link-blog">
                        <a href="#">Read More</a>
                        <a className="date-blog" href="#">
                          <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                          02 december 2022
                        </a>
                      </div>
                    </div>
                    <div className="right-blog-details col-lg-6 col-sm-12">
                      <div className="row sm-bl">
                        <img
                          src={require("../../../images/sm-blog-img.png")}
                          alt=""
                        />
                        <div className="detail-sm-blog">
                          <a className="solu-blog" href="#">
                            AI Solution
                          </a>
                          <h5>Lorem ispum is a simple dummy</h5>
                          <div className="three-detal-sm-blog row">
                            <a className="thr-sm-img" href="#">
                              <img
                                src={require("../../../images/blog-author.png")}
                                alt=""
                              />{" "}
                              Jenny kiaa
                            </a>
                            <a className="thr-sm-date" href="#">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              02 december 2022
                            </a>
                            <a className="thr-sm-time" href="#">
                              <i
                                className="fa fa-clock-o"
                                aria-hidden="true"
                              ></i>{" "}
                              3 min. to read
                            </a>
                          </div>
                          <p>
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into
                          </p>
                        </div>
                      </div>
                      <div className="row sm-bl">
                        <img
                          src={require("../../../images/sm-blog-img.png")}
                          alt=""
                        />
                        <div className="detail-sm-blog">
                          <a className="solu-blog" href="#">
                            AI Solution
                          </a>
                          <h5>Lorem ispum is a simple dummy</h5>
                          <div className="three-detal-sm-blog row">
                            <a className="thr-sm-img" href="#">
                              <img
                                src={require("../../../images/blog-author.png")}
                                alt=""
                              />{" "}
                              Jenny kiaa
                            </a>
                            <a className="thr-sm-date" href="#">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              02 december 2022
                            </a>
                            <a className="thr-sm-time" href="#">
                              <i
                                className="fa fa-clock-o"
                                aria-hidden="true"
                              ></i>{" "}
                              3 min. to read
                            </a>
                          </div>
                          <p>
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into
                          </p>
                        </div>
                      </div>
                      <div className="row sm-bl">
                        <img
                          src={require("../../../images/sm-blog-img.png")}
                          alt=""
                        />
                        <div className="detail-sm-blog">
                          <a className="solu-blog" href="#">
                            AI Solution
                          </a>
                          <h5>Lorem ispum is a simple dummy</h5>
                          <div className="three-detal-sm-blog row">
                            <a className="thr-sm-img" href="#">
                              <img
                                src={require("../../../images/blog-author.png")}
                                alt=""
                              />{" "}
                              Jenny kiaa
                            </a>
                            <a className="thr-sm-date" href="#">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              02 december 2022
                            </a>
                            <a className="thr-sm-time" href="#">
                              <i
                                className="fa fa-clock-o"
                                aria-hidden="true"
                              ></i>{" "}
                              3 min. to read
                            </a>
                          </div>
                          <p>
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="strategy">
                <div className="design-process-content">
                  <div className="all-blog-sh row">
                    <div className="left-blog-details col-lg-6 col-sm-12">
                      <img
                        src={require("../../../images/blog-image.png")}
                        alt=""
                      />
                      <h5>
                        Insulation at a lower cost-simple and effective
                        techniques
                      </h5>
                      <p>
                        There are many techniques and products that can help you
                        save energy efficiently. Here you will find a
                        non-exhaustive list of different techniques to help you
                        reduce your energy costs.
                      </p>
                      <div className="link-blog">
                        <a href="#">Read More</a>
                        <a className="date-blog" href="#">
                          <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                          02 december 2022
                        </a>
                      </div>
                    </div>
                    <div className="right-blog-details col-lg-6 col-sm-12">
                      <div className="row sm-bl">
                        <img
                          src={require("../../../images/sm-blog-img.png")}
                          alt=""
                        />
                        <div className="detail-sm-blog">
                          <a className="solu-blog" href="#">
                            AI Solution
                          </a>
                          <h5>Lorem ispum is a simple dummy</h5>
                          <div className="three-detal-sm-blog row">
                            <a className="thr-sm-img" href="#">
                              <img
                                src={require("../../../images/blog-author.png")}
                                alt=""
                              />{" "}
                              Jenny kiaa
                            </a>
                            <a className="thr-sm-date" href="#">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              02 december 2022
                            </a>
                            <a className="thr-sm-time" href="#">
                              <i
                                className="fa fa-clock-o"
                                aria-hidden="true"
                              ></i>{" "}
                              3 min. to read
                            </a>
                          </div>
                          <p>
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into
                          </p>
                        </div>
                      </div>
                      <div className="row sm-bl">
                        <img
                          src={require("../../../images/sm-blog-img.png")}
                          alt=""
                        />
                        <div className="detail-sm-blog">
                          <a className="solu-blog" href="#">
                            AI Solution
                          </a>
                          <h5>Lorem ispum is a simple dummy</h5>
                          <div className="three-detal-sm-blog row">
                            <a className="thr-sm-img" href="#">
                              <img
                                src={require("../../../images/blog-author.png")}
                                alt=""
                              />{" "}
                              Jenny kiaa
                            </a>
                            <a className="thr-sm-date" href="#">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              02 december 2022
                            </a>
                            <a className="thr-sm-time" href="#">
                              <i
                                className="fa fa-clock-o"
                                aria-hidden="true"
                              ></i>{" "}
                              3 min. to read
                            </a>
                          </div>
                          <p>
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into
                          </p>
                        </div>
                      </div>
                      <div className="row sm-bl">
                        <img
                          src={require("../../../images/sm-blog-img.png")}
                          alt=""
                        />
                        <div className="detail-sm-blog">
                          <a className="solu-blog" href="#">
                            AI Solution
                          </a>
                          <h5>Lorem ispum is a simple dummy</h5>
                          <div className="three-detal-sm-blog row">
                            <a className="thr-sm-img" href="#">
                              <img
                                src={require("../../../images/blog-author.png")}
                                alt=""
                              />{" "}
                              Jenny kiaa
                            </a>
                            <a className="thr-sm-date" href="#">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              02 december 2022
                            </a>
                            <a className="thr-sm-time" href="#">
                              <i
                                className="fa fa-clock-o"
                                aria-hidden="true"
                              ></i>{" "}
                              3 min. to read
                            </a>
                          </div>
                          <p>
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="optimization">
                <div className="design-process-content">
                  <div className="all-blog-sh row">
                    <div className="left-blog-details col-lg-6 col-sm-12">
                      <img
                        src={require("../../../images/blog-image.png")}
                        alt=""
                      />
                      <h5>
                        Insulation at a lower cost-simple and effective
                        techniques
                      </h5>
                      <p>
                        There are many techniques and products that can help you
                        save energy efficiently. Here you will find a
                        non-exhaustive list of different techniques to help you
                        reduce your energy costs.
                      </p>
                      <div className="link-blog">
                        <a href="#">Read More</a>
                        <a className="date-blog" href="#">
                          <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                          02 december 2022
                        </a>
                      </div>
                    </div>
                    <div className="right-blog-details col-lg-6 col-sm-12">
                      <div className="row sm-bl">
                        <img
                          src={require("../../../images/sm-blog-img.png")}
                          alt=""
                        />
                        <div className="detail-sm-blog">
                          <a className="solu-blog" href="#">
                            AI Solution
                          </a>
                          <h5>Lorem ispum is a simple dummy</h5>
                          <div className="three-detal-sm-blog row">
                            <a className="thr-sm-img" href="#">
                              <img
                                src={require("../../../images/blog-author.png")}
                                alt=""
                              />{" "}
                              Jenny kiaa
                            </a>
                            <a className="thr-sm-date" href="#">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              02 december 2022
                            </a>
                            <a className="thr-sm-time" href="#">
                              <i
                                className="fa fa-clock-o"
                                aria-hidden="true"
                              ></i>{" "}
                              3 min. to read
                            </a>
                          </div>
                          <p>
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into
                          </p>
                        </div>
                      </div>
                      <div className="row sm-bl">
                        <img
                          src={require("../../../images/sm-blog-img.png")}
                          alt=""
                        />
                        <div className="detail-sm-blog">
                          <a className="solu-blog" href="#">
                            AI Solution
                          </a>
                          <h5>Lorem ispum is a simple dummy</h5>
                          <div className="three-detal-sm-blog row">
                            <a className="thr-sm-img" href="#">
                              <img
                                src={require("../../../images/blog-author.png")}
                                alt=""
                              />{" "}
                              Jenny kiaa
                            </a>
                            <a className="thr-sm-date" href="#">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              02 december 2022
                            </a>
                            <a className="thr-sm-time" href="#">
                              <i
                                className="fa fa-clock-o"
                                aria-hidden="true"
                              ></i>{" "}
                              3 min. to read
                            </a>
                          </div>
                          <p>
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into
                          </p>
                        </div>
                      </div>
                      <div className="row sm-bl">
                        <img
                          src={require("../../../images/sm-blog-img.png")}
                          alt=""
                        />
                        <div className="detail-sm-blog">
                          <a className="solu-blog" href="#">
                            AI Solution
                          </a>
                          <h5>Lorem ispum is a simple dummy</h5>
                          <div className="three-detal-sm-blog row">
                            <a className="thr-sm-img" href="#">
                              <img
                                src={require("../../../images/blog-author.png")}
                                alt=""
                              />{" "}
                              Jenny kiaa
                            </a>
                            <a className="thr-sm-date" href="#">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              02 december 2022
                            </a>
                            <a className="thr-sm-time" href="#">
                              <i
                                className="fa fa-clock-o"
                                aria-hidden="true"
                              ></i>{" "}
                              3 min. to read
                            </a>
                          </div>
                          <p>
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="content">
                <div className="design-process-content">
                  <div className="all-blog-sh row">
                    <div className="left-blog-details col-lg-6 col-sm-12">
                      <img
                        src={require("../../../images/blog-image.png")}
                        alt=""
                      />
                      <h5>
                        Insulation at a lower cost-simple and effective
                        techniques
                      </h5>
                      <p>
                        There are many techniques and products that can help you
                        save energy efficiently. Here you will find a
                        non-exhaustive list of different techniques to help you
                        reduce your energy costs.
                      </p>
                      <div className="link-blog">
                        <a href="#">Read More</a>
                        <a className="date-blog" href="#">
                          <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                          02 december 2022
                        </a>
                      </div>
                    </div>
                    <div className="right-blog-details col-lg-6 col-sm-12">
                      <div className="row sm-bl">
                        <img
                          src={require("../../../images/sm-blog-img.png")}
                          alt=""
                        />
                        <div className="detail-sm-blog">
                          <a className="solu-blog" href="#">
                            AI Solution
                          </a>
                          <h5>Lorem ispum is a simple dummy</h5>
                          <div className="three-detal-sm-blog row">
                            <a className="thr-sm-img" href="#">
                              <img
                                src={require("../../../images/blog-author.png")}
                                alt=""
                              />{" "}
                              Jenny kiaa
                            </a>
                            <a className="thr-sm-date" href="#">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              02 december 2022
                            </a>
                            <a className="thr-sm-time" href="#">
                              <i
                                className="fa fa-clock-o"
                                aria-hidden="true"
                              ></i>{" "}
                              3 min. to read
                            </a>
                          </div>
                          <p>
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into
                          </p>
                        </div>
                      </div>
                      <div className="row sm-bl">
                        <img
                          src={require("../../../images/sm-blog-img.png")}
                          alt=""
                        />
                        <div className="detail-sm-blog">
                          <a className="solu-blog" href="#">
                            AI Solution
                          </a>
                          <h5>Lorem ispum is a simple dummy</h5>
                          <div className="three-detal-sm-blog row">
                            <a className="thr-sm-img" href="#">
                              <img
                                src={require("../../../images/blog-author.png")}
                                alt=""
                              />{" "}
                              Jenny kiaa
                            </a>
                            <a className="thr-sm-date" href="#">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              02 december 2022
                            </a>
                            <a className="thr-sm-time" href="#">
                              <i
                                className="fa fa-clock-o"
                                aria-hidden="true"
                              ></i>{" "}
                              3 min. to read
                            </a>
                          </div>
                          <p>
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into
                          </p>
                        </div>
                      </div>
                      <div className="row sm-bl">
                        <img
                          src={require("../../../images/sm-blog-img.png")}
                          alt=""
                        />
                        <div className="detail-sm-blog">
                          <a className="solu-blog" href="#">
                            AI Solution
                          </a>
                          <h5>Lorem ispum is a simple dummy</h5>
                          <div className="three-detal-sm-blog row">
                            <a className="thr-sm-img" href="#">
                              <img
                                src={require("../../../images/blog-author.png")}
                                alt=""
                              />{" "}
                              Jenny kiaa
                            </a>
                            <a className="thr-sm-date" href="#">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              02 december 2022
                            </a>
                            <a className="thr-sm-time" href="#">
                              <i
                                className="fa fa-clock-o"
                                aria-hidden="true"
                              ></i>{" "}
                              3 min. to read
                            </a>
                          </div>
                          <p>
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="reporting">
                <div className="design-process-content">
                  <div className="all-blog-sh row">
                    <div className="left-blog-details col-lg-6 col-sm-12">
                      <img
                        src={require("../../../images/blog-image.png")}
                        alt=""
                      />
                      <h5>
                        Insulation at a lower cost-simple and effective
                        techniques
                      </h5>
                      <p>
                        There are many techniques and products that can help you
                        save energy efficiently. Here you will find a
                        non-exhaustive list of different techniques to help you
                        reduce your energy costs.
                      </p>
                      <div className="link-blog">
                        <a href="#">Read More</a>
                        <a className="date-blog" href="#">
                          <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                          02 december 2022
                        </a>
                      </div>
                    </div>
                    <div className="right-blog-details col-lg-6 col-sm-12">
                      <div className="row sm-bl">
                        <img
                          src={require("../../../images/sm-blog-img.png")}
                          alt=""
                        />
                        <div className="detail-sm-blog">
                          <a className="solu-blog" href="#">
                            AI Solution
                          </a>
                          <h5>Lorem ispum is a simple dummy</h5>
                          <div className="three-detal-sm-blog row">
                            <a className="thr-sm-img" href="#">
                              <img
                                src={require("../../../images/blog-author.png")}
                                alt=""
                              />{" "}
                              Jenny kiaa
                            </a>
                            <a className="thr-sm-date" href="#">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              02 december 2022
                            </a>
                            <a className="thr-sm-time" href="#">
                              <i
                                className="fa fa-clock-o"
                                aria-hidden="true"
                              ></i>{" "}
                              3 min. to read
                            </a>
                          </div>
                          <p>
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into
                          </p>
                        </div>
                      </div>
                      <div className="row sm-bl">
                        <img
                          src={require("../../../images/sm-blog-img.png")}
                          alt=""
                        />
                        <div className="detail-sm-blog">
                          <a className="solu-blog" href="#">
                            AI Solution
                          </a>
                          <h5>Lorem ispum is a simple dummy</h5>
                          <div className="three-detal-sm-blog row">
                            <a className="thr-sm-img" href="#">
                              <img
                                src={require("../../../images/blog-author.png")}
                                alt=""
                              />{" "}
                              Jenny kiaa
                            </a>
                            <a className="thr-sm-date" href="#">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              02 december 2022
                            </a>
                            <a className="thr-sm-time" href="#">
                              <i
                                className="fa fa-clock-o"
                                aria-hidden="true"
                              ></i>{" "}
                              3 min. to read
                            </a>
                          </div>
                          <p>
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into
                          </p>
                        </div>
                      </div>
                      <div className="row sm-bl">
                        <img
                          src={require("../../../images/sm-blog-img.png")}
                          alt=""
                        />
                        <div className="detail-sm-blog">
                          <a className="solu-blog" href="#">
                            AI Solution
                          </a>
                          <h5>Lorem ispum is a simple dummy</h5>
                          <div className="three-detal-sm-blog row">
                            <a className="thr-sm-img" href="#">
                              <img
                                src={require("../../../images/blog-author.png")}
                                alt=""
                              />{" "}
                              Jenny kiaa
                            </a>
                            <a className="thr-sm-date" href="#">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              02 december 2022
                            </a>
                            <a className="thr-sm-time" href="#">
                              <i
                                className="fa fa-clock-o"
                                aria-hidden="true"
                              ></i>{" "}
                              3 min. to read
                            </a>
                          </div>
                          <p>
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPost;
