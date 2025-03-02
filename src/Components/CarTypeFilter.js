import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Slider from "react-slick"; // Ensure react-slick is installed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carTypes = ["Hatchback", "Sedan", "SUV"];

const CarTypeFilter = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("Hatchback");
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars(selectedType);
  }, [selectedType]);

  const fetchCars = async (type) => {
    try {
      const response = await fetch(`http://localhost:8000/productlist`);
      const data = await response.json();

      // Normalize bodyType (remove spaces and lowercase)
      const normalizedType = type.toLowerCase().replace(/\s+/g, "");
      const filteredCars = data
        .filter(
          (car) =>
            car.bodyType?.toLowerCase().replace(/\s+/g, "") === normalizedType
        )
        .slice(0, 4); // Show only 4 cars

      setCars(filteredCars);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="flex flex-col items-center mt-10 sm:mt-20 min-h-[60vh] bg-neutral-100 p-4 sm:p-8 lg:p-16">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">
        Explore by Body Type
      </h2>

      {/* Car Type Tabs */}
      <div className="flex flex-wrap justify-center gap-2 bg-red-100 p-2 sm:p-3 rounded-xl mb-4 sm:mb-6 shadow-md">
        {carTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 sm:px-5 py-2 w-28 sm:w-32 h-16 sm:h-20 rounded-lg flex items-center justify-center gap-2 flex-col transition-all duration-300 ease-in-out font-medium text-sm sm:text-base ${
              selectedType === type
                ? "bg-red-400 text-white shadow-lg scale-105"
                : "bg-gray-100 text-black hover:bg-red-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Car List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full sm:w-[90%] lg:w-[80%] mt-3">
        {cars.length > 0 ? (
          cars.map((car) => (
            <Link to="/productList" key={car._id}>
              <div className="bg-neutral-100 p-4 rounded-lg shadow-md w-full h-[22rem] border hover:scale-105 transition-all duration-300 ease-in-out">
                {/* Carousel Slider */}
                <Slider {...sliderSettings}>
                  {car.images?.map((image, idx) => (
                    <div key={idx} className="slider-image-container">
                      <img
                        src={`http://localhost:8000${image}`}
                        alt={`Car ${idx + 1}`}
                        className="w-full h-48 sm:h-52 object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </Slider>

                {/* Car Details */}
                <h3 className="font-semibold text-base sm:text-lg mt-4 sm:mt-6 text-gray-900 hover:text-red-500 transition-all duration-300 ease-in">
                  {car.model}
                </h3>
                <p className="text-black font-bold text-lg sm:text-xl">
                  ₹{car.price} Lakh{" "}
                  <span className="text-gray-500 font-normal">onwards</span>
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-1 sm:col-span-2 lg:col-span-4 text-center text-gray-500 text-base sm:text-lg font-medium">
            No cars available
          </p>
        )}
      </div>

      {/* See More Button */}
      <button
        onClick={() =>
          navigate(`/productList?bodyType=${selectedType.toLowerCase()}`)
        }
        className="text-white font-semibold text-lg sm:text-xl bg-[#e23b3d] px-6 sm:px-8 py-2 mt-4 sm:mt-5 rounded-xl hover:bg-[#a3282a] mb-6 sm:mb-10 transition-all duration-300 shadow-lg"
      >
        See More
      </button>
    </div>
  );
};

export default CarTypeFilter;