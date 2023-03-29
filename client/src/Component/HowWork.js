import React, { useState } from 'react'

const HowWork = () => {
    const [step,setStep]=useState(0)
    console.log(step)
  return (
    <div className="how-works">
    <div className="container">
        <div className="head-how">
            <h2>How it <mark className="banner-con work-mark">works</mark></h2>
            <p>Our steps are simple and easy to understand: Request - Receive - Track - Settle in</p>
        </div>
        <div className="wrapper mob-none">
            <div className="tabs-wrapper">
            <span className="left scroller-btn"></span>
              <ul id="scroller" className="nav nav-tabs tab-slider">
                <li><div className={`a-tab-sl Raise-a pulse-tab ${step>=1?" pulse-tab":""}`} data-toggle="tab" onClick={()=>{setStep(1)}}>1</div>
                <span className="tab-slider-de">Raise a Request</span>
                   <div className="balls-c done-color kuc-a disable-grey-balls">
                    <div className="ball1 ball11"></div>
                    <div className="ball1 ball12"></div>
                    <div className="ball1 ball13"></div>
                    <div className="ball1 ball14"></div>
                    <div className="ball1 ball15"></div>
                    <div className="ball1 ball16"></div>
                    <div className="ball1 ball17"></div>
                    <div className="ball1 ball18"></div>
                    <div className="ball1 ball19"></div>
                </div>
                    <div className="loadingContainer raise-a">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                         <span>.</span>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </li>
                <li><div className={`a-tab-sl recevie-d ${step>=2?" pulse-tab":""}`} data-toggle="tab" onClick={()=>{setStep(2)}}>2</div><span className="tab-slider-de">Receive Designs</span>
                <div className="balls-c kuc-d">
                    <div className="ball1 ball11"></div>
                    <div className="ball1 ball12"></div>
                    <div className="ball1 ball13"></div>
                    <div className="ball1 ball14"></div>
                    <div className="ball1 ball15"></div>
                    <div className="ball1 ball16"></div>
                    <div className="ball1 ball17"></div>
                    <div className="ball1 ball18"></div>
                    <div className="ball1 ball19"></div>
                </div>
                    <div className="loadingContainer receive-d dots-disable">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                         <span>.</span>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </li>
                
                <li><div className={`a-tab-sl Track-c ${step>=3?" pulse-tab":""}`} data-toggle="tab" onClick={()=>{setStep(3)}}>3</div><span className="tab-slider-de">Track & Transact</span>
                <div className="balls-c kuc-e">
                    <div className="ball1 ball11"></div>
                    <div className="ball1 ball12"></div>
                    <div className="ball1 ball13"></div>
                    <div className="ball1 ball14"></div>
                    <div className="ball1 ball15"></div>
                    <div className="ball1 ball16"></div>
                    <div className="ball1 ball17"></div>
                    <div className="ball1 ball18"></div>
                    <div className="ball1 ball19"></div>
                </div>
                    <div className="loadingContainer track-e dots-disable">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                         <span>.</span>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </li>
                <li><div className={`a-tab-sl Settle-d ${step>=4?" pulse-tab":""}`} data-toggle="tab" onClick={()=>{setStep(4)}}>4</div><span className="tab-slider-de">Settle In</span></li>
              </ul>
            <span id="right" className="right scroller-btn"></span>
            </div>
            <div className="tab-content img-cont-tabslider">
              <div id="menu1" className="tab-pane active">
                     <img className="d-block himanshu-code" src={require("../images/raise-request.png")} alt="First slide" />
            <p>Submit your requirements for your Dream House. Share the dimensions and desired rquirement in detail. </p>  
              </div>
           
               <div id="menu4" className="tab-pane fade">
                     <img className="d-block himanshu-code" src={require("../images/receive-design.jpg")} alt="First slide" style={{width: "30%"}} />
            <p>Our AI Engine will blend it and generate Beautiful Layouts for your selection. </p>  
              </div>
               <div id="menu5" className="tab-pane fade">
                     <img className="d-block himanshu-code" src={require("../images/track.gif")} alt="First slide" />
            <p>Make your choice and share with us for further blending. Nuvanco will share detailed MEP Layouts.</p>  
              </div>
               <div id="menu6" className="tab-pane fade">
                <img className="d-block himanshu-code" src={require("../images/settle.jpg")} alt="First slide" />
            <p> Now it’s time to construct your Dream House. Feel free to connect with us for any customized requirements!</p>  
              </div>
          </div>
    </div>
</div>
</div>
  )
}

export default HowWork