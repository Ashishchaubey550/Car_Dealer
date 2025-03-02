import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceFilter = ({ onPriceChange }) => {
  const [priceRange, setPriceRange] = useState([50000, 7000000]);
  const [minPrice, setMinPrice] = useState(50000);
  const [maxPrice, setMaxPrice] = useState(7000000);

  useEffect(() => {
    // Fetch price range from the backend
    const fetchPriceRange = async () => {
      try {
        const response = await fetch("http://localhost:8000/product");
        const data = await response.json();
        
        // Assuming the data contains `minPrice` and `maxPrice`
        if (data.price && data.price) {
          setMinPrice(data.price);
          setMaxPrice(data.price);
          setPriceRange([data.price, data.price]);
        }
      } catch (error) {
        console.error("Error fetching price range:", error);
      }
    };

    fetchPriceRange();
  }, []);

  const handlePriceChange = (value) => {
    setPriceRange(value);
    onPriceChange(value);
  };

  return (
    <div className="price-filter">
      <h3 className="font-bold text-xl">Price Range</h3>
      <div className="flex justify-between text-purple-600 font-bold mt-2">
        <span>₹ {priceRange[0].toLocaleString()}</span>
        <span>₹ {priceRange[1].toLocaleString()}</span>
      </div>
      <Slider
        range
        min={minPrice}
        max={maxPrice}
        value={priceRange}
        onChange={handlePriceChange}
        trackStyle={[{ backgroundColor: "purple", height: 6  }]}
        handleStyle={[
          { borderColor: "purple", backgroundColor: "purple" , zIndex:-0 },
          { borderColor: "purple", backgroundColor: "purple" , zIndex:-0 },
        ]}
      />
      <div className="flex justify-between text-gray-500 mt-2">
        <span>Minimum</span>
        <span>Maximum</span>
      </div>
    </div>
  );
};

export default PriceFilter;
