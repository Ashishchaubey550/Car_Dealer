import React from "react";
import { IoMailUnread } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <div className=" h-96 bg-[#2f2e2e] w-full mt-18 flex flex-col justify-center">
      <h1 className="  py-2 border-b-2 border-[#756b6b]  text-yellow-300 font-semibold text-8xl uppercase mx-auto">
        Come Visit Us!
      </h1>
      <div className=" mt-20 flex justify-evenly items-center">
        <div className=" flex justify-center items-center gap-5 ">
          <IoMailUnread className=" text-4xl  text-gray-400" />
          <div className=" cursor-pointer text-gray-200">
            <h1>
              {" "}
              <a
                href="mailto:Dines@gmail.com"
                className=" hover:underline"
              >
                Dines@gmail.com
              </a>
            </h1>
            <h1>
              {" "}
              <a

                href="mailto:ashish@gmail.com"
                className=" hover:underline"
              >
                ashish@gmail.com
              </a>
            </h1>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-3 ">
          <FaLocationDot className=" text-4xl text-gray-400" />
          <div className=" text-gray-200">
            <h1>Dines@gmail.com</h1>
            <h1>ashish@gmail.com</h1>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-5 ">
          <FaPhoneAlt className=" text-4xl  text-gray-400" />
          <div className="text-gray-200">
            <h1>+91-787451258</h1>
            <h1>+91-875942687</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
