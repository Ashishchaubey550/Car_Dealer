import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import FullViewSlider from "./FullViewSlider";
import Modal from "react-modal";
import "../CSS/ProductList.css";

Modal.setAppElement("#root");

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let result = await fetch("http://localhost:8000/product");
      result = await result.json();
      if (result && result.length > 0) {
        setProducts(result);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteCar = async (id) => {
    try {
      let result = await fetch(`http://localhost:8000/product/${id}`, {
        method: "DELETE",
      });
      result = await result.json();
      if (result) {
        getProducts();
      }
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      try {
        let result = await fetch(`http://localhost:8000/search/${key}`);
        result = await result.json();
        if (result) {
          setProducts(result);
        }
      } catch (error) {
        console.error("Error searching products:", error);
      }
    } else {
      getProducts();
    }
  };

  const openModal = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProduct(null);
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
    <div className=" flex">
      <div className=" w-[400px] bg-green-500">
      Hello
    </div>
          <div className="product-list-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search Product"
        onChange={searchHandle}
      />
      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((item) => (
            <div
              key={item._id}
              className="product-card"
              onClick={() => openModal(item)} // Trigger modal when clicked
            >
              {/* Slider for multiple images */}
              <Slider {...sliderSettings} className="product-slider">
                {item.images &&
                  item.images.map((image, idx) => (
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
              <p className="product-distance">Distance Covered: {item.distanceCovered} km</p>
              <p className="product-modelYear">Model Year: {item.modelYear}</p>
              <p className="product-price">Price: ₹{item.price} Lakhs</p>
              <div className="product-actions">
                <button
                  className="delete-button bg-green-500 hover:bg-green-600"
                  onClick={() =>
                    window.open(
                      `https://wa.me/9705240491?text=${encodeURIComponent(
                        "Hello! I'm interested in purchasing a car and would like to learn more about your available options. Could you assist me with the details?"
                      )}`,
                      "_blank"
                    )
                  }
                >
                  <i className="text-2xl ri-whatsapp-line"></i>
                </button>
                <button
                  className="delete-button bg-blue-500 hover:bg-blue-600"
                  onClick={() =>
                    window.open(
                      `https://wa.me/9705240491?text=${encodeURIComponent(
                        "Hello! I'm interested in purchasing a car and would like to learn more about your available options. Could you assist me with the details?"
                      )}`,
                      "_blank"
                    )
                  }
                >
                  <i className="text-2xl ri-phone-line"></i>{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className=" h-96 flex justify-center items-center">
        <p className="no-products">No products found</p>
        </div>
      )}

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="full-view-modal max-w-screen-md mx-auto">
        {currentProduct && (
          <FullViewSlider
            product={currentProduct}
            closeModal={closeModal}
          />
        )}
      </Modal>
    </div>

    </div>

  );
}

export default ProductList;
