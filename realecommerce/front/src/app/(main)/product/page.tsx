"use client";

import { BHeart } from "@/assets/BHeart";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
];

export default function Home() {
  const [savedHearts, setSavedHearts] = useState<number[]>([]);

  const toggleHeart = (index: number) => {
    if (savedHearts.includes(index)) {
      setSavedHearts(savedHearts.filter((i) => i !== index));
    } else {
      setSavedHearts([...savedHearts, index]);
    }
  };

  return (
    <div className="py-4 px-6 flex justify-center w-full">
      <div className=" w-[1440px] px-[200px] py-16 flex gap-5  ">
        <div className="w-[245px] flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="font-bold">Ангилал</div>
            <div className="flex flex-col">
              <div>Малгай </div>
              <div>Усны сав</div>
              <div>T-shirt</div>
              <div>Hoodie</div>
              <div>Tee</div>
              <div>Цүнх</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-bold">Хэмжээ</div>
            <div className="flex flex-col">
              <div>Free </div>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>2XL</div>
              <div>3XL</div>
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-3 grid-rows-5 gap-x-5 gap-y-12">
          {data.map((item, index) => {
            const isHearted = savedHearts.includes(index);

            return (
              <div
                key={index}
                className={`relative flex flex-col gap-2 group h-[400px]`}
              >
                <Link
                  href={`/product/id`}
                  className={`relative h-[80%] overflow-hidden rounded-2xl `}
                >
                  <Image
                    quality={100}
                    src={item.img}
                    fill
                    alt="a"
                    className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-125"
                  />
                </Link>
                <div
                  onClick={() => toggleHeart(index)}
                  className="absolute top-4 right-4 cursor-pointer"
                >
                  <BHeart bgColor={isHearted ? "black" : "none"} />
                </div>
                <div className="flex flex-col relative">
                  <div>{item.title}</div>
                  <div className="font-bold">{item.price}₮</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
