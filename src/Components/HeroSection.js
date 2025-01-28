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
    <div className=' overflow-w-hidden '>
    <div className="relative h-screen w-full">
      <Slider {...settings} className="h-full">
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </Slider>
    </div>
    <h1 className=' w-full mt-20 text-7xl font-bold flex justify-center'> NEW ARRIVALS </h1>
    <div className=' mt-0 flex items-center bg-cover h-screen w-[100%]'>
        <ProductList/>
      </div>
    </div>

    </>

  );
}

export default HeroSection;
