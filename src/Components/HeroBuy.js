import React from "react";
import { Link } from "react-router-dom";

function HeroBuy() {
  return (
    <div className=" min-h-[30vh]">
      <h1 className=" mt-10 px-14 text-4xl font-bold">Buy Cars </h1>
      <h2 className="py-4 px-14 text-2xl font-semibold">
        Based on your recent activity
      </h2>
      <Link to='/productList'>
      <button className="bg-blue-500 py-2 px-3 rounded-xl ml-14 text-xl hover:bg-blue-600 text-white">View All Cars</button>

      </Link>
    </div>
  );
}

export default HeroBuy;
