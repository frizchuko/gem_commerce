"use client"

import ProductGallery from "../../components/product/ProductGallery"
import ProductInfo from "../../components/product/ProductInfo"
import ProductTabs from "../../components/product/ProductTabs"
import ProductFeatures from "../../components/product/ProductFeatures"
import ProductReviews from "../../components/product/ProductReviews"
import RelatedProducts from "../../components/product/RelatedProducts"
import InstagramGallery from "../../components/product/InstagramGallery"
import { product } from "../../data/product"

export default function ProductPage() {

  return (
    <div className="max-w-360 mx-auto px-33.75 py-18 space-y-16 bg-white">

      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-12">

        <ProductGallery images={product.images} />

        <ProductInfo product={product} />

      </div>

      {/* TABS */}
      <ProductTabs />

      {/* FEATURES */}
      <ProductFeatures />

      {/* REVIEWS */}
      <ProductReviews />

      {/* RELATED */}
      <RelatedProducts />

      {/* INSTAGRAM */}
      <InstagramGallery />

    </div>
  )
}