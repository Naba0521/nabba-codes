import { Check } from "@/assets/Check";
import Image from "next/image";
import Link from "next/link";

export default function home() {
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
  const totalPrice = initialData.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="py-4 px-6 flex justify-center w-full bg-[#f7f7f7]">
      <div className=" w-[1440px] px-[200px] py-16 flex flex-col  items-center gap-8  ">
        <div className="flex items-center justify-center">
          <Link href={`/hurgelt`}>
            <div className="w-8 h-8 bg-[#2563EB] rounded-2xl flex justify-center items-center text-white">
              <Check />
            </div>
          </Link>
          <div className="h-[1px] w-20 bg-[#2563EB] flex justify-center items-center"></div>
          <Link href={`/hurgelt2`}>
            <div className="w-8 h-8 bg-[#2563EB] rounded-2xl flex justify-center items-center font-bold text-white">
              2
            </div>
          </Link>
          <div className="h-[1px] w-20 bg-[#18181B] flex justify-center items-center"></div>
          <div className="w-8 h-8 border-black border rounded-2xl flex justify-center items-center">
            3
          </div>
        </div>
        <div className="flex gap-5 w-full ">
          <div className="py-8 px-6 flex flex-col flex-1 gap-4 bg-white rounded-xl h-fit">
            <div>Сагс (4)</div>
            <div className="flex flex-col gap-4">
              {initialData.map((item, index) => {
                return (
                  <div key={index} className="flex gap-4 ">
                    <div className="relative w-[80px] h-20">
                      <Image
                        src={item.img}
                        fill
                        alt="aa"
                        className="rounded-2xl"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <div>{item.name}</div>
                      <div className="flex">
                        <div>{item.count}x</div>
                        <div> {item.price}₮ </div>
                      </div>
                      <div className="font-bold">{item.price}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between border-t-2 border-dashed pt-[16px]">
              <div>Нийт төлөх дүн:</div>
              <div className="font-bold">{totalPrice}</div>
            </div>
          </div>
          <div className="flex-[2] flex flex-col p-8 rounded-2xl bg-white gap-9">
            <div>2. Хүргэлтийн мэдээлэл оруулах</div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="font-medium text-[14px]">Овог:</div>
                <input className="rounded-[18px] border w-full pl-2 text-[14px]"></input>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-medium">Нэр: </div>
                <input
                  className="rounded-[18px] border w-full pl-2 text-[14px] py-1"
                  placeholder="Самбуу"
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-medium text-[14px]">Утасны дугаар:</div>
                <input className="rounded-[18px] border w-full pl-2 text-[14px]"></input>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-medium text-[14px]">Хаяг:</div>
                <textarea className="rounded-[18px] border w-full min-h-[52px] pl-2 pt-2 text-[14px]"></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-medium text-[14px]">Нэмэлт мэдээлэл:</div>
                <textarea className="rounded-[18px] border w-full min-h-[66px] pt-2 pl-2 text-[14px]"></textarea>
                <div className="text-xs text-[#71717A]">
                  Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <Link href={`/hurgelt`}>
                <div className="border py-2 px-9 flex justify-center items-center rounded-2xl text-[14px]">
                  Буцах
                </div>
              </Link>
              <Link href={`/hurgelt3`}>
                <div className="border py-2 px-9 flex justify-center items-center rounded-2xl bg-[#2563EB] text-white text-[14px]">
                  Төлбөр төлөх
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
