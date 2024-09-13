"use client";
import Link from "next/link";
import { useState } from "react";
import { DeliverCard } from "../_components/DeliverCard";

export default function Home() {
  const initialData = [
    {
      img: "/2.png",
      name: "Chunky Glyph Tee",
      price: 120000,
      count: 1,
    },
    {
      img: "/3.png",
      name: "Chunky Glyph Tee",
      price: 120000,
      count: 1,
    },
    {
      img: "/4.png",
      name: "Chunky Glyph Tee",
      price: 120000,
      count: 1,
    },
  ];

  const [items, setItems] = useState(initialData);

  // Calculate total sum
  const totalSum = items.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  const updateItemCount = (index: number, count: number) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? { ...item, count } : item))
    );
  };

  return (
    <div className="py-4 px-6 flex justify-center w-full bg-[#F4F4F5]">
      <div className=" w-[1440px] px-[200px] py-16 flex flex-col justify-center items-center gap-16  ">
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 bg-[#2563EB] rounded-2xl flex justify-center items-center text-white">
            1
          </div>
          <div className="h-[1px] w-20 bg-[#18181B] flex justify-center items-center"></div>
          <Link href={`/hurgelt2`}>
            <div className="w-8 h-8 border-black border rounded-2xl flex justify-center items-center">
              2
            </div>
          </Link>
          <div className="h-[1px] w-20 bg-[#18181B] flex justify-center items-center"></div>
          <div className="w-8 h-8 border-black border rounded-2xl flex justify-center items-center">
            3
          </div>
        </div>
        <div className="p-8 flex flex-col gap-6 w-[686px] bg-white rounded-2xl">
          <div className="flex flex-col gap-4">
            <div className="flex">
              <div className="font-bold text-xl">1. Сагс</div>
              <div className="text-xl text-[#71717A]">({items.length})</div>
            </div>
            <div className="flex flex-col gap-4">
              {items.map((item, index) => (
                <DeliverCard
                  key={index}
                  item={item}
                  index={index}
                  updateItemCount={updateItemCount}
                />
              ))}
            </div>
            <div className="flex justify-between border-t-[2px] border-dashed border-b-[2px] py-[24px]">
              <div>Үнийн дүн:</div>
              <div className="font-bold">{totalSum}₮</div>
            </div>
          </div>
          <Link href={`/hurgelt2`} className="self-end">
            <div className="text-white bg-[#2563EB] px-9 py-2 text-sm rounded-2xl w-fit self-end">
              Худалдан авах
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
