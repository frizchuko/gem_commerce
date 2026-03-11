import Image from "next/image";
import { Button } from "antd";

export default function NutritionSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div className="h-[570px] w-[570px]">
          <h3 className="text-[36px] font-semibold text-[#161723] mb-4">
            Nutrition is the foundation for <br/> longer, healthier lives in dogs.
          </h3>

          <p className="text-[#424153] text-[16px] mb-12">
          Invest in your dog's future with our scientifically formulated superfood-<br/>powered supplements. Give them the nutrition they deserve and watch <br/>them thrive with vitality, energy, and the joy of a longer, healthier life.
          </p>

          <div className="mb-8">
  <p className="text-[18px] font-semibold text-[#161723] mb-4">
    Key Points:
  </p>

  <div className="space-y-4">

    {/* Point 1 */}
    <div className="flex items-start gap-4">
      <span className="text-[#EE6F4B] font-bold text-[36px] leading-none">
        97%
      </span>
      <p className="text-[16px] text-[#424153] leading-snug max-w-[423px] h-[48px]">
        Dogs choose our dog food over leading brands because of its real
        functional ingredients and delicious flavor.
      </p>
    </div>

    {/* Point 2 */}
    <div className="flex items-start gap-4">
      <span className="text-[#EE6F4B] font-bold text-[36px] leading-none">
        84%
      </span>
      <p className="text-[15px] text-[#424153] leading-snug max-w-[420px]">
        Our dog food provides superior nutrition and a patented probiotic
        for optimal nutrient absorption.
      </p>
    </div>

    {/* Point 3 */}
    <div className="flex items-start gap-4">
      <span className="text-[#EE6F4B] font-bold text-[36px] leading-none">
        92%
      </span>
      <p className="text-[15px] text-[#424153] leading-snug max-w-[420px]">
        Can dog food improve coat and skin quality with consistent use
        and balanced nutrients.
      </p>
    </div>

  </div>
</div>


          <Button
            type="primary"
            className="bg-[#EE6F4B]! border-none! px-10! py-3! h-12! w-134.5! rounded-md text-[16px] font-semibold text-white mt-10"
          >
            Give your furry friend the gift of wholesome nutrition
          </Button>
        </div>

        <div className="relative w-[570px] h-[570px]">
          <Image
            src="/nurt.png"
            alt="dog product"
            fill
            className="object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}