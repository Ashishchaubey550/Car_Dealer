import React from "react";

function ContactUsAddress() {
  return (
    <div className=" max-w-screen-2xl mx-auto min-h-[80vh]  flex justify-around items-center">
      <div className=" w-[40%] p-20 flex flex-col gap-5">
        <h1 className=" text-black text-4xl font-extrabold">
          If Need Any Info Please <br></br> Contact Us!
        </h1>
        <p className="text-black text-xl">
          Completely synergize aid taxing relationships thru most excellent area
          of interest markets. Professionally domesticate one-to-one consumer
          service. Were usually right here that will help you on your car. We in
          reality respect you taking the time to get in touch.
        </p>
        <div className=" flex items-center gap-5">
              <a href=""><i className="ri-instagram-line text-white font-bold p-2 bg-red-500 text-2xl rounded-full hover:text-red-500 hover:bg-white transition-all duration-200 ease-in-out"></i></a>
              <a href=""><i className="ri-facebook-line text-white p-2 font-bold text-2xl rounded-full bg-red-500 hover:text-red-500 hover:bg-white transition-all duration-200 ease-in-out"></i></a>
              <a href=""><i className="ri-twitter-x-line text-white p-2 bg-red-500 text-2xl rounded-full hover:text-red-500 hover:bg-white transition-all duration-200 ease-in-out"></i></a>
        </div>
      </div>
      <div className=" w-[40%] flex flex-col">
        <div className=" flex">
          <div className="w-80 h-80 border gap-3  border-gray-400  flex flex-col justify-center items-center">
            <i className="ri-map-2-line text-5xl p-3 rounded-full bg-red-500 text-white"></i>
            <h1 className=" font-bold text-xl ">Address</h1>
            <p className="text-sm font-semibold">
              66 Guild Street 512B<br></br>
              Great North Town.
            </p>
          </div>
          <div className="w-80 h-80 flex-col gap-3    border border-gray-400  flex justify-center items-center">
            <i className="ri-smartphone-line text-5xl p-3 rounded-full bg-red-500 text-white"></i>
            <h1 className=" font-bold text-xl ">Phone</h1>
            <p className="text-sm font-semibold">
              66 Guild Street 512B<br></br>
              Great North Town.
            </p>
          </div>
        </div>
        <div className="flex ">
          <div className="w-80 h-80 flex-col gap-3  border border-gray-400 flex justify-center items-center">
            {" "}
            <i className="ri-mail-send-fill text-5xl p-3 rounded-full bg-red-500 text-white"></i>
            <h1 className=" font-bold text-xl ">Email</h1>
            <p className="text-sm font-semibold">
              66 Guild Street 512B<br></br>
              Great North Town.
            </p>
          </div>
          <div className="w-80 h-80 flex-col gap-3   border border-gray-400 flex justify-center items-center">
            <i className="ri-time-line text-5xl  p-3 rounded-full bg-red-500 text-white"></i>
            <h1 className=" font-bold text-xl ">Opening Hour</h1>
            <p className="text-sm font-semibold">
              66 Guild Street 512B<br></br>
              Great North Town.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsAddress;
