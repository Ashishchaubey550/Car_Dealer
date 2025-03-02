import React from 'react';
import firstImg from '../images/BrandAssociate/mercedes-benz-8-logo-svgrepo-com-1.png';
import secondImg from '../images/BrandAssociate/Frame-40.png';
import thirdImg from '../images/BrandAssociate/Frame-43.png';
import fourthImg from '../images/BrandAssociate/Frame-44.png';
import fifthImg from '../images/BrandAssociate/Frame-45.png';

function BrandAssocation() {
  const Brands = [
    { img: firstImg },
    { img: secondImg },
    { img: thirdImg },
    { img: fourthImg },
    { img: fifthImg },
  ];

  return (
    <div className="min-h-[30vh] py-10">
      {/* Heading and Divider */}
      <div className="flex flex-col justify-center items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Brand Association</h1>
        <div className="flex gap-2 justify-center items-center">
          <span className="border-2 border-red-500 w-12"></span>
          <span className="border-2 border-black w-5"></span>
          <span className="border-2 border-red-500 w-12"></span>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
        {Brands.map((elem, index) => (
          <div
            key={index}
            className="p-2 transition-all duration-300 ease-in-out hover:scale-105 active:scale-105 cursor-pointer hover:border-2 hover:border-red-50 active:border-2 active:border-red-50"
          >
            <img
              src={elem.img}
              alt={`Brand ${index + 1}`}
              className="h-24 md:h-32 lg:h-48 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandAssocation;