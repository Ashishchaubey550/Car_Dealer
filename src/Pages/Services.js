import React from "react";
import servicebg from "../images/Servicebg.JPG";
import SevicesExam from "../Components/SevicesExam";
function Services() {
  return (
    <div className="min-h-[90vh] bg-neutral-300">
      <div className="relative w-full">
        <img
          src={servicebg}
          alt=""
          className="w-full h-[650px] object-cover blur-[5px] border-l-neutral-950"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="border border-gray-300 w-96 mb-4"></span>
          <h1 className=" text-center font-extrabold text-5xl text-white">
            Our Services
          </h1>
          <span className="border border-gray-300 w-96 mt-4"></span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-7 py-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className=" font-semibold text-2xl text-black">Our Services</h1>
          <p className="font-bold p-3 text-4xl text-black">Explore Car Washing Services </p>
        </div>
        <div className=" flex gap-5 justify-center items-center">
          <span className=" border-2 border-red-500 w-12"></span>
          <span className=" border-2 border-black w-5"></span>
          <span className=" border-2 border-red-500 w-12"></span>
        </div>
        <div className="">
          <SevicesExam/>
        </div>
      </div>
    </div>
  );
}

export default Services;
