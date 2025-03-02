import React from "react";
import Contactusbg from "../images/ContactUsbg.JPG";
import ContactLocation from "../Components/ContactLocation";
import AboutValueDrive from "../Components/AboutValueDrive";
import BrandAssocation from "../Components/BrandAssocation";
import FoundingTeamAbout from "../Components/FoundingTeamAbout";

function AboutUs() {
  return (
    <div className="min-h-[90vh] bg-neutral-300">
      {/* Banner Section */}
      <div className="relative">
        <img
          src={Contactusbg}
          alt="About Us Banner"
          className="w-full h-[300px] md:h-[450px] lg:h-[650px] object-cover blur-[3px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="border border-gray-300 w-48 md:w-64 lg:w-96 mb-4"></span>
          <h1 className="text-center font-extrabold text-3xl md:text-4xl lg:text-5xl text-white">
            About Us
          </h1>
          <span className="border border-gray-300 w-48 md:w-64 lg:w-96 mt-4"></span>
        </div>
      </div>

      {/* Child Components */}
      <div className="space-y-12 py-12">
        <AboutValueDrive />
        <BrandAssocation />
        <FoundingTeamAbout/>
        <ContactLocation />
      </div>
    </div>
  );
}

export default AboutUs;