"use client";
import { BHeart } from "@/assets/BHeart";
import Image from "next/image";
import { useState } from "react";
type MainProductCardProps = {
  index: number;
  item: {
    id: number;
    productName: string;
    price: number;
    image: string[];
    category: string;
    size: string[];
    quantity: number;
    saledCount: number;
    salePercent: number;
  };
};
export const MainProductCard = ({ item, index }: MainProductCardProps) => {
  const [savedHeart, setSavedHeart] = useState(false);

  return (
    <div key={index} className={`relative flex flex-col gap-2 group h-[400px]`}>
      <div className={`relative h-[80%] overflow-hidden rounded-2xl `}>
        <Image
          quality={100}
          src={item.image[0]}
          fill
          alt="a"
          className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-125"
        />
      </div>
      <div
        onClick={() => setSavedHeart(!savedHeart)}
        className="absolute top-4 right-4"
      >
        <BHeart bgColor={savedHeart === true ? "black" : "none"} />
      </div>
      <div className="flex flex-col relative">
        <div>{item.productName}</div>
        <div className="font-bold">{item.price}₮</div>
      </div>
    </div>
  );
};
