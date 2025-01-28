import React from "react";
import Slider from "react-slick"; 
import "../CSS/PrevButoon.css";

function FullViewSlider({ product, closeModal, imageHeight = 400 }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative mt-20 bg-gray-100 max-w-screen-md px-12 mx-auto flex flex-col bg-gray-0">
      <button
        onClick={closeModal}
        className="absolute -top-10 -right-10 text-xl bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-600"
      >
        X
      </button>

      <div className="flex justify-center items-center my-4">
        <Slider {...sliderSettings} className="w-full max-w-3xl">
          {product.images &&
            product.images.map((image, idx) => (
              <div key={idx} className="flex justify-center">
                <img
                  className=" w-full"
                  src={`http://localhost:8000${image}`}
                  alt={`Product Image ${idx + 1}`}
                  style={{
                    maxHeight: `${imageHeight}px`, // Dynamically set height
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
            ))}
        </Slider>
      </div>

      <div className="mt-6 text-center">
        <h2 className="text-2xl font-semibold">{`Model: ${product.model}`}</h2>
        <p className="text-lg text-black">Company: {product.company}</p>
        <p className="text-lg text-black">Color: {product.color}</p>
        <p className="text-lg text-black">
          Distance Covered: {product.distanceCovered} km
        </p>
        <p className="text-lg text-black">Model Year: {product.modelYear}</p>
        <p className="text-xl font-bold text-green-600">
          Price: ₹{product.price} Lakhs
        </p>
      </div>
    </div>
  );
}



export default FullViewSlider;
