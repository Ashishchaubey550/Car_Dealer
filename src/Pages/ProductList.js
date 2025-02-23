import React, { useEffect, useState, useMemo, useCallback } from "react";
import Slider from "react-slick";
import FullViewSlider from "../Components/FullViewSlider";
import Modal from "react-modal";
import "../CSS/ProductList.css";
import contactbg from "../images/ContactUs.webp";
import PriceFilter from "../Components/PriceFilter";

Modal.setAppElement("#root");

// Helper function to normalize brand names.
const normalizeBrand = (brand) => {
  if (!brand) return "";
  const lower = brand.toLowerCase().trim();
  if (lower === "lamborgini") return "lamborghini";
  return lower;
};

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Default slider range in rupees: 50,000 to 7,000,000
  const defaultPriceRange = [50000, 7000000];
  const [priceRange, setPriceRange] = useState(defaultPriceRange);

  // Filter states for brand, color, bodyType, fuelType,
  // modelYear, and distanceCovered
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBodyTypes, setSelectedBodyTypes] = useState([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState([]);
  const [selectedModelYears, setSelectedModelYears] = useState([]);
  const [selectedDistances, setSelectedDistances] = useState([]);

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let result = await fetch("https://car-dealer-backend-7m2r.onrender.com/product");
      result = await result.json();
      if (result && result.length > 0) {
        // Normalize the company name for each product.
        const normalizedProducts = result.map((p) => ({
          ...p,
          company: normalizeBrand(p.company),
        }));
        setProducts(normalizedProducts);
        setFilteredProducts(normalizedProducts);
      } else {
        setProducts([]);
        setFilteredProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
      setFilteredProducts([]);
    }
  };

  // useCallback to memoize filterProducts so it only re-creates when dependencies change.
  const filterProducts = useCallback(
    (
      priceRange,
      brands,
      colors,
      bodyTypes,
      fuelTypes,
      modelYears,
      distances,
      dataset = products
    ) => {
      const filtered = dataset.filter((p) => {
        const priceInRupees = p.price * 100000; // Convert lakhs to rupees
        const productCompany = p.company || "";
        const productColor = (p.color || "").toLowerCase();
        const productBodyType = (p.bodyType || "").toLowerCase();
        const productFuelType = (p.fuelType || "").toLowerCase();

        return (
          priceInRupees >= priceRange[0] &&
          priceInRupees <= priceRange[1] &&
          (brands.length === 0 || brands.includes(productCompany)) &&
          (colors.length === 0 || colors.includes(productColor)) &&
          (bodyTypes.length === 0 || bodyTypes.includes(productBodyType)) &&
          (fuelTypes.length === 0 || fuelTypes.includes(productFuelType)) &&
          (modelYears.length === 0 || modelYears.includes(p.modelYear)) &&
          (distances.length === 0 || distances.includes(p.distanceCovered))
        );
      });
      setFilteredProducts(filtered.length ? filtered : dataset);
    },
    [products]
  );

  const handlePriceChange = useCallback(
    (range) => {
      setPriceRange(range);
      filterProducts(
        range,
        selectedBrands,
        selectedColors,
        selectedBodyTypes,
        selectedFuelTypes,
        selectedModelYears,
        selectedDistances
      );
    },
    [
      selectedBrands,
      selectedColors,
      selectedBodyTypes,
      selectedFuelTypes,
      selectedModelYears,
      selectedDistances,
      filterProducts,
    ]
  );

  const handleBrandChange = useCallback(
    (event) => {
      const selectedBrand = event.target.value;
      const newSelectedBrands = selectedBrands.includes(selectedBrand)
        ? selectedBrands.filter((brand) => brand !== selectedBrand)
        : [...selectedBrands, selectedBrand];
      setSelectedBrands(newSelectedBrands);
      filterProducts(
        priceRange,
        newSelectedBrands,
        selectedColors,
        selectedBodyTypes,
        selectedFuelTypes,
        selectedModelYears,
        selectedDistances
      );
    },
    [
      priceRange,
      selectedBrands,
      selectedColors,
      selectedBodyTypes,
      selectedFuelTypes,
      selectedModelYears,
      selectedDistances,
      filterProducts,
    ]
  );

  const handleColorChange = useCallback(
    (event) => {
      const selectedColor = event.target.value.toLowerCase();
      const newSelectedColors = selectedColors.includes(selectedColor)
        ? selectedColors.filter((color) => color !== selectedColor)
        : [...selectedColors, selectedColor];
      setSelectedColors(newSelectedColors);
      filterProducts(
        priceRange,
        selectedBrands,
        newSelectedColors,
        selectedBodyTypes,
        selectedFuelTypes,
        selectedModelYears,
        selectedDistances
      );
    },
    [
      priceRange,
      selectedBrands,
      selectedColors,
      selectedBodyTypes,
      selectedFuelTypes,
      selectedModelYears,
      selectedDistances,
      filterProducts,
    ]
  );

  const handleBodyTypeChange = useCallback(
    (event) => {
      const selectedBodyType = event.target.value.toLowerCase();
      const newSelectedBodyTypes = selectedBodyTypes.includes(selectedBodyType)
        ? selectedBodyTypes.filter((bodyType) => bodyType !== selectedBodyType)
        : [...selectedBodyTypes, selectedBodyType];
      setSelectedBodyTypes(newSelectedBodyTypes);
      filterProducts(
        priceRange,
        selectedBrands,
        selectedColors,
        newSelectedBodyTypes,
        selectedFuelTypes,
        selectedModelYears,
        selectedDistances
      );
    },
    [
      priceRange,
      selectedBrands,
      selectedColors,
      selectedBodyTypes,
      selectedFuelTypes,
      selectedModelYears,
      selectedDistances,
      filterProducts,
    ]
  );

  const handleFuelTypeChange = useCallback(
    (event) => {
      const selectedFuelType = event.target.value.toLowerCase();
      const newSelectedFuelTypes = selectedFuelTypes.includes(selectedFuelType)
        ? selectedFuelTypes.filter((fuelType) => fuelType !== selectedFuelType)
        : [...selectedFuelTypes, selectedFuelType];
      setSelectedFuelTypes(newSelectedFuelTypes);
      filterProducts(
        priceRange,
        selectedBrands,
        selectedColors,
        selectedBodyTypes,
        newSelectedFuelTypes,
        selectedModelYears,
        selectedDistances
      );
    },
    [
      priceRange,
      selectedBrands,
      selectedColors,
      selectedBodyTypes,
      selectedFuelTypes,
      selectedModelYears,
      selectedDistances,
      filterProducts,
    ]
  );

  const handleModelYearChange = useCallback(
    (event) => {
      const year = Number(event.target.value);
      const newSelectedModelYears = selectedModelYears.includes(year)
        ? selectedModelYears.filter((y) => y !== year)
        : [...selectedModelYears, year];
      setSelectedModelYears(newSelectedModelYears);
      filterProducts(
        priceRange,
        selectedBrands,
        selectedColors,
        selectedBodyTypes,
        selectedFuelTypes,
        newSelectedModelYears,
        selectedDistances
      );
    },
    [
      priceRange,
      selectedBrands,
      selectedColors,
      selectedBodyTypes,
      selectedFuelTypes,
      selectedModelYears,
      selectedDistances,
      filterProducts,
    ]
  );

  const handleDistanceChange = useCallback(
    (event) => {
      const dist = Number(event.target.value);
      const newSelectedDistances = selectedDistances.includes(dist)
        ? selectedDistances.filter((d) => d !== dist)
        : [...selectedDistances, dist];
      setSelectedDistances(newSelectedDistances);
      filterProducts(
        priceRange,
        selectedBrands,
        selectedColors,
        selectedBodyTypes,
        selectedFuelTypes,
        selectedModelYears,
        newSelectedDistances
      );
    },
    [
      priceRange,
      selectedBrands,
      selectedColors,
      selectedBodyTypes,
      selectedFuelTypes,
      selectedModelYears,
      selectedDistances,
      filterProducts,
    ]
  );

  const searchHandle = useCallback(
    async (event) => {
      const key = event.target.value;
      if (key) {
        try {
          let result = await fetch(`https://car-dealer-backend-7m2r.onrender.com/search/${key}`);
          result = await result.json();
          if (result) {
            const normalizedResult = result.map((p) => ({
              ...p,
              company: normalizeBrand(p.company),
            }));
            filterProducts(
              priceRange,
              selectedBrands,
              selectedColors,
              selectedBodyTypes,
              selectedFuelTypes,
              selectedModelYears,
              selectedDistances,
              normalizedResult
            );
          }
        } catch (error) {
          console.error("Error searching products:", error);
        }
      } else {
        filterProducts(
          priceRange,
          selectedBrands,
          selectedColors,
          selectedBodyTypes,
          selectedFuelTypes,
          selectedModelYears,
          selectedDistances,
          products
        );
      }
    },
    [
      priceRange,
      selectedBrands,
      selectedColors,
      selectedBodyTypes,
      selectedFuelTypes,
      selectedModelYears,
      selectedDistances,
      products,
      filterProducts,
    ]
  );

  const openModal = useCallback((product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setCurrentProduct(null);
  }, []);

  const clearFilters = useCallback(() => {
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedBodyTypes([]);
    setSelectedFuelTypes([]);
    setSelectedModelYears([]);
    setSelectedDistances([]);
    setPriceRange(defaultPriceRange);
    setFilteredProducts(products);
  }, [products]);

  // Compute unique filter options using useMemo.
  const uniqueBrands = useMemo(
    () => [...new Set(products.map((p) => p.company))].filter(Boolean),
    [products]
  );
  const uniqueColors = useMemo(
    () => [...new Set(products.map((p) => (p.color || "").toLowerCase()))].filter(Boolean),
    [products]
  );
  const uniqueBodyTypes = useMemo(
    () => [...new Set(products.map((p) => (p.bodyType || "").toLowerCase()))].filter(Boolean),
    [products]
  );
  const uniqueFuelTypes = useMemo(
    () => [...new Set(products.map((p) => (p.fuelType || "").toLowerCase()))].filter(Boolean),
    [products]
  );
  const uniqueModelYears = useMemo(
    () =>
      [...new Set(products.map((p) => p.modelYear))]
        .sort((a, b) => a - b)
        .filter(Boolean),
    [products]
  );
  const uniqueDistances = useMemo(
    () =>
      [...new Set(products.map((p) => p.distanceCovered))]
        .sort((a, b) => a - b)
        .filter(Boolean),
    [products]
  );

  return (
    <div className="flex flex-col">
      <div className="relative w-full">
        <img
          src={contactbg}
          alt="Contact Background"
          className="w-full h-[650px] object-cover blur-[3px] border-l-neutral-950"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="border border-gray-300 w-96 mb-4"></span>
          <h1 className="text-center font-extrabold text-5xl text-white">Product Page</h1>
          <span className="border border-gray-300 w-96 mt-4"></span>
        </div>
      </div>

      <div className="flex mt-10">
        <div className="w-1/4 p-10">
          {/* Clear Filters Button */}
          <div className="mb-4">
            <button
              className="clear-filters-btn bg-red-500 text-sm text-white font-semibold px-2.5 py-3 rounded-lg hover:bg-black hover:text-white duration-300 transition-all ease-in-out"
              onClick={clearFilters}
            >
              Clear All Filters
            </button>
          </div>
          <PriceFilter onPriceChange={handlePriceChange} />

          {/* Brand Filter */}
          <div className="mt-4">
            <h3 className="font-bold text-2xl text-black">Brand</h3>
            <div className="flex flex-col mt-2 gap-1">
              {uniqueBrands.map((brand) => (
                <label
                  key={brand}
                  title="Click to toggle filter"
                  className="flex items-center gap-2 text-black font-bold"
                >
                  <input
                    type="checkbox"
                    value={brand}
                    checked={selectedBrands.includes(brand)}
                    onChange={handleBrandChange}
                    className="peer hidden"
                  />
                  <div className="w-6 h-6 flex items-center justify-center border-2 border-red-500 rounded-sm
                    peer-checked:bg-red-300 peer-checked:border-red-500
                    peer-checked:before:content-['x'] peer-checked:before:text-xl"
                  ></div>
                  <span className="peer-checked:text-red-500">
                    {brand.charAt(0).toUpperCase() + brand.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div className="mt-4">
            <h3 className="font-bold text-2xl text-black">Color</h3>
            <div className="flex flex-col mt-2 gap-1">
              {uniqueColors.map((color) => (
                <label key={color} title="Click to toggle filter" className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={color}
                    checked={selectedColors.includes(color)}
                    onChange={handleColorChange}
                    className="peer hidden"
                  />
                  <div className="w-6 h-6 flex items-center justify-center border-2 border-red-500 rounded-sm
                    peer-checked:bg-red-300 peer-checked:border-red-500
                    peer-checked:before:content-['x'] peer-checked:before:text-xl"
                  ></div>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Body Type Filter */}
          <div className="mt-4">
            <h3 className="font-bold text-2xl text-black">Body Type</h3>
            <div className="flex flex-col mt-2 gap-1">
              {uniqueBodyTypes.map((bodyType) => (
                <label key={bodyType} title="Click to toggle filter" className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={bodyType}
                    checked={selectedBodyTypes.includes(bodyType)}
                    onChange={handleBodyTypeChange}
                    className="peer hidden"
                  />
                  <div className="w-6 h-6 flex items-center justify-center border-2 border-red-500 rounded-sm
                    peer-checked:bg-red-300 peer-checked:border-red-500
                    peer-checked:before:content-['x'] peer-checked:before:text-xl"
                  ></div>
                  {bodyType.charAt(0).toUpperCase() + bodyType.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Fuel Type Filter */}
          <div className="mt-4">
            <h3 className="font-bold text-2xl text-black">Fuel Type</h3>
            <div className="flex flex-col mt-2 gap-1">
              {uniqueFuelTypes.map((fuelType) => (
                <label key={fuelType} title="Click to toggle filter" className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={fuelType}
                    checked={selectedFuelTypes.includes(fuelType)}
                    onChange={handleFuelTypeChange}
                    className="peer hidden"
                  />
                  <div className="w-6 h-6 flex items-center justify-center border-2 border-red-500 rounded-sm
                    peer-checked:bg-red-300 peer-checked:border-red-500
                    peer-checked:before:content-['x'] peer-checked:before:text-xl"
                  ></div>
                  {fuelType.charAt(0).toUpperCase() + fuelType.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Model Year Filter */}
          <div className="mt-4">
            <h3 className="font-bold text-2xl text-black">Model Year</h3>
            <div className="flex flex-col mt-2 gap-1">
              {uniqueModelYears.slice(0 , 5).map((year) => (
                <label key={year} title="Click to toggle filter" className="flex items-center gap-2 text-black font-bold">
                  <input
                    type="checkbox"
                    value={year}
                    checked={selectedModelYears.includes(year)}
                    onChange={handleModelYearChange}
                    className="peer hidden"
                  />
                  <div className="w-6 h-6 flex items-center justify-center border-2 border-red-500 rounded-sm
                    peer-checked:bg-red-300 peer-checked:border-red-500
                    peer-checked:before:content-['x'] peer-checked:before:text-xl"
                  ></div>
                  <span className="peer-checked:text-red-500">{year}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Distance Covered Filter */}
          <div className="mt-4">
            <h3 className="font-bold text-2xl text-black">Distance Covered (km)</h3>
            <div className="flex flex-col mt-2 gap-1">
              {uniqueDistances.slice(0 , 5).map((dist) => (
                <label key={dist} title="Click to toggle filter" className="flex items-center gap-2 text-black font-bold">
                  <input
                    type="checkbox"
                    value={dist}
                    checked={selectedDistances.includes(dist)}
                    onChange={handleDistanceChange}
                    className="peer hidden"
                  />
                  <div className="w-6 h-6 flex items-center justify-center border-2 border-red-500 rounded-sm
                    peer-checked:bg-red-300 peer-checked:border-red-500
                    peer-checked:before:content-['x'] peer-checked:before:text-xl"
                  ></div>
                  <span className="peer-checked:text-red-500">{dist} km</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="product-list-container ">
          <input
            className="search-input"
            type="text"
            placeholder="Search Product"
            onChange={searchHandle}
          />

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((item) => (
                <div
                  key={item._id}
                  className="product-card"
                  onClick={() => openModal(item)}
                >
                  <Slider {...sliderSettings} className="product-slider">
                    {item.images &&
                      item.images.map((image, idx) => (
                        <div key={idx} className="slider-image-container">
                          <img
                            src={`https://car-dealer-backend-7m2r.onrender.com${image}`}
                            alt={`Product ${idx + 1}`}
                            className="product-image"
                          />
                        </div>
                      ))}
                  </Slider>
                  <h3 className="mt-10 product-model">Model: {item.model}</h3>
                  <p className="product-company">
                    Company: {item.company.charAt(0).toUpperCase() + item.company.slice(1)}
                  </p>
                  <p className="product-color">Color: {item.color}</p>
                  <p className="product-distance">Distance Covered: {item.distanceCovered} km</p>
                  <p className="product-modelYear">Model Year: {item.modelYear}</p>
                  <p className="product-bodyType">Body Type: {item.bodyType}</p>
                  <p className="product-fuelType">Fuel Type: {item.fuelType}</p>
                  <p className="product-price">Price: ₹{item.price} Lakhs</p>
                  <p className="product-price">Variant: {item.variant}</p>
                  <p className="product-price">Registration Year: {item.registrationYear}</p>
                  <p className="product">Transmission Type: {item.transmissionType}</p>
                  
                  <div className="product-actions">
                    <button
                      className="delete-button bg-green-500 hover:bg-green-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(
                          `https://wa.me/9705240491?text=${encodeURIComponent(
                            "Hello! I'm interested in purchasing a car and would like to learn more about your available options. Could you assist me with the details?"
                          )}`,
                          "_blank"
                        );
                      }}
                    >
                      <i className="text-2xl ri-whatsapp-line"></i>
                    </button>
                    <button
                      className="delete-button bg-blue-500 hover:bg-blue-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(
                          `https://wa.me/9705240491?text=${encodeURIComponent(
                            "Hello! I'm interested in purchasing a car and would like to learn more about your available options. Could you assist me with the details?"
                          )}`,
                          "_blank"
                        );
                      }}
                    >
                      <i className="text-2xl ri-phone-line"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-96 flex justify-center items-center">
              <p className="no-products">No products found</p>
            </div>
          )}

          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="full-view-modal max-w-screen-md mx-auto"
          >
            {currentProduct && (
              <FullViewSlider product={currentProduct} closeModal={closeModal} />
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
