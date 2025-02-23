import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import contactbg from "../images/ContactUs.webp";

const BrandDetails = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [brandName]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/productlist?company=${brandName}`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="brand-details min-h-[60vh]">
      <div className="relative w-full">
        <img
          src={contactbg}
          alt=""
          className="w-full h-[650px] object-cover blur-[3px] border-l-neutral-950"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="border border-gray-300 w-96 mb-4"></span>
          <h1 className=" text-center font-extrabold text-5xl text-white">
            Proudct Page
          </h1>
          <span className="border border-gray-300 w-96 mt-4"></span>
        </div>
      </div>
      <h2 className="text-2xl mt-10 px-10 font-bold mb-4 inline-block">
        Brand: <span className="hover:text-red-500">{brandName}</span>
      </h2>
      {products.length > 0 ? (
        <div className="product-grid mt-4 mb-10">
          {products.map((item) => (
            <div key={item._id} className="product-card">
              <Slider {...sliderSettings} className="product-slider">
                {item.images?.map((image, idx) => (
                  <div key={idx} className="slider-image-container">
                    <img
                      src={`http://localhost:8000${image}`}
                      alt={`Product ${idx + 1}`}
                      className="product-image"
                    />
                  </div>
                ))}
              </Slider>
              <h3 className="mt-10 product-model">Model: {item.model}</h3>
              <p className="product-company">Company: {item.company}</p>
              <p className="product-color">Color: {item.color}</p>
              <p className="product-color">Variant: {item.variant}</p>
              <p className="product-distance">
                Distance Covered: {item.distanceCovered} km
              </p>
              <p className="product-modelYear">Model Year: {item.modelYear}</p>
              <p className="product-modelYear">
                Registration Year: {item.registrationYear}
              </p>{" "}
              <p className="product-modelYear">Fuel Type: {item.fuelType}</p>
              <p className="product-modelYear">
                Transmission Type: {item.transmissionType}
              </p>
              <p className="product-modelYear">Body Type: {item.bodyType}</p>
              <p className="product-price">Price: ₹{item.price} Lakhs</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-4">No products found for {brandName}.</p>
      )}
    </div>
  );
};

export default BrandDetails;
