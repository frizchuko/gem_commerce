"use client";

import { FiShoppingBag } from "react-icons/fi";
import { RiShoppingBag4Fill } from "react-icons/ri"
import { useState } from "react";

export default function StockToggle() {
  const [inStock, setInStock] = useState(true);

  return (
    <button
      onClick={() => setInStock(!inStock)}
      className={`relative flex items-center h-8 ${inStock ? "w-26.5" : "w-36"} border border-red-500 rounded-full bg-white px-6 py-1.5 overflow-visible`}
    >
      {/* Text */}
      <span
        className={`text-sm text-nowrap font-medium transition-all duration-300 ${
          inStock ? "text-red-500 ml-5" : "text-gray-800 mr-10"
        }`}
      >
        {inStock ? "In stock" : "Out of stock"}
      </span>

      {/* Sliding Circle */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-[42px] h-[42px] bg-[#EA3335] rounded-full flex items-center justify-center transition-all duration-300
        ${inStock ? "-left-1" : "left-[calc(100%-36px)]"}`}
      >
        <RiShoppingBag4Fill className="text-white text-sm" size={22}/>
      </div>
    </button>
  );
}