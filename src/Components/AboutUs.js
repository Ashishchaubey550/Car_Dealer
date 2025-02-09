import React from "react";
import banner from "../images/AboutCar.png";
import AboutSlider from "./AboutSlider";
import OurScale from "./OurScale";
import AboutDont from "./AboutService";
import AboutService from "./AboutService";
import AboutSus from "./AboutSus";
function AboutUs() {
  return (
    <>
      <div className="relative mix-h-[100vh]">
        <div className="">
          <img src={banner} alt="" className=" w-full" />
        </div>
        <h1 className=" font-bold text-[36px] leading-[62px] text-center -tracking-[25]">100X Mobility</h1>
        <div className="w-[70%] text-center mx-auto text-2xl leading-2 font-normal mb-10">
          <p>
          We are already one of India’s largest auto-tech companies. But this is just the beginning. Our vision is to grow 100x in the next five years, seizing the rare opportunity to build a $300 billion enterprise in India.
          </p>
          <br></br>
          <p>By harnessing cutting-edge technology, we aim to revolutionize mobility and positively transform lives—across India and beyond. Our approach is grounded in solving for scale, ensuring simplicity , and embracing sustainability in every facet of the automotive ecosystem. From empowering customers to driving industry-wide change, we are building the future of mobility—today.</p>
          <br></br>
          <p>We are on the journey of a lifetime and seeking those who share our hunger for growth and innovation.</p>
        </div>
        <AboutSlider/>
        <OurScale/>
        <AboutService/>
        <AboutSus/>
      </div>
    </>
  );
}

export default AboutUs;
