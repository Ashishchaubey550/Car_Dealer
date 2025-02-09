import React from 'react'
import Aboutdid from '../Data/AboutdidData.json'

function AboutService() {
  return (
    <div className=" min-h-[90vh] cursor-pointer">
    <h1 className=" capitalize font-normal text-2xl text-center">
    We don't just
    </h1>
    <h2 className=" mt-1 capitalize font-semibold text-5xl text-center">
    Buy & Sell Cars
    </h2>
    <div className="flex mt-6 gap-10 items-center justify-center">
      {Aboutdid.slice(0, 2).map((elem, index) => (
        <div
          key={index}
          className=" bg-gray-200 rounded-3xl text-black p-4  w-42 shadow-md text-center hover:scale-105 transition duration-400 ease-in-out" 
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
      {Aboutdid.slice(2, 4).map((elem, index) => (
        <div
          key={index}
          className=" bg-gray-200 rounded-3xl text-black p-4  w-42 shadow-md text-center hover:scale-105 transition duration-400 ease-in-out"
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
  )
}

export default AboutService;