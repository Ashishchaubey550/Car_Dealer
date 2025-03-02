import { Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BrandFilter = () => {
  const navigate = useNavigate();
  const [brands, setBrands] = useState([]);

  // Static mapping of brand images (update with actual image paths)
  const brandImages = {
    "MARUTI SUZUKI": "https://mda.spinny.com/spinny-web/media/cars/makes/maruti-suzuki/logos/maruti-suzuki.webp",
    "HONDA": "https://mda.spinny.com/spinny-web/media/cars/makes/honda/logos/honda.webp",
    "FORD": "https://spn-sta.spinny.com/spinny-web/oth/raMicD2JTFa1JOLFZewdpg/raw/file.webp",
    "BMW": "https://mda.spinny.com/spinny-web/media/cars/makes/bmw/logos/v1.png",
    "MERCEDES": "https://mda.spinny.com/spinny-web/media/cars/makes/mercedes-benz/logos/v1.png",
    "RENAULT": "https://mda.spinny.com/spinny-web/media/cars/makes/renault/logos/renault.webp",
    "MG": "https://spinny-images.gumlet.io/images/cars/new/makes/mg-motors/logos/197x71.png?q=85&w=100&dpr=1.0",
    "HYUNDAI": "https://mda.spinny.com/spinny-web/media/cars/makes/hyundai/logos/hyundai.webp",
    "VOLKSWAGEN": "https://mda.spinny.com/spinny-web/media/cars/makes/volkswagen/logos/volkswagen.webp",
    "CHEVROLET": "/images/chevrolet.png",
    "KIA": "https://mda.spinny.com/spinny-web/media/cars/makes/kia/logos/v1.webp",
    "TATA": "https://mda.spinny.com/spinny-web/media/cars/makes/tata/logos/tata.webp",
    "NISSAN": "https://e7.pngegg.com/pngimages/132/969/png-clipart-nissan-car-logo-automotive-industry-brand-nissan-emblem-trademark.png"
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await fetch("http://localhost:8000/productlist");
      const data = await response.json();
      if (data && data.length > 0) {
        const brandCounts = data.reduce((acc, item) => {
          const brandName = item.company.toUpperCase(); // Convert brand to uppercase
          acc[brandName] = (acc[brandName] || 0) + 1;
          return acc;
        }, {});
        setBrands(Object.entries(brandCounts)); // Limit to 12 brands
      }
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  const handleBrandClick = (brand) => {
    navigate(`/brand/${brand}`);
  };

  return (
    <div className="brand-filter flex flex-col gap-6 sm:gap-10 justify-center items-center min-h-[40vh] p-4 sm:p-8 lg:p-16">
      {/* Heading */}
      <h2 className="font-semibold text-2xl sm:text-3xl text-center">
        Explore Popular Brands
      </h2>

      {/* Brand Buttons */}
      <div className="flex flex-wrap gap-4 sm:gap-6 justify-center w-full">
        {brands.length > 0 ? (
          brands.map(([brand, count], index) => (
            <button
              key={index}
              onClick={() => handleBrandClick(brand)}
              className="w-28 sm:w-36 h-24 sm:h-28 p-3 sm:p-4 hover:bg-red-400 hover:scale-105 transition-all duration-300 ease-in-out flex flex-col justify-center items-center bg-neutral-200 rounded-lg shadow-md"
            >
              <img
                src={brandImages[brand] || "/images/default-car.png"}
                alt={brand}
                className="w-12 sm:w-16 h-12 sm:h-16 object-contain mb-1 sm:mb-2"
              />
              <p className="text-sm sm:text-base font-semibold text-center">
                {brand}
              </p>
              <p className="text-xs sm:text-sm text-center">{count}+ cars</p>
            </button>
          ))
        ) : (
          <p>Loading brands...</p>
        )}
      </div>

      {/* View All Button */}
      <Link to={"/productlist"}>
        <Button className="text-white font-semibold text-lg sm:text-xl bg-[#e23b3d] px-6 sm:px-8 py-1.5 mt-4 sm:mt-5 rounded-xl hover:bg-[#a3282a] mb-6 sm:mb-10 transition-all duration-300 shadow-lg">
          View All
        </Button>
      </Link>
    </div>
  );
};

export default BrandFilter;