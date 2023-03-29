import React from 'react'

const Patner = () => {
  return (
    <div className="patner-our">
    <div className="container">
        <div className="headiiing-feed">
            <h2>Our <mark className="banner-con">Partners</mark></h2>
            <p>Top of the companies who are our partners all are big giants in their industries. Such of some are  </p>
        </div>
        <div className="row patner-row">
                <img src={require("../images/patner1.png")} alt="" style={{width: "210px"}} />
            <img src={require("../images/patner2.png")} alt="" style={{width: "160px"}} />
            <img src={require("../images/patner3.png")} alt="" style={{width: "189px"}} />
            <img src={require("../images/patner4.png")} alt="" style={{width: "244px"}} />
        </div>
    </div>
  </div>
  )
}

export default Patner