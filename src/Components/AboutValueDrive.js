import React from "react";
import Contactusbg from "../images/ContactUsbg.JPG";

const AboutValueDrive = () => {
  return (
    <div className="min-h-[60vh] flex flex-col lg:flex-row justify-evenly p-8 lg:p-16">
      {/* Left side - Image */}
      <div className="w-full lg:w-[55%] flex items-center justify-center mb-8 lg:mb-0">
        <img
          src={Contactusbg}
          alt="image"
          className="w-full h-auto lg:h-[95%] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right side - Text */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center px-4 lg:px-14 gap-3">
        <div className="text-sm font-semibold text-gray-600">
          WE STAND FOR CUSTOMER SATISFACTION
        </div>
        <div className="text-3xl lg:text-5xl font-bold text-gray-800">
          About Value Drive
        </div>
        <div className="text-base lg:text-[1.1rem] font-medium text-gray-600">
          Value Drive, based in the bustling city of Hyderabad, has established a
          formidable presence across a diverse array of industries, including
          auto-retail, real estate, construction, and consumer retail.
        </div>
        <div className="text-base lg:text-[1.1rem] font-medium text-gray-600">
          We are proud channel partners of some of the iconic brands in the
          world, such as Mercedes-Benz, MG Motor, Toyota, Honda, Ather,
          Altigreen, and many more. We have solidified our reputation as a
          trusted and dependable partner. Our extensive network of over 60
          outlets is spread throughout West and South India, with our
          headquarters located in Hyderabad. With a team of 2000+ dedicated and
          highly skilled employees, we strive to consistently deliver
          unparalleled service and unparalleled results.
        </div>
      </div>
    </div>
  );
};

export default AboutValueDrive;