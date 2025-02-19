import React from "react";
import Contactusbg from "../images/ContactUsbg.JPG";
import ContactUsAddress from "../Components/ContactUsAddress";
import AboutUsContact from "../Components/AboutUsContact";
function ContactUs() {
  return (
    <div className="min-h-[90vh] bg-neutral-300">
      <div className="relative w-full">
        <img
          src={Contactusbg}
          alt=""
          className="w-full h-[650px] object-cover blur-[3px] border-l-neutral-950"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="border border-gray-300 w-96 mb-4"></span>
          <h1 className=" text-center font-extrabold text-5xl text-white">
            Contact us
          </h1>
          <span className="border border-gray-300 w-96 mt-4"></span>
        </div>
      </div>
      <ContactUsAddress />
      <div className="mt-0 w-full h-[50vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8210312445053!2d78.42615947599128!3d17.468278000468107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb917445711053%3A0x88def353aa1d9ee9!2sThe%20Value%20Drive!5e0!3m2!1sen!2sin!4v1736163461865!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <AboutUsContact/>
    </div>
  );
}

export default ContactUs;
