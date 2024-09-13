"use client";
import { DeleteIcon } from "@/assets/DeleteIcon";
import Image from "next/image";
import { useState } from "react";

type DeliverCardProps = {
  item: {
    img: string;
    name: string;
    price: number;
    count: number;
  };
  index: number;
  updateItemCount: (index: number, count: number) => void;
};

export const DeliverCard = ({
  item,
  index,
  updateItemCount,
}: DeliverCardProps) => {
  const handleIncrement = () => {
    updateItemCount(index, item.count + 1);
  };

  const handleDecrement = () => {
    if (item.count > 1) {
      updateItemCount(index, item.count - 1);
    }
  };

  return (
    <div className="flex justify-between border rounded-2xl p-4">
      <div className="flex gap-6">
        <div className="relative w-[120px] h-[120px]">
          <Image
            src={`${item.img}`}
            fill
            alt="aa"
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <div>{item.name}</div>
            <div className="flex">
              <button
                onClick={handleDecrement}
                className="w-8 h-8 border rounded-2xl bg-white"
              >
                -
              </button>
              <div className="w-8 h-8 flex justify-center items-center">
                {item.count}
              </div>
              <button
                onClick={handleIncrement}
                className="w-8 h-8 border rounded-2xl bg-white"
              >
                +
              </button>
            </div>
          </div>
          <div className="font-bold">{item.price * item.count}₮</div>
        </div>
      </div>
      <div>
        <DeleteIcon />
      </div>
    </div>
  );
};
