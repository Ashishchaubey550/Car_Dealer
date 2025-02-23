import React, { useEffect, useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import Slider from "react-slick"; // Ensure react-slick is installed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carTypes = ["Hatchback", "Sedan", "SUV",];

const CarTypeFilter = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("Hatchback");
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars(selectedType);
  }, [selectedType]);

  const fetchCars = async (type) => {
    try {
      const response = await fetch(`https://car-dealer-backend-7m2r.onrender.com/productlist`);
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
    <div className="flex flex-col items-center mt-20 min-h-[60vh] bg-neutral-100">
      <h2 className="text-3xl font-semibold mb-6">Explore by Body Type</h2>

      {/* Car Type Tabs */}
      <div className="flex gap-2 bg-red-100 p-3 rounded-xl mb-6 shadow-md">
        {carTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-5 py-2 w-32 h-20 rounded-lg flex items-center gap-2 flex-col transition-all duration-300 ease-in-out font-medium ${
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
      <div className="grid grid-cols-4 gap-6 w-[80%] mt-3">
        {cars.length > 0 ? (
          cars.map((car) => (
            <Link to = "/productList">
            <div key={car._id} className="bg-neutral-100 p-4 rounded-lg shadow-md w-full h-[22rem] border hover:scale-105 transition-all duration-300 ease-in-out">
                    
              <Slider {...sliderSettings}>
                {car.images?.map((image, idx) => (
                  <div key={idx} className="slider-image-container">
                    <img
                      src={`https://car-dealer-backend-7m2r.onrender.com${image}`}
                      alt={`Car ${idx + 1}`}
                      className="w-full h-52 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </Slider>

              <h3 className=" font-semibold text-lg mt-10 text-gray-900 hover:text-red-500 transition-all duration-300 ease-in">
                {car.model}
              </h3>
              <p className="text-black font-bold text-xl">
                ₹{car.price} Lakh <span className="text-gray-500 font-normal">onwards</span>
              </p>
            </div>
            </Link>
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500 text-lg font-medium">No cars available</p>
        )}
      </div>

      {/* See More Button */}
      <button
        onClick={() =>
          navigate(`/productList?bodyType=${selectedType.toLowerCase()}`)
        }
        className="text-white font-semibold text-xl bg-[#e23b3d] px-8 py-2 mt-5 rounded-xl hover:bg-[#a3282a] mb-10 transition-all duration-300 shadow-lg"
      >
        See More
      </button>
    </div>
  );
};

export default CarTypeFilter;
