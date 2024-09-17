"use client";
import { BHeart } from "@/assets/BHeart";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MainProductCard } from "./MainProductCard";
import axios from "axios";
const data = [
  { image: "/2.png", productName: "The Prompt Magazine", price: 120000 },
  { image: "/3.png", productName: "Chunky Glyph Tee", price: 120000 },
  { image: "/4.png", productName: "All Smiles Nalgene", price: 120000 },
  { image: "/5.png", productName: "Wildflower Hoodie", price: 120000 },
  { image: "/6.png", productName: "Inkblot Tee", price: 120000 },
  { image: "/7.png", productName: "Gestures Longsleeve", price: 120000 },
  { image: "/8.png", productName: "Chunky Glyph Cap", price: 120000 },
  { image: "/9.png", productName: "Local Styles Crewneck", price: 120000 },
  { image: "/8.png", productName: "Chunky Glyph Cap", price: 120000 },
  { image: "/11.png", productName: "Doodle Hoodie", price: 120000 },
  { image: "/3.png", productName: "Chunky Glyph Tee", price: 120000 },
  { image: "/4.png", productName: "All Smiles Nalgene", price: 120000 },
  { image: "/2.png", productName: "The Prompt Magazine", price: 120000 },
  { image: "/15.png", productName: "Independent Corners Tee", price: 120000 },
  { image: "/15.png", productName: "Independent Corners Tee", price: 120000 },
  { image: "/2.png", productName: "The Prompt Magazine", price: 120000 },
  { image: "/3.png", productName: "Chunky Glyph Tee", price: 120000 },
  { image: "/4.png", productName: "All Smiles Nalgene", price: 120000 },
];

export const Main = () => {
  interface Product {
    id: number;
    productName: string;
    price: number;
    image: string[];
    category: string;
    size: string[];
    quantity: number;
    saledCount: number;
    salePercent: number;
  }

  interface ProductsResponse {
    products: Product[]; // This represents the `products.products` structure
  }
  // const [productsa, setProductsa] = useState<ProductsResponse[]>([]);
  const [productsa, setProductsa] = useState<ProductsResponse | null>(null);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/product");
      setProductsa(response.data);
      console.log("1111asdsasd", response.data);
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
        {productsa ? (
          <Image
            quality={100}
            src={productsa.products[0].image[0]} // Ensure the image array exists
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
          <div className="text-lg">{productsa?.products[0].productName}</div>
          <div className="text-4xl font-bold">
            {productsa?.products[0].price}₮
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-6 w-[1040px]  gap-x-5 gap-y-12 [&>div:nth-child(7)]:col-span-2 [&>div:nth-child(7)]:row-span-2 [&>div:nth-child(7)]:h-[113%] [&>div:nth-child(8)]:col-span-2 [&>div:nth-child(8)]:row-span-2 [&>div:nth-child(8)]:h-[113.5%]">
        {/* {data.map((item, index) => (
          <MainProductCard key={index} item={item} index={index} />
        ))} */}
        {productsa?.products.slice(1, 19).map((item, index) => {
          return <MainProductCard key={index} item={item} index={index} />;
        })}
      </div>
    </div>
  );
};
