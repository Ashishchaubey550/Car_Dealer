import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your images
import image1 from '../images/image1.webp';
import image2 from '../images/image2.webp';
import image3 from '../images/image3.webp';
import image4 from '../images/image4.webp';
import image5 from '../images/image5.webp';
import image6 from '../images/image6.webp';
import image7 from '../images/image7.webp';
import ProductList from './ProductList';
import { CustomNextArrow, CustomPrevArrow } from './SlidderButton';
import HeroBuy from './HeroBuy';
import HeroMotivate from './HeroNeedHelp';
import HeroNeedHelp from './HeroNeedHelp';
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
    prevArrow: <CustomPrevArrow/>, 
    nextArrow: <CustomNextArrow/>
  };

  const images = [image1, image2, image3 , image4 , image5 , image6 , image7];

  return (
    <>
    <div className=''>
    <div className=" relative w-full">
      <Slider {...settings} className="">
        {images.map((img, index) => (
          <div key={index}>
            <img  src={img} alt={`Slide ${index + 1}`} className="w-full h-[700px] object-cover" />
          </div>
        ))}
      </Slider>
      <div className="max-w-screen-xl bottom-5 absolute mx-auto bg-[#2f2e2e] flex justify-evenly items-center py-6 px-20">
      hello
    </div>

    </div>
    </div>
    <HeroBuy/>
    <HeroNeedHelp/>
    </>

  );
}

export default HeroSection;
