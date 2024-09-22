"use client";
import { AngilalIcon } from "@/assets/AngilalIcon";
import { BlackSearchIcon } from "@/assets/BlackSearchIcon";
import { CalendarIcon } from "@/assets/CalendarIcon";
import { DooshooSum } from "@/assets/DooshooSum";
import { GrayEditIcon } from "@/assets/GrayEditButton";
import { GrayDeleteIcon } from "@/assets/GreyDeleteIcon";
import { WhitePlusIcon } from "@/assets/WhitePlus";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type ProductType = {
  productName: string;
  price: number;
  description: string;
  size: string[];
  image: string[];
  averageRating: number;
  reviewCount: number;
  category: [{ categoryName: string }];
  quantity: number;
  saledCount: number;
  createdAt: Date;
  _id: string;
};

export default function Home() {
  const [product, setProduct] = useState<ProductType[]>([]); // Changed to an array of products

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/product");
      setProduct(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex-1">
      <div className="flex flex-col w-full gap-6">
        <div className="flex border-b">
          <Link href={`/dashboard/buteegdehuun`}>
            <div className="px-4 text-sm font-semibold border-b-2 border-black py-4">
              Бүтээгдэхүүн
            </div>
          </Link>
          <Link href={`/dashboard/buteegdehuun/angilalnemeh`}>
            <div className="px-4 text-sm text-[#3F4145] py-4">Ангилал</div>
          </Link>
        </div>
        <div className="text-white flex gap-2 bg-black px-12 py-2 items-center rounded-xl w-fit font-semibold">
          <WhitePlusIcon />
          <Link href={`/dashboard/buteegdehuun/nemeh`}>
            <div>Бүтээгдэхүүн нэмэх</div>
          </Link>
        </div>
        <div className="flex justify-between h-10 pr-9">
          <div className="flex gap-3">
            <div className="flex items-center gap-2 font-semibold px-3 bg-white rounded-lg">
              <AngilalIcon />
              <div className="text-[#3F4145]">Ангилал</div>
              <DooshooSum />
            </div>
            <div className="flex items-center gap-2 font-semibold px-3 bg-white rounded-lg">
              <div>$</div>
              <div className="text-[#3F4145]">Үнэ</div>
              <DooshooSum />
            </div>
            <div className="flex items-center gap-2 font-semibold px-3 bg-white rounded-lg">
              <CalendarIcon />
              <div className="text-[#3F4145]">Сараар</div>
              <DooshooSum />
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2">
            <BlackSearchIcon />
            <input
              className="outline-none w-[360px]"
              placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
            />
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-[12px]">
          <div className="flex w-full h-11 items-center border-b pl-4">
            <div className="flex-1 pl-[140px]">Бүтээгдэхүүн</div>
            <div className="flex-1 flex justify-center">Ангилал</div>
            <div className="flex-1 flex justify-center">Үнэ</div>
            <div className="flex-1">Үлдэгдэл</div>
            <div className="flex-1">Зарагдсан</div>
            <div className="flex-1 pr-[100px]">Нэмсэн огноо</div>
          </div>

          {product.slice(0, 11).map((item, index) => (
            <div key={index} className="flex border-t h-[72px] text-sm">
              <div className="flex-[2] flex items-center gap-[80px] justify-center pl-4">
                <input
                  type="checkbox"
                  className="w-5 h-5 border-black border"
                />
                <div className="flex gap-3 justify-center">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image src={item.image[0]} fill alt="aa" />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-sm">
                      {item.productName}
                    </div>
                    <div className="text-[12px] text-[#5E6166]">{item._id}</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                {item.category[0]?.categoryName}
              </div>
              <div className="flex-1 flex items-center justify-center">
                {item.price}₮
              </div>
              <div className="flex-1 flex items-center justify-center">
                {item.quantity}
              </div>
              <div className="flex-1 flex items-center justify-center">
                {item.saledCount}
              </div>
              <div className="flex-1 flex items-center justify-center">
                {new Date(item.createdAt).toLocaleDateString()}
              </div>
              <div className="flex-1 flex items-center justify-center gap-3">
                <GrayDeleteIcon />
                <GrayEditIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
