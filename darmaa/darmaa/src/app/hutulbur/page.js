"use client";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

const Hutulbur = () => {
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
            <div className="cursor-pointer text-white bg-[#080062] w-[112px] h-[34px] rounded-lg items-center flex justify-center  border border-[#007EF2]">
              Урилга
            </div>
          </Link>
          <Link href={`/hutulbur`}>
            <div className="cursor-pointer text-white bg-[#080062] w-[112px] h-[34px] rounded-lg items-center flex justify-center border-[3px]  border-[#007EF2]">
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
            <h1 className="h-full text-xl opacity-100 w-full justify-center text-center text-[#FFCF54] font-extrabold dark:text-[#F9FAFB] relative  mt-[20px]">
              Монгол Улсын Начин Галбадрахын Дармаажанцангийн цолны мялаалга
              наадмын хөтөлбөр
            </h1>
          </div>
          <div className="relative text-white flex flex-col gap-2 mt-[60px]">
            <div className="font-bold text-xl">
              2024 оны 08 сарын 25-ны өдөр
            </div>
            <div className="flex gap-4">
              <div>06:00</div>
              <div>
                <div className="font-bold">Хурдан морины уралдаан</div>
                <div className="ml-2 font-extralight">Азарга</div>
                <div className="ml-2 font-extralight">Их нас</div>
                <div className="ml-2 font-extralight">Даага</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div>09:00</div>
              <div className="font-bold">Баяр наадмын нээлт</div>
            </div>
            <div className="flex gap-4">
              <div>12:00</div>
              <div>
                <div className="font-bold">Хүчит бөхийн барилдаан</div>
                <div className="ml-2 font-extralight">Нэгийн даваа</div>
                <div className="ml-2 font-extralight">Хоёрын даваа</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div>14:00</div>
              <div className="font-bold">
                Ёслол хүндэтгэлийн мялаалга өргөх арга хэмжээ
              </div>
            </div>
            <div className="flex gap-4">
              <div>15:00</div>
              <div className="font-bold">Хүчит бөхийн барилдаан үргэлжлэл</div>
            </div>
            <div className="flex gap-4">
              <div>17:00</div>
              <div className="font-bold">Шагнал гардуулах ёслол</div>
            </div>
            <div className="flex gap-4">
              <div>19:00</div>
              <div className="font-bold">Хүндэтгэлийн цэнгүүн</div>
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
export default Hutulbur;
