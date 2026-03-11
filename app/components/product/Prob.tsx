import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function Prob({
  title,
  description,
  image,
  reverse,
}: Props) {
  return (
    <section className="py-16">
      <div
        className={`max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
       

        <div className="max-w-[538px] flex flex-col items-start">
          <h3 className="text-[40px] text-[#161723] font-semibold leading-tight mb-4">
            {title}
          </h3>

          <p className="text-[#424153] text-[16px] font-normal leading-relaxed">
            {description}
          </p>
        </div>

        <div className="relative w-full max-w-[570px] h-[480px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}