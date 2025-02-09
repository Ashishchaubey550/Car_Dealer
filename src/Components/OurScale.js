import React from "react";
import ScaleData from "../Data/AboutOurScale.json";

function OurScale() {
  return (
    <div className=" min-h-[100vh]">
      <h1 className=" capitalize font-semibold text-5xl text-center mt-10">
        our Scale
      </h1>
      <div className="flex mt-6 gap-10 items-center justify-center">
        {ScaleData.slice(0, 3).map((elem, index) => (
          <div
            key={index}
            className=" bg-gray-200 rounded-3xl text-black p-4  w-42 shadow-md text-center"
          >
            <img
              src={elem.icon}
              alt={elem.heading}
              className="w-18 h-[240px] mx-auto"
            />
            <h1 className="text-xl font-bold ">{elem.heading}</h1>
            <h2 className="text-xl">{elem.subheading}</h2>
          </div>
        ))}
      </div>
      <div className="flex gap-10 items-center justify-center mt-10">
        {ScaleData.slice(3, 6).map((elem, index) => (
          <div
            key={index}
            className="  rounded-3xl bg-gray-200 p-4 rounded-md w-42 shadow-md text-center"
          >
            <img
              src={elem.icon}
              alt={elem.heading}
              className="w-18 h-[240px] mx-auto"
            />
            <h1 className="text-xl font-bold ">{elem.heading}</h1>
            <h2 className="text-md text-xl ">{elem.subheading}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurScale;
