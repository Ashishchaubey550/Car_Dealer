import React, { useEffect, useState, useMemo, useCallback } from "react";
import Slider from "react-slick";
import FullViewSlider from "../Components/FullViewSlider";
import Modal from "react-modal";
import "../CSS/ProductList.css";
import contactbg from "../images/ContactUs.webp";
import PriceFilter from "../Components/PriceFilter";

Modal.setAppElement("#root");

// Helper function to normalize brand names
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
  const [isMobile, setIsMobile] = useState(false); // State to detect mobile devices

  // Default price range in rupees: 50,000 to 7,000,000
  const defaultPriceRange = [50000, 7000000];
  const [priceRange, setPriceRange] = useState(defaultPriceRange);

  // Filter states
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBodyTypes, setSelectedBodyTypes] = useState([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState([]);
  const [selectedModelYears, setSelectedModelYears] = useState([]);
  const [selectedDistances, setSelectedDistances] = useState([]);

  // Slider settings
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Fetch products
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let result = await fetch("http://localhost:8000/product");
      result = await result.json();
      if (result && result.length > 0) {
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

  // Filter products
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

  // Handle price change
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

  // Handle brand change
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

  // Handle color change
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

  // Handle body type change
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

  // Handle fuel type change
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

  // Handle model year change
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

  // Handle distance change
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

  // Search handler
  const searchHandle = useCallback(
    async (event) => {
      const key = event.target.value;
      if (key) {
        try {
          let result = await fetch(`http://localhost:8000/search/${key}`);
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

  // Open modal (only for desktop)
  const openModal = useCallback(
    (product) => {
      if (!isMobile) {
        setCurrentProduct(product);
        setIsModalOpen(true);
      }
    },
    [isMobile]
  );

  // Close modal
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setCurrentProduct(null);
  }, []);

  // Clear filters
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

  // Compute unique filter options
  const uniqueBrands = useMemo(
    () => [...new Set(products.map((p) => p.company))].filter(Boolean),
    [products]
  );
  const uniqueColors = useMemo(
    () =>
      [...new Set(products.map((p) => (p.color || "").toLowerCase()))].filter(
        Boolean
      ),
    [products]
  );
  const uniqueBodyTypes = useMemo(
    () =>
      [
        ...new Set(products.map((p) => (p.bodyType || "").toLowerCase())),
      ].filter(Boolean),
    [products]
  );
  const uniqueFuelTypes = useMemo(
    () =>
      [
        ...new Set(products.map((p) => (p.fuelType || "").toLowerCase())),
      ].filter(Boolean),
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
      {/* Banner Section */}
      <div className="relative w-full">
        <img
          src={contactbg}
          alt="Contact Background"
          className="w-full h-[300px] sm:h-[450px] lg:h-[650px] object-cover blur-[3px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="border border-gray-300 w-48 sm:w-64 lg:w-96 mb-4"></span>
          <h1 className="text-center font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Product Page
          </h1>
          <span className="border border-gray-300 w-48 sm:w-64 lg:w-96 mt-4"></span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row mt-10">
        {/* Filters Section */}
        <div className="w-full lg:w-1/4 p-4 lg:p-10 bg-gray-50">
          <div className="mb-4">
            <button
              className="clear-filters-btn bg-red-500 text-sm text-white font-semibold px-2.5 py-3 rounded-lg hover:bg-black hover:text-white duration-300 transition-all ease-in-out w-full sm:w-auto"
              onClick={clearFilters}
            >
              Clear All Filters
            </button>
          </div>
          <PriceFilter onPriceChange={handlePriceChange} />

          {/* Collapsible Filters for Mobile */}
          <div className="lg:hidden">
            <details className="mb-4">
              <summary className="font-bold text-xl cursor-pointer">Filters</summary>
              <div className="mt-2 space-y-4">
                {/* Brand Filter */}
                <div>
                  <h3 className="font-bold text-lg text-black">Brand</h3>
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
                        <div
                          className="w-6 h-6 flex items-center justify-center border-2 border-red-500 rounded-sm
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
                <div>
                  <h3 className="font-bold text-lg text-black">Color</h3>
                  <div className="flex flex-col mt-2 gap-1">
                    {uniqueColors.map((color) => (
                      <label
                        key={color}
                        title="Click to toggle filter"
                        className="flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          value={color}
                          checked={selectedColors.includes(color)}
                          onChange={handleColorChange}
                          className="peer hidden"
                        />
                        <div
                          className="w-6 h-6 flex items-center justify-center border-2 border-red-500 rounded-sm
                          peer-checked:bg-red-300 peer-checked:border-red-500
                          peer-checked:before:content-['x'] peer-checked:before:text-xl"
                        ></div>
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Body Type Filter */}
                <div>
                  <h3 className="font-bold text-lg text-black">Body Type</h3>
                  <div className="flex flex-col mt-2 gap-1">
                    {uniqueBodyTypes.map((bodyType) => (
                      <label
                        key={bodyType}
                        title="Click to toggle filter"
                        className="flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          value={bodyType}
                          checked={selectedBodyTypes.includes(bodyType)}
                          onChange={handleBodyTypeChange}
                          className="peer hidden"
                        />
                        <div
                          className="w-6 h-6 flex items-center justify-center border-2 border-red-500 rounded-sm
                          peer-checked:bg-red-300 peer-checked:border-red-500
                          peer-checked:before:content-['x'] peer-checked:before:text-xl"
                        ></div>
                        {bodyType.charAt(0).toUpperCase() + bodyType.slice(1)}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fuel Type Filter */}
                <div>
                  <h3 className="font-bold text-lg text-black">Fuel Type</h3>
                  <div className="flex flex-col mt-2 gap-1">
                    {uniqueFuelTypes.map((fuelType) => (
                      <label
                        key={fuelType}
                        title="Click to toggle filter"
                        className="flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          value={fuelType}
                          checked={selectedFuelTypes.includes(fuelType)}
                          onChange={handleFuelTypeChange}
                          className="peer hidden"
                        />
                        <div
                          className="w-6 h-6 flex items-center justify-center border-2 border-red-500 rounded-sm
                          peer-checked:bg-red-300 peer-checked:border-red-500
                          peer-checked:before:content-['x'] peer-checked:before:text-xl"
                        ></div>
                        {fuelType.charAt(0).toUpperCase() + fuelType.slice(1)}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Model Year Filter */}
                <div>
                  <h3 className="font-bold text-lg text-black">Model Year</h3>
                  <div className="flex flex-col mt-2 gap-1">
                    {uniqueModelYears.slice(0, 5).map((year) => (
                      <label
                        key={year}
                        title="Click to toggle filter"
                        className="flex items-center gap-2 text-black font-bold"
                      >
                        <input
                          type="checkbox"
                          value={year}
                          checked={selectedModelYears.includes(year)}
                          onChange={handleModelYearChange}
                          className="peer hidden"
                        />
                        <div
                          className="w-6 h-6 flex items-center justify-center border-2 border-red-500 rounded-sm
                          peer-checked:bg-red-300 peer-checked:border-red-500
                          peer-checked:before:content-['x'] peer-checked:before:text-xl"
                        ></div>
                        <span className="peer-checked:text-red-500">{year}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Distance Covered Filter */}
                <div>
                  <h3 className="font-bold text-lg text-black">
                    Distance Covered (km)
                  </h3>
                  <div className="flex flex-col mt-2 gap-1">
                    {uniqueDistances.slice(0, 5).map((dist) => (
                      <label
                        key={dist}
                        title="Click to toggle filter"
                        className="flex items-center gap-2 text-black font-bold"
                      >
                        <input
                          type="checkbox"
                          value={dist}
                          checked={selectedDistances.includes(dist)}
                          onChange={handleDistanceChange}
                          className="peer hidden"
                        />
                        <div
                          className="w-6 h-6 flex items-center justify-center border-2 border-red-500 rounded-sm
                          peer-checked:bg-red-300 peer-checked:border-red-500
                          peer-checked:before:content-['x'] peer-checked:before:text-xl"
                        ></div>
                        <span className="peer-checked:text-red-500">{dist} km</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </details>
          </div>

          {/* Desktop Filters */}
          <div className="hidden lg:block">
            {/* Brand Filter */}
            <div className="mt-4">
              <h3 className="font-bold text-xl sm:text-2xl text-black">Brand</h3>
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
                    <div
                      className="w-6 h-6 flex items-center justify-center border-2 border-red-500 rounded-sm
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
              <h3 className="font-bold text-xl sm:text-2xl text-black">Color</h3>
              <div className="flex flex-col mt-2 gap-1">
                {uniqueColors.map((color) => (
                  <label
                    key={color}
                    title="Click to toggle filter"
                    className="flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      value={color}
                      checked={selectedColors.includes(color)}
                      onChange={handleColorChange}
                      className="peer hidden"
                    />
                    <div
                      className="w-6 h-6 flex items-center justify-center border-2 border-red-500 rounded-sm
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
              <h3 className="font-bold text-xl sm:text-2xl text-black">Body Type</h3>
              <div className="flex flex-col mt-2 gap-1">
                {uniqueBodyTypes.map((bodyType) => (
                  <label
                    key={bodyType}
                    title="Click to toggle filter"
                    className="flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      value={bodyType}
                      checked={selectedBodyTypes.includes(bodyType)}
                      onChange={handleBodyTypeChange}
                      className="peer hidden"
                    />
                    <div
                      className="w-6 h-6 flex items-center justify-center border-2 border-red-500 rounded-sm
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
              <h3 className="font-bold text-xl sm:text-2xl text-black">Fuel Type</h3>
              <div className="flex flex-col mt-2 gap-1">
                {uniqueFuelTypes.map((fuelType) => (
                  <label
                    key={fuelType}
                    title="Click to toggle filter"
                    className="flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      value={fuelType}
                      checked={selectedFuelTypes.includes(fuelType)}
                      onChange={handleFuelTypeChange}
                      className="peer hidden"
                    />
                    <div
                      className="w-6 h-6 flex items-center justify-center border-2 border-red-500 rounded-sm
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
              <h3 className="font-bold text-xl sm:text-2xl text-black">Model Year</h3>
              <div className="flex flex-col mt-2 gap-1">
                {uniqueModelYears.slice(0, 5).map((year) => (
                  <label
                    key={year}
                    title="Click to toggle filter"
                    className="flex items-center gap-2 text-black font-bold"
                  >
                    <input
                      type="checkbox"
                      value={year}
                      checked={selectedModelYears.includes(year)}
                      onChange={handleModelYearChange}
                      className="peer hidden"
                    />
                    <div
                      className="w-6 h-6 flex items-center justify-center border-2 border-red-500 rounded-sm
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
              <h3 className="font-bold text-xl sm:text-2xl text-black">
                Distance Covered (km)
              </h3>
              <div className="flex flex-col mt-2 gap-1">
                {uniqueDistances.slice(0, 5).map((dist) => (
                  <label
                    key={dist}
                    title="Click to toggle filter"
                    className="flex items-center gap-2 text-black font-bold"
                  >
                    <input
                      type="checkbox"
                      value={dist}
                      checked={selectedDistances.includes(dist)}
                      onChange={handleDistanceChange}
                      className="peer hidden"
                    />
                    <div
                      className="w-6 h-6 flex items-center justify-center border-2 border-red-500 rounded-sm
                      peer-checked:bg-red-300 peer-checked:border-red-500
                      peer-checked:before:content-['x'] peer-checked:before:text-xl"
                    ></div>
                    <span className="peer-checked:text-red-500">{dist} km</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product List Section */}
        <div className="w-full lg:w-3/4 p-4 lg:p-10">
          <input
            className="search-input w-full p-2 mb-4 border border-gray-300 rounded-lg"
            type="text"
            placeholder="Search Product"
            onChange={searchHandle}
          />
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((item) => (
                <div
                  key={item._id}
                  className="product-card p-4 border border-gray-200 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() => openModal(item)}
                >
                  <Slider {...sliderSettings} className="product-slider">
                    {item.images &&
                      item.images.map((image, idx) => (
                        <div key={idx} className="slider-image-container">
                          <img
                            src={`http://localhost:8000${image}`}
                            alt={`Product ${idx + 1}`}
                            className="product-image w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                      ))}
                  </Slider>
                  <h3 className="mt-4 text-xl font-bold">Model: {item.model}</h3>
                  <p className="text-gray-700">
                    Company:{" "}
                    {item.company.charAt(0).toUpperCase() +
                      item.company.slice(1)}
                  </p>
                  <p className="text-gray-700">Color: {item.color}</p>
                  <p className="text-gray-700">
                    Distance Covered: {item.distanceCovered} km
                  </p>
                  <p className="text-gray-700">
                    Model Year: {item.modelYear}
                  </p>
                  <p className="text-gray-700">Body Type: {item.bodyType}</p>
                  <p className="text-gray-700">Fuel Type: {item.fuelType}</p>
                  <p className="text-gray-700">Price: ₹{item.price} Lakhs</p>
                  <p className="text-gray-700">Variant: {item.variant}</p>
                  <p className="text-gray-700">
                    Registration Year: {item.registrationYear}
                  </p>
                  <p className="text-gray-700">
                    Transmission Type: {item.transmissionType}
                  </p>

                  <div className="product-actions mt-4 flex flex-col sm:flex-row gap-2">
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center justify-center gap-2 sm:w-auto w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        const message =
                          `Hello! I'm interested in this car:\n\n` +
                          `- Model: ${item.model}\n` +
                          `- Company: ${item.company}\n` +
                          `- Color: ${item.color}\n` +
                          `- Distance Covered: ${item.distanceCovered} km\n` +
                          `- Model Year: ${item.modelYear}\n` +
                          `- Price: ₹${item.price} Lakhs\n` +
                          `- Variant: ${item.variant}\n` +
                          `- Registration Year: ${item.registrationYear}\n` +
                          `- Fuel Type: ${item.fuelType}\n` +
                          `- Body Type: ${item.bodyType}\n` +
                          `- Transmission Type: ${item.transmissionType}\n\n` +
                          `Can you provide more details?`;
                        window.open(
                          `https://wa.me/9705240491?text=${encodeURIComponent(
                            message
                          )}`,
                          "_blank"
                        );
                      }}
                    >
                      <i className="ri-whatsapp-line"></i> 
                      <span className="hidden sm:inline">WhatsApp</span>
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2 sm:w-auto w-full"
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
                      <i className="ri-phone-line"></i> 
                      <span className="hidden sm:inline">Call</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-96 flex justify-center items-center">
              <p className="text-gray-700">No products found</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal - Hidden on mobile */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={`full-view-modal mx-auto ${isMobile ? 'hidden' : ''}`}
        overlayClassName={isMobile ? 'hidden' : ''}
      >
        {currentProduct && !isMobile && (
          <FullViewSlider product={currentProduct} closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}

export default ProductList;