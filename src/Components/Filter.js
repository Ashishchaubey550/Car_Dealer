import React, { useState, useEffect } from 'react';

function Filter({ onFilterChange, products }) {
  const [selectedFilters, setSelectedFilters] = useState({
    bodyType: [],
    fuelType: [],
    transmissionType: [],
    color: [],
  });

  const handleCheckboxChange = (e, filterType) => {
    const value = e.target.value;
    setSelectedFilters(prevFilters => {
      const newFilters = { ...prevFilters };
      if (newFilters[filterType].includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter(item => item !== value);
      } else {
        newFilters[filterType].push(value);
      }

      // Send updated filter to parent component
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleSelectAll = (filterType) => {
    const allValues = getUniqueValues(filterType);
    setSelectedFilters(prevFilters => {
      const newFilters = { ...prevFilters };
      newFilters[filterType] = allValues;
      onFilterChange(newFilters); // Notify parent whenever filters change
      return newFilters;
    });
  };

  const handleClearAll = (filterType) => {
    setSelectedFilters(prevFilters => {
      const newFilters = { ...prevFilters };
      newFilters[filterType] = [];
      onFilterChange(newFilters); // Notify parent whenever filters change
      return newFilters;
    });
  };

  const handleShowAll = () => {
    setSelectedFilters({
      bodyType: [],
      fuelType: [],
      transmissionType: [],
      color: [],
    });
    onFilterChange({
      bodyType: [],
      fuelType: [],
      transmissionType: [],
      color: [],
    }); // Reset all filters and show all products
  };

  // Get unique values for filter options (case insensitive)
  const getUniqueValues = (key) => {
    const normalizedValues = products
      .map(product => product[key] && product[key].toLowerCase()) // Normalize to lowercase if key exists
      .filter(value => value); // Filter out undefined or null values

    const uniqueNormalizedValues = [...new Set(normalizedValues)];

    return uniqueNormalizedValues.map(value => {
      const product = products.find(product => product[key]?.toLowerCase() === value);
      return product ? product[key] : value;
    });
  };

  // Apply filters to products
  const filteredProducts = products.filter(product => {
    return (
      (selectedFilters.bodyType.length === 0 || selectedFilters.bodyType.includes(product.bodyType)) &&
      (selectedFilters.fuelType.length === 0 || selectedFilters.fuelType.includes(product.fuelType)) &&
      (selectedFilters.transmissionType.length === 0 || selectedFilters.transmissionType.includes(product.transmissionType)) &&
      (selectedFilters.color.length === 0 || selectedFilters.color.includes(product.color))
    );
  });

  // Handle changes to filters
  useEffect(() => {
    onFilterChange(selectedFilters); // Notify parent whenever filters change
  }, [selectedFilters, onFilterChange]);

  return (
    <div className="filter-container p-4 space-y-4">
      <h3 className="text-lg font-semibold">Filters</h3>

      {/* Body Type Filter */}
      <div>
        <label className="block">Body Type</label>
        <div className="space-y-2">
          {getUniqueValues('bodyType').map((body, index) => (
            <div key={index}>
              <input
                type="checkbox"
                value={body}
                checked={selectedFilters.bodyType.includes(body)}
                onChange={(e) => handleCheckboxChange(e, 'bodyType')}
                id={`bodyType-${body}`}
              />
              <label htmlFor={`bodyType-${body}`}>{body}</label>
            </div>
          ))}
        </div>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => handleSelectAll('bodyType')}>
          Select All
        </button>
        <button className="mt-2 ml-2 px-4 py-2 bg-red-500 text-white rounded" onClick={() => handleClearAll('bodyType')}>
          Clear All
        </button>
      </div>

      {/* Fuel Type Filter */}
      <div>
        <label className="block">Fuel Type</label>
        <div className="space-y-2">
          {getUniqueValues('fuelType').map((fuel, index) => (
            <div key={index}>
              <input
                type="checkbox"
                value={fuel}
                checked={selectedFilters.fuelType.includes(fuel)}
                onChange={(e) => handleCheckboxChange(e, 'fuelType')}
                id={`fuelType-${fuel}`}
              />
              <label htmlFor={`fuelType-${fuel}`}>{fuel}</label>
            </div>
          ))}
        </div>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => handleSelectAll('fuelType')}>
          Select All
        </button>
        <button className="mt-2 ml-2 px-4 py-2 bg-red-500 text-white rounded" onClick={() => handleClearAll('fuelType')}>
          Clear All
        </button>
      </div>

      {/* Transmission Type Filter */}
      <div>
        <label className="block">Transmission Type</label>
        <div className="space-y-2">
          {getUniqueValues('transmissionType').map((transmission, index) => (
            <div key={index}>
              <input
                type="checkbox"
                value={transmission}
                checked={selectedFilters.transmissionType.includes(transmission)}
                onChange={(e) => handleCheckboxChange(e, 'transmissionType')}
                id={`transmissionType-${transmission}`}
              />
              <label htmlFor={`transmissionType-${transmission}`}>{transmission}</label>
            </div>
          ))}
        </div>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => handleSelectAll('transmissionType')}>
          Select All
        </button>
        <button className="mt-2 ml-2 px-4 py-2 bg-red-500 text-white rounded" onClick={() => handleClearAll('transmissionType')}>
          Clear All
        </button>
      </div>

      {/* Color Filter */}
      <div>
        <label className="block">Color</label>
        <div className="space-y-2">
          {getUniqueValues('color').map((color, index) => (
            <div key={index}>
              <input
                type="checkbox"
                value={color}
                checked={selectedFilters.color.includes(color)}
                onChange={(e) => handleCheckboxChange(e, 'color')}
                id={`color-${color}`}
              />
              <label htmlFor={`color-${color}`}>{color}</label>
            </div>
          ))}
        </div>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => handleSelectAll('color')}>
          Select All
        </button>
        <button className="mt-2 ml-2 px-4 py-2 bg-red-500 text-white rounded" onClick={() => handleClearAll('color')}>
          Clear All
        </button>
      </div>

      {/* Show All Products Button */}
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={handleShowAll}
      >
        Show All Products
      </button>
    </div>
  );
}

export default Filter;
