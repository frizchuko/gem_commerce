import React from 'react'
import Image from "next/image";
import Link from "next/link";

const products = [
    {
      id: "1",
      name: "Personalized Photo and Slogan Text Hoodie",
      price: 39.99,
      image: "/sweat.png",
    },
    {
      id: "2",
      name: "Custom Hoodie",
      price: 45,
      image: "/sweatshirt.png",
    },
    {
      id: "3",
      name: "Printed Mug",
      price: 15,
      image: "/sweatshirt.png",
    },
    {
      id: "4",
      name: "Canvas Print",
      price: 30,
      image: "/sweatshirt.png",
    },
  ];

function ProductsPage() {
  return (
    <div>
        <div className="max-w-300 mx-auto">

<h1 className="text-3xl font-semibold mb-10 text-black">
  Products
</h1>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

  {products.map((product) => (
    <Link
      key={product.id}
      href={`/product/${product.id}`}
      className="bg-gray-100 rounded-lg border hover:shadow-md transition p-4"
    >
      
      <div className="relative w-full h-45 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <p className="font-medium text-black">
        {product.name}
      </p>

      <p className="text-gray-500">
        ${product.price}
      </p>

    </Link>
  ))}

</div>

</div>
    </div>
  )
}

export default ProductsPage