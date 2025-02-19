import React, { useState } from "react";

const OtherFilters = ({ onFilterChange }) => {
  const kmsOptions = [
    { label: "Any", value: "any" },
    { label: "10 kms or less", value: "10" },
    { label: "30 kms or less", value: "20" },
    { label: "50 kms or less", value: "30" },
    { label: "75 kms or less", value: "40" },
    { label: "100 kms or less", value: "50" },
    { label: "200 kms or less", value: "60" },
    { label: "300 kms or less", value: "70" },
  ];

  const [selectedKms, setSelectedKms] = useState("any");

  const notifyParent = (updatedState) => {
    const filters = {
      kmsDriven: updatedState.selectedKms,
      fuelTypes: updatedState.selectedFuels,
      bodyTypes: updatedState.selectedBodyTypes,
      transmissions: updatedState.selectedTransmissions,
    };
    if (onFilterChange) {
      onFilterChange(filters);
    }
  };

  const handleKmsChange = (value) => {
    setSelectedKms(value);
    notifyParent({
      selectedKms: value,
      selectedFuels,
      selectedBodyTypes,
      selectedTransmissions,
    });
  };

  const handleFuelCheck = (fuel) => {
    let updated = [...selectedFuels];
    if (updated.includes(fuel)) {
      updated = updated.filter((f) => f !== fuel);
    } else {
      updated.push(fuel);
    }
    setSelectedFuels(updated);
    notifyParent({
      selectedKms,
      selectedFuels: updated,
      selectedBodyTypes,
      selectedTransmissions,
    });
  };

  const handleBodyTypeCheck = (body) => {
    let updated = [...selectedBodyTypes];
    if (updated.includes(body)) {
      updated = updated.filter((b) => b !== body);
    } else {
      updated.push(body);
    }
    setSelectedBodyTypes(updated);
    notifyParent({
      selectedKms,
      selectedFuels,
      selectedBodyTypes: updated,
      selectedTransmissions,
    });
  };

  const handleTransmissionCheck = (trans) => {
    let updated = [...selectedTransmissions];
    if (updated.includes(trans)) {
      updated = updated.filter((t) => t !== trans);
    } else {
      updated.push(trans);
    }
    setSelectedTransmissions(updated);
    notifyParent({
      selectedKms,
      selectedFuels,
      selectedBodyTypes,
      selectedTransmissions: updated,
    });
  };

  return (
    <div className="other-filters text-purple-900 space-y-6">
      <div>
        <h2 className="font-bold mb-2 text-lg">Kms Driven</h2>
        <div className="flex flex-col space-y-2">
          {kmsOptions.map((opt) => (
            <label key={opt.value} className="flex items-center space-x-2">
              <input
                type="radio"
                name="kmsDriven"
                value={opt.value}
                checked={selectedKms === opt.value}
                onChange={() => handleKmsChange(opt.value)}
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-bold mb-2 text-lg">Fuel Type</h2>
        <div className="flex flex-col space-y-2">
          {fuelOptions.map((fuel) => (
            <label key={fuel} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedFuels.includes(fuel)}
                onChange={() => handleFuelCheck(fuel)}
              />
              <span>{fuel}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-bold mb-2 text-lg">Body Type</h2>
        <div className="flex flex-col space-y-2">
          {bodyTypeOptions.map((body) => (
            <label key={body} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedBodyTypes.includes(body)}
                onChange={() => handleBodyTypeCheck(body)}
              />
              <span>{body}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-bold mb-2 text-lg">Transmission</h2>
        <div className="flex flex-col space-y-2">
          {transmissionOptions.map((trans) => (
            <label key={trans} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedTransmissions.includes(trans)}
                onChange={() => handleTransmissionCheck(trans)}
              />
              <span>{trans}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherFilters;