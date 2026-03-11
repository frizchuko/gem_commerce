"use client"

import { Tabs } from "antd"

export default function ProductTabs() {

  const items = [
    {
      key: "1",
      label: "Description",
      children: (
        <p className="text-gray-600">
          This custom shirt is printed on premium cotton fabric
          and designed for long lasting comfort.
        </p>
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