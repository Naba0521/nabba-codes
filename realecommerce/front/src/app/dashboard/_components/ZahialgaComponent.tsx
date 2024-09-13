"use client";
import { BlackSearchIcon } from "@/assets/BlackSearchIcon";
import { CalendarIcon } from "@/assets/CalendarIcon";
import { DooshooSum } from "@/assets/DooshooSum";
import { RightDirectionIcon } from "@/assets/RightDirectionIcon";
import { Search } from "@/assets/Search";
import { Zahialga } from "@/assets/ZahialgaIcon";
import { useState } from "react";

export const ZahialgaComponent = () => {
  const [selectedTolow, setSelectedTolow] = useState(0);
  const Tolowuud = [
    "Бүгд",
    "Шинэ захиалга",
    "Бэлтгэгдэж байна",
    "Хүргэлтэнд гарсан",
    "Хүргэгдсэн",
    "Цуцлагдсан",
  ];
  const ZahialgaData = [
    {
      id: "#12345678",
      name: "Zoloo soko",
      email: "Zoloosoko@gmail.com",
      date: "2023-01-09",
      time: "10:58",
      price: 12000,
      status: "Хүргэгдсэн",
    },
    {
      id: "#12345678",
      name: "Zoloo soko",
      email: "Zoloosoko@gmail.com",
      date: "2023-01-09",
      time: "10:58",
      price: 12000,
      status: "Хүргэгдсэн",
    },
    {
      id: "#12345678",
      name: "Zoloo soko",
      email: "Zoloosoko@gmail.com",
      date: "2023-01-09",
      time: "10:58",
      price: 12000,
      status: "Хүргэгдсэн",
    },
    {
      id: "#12345678",
      name: "Zoloo soko",
      email: "Zoloosoko@gmail.com",
      date: "2023-01-09",
      time: "10:58",
      price: 12000,
      status: "Хүргэгдсэн",
    },
    {
      id: "#12345678",
      name: "Zoloo soko",
      email: "Zoloosoko@gmail.com",
      date: "2023-01-09",
      time: "10:58",
      price: 12000,
      status: "Хүргэгдсэн",
    },
    {
      id: "#12345678",
      name: "Zoloo soko",
      email: "Zoloosoko@gmail.com",
      date: "2023-01-09",
      time: "10:58",
      price: 12000,
      status: "Хүргэгдсэн",
    },
    {
      id: "#12345678",
      name: "Zoloo soko",
      email: "Zoloosoko@gmail.com",
      date: "2023-01-09",
      time: "10:58",
      price: 12000,
      status: "Хүргэгдсэн",
    },
  ];
  return (
    <div className="flex flex-col  w-full gap-8">
      <div className="flex border-b">
        {Tolowuud.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setSelectedTolow(index)}
              className={`text-sm text-[#3F4145] py-2 px-4 cursor-pointer  ${
                selectedTolow === index
                  ? "font-bold border-b-[2px] border-black"
                  : ""
              }`}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="flex px-4  justify-between">
        <div className="flex gap-2 text-sm">
          <div className="bg-[#18BA51] text-white text-sm font-semibold py-3 px-4 rounded-[8px]">
            Өнөөдөр
          </div>
          <div className="bg-white text-sm font-semibold py-3 px-4 rounded-[8px]">
            7 хоног
          </div>
          <div className="bg-white text-sm font-semibold py-3 px-4 rounded-[8px] flex gap-2 items-center">
            <div>
              <CalendarIcon />
            </div>
            <div>Сараар</div>
            <div>
              <DooshooSum />
            </div>
          </div>
        </div>
        <div className="bg-white text-sm font-semibold border py-3 px-4 rounded-[8px] flex gap-2 items-center">
          <div>
            <BlackSearchIcon />
          </div>
          <input
            className="outline-none text-[#8B8E95] text-sm"
            placeholder="Дугаар, Имэйл"
          ></input>
        </div>
      </div>
      <div className="flex flex-col px-6 bg-white py-5 rounded-2xl">
        <div className="font-bold text-lg px-6 bg-white">Захиалга</div>
        <div className="flex text-[12px] text-[#3F4145] bg-[#f7f7f7] font-semibold">
          <div className="flex-1 py-[14px] pl-6  ">Захиалгын ID дугаар</div>
          <div className="flex-1 py-[14px] pl-6 ">Үйлчлүүлэгч</div>
          <div className="flex-1 py-[14px] pl-12">Огноо</div>
          <div className="flex-1 py-[14px] pl-6">Цаг</div>
          <div className="flex-1 py-[14px] pl-6">Төлбөр</div>
          <div className="flex-1 py-[14px] pl-10 flex">Статус</div>
          <div className="flex-1 py-[14px] pl-6 flex justify-center">
            Дэлгэрэнгүй
          </div>
        </div>
        {ZahialgaData.map((item, index) => {
          return (
            <div className="flex border-t items-center justify-center text-sm">
              <div className="flex-1 py-[14px] pl-6 font-semibold  ">
                {item.id}
              </div>
              <div className="flex-1 py-[14px] pl-6 flex flex-col ">
                <div className="font-semibold">{item.name}</div>
                <div>{item.email}</div>
              </div>
              <div className="flex-1 py-[14px] pl-6  ">{item.date}</div>
              <div className="flex-1 py-[14px] pl-6  ">{item.time}</div>
              <div className="flex-1 py-[14px] pl-6  ">{item.price}₮</div>
              <div className="flex-1 py-[14px] pl-6 flex justify-center items-center ">
                <div className="bg-[#C1E6CF] text-[#0A4E22] py-2 px-4 rounded-full">
                  {item.status}
                </div>
              </div>
              <div className="flex-1 py-[14px] pl-6 flex justify-center ">
                <RightDirectionIcon />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
