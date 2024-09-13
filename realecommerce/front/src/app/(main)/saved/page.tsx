import { BHeart } from "@/assets/BHeart";
import { Heart } from "@/assets/Heart";
import Image from "next/image";
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

export default function home() {
  return (
    <div className="min-h-[65vh] w-ful bg-[#f7f7f7] flex justify-center pt-[52px]">
      <div className="w-[622px] flex flex-col gap-4 ">
        <div className="flex gap-1">
          <div className="font-bold text-[20px]">Хадгалсан бараа</div>
          <div className="font-medium text-xl text-[#5E6166]">(3)</div>
        </div>
        <div className="flex flex-col gap-4">
          {initialData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex p-4 bg-white rounded-2xl justify-between"
              >
                <div className="flex gap-6">
                  <div className="relative w-[100px] h-[100px] rounded-2xl overflow-hidden">
                    <Image src={item.img} fill alt="aa" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div>{item.name}</div>
                    <div className="texr-sm font-bold">{item.price}₮</div>
                    <div className="py-1 px-3 bg-[#2563EB] rounded-xl w-fit font-medium text-[14px] text-white">
                      Сагслах
                    </div>
                  </div>
                </div>
                <div>
                  <BHeart bgColor="black" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
