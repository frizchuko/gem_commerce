"use client"

import { Tabs } from "antd"

export default function ProductTabs() {

  const items = [
    {
      key: "1",
      label: "OVERVIEW",
      children: (
       <div className=" flex ">
         <div className="flex flex-col gap-4 md:w-142.5">
          <p className="text-[#242424] font-bold text-[16px]">Overview</p>
          <p>One of our most popular t-shirts for direct-to-garment printing.</p>
<p>It’s eco-friendly, unisex, and available in plenty of colour options. And it’s <br/> manufactured not only to high quality standards but with garment <br/> decoration in mind. It’s made for DTG, made for embroidery. There’s a <br/> reason why countless online clothing brands use it as their staple hoodie! <br/> Find yours below.</p>
<div className="flex flex-col gap-1 ml-2">
<li>Unisex style, medium fit. It’s for everyone.</li>
<li>Round drawcords in matching body color.</li>
<li>1x1 rib at sleeve hem and bottom hem.</li>
<li>Flatlock topstitch on all seams.</li>
<li>Kangaroo pocket with flatlock topstitch.</li>
</div>


         </div>
         <div className="flex flex-col">
            <div className="">

            </div>
         </div>
         <div></div>
       </div>
      )
    },
    {
      key: "2",
      label: "Shipping",
      children: <p>Ships within 3-5 business days.</p>
    },
    {
      key: "3",
      label: "Returns",
      children: <p>30 day return policy.</p>
    }
  ]

  return <Tabs items={items} />
}