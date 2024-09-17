"use client";
import { BHeart } from "@/assets/BHeart";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MainProductCard } from "./MainProductCard";
import axios from "axios";
import { log } from "console";
const data = [
  { img: "/2.png", title: "The Prompt Magazine", price: 120000 },
  { img: "/3.png", title: "Chunky Glyph Tee", price: 120000 },
  { img: "/4.png", title: "All Smiles Nalgene", price: 120000 },
  { img: "/5.png", title: "Wildflower Hoodie", price: 120000 },
  { img: "/6.png", title: "Inkblot Tee", price: 120000 },
  { img: "/7.png", title: "Gestures Longsleeve", price: 120000 },
  { img: "/8.png", title: "Chunky Glyph Cap", price: 120000 },
  { img: "/9.png", title: "Local Styles Crewneck", price: 120000 },
  { img: "/8.png", title: "Chunky Glyph Cap", price: 120000 },
  { img: "/11.png", title: "Doodle Hoodie", price: 120000 },
  { img: "/3.png", title: "Chunky Glyph Tee", price: 120000 },
  { img: "/4.png", title: "All Smiles Nalgene", price: 120000 },
  { img: "/2.png", title: "The Prompt Magazine", price: 120000 },
  { img: "/15.png", title: "Independent Corners Tee", price: 120000 },
  { img: "/15.png", title: "Independent Corners Tee", price: 120000 },
  { img: "/2.png", title: "The Prompt Magazine", price: 120000 },
  { img: "/3.png", title: "Chunky Glyph Tee", price: 120000 },
  { img: "/4.png", title: "All Smiles Nalgene", price: 120000 },
];
interface Product {
  id: number;
  name: string;
  price: number;
  image: string[];
}

interface ProductsResponse {
  products: Product[]; // This represents the `products.products` structure
}
export const Main = () => {
  const [products, setProducts] = useState<ProductsResponse[]>([]);
  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/product");
      setProducts(response.data);
      // console.log("1111asdsasd", response.data.products[0].image[0]);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="w-full flex flex-col items-center py-11 px-[200px] gap-11">
      <div className="relative w-[1040px] h-[446px] rounded-2xl overflow-hidden">
        {products.products ? (
          <Image
            quality={100}
            src={products.products[0].image[0]} // Ensure the image array exists
            fill
            alt="a"
            className="object-cover"
          />
        ) : (
          <div className="flex justify-center items-center h-full text-3xl font-bold">
            Loading...
          </div> // You can replace this with a skeleton loader or any placeholder
        )}
        <div className="flex flex-col absolute bottom-8 left-8">
          <div className="text-lg">Wildflower Hoodie</div>
          <div className="text-4xl font-bold">120’000₮</div>
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-6 w-[1040px]  gap-x-5 gap-y-12 [&>div:nth-child(7)]:col-span-2 [&>div:nth-child(7)]:row-span-2 [&>div:nth-child(7)]:h-[113%] [&>div:nth-child(8)]:col-span-2 [&>div:nth-child(8)]:row-span-2 [&>div:nth-child(8)]:h-[113.5%]">
        {data.map((item, index) => (
          <MainProductCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};
