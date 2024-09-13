"use client";
import { BHeart } from "@/assets/BHeart";
import { HalfStar } from "@/assets/HalfStar";
import { Heart } from "@/assets/Heart";
import { Star } from "@/assets/Star";
import Image from "next/image";
import { useState } from "react";
const data1 = ["/2.png", "/3.png", "/4.png", "/5.png"];
const sizeData = ["S", "M", "L", "XL", "2XL"];
const commentData = [
  {
    userName: "Saraa",
    comment: "Ваав материал ёстой гоё  байна 😍",
  },
  {
    userName: "Saraa",
    comment: "🔥🔥🔥",
  },
  {
    userName: "Saraa",
    comment: "Ваав материал ёстой гоё  байна",
  },
  {
    userName: "Saraa",
    comment: "Ваав материал ёстой гоё  байна 🔥🔥🔥",
  },
  {
    userName: "Saraa",
    comment: "Ваав материал ёстой гоё  байна🔥🔥🔥",
  },
  {
    userName: "Saraa",
    comment: "Ваав материал ёстой гоё  байна",
  },
  {
    userName: "Saraa",
    comment: "Ваав материал ёстой гоё  байна 🔥🔥🔥",
  },
  {
    userName: "Saraa",
    comment: "Ваав материал ёстой гоё  байна🔥🔥🔥",
  },
];
export default function Home() {
  const [imgIndex, setImgIndex] = useState(data1[0]);
  const [size, setSize] = useState(0);
  const [productNumber, setProductNumber] = useState(0);
  const [hidebox, setHideBox] = useState(false);
  const [hideComment, setHideComment] = useState(false);

  return (
    <div className="py-4 px-6 flex justify-center w-full min-h-screen">
      <div className=" w-[1440px] px-[200px] pb-16  gap-20 flex flex-col  ">
        <div className="flex gap-5">
          <div className="flex-1 flex gap-5  h-[520px] sticky top-0 pt-16">
            <div className="w-[67px] flex flex-col gap-2 justify-center">
              {data1.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setImgIndex(item);
                    }}
                    className={`relative w-full h-[67px] rounded overflow-hidden ${
                      item === imgIndex ? " border-[2px] border-[#09090B]" : ""
                    }`}
                  >
                    <Image src={item} fill alt="asd" className="" />
                  </div>
                );
              })}
            </div>
            <div className="flex-1 relative rounded-2xl h-[521px]">
              <Image src={imgIndex} className="rounded-2xl" fill alt="asd" />
            </div>
          </div>
          <div className="flex-1 flex flex-col pt-[164px]  gap-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="border border-[#2563EB] px-[10px] py-[2px] w-fit rounded-full font-semibold text-[12px]">
                    шинэ
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="font-bold text-2xl">Wildflower Hoodie</div>
                    <div>
                      <BHeart bgColor="none" />
                    </div>
                  </div>
                  <div>Зэрлэг цэцгийн зурагтай даавуун материалтай цамц</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm underline">Хэмжээний заавар</div>
                  <div className="flex gap-1 text-xs">
                    {sizeData.map((item, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => setSize(index)}
                          className={`w-8 h-8 border flex justify-center items-center rounded-2xl hover:bg-[#E4E4E7] ${
                            index === size ? "bg-black text-white" : ""
                          }`}
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex">
                  <button
                    onClick={() =>
                      setProductNumber((prev) => (prev === 0 ? 0 : prev - 1))
                    }
                    className="w-8 h-8 border rounded-2xl"
                  >
                    -
                  </button>
                  <div className="w-8 h-8 flex justify-center items-center">
                    {productNumber}
                  </div>
                  <button
                    onClick={() => setProductNumber((prev) => prev + 1)}
                    className="w-8 h-8 border rounded-2xl"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-xl font-bold">120’000₮</div>
                <button className="h-9 w-[175px] text-white bg-[#2563EB] rounded-[20px]">
                  Сагсанд нэмэх
                </button>
              </div>
            </div>
            <div>
              <div className="flex gap-4 pt-8">
                <div className="text-sm">Үнэлгээ</div>
                <button
                  onClick={() => setHideBox(() => !hidebox)}
                  className="text-[#2563EB] text-sm underline"
                >
                  {hidebox === true ? "Бүгдийг хураах" : "Бүгдийг харах"}
                </button>
              </div>
              <div className="flex">
                <div className="flex">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <HalfStar />
                </div>
                <div className="font-bold text-sm">4.6</div>
                <div className="text-sm text-[#71717A]">(24)</div>
              </div>
            </div>
            <div
              className={`w-full h-fit gap-6 flex-col   ${
                hidebox === true ? "flex " : "hidden"
              }`}
            >
              <div
                className={`p-6 ${
                  hideComment === false ? "flex" : "hidden"
                } flex flex-col gap-6 bg-[#F4F4F5] rounded-lg`}
              >
                <div className="flex flex-col gap-2">
                  <div className="text-[#09090B] font-medium text-sm">
                    Одоор үнэлэх:
                  </div>
                  <div>
                    <div className="flex">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <HalfStar />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 ">
                  <div className="text-[#09090B] font-medium text-sm">
                    Сэтгэгдэл үлдээх:
                  </div>
                  <input
                    placeholder="Энд бичнэ үү"
                    className="bg-[#FFFFFF] w-full pb-[94px] pt-2 flex justify-start items-start rounded-md px-3"
                  ></input>
                </div>
                <button
                  onClick={() => {
                    setHideComment(!hideComment);
                  }}
                  className="text-white text-sm font-medium bg-[#2563EB] rounded-[20px] py-2 px-9 w-fit"
                >
                  Үнэлэх
                </button>
              </div>
              <div className="flex flex-col gap-5 [&>div:nth-child(1)]:border-none">
                {commentData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-1 border-t border-dashed"
                    >
                      <div className="flex gap-1 pt-4">
                        <div>{item.userName}</div>
                        <div className="flex">
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                          <HalfStar />
                        </div>
                      </div>
                      <div className="text-sm text-[#71717A]">
                        {item.comment}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
