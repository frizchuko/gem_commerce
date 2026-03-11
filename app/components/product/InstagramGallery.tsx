import Image from "next/image"

export default function InstagramGallery() {

  const images = [
    "/insta1.jpg",
    "/insta2.jpg",
    "/insta3.jpg",
    "/insta4.jpg"
  ]

  return (
    <section className="space-y-6">

      <h2 className="text-xl font-semibold text-center">
        See What We Did For Other
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt="insta"
            width={300}
            height={300}
            className="rounded-md"
          />
        ))}

      </div>

    </section>
  )
}