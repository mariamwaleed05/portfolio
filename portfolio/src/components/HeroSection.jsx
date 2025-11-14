import React from "react";
import mainImg from "../imgs/main.png"; 

const HeroSection = () => {
  return (
    <>
      {/* <div className="numbers">
        <div className="b1">
          <h1 className="year">3+</h1>
          <p className="text">EXPERIENCES</p>
        </div>

        <div className="b1">
          <h1 className="year">50+</h1>
          <p className="text">PROJECTS</p>
        </div>

        <div className="b1">
          <h1 className="year">15+</h1>
          <p className="text">PROGRAMS</p>
        </div>
      </div> */}

      <div className="hero">
        <h1 className="uxtitle">UX/UI DESIGNER</h1>
        <h1 className="graphictitle">graphic</h1>
      </div>

      <div className="image-container">
        <img src={mainImg} className="mainn imgg" alt="Main visual" />
      </div>

      <p className="sub">Designing digital experiences that blend purpose.</p>
    </>
  );
};

export default HeroSection;
