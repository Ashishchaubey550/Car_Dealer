import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ApointMent from "../Components/ApointMent";

// Import your images
import image7 from "../images/image7.webp";
import { Button } from "@mantine/core";
import BrandFilter from "../Components/BrandFilter";
function HeroSection() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="min-h-[90vh] bg-neutral-100 relative">
        <div className=" relative w-full">
          <div>
            <img
              src={image7}
              alt="welcome"
              className="w-full h-[700px] object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className=" absolute top-1/3 translate-x-[50%] text-white text-center w-fit">
            <h1 className=" font-extrabold text-5xl ">
              Welcom to <span className=" text-red-500">Value Drive</span>
            </h1>
            <h2 className=" text-center font-semibold mt-2 text-xl">
              Your Trusted Partner for Quality Pre-Owned Cars
            </h2>
            <Link to={"/productList"}>
            <Button className=" font-semibold text-xl bg-[#e23b3d] px-8 py-1.5 mt-5 rounded-xl hover:bg-[#a3282a]">View All Cars</Button>
            </Link>
          </div>
        </div>
        <BrandFilter/>
        <ApointMent/>
      </div>    
    </>
  );
}

export default HeroSection;
