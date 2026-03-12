import { Truck, ShieldCheck, RefreshCcw } from "lucide-react"

export default function ProductFeatures() {

  const features = [
    {
      icon: <Truck size={28} />,
      title: "Free Shipping"
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Secure Payment"
    },
    {
      icon: <RefreshCcw size={28} />,
      title: "Easy Returns"
    }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-10 my-8 text-center">

      {features.map((f, i) => (
        <div key={i} className="space-y-2">
          <div className="flex justify-center">
            {f.icon}
          </div>

          <p className="font-medium">
            {f.title}
          </p>
        </div>
      ))}

    </div>
  )
}