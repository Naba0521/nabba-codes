"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MainProductCard } from "./MainProductCard";
import { api } from "@/lib/axios";
import Link from "next/link";

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
    products: Product[];
  }
  const [productsa, setProductsa] = useState<ProductsResponse | null>(null);

  const getProducts = async () => {
    try {
      const response = await api.get("/product");
      setProductsa(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-8 px-4 md:px-10 lg:px-[100px] xl:px-[200px] gap-11">
      <div className="relative w-full max-w-[1040px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[446px] rounded-2xl overflow-hidden">
        {productsa ? (
          <Link href={`/product/${productsa.products[0]._id}`}>
            <Image
              quality={100}
              src={productsa.products[0].image[0]}
              fill
              alt="a"
              className="object-cover"
            />
          </Link>
        ) : (
          <div className="flex justify-center items-center h-full text-3xl font-bold">
            Loading...
          </div>
        )}
        <div className="flex flex-col absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8">
          <div className="text-md sm:text-lg">
            {productsa?.products[0].productName}
          </div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {productsa?.products[0].price.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 sm:gap-y-12 w-full max-w-[1040px]">
        {productsa?.products.slice(1, 19).map((item, index) => (
          <MainProductCard key={index} item={item} index={index} />
        ))}
      </div>
      {/* <div className="grid grid-cols-4 grid-rows-6 w-[1040px]  gap-x-5 gap-y-12 [&>div:nth-child(7)]:col-span-2 [&>div:nth-child(7)]:row-span-2 [&>div:nth-child(7)]:h-[113%] [&>div:nth-child(8)]:col-span-2 [&>div:nth-child(8)]:row-span-2 [&>div:nth-child(8)]:h-[113.5%]">
        {productsa?.products.slice(1, 19).map((item, index) => {
          return <MainProductCard key={index} item={item} index={index} />;
        })}
      </div> */}
    </div>
  );
};
