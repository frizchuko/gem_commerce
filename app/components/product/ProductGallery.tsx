"use client"

import Image from "next/image"
import { useState } from "react"
import { FiChevronUp, FiChevronDown } from "react-icons/fi"

export default function ProductGallery({ images }: { images: string[] }) {

  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="flex flex-col md:flex-row gap-4">

      {/* Thumbnails column */}
      <div className="hidden md:flex flex-col items-center w-[100px] bg-white rounded-lg overflow-hidden">

        {/* Top indicator */}
        <button
          onClick={prev}
          className="w-full flex justify-center py-2 bg-[#F5F7F8]"
        >
          <FiChevronUp size={20} className="text-gray-300"/>
        </button>

        {/* Thumbnails */}
        <div className="flex flex-col items-center gap-3 py-2 overflow-hidden ">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`border rounded-md overflow-hidden ${
                activeIndex === i ? "border-gray-100" : "border-gray-200"
              }`}
            >
              <Image
                src={img}
                alt="thumb"
                width={100}
                height={125}
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Bottom indicator */}
        <button
          onClick={next}
          className="w-full flex justify-center py-2 bg-[#F5F7F8]"
        >
          <FiChevronDown size={20} className="text-gray-300"/>
        </button>

      </div>


      {/* Main image */}
      <div className=" rounded-lg overflow-hidden">
        <Image
          src={images[activeIndex]}
          alt="product"
          width={500}
          height={500}
          className="w-full  object-contain"
        />
      </div>


      {/* Mobile thumbnails */}
      <div className="flex md:hidden gap-3 mt-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`border rounded-md overflow-hidden ${
              activeIndex === i ? "border-black" : "border-gray-200"
            }`}
          >
            <Image
              src={img}
              alt="thumb"
              width={70}
              height={70}
            />
          </button>
        ))}
      </div>

    </div>
  )
}
