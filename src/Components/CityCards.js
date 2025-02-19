import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const locations = [
  {
    city: "Delhi NCR",
    image: "https://via.placeholder.com/100", // Replace with actual image
    hubs: 12,
    cars: 1520,
    bgColor: "bg-yellow-400",
  },
  {
    city: "Bangalore",
    image: "https://via.placeholder.com/100",
    hubs: 11,
    cars: 1210,
    bgColor: "bg-purple-400",
  },
  {
    city: "Hyderabad",
    image: "",
    hubs: 6,
    cars: 1010,
    bgColor: "bg-purple-900",
  },
  {
    city: "Pune",
    image: "https://via.placeholder.com/100",
    hubs: 4,
    cars: 890,
    bgColor: "bg-green-500",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false, // Hides arrows
};

function CityCards() {
  return (
    <div className="max-w-screen-2xl mx-auto min-h-[60vh] flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-4">Cars across India</h2>
      <div  className="w-full px-4 flex gap-10">
        {locations.map((location, index) => (
          <div key={index} className={`p-4 ${location.bgColor} rounded-lg`}>
            <h3 className="text-lg font-semibold text-center">{location.city}</h3>
            <div className="flex justify-center">
              <img src={location.image} alt={location.city} className="w-20 h-20 rounded-md" />
            </div>
            <p className="text-center font-bold">{location.hubs} hubs · {location.cars}+ cars</p>
          </div>
        ))}
      </div>
      <button className="mt-4 px-6 py-2 border rounded-lg text-purple-600">
        View all locations
      </button>
    </div>
  );
}

export default CityCards;
