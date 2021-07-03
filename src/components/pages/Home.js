import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import ImgCarousel from "../ImgCarousel";
import Classes from "../Classes";
import Form from "../Form";
import MissionEDpro from "./MissionEDpro";

function Home() {
  return (
    <>
      <HeroSection />

      <ImgCarousel />
      <Classes />
      <MissionEDpro />
      <Form />
    </>
  );
}

export default Home;
