"use client"

import Image from "next/image"
import { useState } from "react"

export default function ProductGallery({ images }: { images: string[] }) {

  const [active, setActive] = useState(images[0])

  return (
    <div className="space-y-4">

      <div className="border rounded-lg overflow-hidden">
        <Image
          src={active}
          alt="product"
          width={500}
          height={500}
          className="w-full object-cover"
        />
      </div>

      <div className="flex gap-3">

        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(img)}
            className={`border rounded-md overflow-hidden ${
              active === img ? "border-black" : "border-gray-200"
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