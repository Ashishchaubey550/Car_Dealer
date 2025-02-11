import { Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BrandFilter = () => {
  const navigate = useNavigate();
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await fetch("http://localhost:8000/productlist");
      const data = await response.json();
      if (data && data.length > 0) {
        const brandCounts = data.reduce((acc, item) => {
          acc[item.company] = (acc[item.company] || 0) + 1;
          return acc;
        }, {});
        setBrands(Object.entries(brandCounts));
      }
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  const handleBrandClick = (brand) => {
    navigate(`/brand/${brand}`);
  };

  return (
    <div className="brand-filter flex flex-col gap-10 justify-center items-center min-h-[40vh]">
      <h2 className=" font-semibold text-3xl">Explore Popular Brands</h2>
      <div className=" flex gap-5 w-1/3 flex-wrap">
        {brands.length > 0 ? (
          brands.map(([brand, count], index) => (
            <button
              key={index}
              onClick={() => handleBrandClick(brand)}
              className="w-32 h-32 hover:bg-red-400  hover:scale-110 transition-all duration-300 ease-in-out flex flex-col justify-center items-center bg-neutral-200 rounded-lg shadow-md"
            >
              <i className="ri-car-line text-2xl"></i>
              {brand} 
              <h1>{count}+ cars</h1>
            </button>
          ))
        ) : (
          <p>Loading brands...</p>
        )}
      </div>
      <Link to={"/productlist"}>
        <Button className=" text-white font-semibold text-xl bg-[#e23b3d] px-8 py-1.5 mt-5 rounded-xl hover:bg-[#a3282a] mb-10">
          Hello
        </Button>
      </Link>
    </div>
  );
};

export default BrandFilter;
