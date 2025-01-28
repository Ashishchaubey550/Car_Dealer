import React from 'react';

// Left Arrow
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute flex items-center justify-center w-12 h-12 left-4 top-1/2 transform -translate-y-1/2 bg-slate-300 text-black rounded-full hover:bg-gray-600 z-10 text-3xl pb-2"
    onClick={onClick}
  >
    &#8592; {/* Left Arrow Symbol */}
  </button>
);

// Right Arrow
const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute flex items-center justify-center w-12 h-12 right-4 top-1/2 transform -translate-y-1/2 bg-slate-300 text-black rounded-full hover:bg-gray-600 z-10 text-3xl pb-2"
    onClick={onClick}
  >
    &#8594; {/* Right Arrow Symbol */}
  </button>
);

export { CustomPrevArrow, CustomNextArrow };
