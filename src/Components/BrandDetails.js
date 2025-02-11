import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

const BrandDetails = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [brandName]); 

  const fetchProducts = async () => {
    try {
      const response = await fetch(`http://localhost:8000/productlist?company=${brandName}`);
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
    <div className="brand-details">
      <h2 className="text-2xl font-bold mb-4">Brand: {brandName}</h2>

      {/* ✅ Show products automatically */}
      {products.length > 0 ? (
        <div className="product-grid mt-4">
          {products.map((item) => (
            <div key={item._id} className="product-card">
              <Slider {...sliderSettings} className="product-slider">
                {item.images?.map((image, idx) => (
                  <div key={idx} className="slider-image-container">
                    <img src={`http://localhost:8000${image}`} alt={`Product ${idx + 1}`} className="product-image" />
                  </div>
                ))}
              </Slider>
              <h3 className="mt-10 product-model">Model: {item.model}</h3>
              <p className="product-company">Company: {item.company}</p>
              <p className="product-color">Color: {item.color}</p>
              <p className="product-distance">Distance Covered: {item.distanceCovered} km</p>
              <p className="product-modelYear">Model Year: {item.modelYear}</p>
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
