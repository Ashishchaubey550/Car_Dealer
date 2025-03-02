import React from "react";
import { IoMailUnread } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../images/LOGO.jpeg";

function Footer() {
  return (
    <>
      {/* Top Section */}
      <div className="h-auto sm:h-28 flex flex-col sm:flex-row bg-[#19191B] justify-evenly items-center py-5 sm:py-0">
        {/* Appointment */}
        <div className="flex items-center justify-center gap-2 mb-5 sm:mb-0">
          <div>
            <i className="p-2 text-3xl text-white bg-red-500 ri-smartphone-line rounded-full"></i>
          </div>
          <div className="flex flex-col  text-white">
            <h1>Appointment</h1>
            <p>+91-7987200339</p>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-center justify-center gap-2 mb-5 sm:mb-0">
          <div>
            <i className="ri-alarm-line p-2 text-3xl text-white bg-red-500 line rounded-full"></i>
          </div>
          <div className="flex flex-col text-left  text-white">
            <h1>Mon-Sat</h1>
            <p>7:00 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center justify-center gap-2 text-left">
          <div>
            <i className="ri-map-pin-2-line p-2 text-3xl text-white bg-red-500 rounded-full"></i>
          </div>
          <div className="flex flex-col text-left text-white">
            <h1>Address</h1>
            <p>66 Guild Street 512B,<br></br>Great North Town.</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-center bg-[#19191B]">
        {/* Logo and Social Media */}
        <div className="w-full lg:w-[30%] p-10 bg-[#19191B] flex justify-center items-center">
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-evenly">
              <img src={logo} alt="" className="w-20 h-20" />
              <a href=""><i className="ri-instagram-line text-red-500 text-3xl hover:text-red-400"></i></a>
              <a href=""><i className="ri-facebook-line text-red-500 text-3xl hover:text-red-400"></i></a>
              <a href=""><i className="ri-twitter-x-line text-red-500 text-3xl hover:text-red-400"></i></a>
            </div>
            <div>
              <p className="text-sm font-bold p-3 text-white text-center lg:text-left">
                Value Drive is the most trusted way of buying and selling used
                cars. Choose from over 5000 fully inspected second-hand car
                models. Select online and book a test drive at your home or at a
                Value Car Hub near you. Get a no-questions-asked 5-day money
                back guarantee and a free one-year comprehensive service
                warranty with Assured Resale Value on every Value Drive car.
              </p>
            </div>
          </div>
        </div>

        {/* Visit Us Section */}
        <div className="h-auto lg:h-96 bg-[#19191B] w-full lg:w-[50%] flex flex-col justify-center py-10 lg:py-0">
          <h1 className="py-2 border-b-2 border-red-400 text-gray-200 font-semibold text-4xl sm:text-6xl lg:text-8xl uppercase mx-auto text-center">
            Come Visit Us!
          </h1>
          <div className="mb-14 mt-10 lg:mt-20 flex flex-col sm:flex-row justify-evenly items-center cursor-pointer gap-5 sm:gap-0">
            {/* Email */}
            <div className="flex justify-center items-center gap-5">
              <IoMailUnread className="text-4xl text-gray-400 hover:text-red-500 transition-all duration-300 ease-in" />
              <div className="cursor-pointer text-gray-200">
                <h1>
                  <a
                    href="mailto:Dines@gmail.com"
                    className="hover:underline hover:text-red-500 transition-all duration-300 ease-in"
                  >
                    Dines@gmail.com
                  </a>
                </h1>
                <h1>
                  <a
                    href="mailto:ashish@gmail.com"
                    className="hover:underline hover:text-red-500 transition-all duration-300 ease-in"
                  >
                    ashish@gmail.com
                  </a>
                </h1>
              </div>
            </div>

            {/* Location */}
            <div className="flex justify-center items-center gap-3">
              <FaLocationDot className="text-4xl text-gray-400 hover:text-red-500 transition-all duration-300 ease-in" />
              <div className="text-gray-200">
                <h1 className="hover:text-red-500 transition-all duration-300 ease-in">
                  66 Guild Street 512B
                </h1>
                <h1 className="hover:text-red-500 transition-all duration-300 ease-in">
                  Great North Town
                </h1>
              </div>
            </div>

            {/* Phone */}
            <div className="flex justify-center items-center gap-5">
              <FaPhoneAlt className="text-4xl text-gray-400 hover:text-red-500 transition-all duration-300 ease-in" />
              <div className="text-gray-200">
                <h1 className="hover:text-red-500 transition-all duration-300 ease-in">
                  +91-787451258
                </h1>
                <h1 className="hover:text-red-500 transition-all duration-300 ease-in">
                  +91-875942687
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;