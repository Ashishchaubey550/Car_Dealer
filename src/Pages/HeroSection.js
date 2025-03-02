import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ApointMent from "../Components/ApointMent";
import CarTypeFilter from "../Components/CarTypeFilter";

// Import your images
import image7 from "../images/image7.webp";
import { Button } from "@mantine/core";
import BrandFilter from "../Components/BrandFilter";
import Testnimoinal from "../Components/Testnimoinal";
import CityCards from "../Components/CityCards";
import FAQ from "../Components/FAQSection";
import HeroInsight from "../Components/HeroInsight";
import HowValueDriveWork from "../Components/HowValueDriveWork";
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
<div className="relative w-full">
  {/* Background Image */}
  <div>
    <img
      src={image7}
      alt="welcome"
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-cover"
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-30"></div>

  {/* Content */}
  <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full px-4">
    <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl">
      Welcome to <span className="text-red-500">Value Drive</span>
    </h1>
    <h2 className="font-semibold mt-2 text-lg sm:text-xl md:text-2xl">
      Your Trusted Partner for Quality Pre-Owned Cars
    </h2>
    <Link to={"/productList"}>
      <Button className="font-semibold text-lg sm:text-xl bg-[#e23b3d] px-6 py-1.5 mt-5 rounded-xl hover:bg-[#a3282a]">
        View All Cars
      </Button>
    </Link>
  </div>
</div>
        <HowValueDriveWork/>
        <CarTypeFilter/>
        <BrandFilter/>
        {/* <CityCards/> */}
        <HeroInsight/>
        <Testnimoinal/>
        <FAQ/>
      </div>    
    </>
  );
}

export default HeroSection;
