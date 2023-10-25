import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="hand icon" />
          </div>
        </div>
      </div>
      <div className="hero-rigth"></div>
    </div>
  );
};

export default Hero;
