import Image from "next/image";
import { Button } from "antd";
import { IoShieldCheckmarkOutline } from "react-icons/io5";


const paytypes = [
  {
    src: "/pal.png"
  },
  {
    src: "/visa.png"
  },
  {
    src: "/masterc.png"
  },
  {
    src: "/appl.png"
  },
  {
    src: "/gpay.png"
  }
];

export default function HeroSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-[20px] md:text-[40px] font-semibold text-[#161723] mb-16">
          What makes us different<br />makes them stronger
        </h2>

        <div className="relative flex flex-col md:flex-row justify-center items-center">

          {/* Center circle */}
          <div className="relative flex justify-center items-center">

  {/* Center circle */}
  <div className="relative w-[260px] h-[260px] md:w-[370px] md:h-[370px] rounded-full overflow-hidden shadow-lg">

    {/* Left half */}
    <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden">
      <Image
        src="/meat.png"
        alt="real food"
        fill
        className="object-cover object-left"
      />
    </div>

    {/* Right half */}
    <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
      <Image
        src="/kibble.png"
        alt="kibble"
        fill
        className="object-cover object-right"
      />
    </div>

  </div>

</div>

          {/* Left Top Feature */}
          <div className="relative md:absolute md:left-0 md:top-0 text-start mt-8 md:mt-0">
            <div className="flex items-start gap-3 justify-end">
            <div className="w-14 h-14 bg-[#DCF9CA] rounded-full flex items-center justify-center shrink-0"><Image src="/realfood.png" alt="food doddle" width={36} height={36}/></div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-[19px] text-[#161723]">Real Food</p>
                <p className="text-[16px] font-normal text-[#424153]">
                  Wholesome recipes for dogs with real <br/> meat and veggies.
                </p>
              </div>
           
            </div>
          </div>

        {/* Left Bottom */}
<div className="relative md:absolute md:left-2 md:bottom-4 text-start mt-6 md:mt-0">
  <div className="flex items-start gap-2 justify-end">
    
    <div className="w-14 h-14 bg-[#F8F0D6] rounded-full flex items-center justify-center shrink-0">
      <Image src="/fresh.png" alt="food doodle" width={30} height={30} />
    </div>

    <div className="flex flex-col gap-2">
      <p className="font-semibold text-[19px] text-[#161723] leading-tight">
        Premium Ingredient
      </p>
      <p className="text-[16px] font-normal text-[#424153]">
      Elevating pet care with unmatched <br/> safety and quality.
      </p>
    </div>

  </div>
</div>


{/* Right Top */}
<div className="relative md:absolute md:right-2 md:top-4 text-left mt-6 md:mt-0">
  <div className="flex items-start gap-2">

    <div className="w-14 h-14 bg-[#C8F2E7] rounded-full flex items-center justify-center shrink-0">
      <Image src="/fresh.png" alt="food doodle" width={30} height={30} />
    </div>

    <div className="flex flex-col gap-2">
      <p className="font-semibold text-[19px] text-[#161723] leading-tight">
        Made Fresh
      </p>
      <p className="text-[16px] font-normal text-[#424153]">
      We prioritize maintaining the integrity <br/> of whole foods and nutrition.
      </p>
    </div>

  </div>
</div>


{/* Right Bottom */}
<div className="relative md:absolute md:right-2 md:bottom-4 text-left mt-6 md:mt-0">
  <div className="flex items-start gap-2">

    <div className="w-14 h-14 bg-[#F7CABD] rounded-full flex items-center justify-center shrink-0">
      <Image src="/vet.png" alt="food doodle" width={30} height={30} />
    </div>

    <div className="flex flex-col gap-2">
      <p className="font-semibold text-[19px] text-[#161723] leading-tight">
        Vet Developed
      </p>
      <p className="text-[16px] text-[#424153] ">
      We raise the bar for dog nutrition, <br/> surpassing industry expectations.
      </p>
    </div>

  </div>
</div>


        </div>

        {/* CTA */}
        <div className="mt-16 ">
          <Button
            type="primary"
            className="bg-[#EE6F4B]! border-none! px-10! py-3! h-12! w-full md:w-115.5 rounded-md"
          >
            Get your dog's healthy meal today
          </Button>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mx-auto mt-3 w-full md:w-115.5">
            <div className="flex gap-2 mt-0.5">
            <IoShieldCheckmarkOutline size={16} className="text-[#424153]"/>
            <p className="text-xs text-[#424153] ">
            30-day money back guarantee
          </p>
            </div>

            <div className="flex gap-2">
            {paytypes.map((pay, index) => (
      <Image
        key={index}
        src={pay.src}
        alt="payment method"
        width={39.2}
        height={24}
        className="object-contain"
      />
    ))}
            </div>
         
          </div>

          
        </div>

      </div>
    </section>
  );
}