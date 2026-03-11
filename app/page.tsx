import Image from "next/image";
import Link from "next/link";
import ProductPage from "./components/ProductsPage"
import Prob from "./components/product/Prob";
import HeroSection from "./components/HeroSection";
import NutritionSection from "./components/NutritionSection";
import FeatureSplit from "./components/FeatureSplit";

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

export default function Home() {
  return (
    <div className="min-h-screen bg-white  py-12">

      
<HeroSection />

<NutritionSection />

<FeatureSplit
  title="Improve overall gastrointestinal health for better nutrient absorption"
  description="Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.
  "
  image="/pudge.png"
/>

<Prob
  title="Prebiotics nourish the beneficial gut bacteria, supporting digestive health."
  description="Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health."
  image="/las.jpg"
  
/>



    </div>
  );
}
