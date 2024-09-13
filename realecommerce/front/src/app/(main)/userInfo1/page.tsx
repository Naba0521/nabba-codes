"use client";
import { DeesheeSum } from "@/assets/DeesheeSum";
import { DooshooSum } from "@/assets/DooshooSum";
import Image from "next/image";
import { useState } from "react";
const dataDeliver = [
  {
    name: "Chunky Glyph Tee",
    count: 1,
    img: "/2.png",
    price: 120000,
  },
  {
    name: "Chunky Glyph Tee",
    count: 6,
    img: "/1.png",
    price: 120000,
  },
  {
    name: "Chunky Glyph Tee",
    count: 1,
    img: "/3.png",
    price: 120000,
  },
  {
    name: "Chunky Glyph Tee",
    count: 3,
    img: "/4.png",
    price: 120000,
  },
];

const priceSum = dataDeliver.reduce(
  (acc, item) => acc + item.price * item.count,
  0
);
export default function Home() {
  const [hideOrder, setHideOrder] = useState("Хэрэглэгчийн хэсэг");
  const [deeshee, setDeeshee] = useState(false);
  return (
    <div className=" bg-white flex justify-center items-center " style={{ minHeight: "calc(100vh - 320.5px - 74px)" }}>
      <div className="px-[278px] pt-[100px] w-[1440px] pb-[76px] flex gap-5">
        <div className="flex flex-col w-[240px gap-1]">
          <button
            onClick={() => setHideOrder("Хэрэглэгчийн хэсэг")}
            className={` rounded-2xl px-4 py-2 w-full font-medium text-sm text-[#09090B] ${
              hideOrder === "Хэрэглэгчийн хэсэг" ? "bg-[#F4F4F5]" : ""
            }`}
          >
            Хэрэглэгчийн хэсэг
          </button>
          <button
            onClick={() => setHideOrder("Захиалгын түүх")}
            className={` rounded-2xl px-4 py-2 w-full font-medium text-sm text-[#09090B] ${
              hideOrder === "Захиалгын түүх" ? "bg-[#F4F4F5]" : ""
            }`}
          >
            Захиалгын түүх
          </button>
        </div>
        <div
          className={`flex-1  flex-col ${
            hideOrder === "Захиалгын түүх" ? "flex" : "hidden"
          }`}
        >
          <div className="text-[#09090B] text-lg font-medium">
            Захиалгын түүх
          </div>
          <div className="py-6">
            <div className="h-[1px] w-full bg-[#E4E4E7] "></div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 bg-[#F4F4F5] rounded-2xl">
              <div className="w-full py-8 px-6 flex flex-col gap-4">
                <div className="flex justify-between">
                  <div className="flex gap-2 ">
                    <div className="font-bold">2024-09-03 15:34 </div>
                    <div className="text-white bg-[#2563EB] text-[12px] rounded-full font-semibold px-[10px] py-1">
                      хүргэлтэнд гарсан
                    </div>
                  </div>
                  <button
                    onClick={() => setDeeshee(!deeshee)}
                    className="flex justify-center items-center"
                  >
                    {deeshee === false ? <DeesheeSum /> : <DooshooSum />}
                  </button>
                </div>
                <div className="flex flex-col gap-2 pb-4">
                  {dataDeliver.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={` justify-between ${
                          deeshee === false ? "flex" : "hidden"
                        }`}
                      >
                        <div className="flex gap-2">
                          <div className="relative w-9 h-9 flex justify-center items-center">
                            <Image
                              fill
                              src={`${item.img}`}
                              alt="aa"
                              className="rounded-md"
                            />
                          </div>
                          <div className=" flex flex-col text-xs">
                            <div>{item.name}</div>
                            <div className="flex">
                              <div>{item.count} x </div>
                              <div>{item.price}₮</div>
                            </div>
                          </div>
                        </div>
                        <div className="font-bold text-xs flex items-center">
                          {item.count * item.price}₮
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between pt-4 border-t-[2px] border-dashed">
                  <div>Үнийн дүн:</div>
                  <div className="font-bold text-lg">{priceSum}₮</div>
                </div>
              </div>
            </div>
            <div className="w-full py-8 px-6 flex flex-col gap-4 bg-[#F4F4F5] rounded-2xl">
              <div className="flex justify-between">
                <div className="flex gap-2 ">
                  <div className="font-bold">2024-08-23 15:34 </div>
                  <div className="text-[#2563EB] bg-blue-100 border border-[#2563EB] text-[12px] rounded-full font-semibold px-[10px] py-1">
                    дууссан
                  </div>
                </div>
                <div>Icon</div>
              </div>
              <div className="flex justify-between pt-4 border-t-[2px] border-dashed">
                <div>Үнийн дүн:</div>
                <div className="font-bold text-lg">120’000₮</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex-1  flex-col  ${
            hideOrder === "Хэрэглэгчийн хэсэг" ? "flex" : "hidden"
          }`}
        >
          <div className="text-[#09090B] text-lg font-medium">
            Хэрэглэгчийн хэсэг
          </div>
          <div className="py-6">
            <div className="h-[1px] w-full bg-[#E4E4E7] "></div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="text-[#09090B] text-sm font-medium">Овог:</div>
              <input
                className="w-full rounded-md border h-[28px] shadow-sm px-2"
                type="text"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#09090B] text-sm font-medium">Нэр:</div>
              <input
                className="w-full rounded-md border h-[28px] shadow-sm px-2"
                type="text"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#09090B] text-sm font-medium">
                Утасны дугаар:
              </div>
              <input
                className="w-full rounded-md border h-[28px] shadow-sm px-2"
                type="number"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#09090B] text-sm font-medium">
                Имэйл хаяг:
              </div>
              <input
                className="w-full rounded-md border h-[28px] shadow-sm px-2"
                type="e-mail"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#09090B] text-sm font-medium">Хаяг</div>
              <input
                className="w-full rounded-md border h-[94px] shadow-sm px-2"
                type="text"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
