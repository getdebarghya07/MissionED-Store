import React from "react";
import "./HeroSection.css";
import "../App.css";
import heroPng from "./hero-img.png";

function HeroSection() {
  return (
    <div id="home" class="hero-img">
      <img src={heroPng} class="img-fluid" alt="heroimg" />
    </div>
  );
}

export default HeroSection;
