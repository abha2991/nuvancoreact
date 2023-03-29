import React from 'react'

const Specialiest = () => {
  return (
<div className="Our-Specialties">
    <div className="container">
        <div className="heading-Specialties">
            <h2>Our <mark className="banner-con">Specialties</mark></h2>
            <p>We are trying to giving our best from customer satisfaction to continuous learning. And trying to provide the best service to you.</p>
        </div>
        <div className="row sp-sec">
            <div className="sp-a">
                <img src={require("../images/customersatifcation.png")} alt="" />
                <h4>Customer Satisfaction </h4>
                <p>Our Customer Satisfied by our services.</p>
            </div>
            <div className="sp-a">
                <img src={require("../images/honesty.png")} alt="" />
                <h4>Honesty</h4>
                <p>We are always Honest to Customer and Team also.</p>
            </div>
            <div className="sp-a">
                <img src={require("../images/owner-ship.png")} alt="" />
                <h4>Ownership</h4>
                <p>We take ownership of your Dream House Project.</p>
            </div>
            <div className="sp-a">
                <img src={require("../images/passion.png")} alt="" />
                <h4>Passion</h4>
                <p>Our team is always Passionate to do work for you.</p>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Specialiest