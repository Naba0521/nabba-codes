"use client";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

const Urilga = () => {
  return (
    <main className="bg-[#202C6A] min-w-[420px] lg:max-w-[1440px] m-auto px-[12px] ">
      <div className="w-[90%] m-auto flex flex-col   items-center h-max py-[40px] gap-[24px] ">
        <div className="flex justify-between gap-4 w-[100%] m-auto">
          <Link href={`/`}>
            <div className="cursor-pointer text-white bg-[#080062] w-[112px] h-[34px] rounded-lg items-center flex justify-center border  border-[#007EF2]">
              Танилцуулга
            </div>
          </Link>
          <Link href={`/urilga`}>
            <div className="cursor-pointer text-white bg-[#080062] w-[112px] h-[34px] rounded-lg items-center flex justify-center  border-[3px] border-[#007EF2]">
              Урилга
            </div>
          </Link>
          <Link href={`/hutulbur`}>
            <div className="cursor-pointer text-white bg-[#080062] w-[112px] h-[34px] rounded-lg items-center flex justify-center border  border-[#007EF2]">
              Хөтөлбөр
            </div>
          </Link>
        </div>

        <div className="flex flex-col items-start justify-start">
          <div className="relative ">
            {/* <div className="absolute flex flex-1 items-center justify-center">
              <Image
                className="w-full rounded-[20px] opacity-70"
                src="/"
                alt="Description of the image"
                width={500} // Replace with actual width
                height={500} // Replace with actual height
              />
            </div> */}
            {/* <h1 className="h-full text-xl opacity-100 w-full justify-center text-center text-[#FFCF54] font-extrabold dark:text-[#F9FAFB] relative  mt-[20px]">
              Монгол Улсын Начин Галбадрахын Дармаажанцангийн цолны мялаалга
              наадмын урилга
            </h1> */}
          </div>
          <div className="relative text-white flex flex-col gap-1 mt-[20px]">
            <div className="font-bold text-[18px] text-center">
              Тулгар төрийн 2233, Их Монгол улсын 818, Үндэсний эрх чөлөө
              тусгаар тогтнолоо сэргээн мандуулсны 113, түүхэн яруу алдарт ардын
              хувьсгалын 103 жилийн ой, Үндэсний их баяр цэнгэл наадмын Хүчит
              бөхийн барилдаанд 5 давж
            </div>
            <div className="font-bold text-[18px] text-center">
              Монгол Улсын Начин цол хүртсэний мялаалга, Хүндэтгэлийн баяр
              наадамд та бүхнийг хүрэлцэн ирэхийг урьж байна.
            </div>

            <h1 className="h-full text-xl opacity-100 w-full justify-center text-center text-[#FFCF54] font-extrabold dark:text-[#F9FAFB] relative  mt-[20px]">
              Хүндэтгэсэн
            </h1>
            <h1 className="h-full text-xl opacity-100 w-full justify-center text-center text-[#FFCF54] font-extrabold dark:text-[#F9FAFB] relative  ">
              Монгол Улсын Начин
            </h1>
            <h1 className="h-full text-xl opacity-100 w-full justify-center text-center text-[#FFCF54] font-extrabold dark:text-[#F9FAFB] relative  ">
              Галбадрахын Дармаажанцан
            </h1>
            <div className="font-bold text-[12px] text-center mt-[16px]">
              Баяр наадам
            </div>
            <div className="font-bold text-[12px] text-center">
              2024 оны 8-р сарын 25-ны өдөр
            </div>
            <div className="font-bold text-[12px] text-center">
              Ховд аймгийн Дөргөн сумын төвд болно.
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex gap-8">
          <div className="flex-1 flex flex-col gap-[48px]">
            <div className="flex gap-[40px] items-center justify-center">
              <Link
                href={"https://www.facebook.com/g.darmaajantsan"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className="w-[24px] h-[24px] dark:text-[#F9FAFB] text-[#F9FAFB]" />
              </Link>
              <Link
                href={"https://www.instagram.com/g.darmaajantsan/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-[24px] h-[24px] dark:text-[#F9FAFB] text-[#F9FAFB]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Urilga;
