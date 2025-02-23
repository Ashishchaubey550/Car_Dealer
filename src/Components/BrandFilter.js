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
    "NISSAN":"https://e7.pngegg.com/pngimages/132/969/png-clipart-nissan-car-logo-automotive-industry-brand-nissan-emblem-trademark.png"

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
    <div className="brand-filter flex flex-col gap-10 justify-center items-center min-h-[40vh]">
      <h2 className="font-semibold text-3xl">Explore Popular Brands</h2>
      <div className="flex gap-5 items-center flex-wrap justify-center">
        {brands.length > 0 ? (
          brands.map(([brand, count], index) => (
            <button
              key={index}
              onClick={() => handleBrandClick(brand)}
              className="w-40 h-28 p-5 hover:bg-red-400 hover:scale-110 transition-all duration-300 ease-in-out flex flex-col justify-center items-center bg-neutral-200 rounded-lg shadow-md"
            >
              <img
                src={brandImages[brand] || "/images/default-car.png"}
                alt={brand}
                className="w-20 h-20 object-contain mb-2"
              />
              <p className="text-lg font-semibold">{brand}</p>
              <p className="text-sm">{count}+ cars</p>
            </button>
          ))
        ) : (
          <p>Loading brands...</p>
        )}
      </div>
      <Link to={"/productlist"}>
        <Button className="text-white font-semibold text-xl bg-[#e23b3d] px-8 py-1.5 mt-5 rounded-xl hover:bg-[#a3282a] mb-10">
          View All
        </Button>
      </Link>
    </div>
  );
};

export default BrandFilter;
