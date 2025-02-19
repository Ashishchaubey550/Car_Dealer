// BrandModelYearFilter.js
import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

/**
 * Example brand+model data (you can fetch from API instead)
 */
const brandData = [
  {
    brand: "Maruti Suzuki",
    models: ["Swift", "Baleno", "Wagon R", "Dzire", "Ertiga"],
  },
  {
    brand: "Hyundai",
    models: ["i10", "i20", "Creta", "Verna"],
  },
  {
    brand: "Renault",
    models: ["Kwid", "Duster", "Triber"],
  },
  {
    brand: "Honda",
    models: ["City", "Amaze", "Jazz"],
  },
  {
    brand: "Tata",
    models: ["Tiago", "Nexon", "Harrier", "Safari"],
  },
  {
    brand: "Ford",
    models: ["Figo", "Ecosport", "Endeavour"],
  },
  {
    brand: "Mahindra",
    models: ["Bolero", "Scorpio", "XUV500", "Thar"],
  },
];

/**
 * Example year options for radio buttons
 */
const yearOptions = [
  "2022 & above",
  "2020 & above",
  "2019 & above",
  "2016 & above",
  "2014 & above",
  "2012 & above",
  "2010 & above",
  "2008 & above",
];

const BrandModelYearFilter = ({ onFilterChange }) => {
  // Track which brand sections are expanded
  const [expandedBrands, setExpandedBrands] = useState([]);

  // Track which brands and models are selected
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);

  // Track which year is selected (radio)
  const [selectedYear, setSelectedYear] = useState("");

  // Expand/Collapse a brand section
  const toggleBrand = (brand) => {
    if (expandedBrands.includes(brand)) {
      setExpandedBrands(expandedBrands.filter((b) => b !== brand));
    } else {
      setExpandedBrands([...expandedBrands, brand]);
    }
  };

  // Handle checking/unchecking a brand
  const handleBrandCheck = (brand) => {
    let updatedBrands = [...selectedBrands];
    if (updatedBrands.includes(brand)) {
      // Uncheck brand
      updatedBrands = updatedBrands.filter((b) => b !== brand);

      // Also remove any models under this brand
      const brandObj = brandData.find((b) => b.brand === brand);
      if (brandObj) {
        const newModels = selectedModels.filter(
          (m) => !brandObj.models.includes(m)
        );
        setSelectedModels(newModels);
        // Trigger callback with updated model selection
        notifyFilterChange(updatedBrands, newModels, selectedYear);
      }
    } else {
      // Check brand
      updatedBrands.push(brand);
    }
    setSelectedBrands(updatedBrands);
    notifyFilterChange(updatedBrands, selectedModels, selectedYear);
  };

  // Handle checking/unchecking a model
  const handleModelCheck = (brand, model) => {
    let updatedModels = [...selectedModels];

    if (updatedModels.includes(model)) {
      // Uncheck model
      updatedModels = updatedModels.filter((m) => m !== model);
    } else {
      // Check model
      updatedModels.push(model);
      // Also ensure the brand is checked if any model is selected
      if (!selectedBrands.includes(brand)) {
        setSelectedBrands([...selectedBrands, brand]);
        notifyFilterChange(
          [...selectedBrands, brand],
          [...updatedModels],
          selectedYear
        );
      }
    }

    setSelectedModels(updatedModels);
    notifyFilterChange(selectedBrands, updatedModels, selectedYear);
  };

  // Handle changing the year (radio buttons)
  const handleYearChange = (year) => {
    setSelectedYear(year);
    notifyFilterChange(selectedBrands, selectedModels, year);
  };

  // Notify parent whenever brand/model/year changes
  const notifyFilterChange = (brands, models, year) => {
    if (onFilterChange) {
      onFilterChange({ brands, models, year });
    }
  };

  return (
    <div className="brand-model-year-filter text-purple-900">
      {/* Brands + Models */}
      <h3 className="font-bold mb-3 text-lg">Brands + Models</h3>
      <div className="space-y-2">
        {brandData.map((item) => {
          const brand = item.brand;
          const isExpanded = expandedBrands.includes(brand);
          const isBrandChecked = selectedBrands.includes(brand);

          return (
            <div key={brand} className="border-b pb-2">
              {/* Brand Row */}
              <div className="flex items-center justify-between cursor-pointer">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={isBrandChecked}
                    onChange={() => handleBrandCheck(brand)}
                  />
                  <span>{brand}</span>
                </label>
                <button
                  className="text-xl"
                  onClick={() => toggleBrand(brand)}
                >
                  {isExpanded ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                </button>
              </div>

              {/* Models (collapsible) */}
              {isExpanded && (
                <div className="mt-2 ml-6 space-y-1">
                  {item.models.map((model) => {
                    const isModelChecked = selectedModels.includes(model);
                    return (
                      <label
                        key={model}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          checked={isModelChecked}
                          onChange={() => handleModelCheck(brand, model)}
                        />
                        <span>{model}</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Year Filter */}
      <h3 className="font-bold mt-6 mb-3 text-lg">Year</h3>
      <div className="flex flex-col space-y-2">
        {yearOptions.map((year) => (
          <label key={year} className="flex items-center space-x-2">
            <input
              type="radio"
              name="yearFilter"
              value={year}
              checked={selectedYear === year}
              onChange={() => handleYearChange(year)}
            />
            <span>{year}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default BrandModelYearFilter;
