"use client"

import { dmSans, dmSerif } from "@/app/fonts"
import { FaBell, FaStar, FaGift, FaHeart } from "react-icons/fa"
import { Product } from "../../types/product"
import { Rate } from "antd"
import { useState } from "react"
import StockToggle from "./StockToggle"

export default function ProductInfo({ product }: { product: Product }) {

  const [color, setColor] = useState("black")
  const [size, setSize] = useState("XL")
  const [qty, setQty] = useState(1)

  const colors = [
    { name: "white", hex: "#ffffff", border: true },
    { name: "black", hex: "#1f1f1f" },
    { name: "blue", hex: "#4C6FBF" },
    { name: "navy", hex: "#25549E" },
    { name: "tan", hex: "#C2A47C" }
  ]

  const sizes = ["S", "M", "L", "XL"]

  return (
    <div className="space-y-5">

      {/* Selling fast */}
      <p className={`${dmSans.className} text-[16px] font-bold text-[#25549E] flex gap-2 items-center`}>
        <FaBell size={16}/> Selling fast! 5 people have this in their carts.
      </p>

      {/* Title */}
      <h1 className={`${dmSerif.className} text-[38px] text-[#242424]`}>
        {product.name}
      </h1>

      {/* Price + Stock */}
      <div className="flex justify-between items-center">
        <div className={`${dmSerif.className} flex items-center gap-3`}>
          <p className="text-[38px] font-normal text-[#242424]">${product.price}</p>
          <p className="line-through text-[#E0E0E0] text-[28px]">
            ${product.discount}
          </p>
        </div>

        <StockToggle/>
      </div>

      {/* Review */}
      <div className="flex flex-col px-8 py-6 bg-[#F5F7F8] gap-3">
        <Rate disabled defaultValue={product.rating}/>
        <span className="text-[#424242] text-[16px]">
          I love this! When I saw this hoodie, I knew I had to get it.
          <br/>It makes me so confident every time I wear it. Thanks
        </span>
        <span className="font-bold text-[16px] text-[#424242]">
          Wendy N.
        </span>
      </div>

      {/* COLOR */}
      <div className="space-y-2">
        <p className="font-semibold text-[16px] text-[#242424]">Color</p>

        <div className="flex gap-3">
          {colors.map(c => (
            <button
              key={c.name}
              onClick={() => setColor(c.name)}
              className={`w-6 h-6 rounded-full border 
              ${c.border ? "border-gray-100" : "border-transparent"}
              ${color === c.name ? "ring-2 ring-gray-300" : ""}
              `}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>

      {/* SIZE */}
      <div className="space-y-2">
        <p className="font-semibold text-[16px] text-[#242424]">Size</p>

        <div className="flex gap-2">
          {sizes.map(s => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-6 py-2.5 rounded-[40px] border text-sm
              ${size === s
                ? "border-black text-black"
                : "border-gray-300 text-gray-500"}
              `}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* CUSTOM TEXT */}
      <div className="space-y-2">
        <p className="font-semibold text-[16px] text-[#242424]">
          Type your custom text
        </p>

        <p className="text-[16px] text-[#424242] font-normal">
          Please note the font size and color in parentheses after your text.
          <br/>
          E.g. My BFF (30, Black)
        </p>

        <input
          placeholder="My custom hoodie"
          className="w-full border border-[#E0E0E0] rounded-md pl-5.25 pr-7 py-[14.5px] text-sm outline-none placeholder:text-[21px] placeholder:text-[#B4B4B4] placeholder:font-normal"
        />
      </div>

      {/* PERFECT TO */}
      <div className="space-y-4">
        <p className="font-bold text-[16px] text-[#242424]">Perfect to</p>

        <div className="space-y-4 text-[14px] text-gray-700">

          <div className="flex gap-4 items-center">
            <FaStar className="text-[#25549E]" size={24}/>
          <p className="font-normal text-[16px] text-[#242424]">Dress yourself up</p>  
          </div>

          <div className="flex gap-4 items-center">
            <FaGift className="text-[#25549E]" size={24}/>
            <p className="font-normal text-[16px] text-[#242424]">Anniversary gifts for your loved one</p> 
          </div>

          <div className="flex gap-4 items-center">
            <FaHeart className="text-[#25549E]" size={24}/>
            <p className="font-normal text-[16px] text-[#242424]"> Birthday or celebration gifts for friends and family</p>  
          </div>

        </div>
      </div>

      {/* QUANTITY + BUTTON */}
      <div className="flex gap-3 items-center">

        <div className="flex border border-[#242424] rounded-md overflow-hidden px-11.5 py-4">
          <button
            onClick={() => setQty(q => Math.max(1, q-1))}
            className="px-4  text-[#242424]"
          >
            -
          </button>

          <span className="px-4  text-[#242424]">{qty}</span>

          <button
            onClick={() => setQty(q => q+1)}
            className="px-4  text-[#242424]"
          >
            +
          </button>
        </div>

        <button className="flex-1 bg-[#25549E] text-white font-semibold py-[16px] px-[21px] rounded-md">
          GET MY HOODIE
        </button>

      </div>

      {/* SAFE CHECKOUT */}
      <div className="text-center text-sm  flex justify-evenly items-center">
        <hr className="text-[#E0E0E0] w-25"/>
       <p className="text-[#424242] font-bold text-[16px]">Guaranteed SAFE Checkout</p> 
        <hr className="text-[#E0E0E0] w-25"/>
      </div>

      {/* PAYMENT METHODS */}
      <div className="flex justify-center gap-2">
        <img src="/payments/visa.png" className="h-6"/>
        <img src="/payments/mastercard.png" className="h-6"/>
        <img src="/payments/amex.png" className="h-6"/>
        <img src="/payments/paypal.png" className="h-6"/>
      </div>

    </div>
  )
}