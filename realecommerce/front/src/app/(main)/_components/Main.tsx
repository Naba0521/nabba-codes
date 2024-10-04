"use client";
import { BHeart } from "@/assets/BHeart";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MainProductCard } from "./MainProductCard";
import axios from "axios";

export const Main = () => {
  interface Product {
    _id: string;
    productName: string;
    price: number;
    image: string[];
    category: category[];
    size: string[];
    quantity: number;
    saledCount: number;
    salePercent: number;
  }
  interface category {
    _id: string;
    categoryName: string;
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
        {productsa?.products.slice(1, 19).map((item, index) => {
          return <MainProductCard key={index} item={item} index={index} />;
        })}
      </div>
    </div>
  );
};
