import { AngilalIcon } from "@/assets/AngilalIcon";
import { BlackSearchIcon } from "@/assets/BlackSearchIcon";
import { CalendarIcon } from "@/assets/CalendarIcon";
import { DooshooSum } from "@/assets/DooshooSum";
import { GrayEditIcon } from "@/assets/GrayEditButton";
import { GrayDeleteIcon } from "@/assets/GreyDeleteIcon";
import { Search } from "@/assets/Search";
import { WhitePlusIcon } from "@/assets/WhitePlus";
import Image from "next/image";

export default function home() {
  const InitialData = [
    {
      img: "/2.png",
      name: "Laptop цүнх",
      id: "0001",
      angilal: "Эмэгтэй, цүнх",
      price: 19000,
      uldegdel: 76,
      zaragdsan: 36,
      date: "2024-01-10",
    },
    {
      img: "/2.png",
      name: "Laptop цүнх",
      id: "0001",
      angilal: "Эмэгтэй, цүнх",
      price: 19000,
      uldegdel: 76,
      zaragdsan: 36,
      date: "2024-01-10",
    },
    {
      img: "/3.png",
      name: "Laptop цүнх",
      id: "0001",
      angilal: "Эмэгтэй, цүнх",
      price: 19000,
      uldegdel: 76,
      zaragdsan: 36,
      date: "2024-01-10",
    },
    {
      img: "/1.png",
      name: "Laptop цүнх",
      id: "0001",
      angilal: "Эмэгтэй, цүнх",
      price: 19000,
      uldegdel: 76,
      zaragdsan: 36,
      date: "2024-01-10",
    },
    {
      img: "/2.png",
      name: "Laptop цүнх",
      id: "0001",
      angilal: "Эмэгтэй, цүнх",
      price: 19000,
      uldegdel: 76,
      zaragdsan: 36,
      date: "2024-01-10",
    },
    {
      img: "/4.png",
      name: "Laptop цүнх",
      id: "0001",
      angilal: "Эмэгтэй, цүнх",
      price: 19000,
      uldegdel: 76,
      zaragdsan: 36,
      date: "2024-01-10",
    },
    {
      img: "/1.png",
      name: "Laptop цүнх",
      id: "0001",
      angilal: "Эмэгтэй, цүнх",
      price: 19000,
      uldegdel: 76,
      zaragdsan: 36,
      date: "2024-01-10",
    },
    {
      img: "/3.png",
      name: "Laptop цүнх",
      id: "0001",
      angilal: "Эмэгтэй, цүнх",
      price: 19000,
      uldegdel: 76,
      zaragdsan: 36,
      date: "2024-01-10",
    },
  ];
  return (
    <div className="flex-1">
      <div className="flex flex-col w-full gap-6">
        <div className="flex  border-b">
          <div className="px-4 text-sm font-semibold border-b-2 border-black  py-4">
            Бүтээгдэхүүн
          </div>
          <div className="px-4 text-sm text-[#3F4145] py-4">Ангилал</div>
        </div>
        <div className="text-white flex gap-2 bg-black px-12 py-2 items-center rounded-xl w-fit font-semibold">
          <div>
            <WhitePlusIcon />
          </div>
          <div>Бүтээгдэхүүн нэмэх</div>
        </div>
        <div className="flex justify-between h-10 pr-9">
          <div className="flex  gap-3  ">
            <div className="flex items-center gap-2 font-semibold px-3 bg-white rounded-lg ">
              <div>
                <AngilalIcon />
              </div>
              <div className="text-[#3F4145]">Ангилал</div>
              <div>
                <DooshooSum />
              </div>
            </div>
            <div className="flex items-center gap-2 font-semibold px-3 bg-white rounded-lg ">
              <div>$</div>
              <div className="text-[#3F4145]">Үнэ</div>
              <div>
                <DooshooSum />
              </div>
            </div>
            <div className="flex items-center gap-2 font-semibold px-3 bg-white rounded-lg ">
              <div>
                <CalendarIcon />
              </div>
              <div className="text-[#3F4145]">Сараар</div>
              <div>
                <DooshooSum />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2">
            <div>
              <BlackSearchIcon />
            </div>
            <input
              className="outline-none w-[360px]"
              placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
            ></input>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-[12px]">
          <div className="flex w-full h-11 items-center border-b">
            <div className=" flex-1 pl-[140px] ">Бүтээгдэхүүн</div>
            <div className=" flex-1 flex justify-center">Ангилал</div>
            <div className=" flex-1 flex justify-center">Үнэ</div>
            <div className=" flex-1 ">Үлдэгдэл</div>
            <div className=" flex-1 ">Зарагдсан</div>
            <div className=" flex-1 pr-[100px] "> Нэмсэн огноо</div>
          </div>
          {InitialData.map((item, index) => {
            return (
              <div key={index} className="flex border-t h-[72px] text-sm">
                <div className="flex-[2] flex  items-center  gap-[80px] justify-center">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-black border"
                  ></input>
                  <div className="flex gap-3 justify-center">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image src={item.img} fill alt="aa" />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-sm">{item.name}</div>
                      <div className="text-[12px] text-[#5E6166]">
                        {item.id}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1  flex items-center justify-end">
                  {item.angilal}
                </div>
                <div className="flex-1  flex items-center justify-center">
                  {item.price}₮
                </div>
                <div className="flex-1  flex items-center justify-center">
                  {item.uldegdel}
                </div>
                <div className="flex-1  flex items-center justify-center">
                  {item.zaragdsan}
                </div>
                <div className="flex-1  flex items-center justify-center">
                  {item.date}
                </div>
                <div className="flex-1  flex items-center justify-center gap-3">
                  <GrayDeleteIcon />
                  <GrayEditIcon />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
