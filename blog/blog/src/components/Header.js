"use client";

import { SearchIcon } from "@/assets/searchicon";
import { Logo } from "@/assets/logo";
import { NavList } from "@/assets/navlist";
import Link from "next/link";
import { useState } from "react";
import { Fb } from "@/assets/fb";
import { Twitter } from "@/assets/twit";
import { Insta } from "@/assets/inst";
import { In } from "@/assets/in";

export const Header = () => {
  const [isChecked, setIsCheked] = useState(false);

  const handleToggle = () => {
    setIsCheked(!isChecked);
  };

  return (
    <div className="flex lg:w-[1220px] w-[390px] items-center justify-between m-auto pt-[32px] pb-[32px] relative overflow-hidden">
      <Link href={`/`}>
        <div className="flex gap-[8px] items-center">
          <div>
            <Logo width={30.76} height={26} />
          </div>

          <div className="flex items-center">
            <div className="text-[#141624] text-[24px]">Meta</div>
            <div className="text-[#141624] text-[24px] font-bold">Blog</div>
          </div>
        </div>
      </Link>
      <div className="lg:flex hidden gap-[40px] text-[16px] text-[#3B3C4A] font-medium items-center">
        <Link href={`/`}>
          {" "}
          <div>Home</div>{" "}
        </Link>
        <Link href={`/blogs`}>
          <div>Blog</div>
        </Link>
        <Link href={`/contact`}>
          <div>Contact</div>
        </Link>
      </div>
      <div className="lg:flex hidden items-center w-[166px] h-[36px] bg-[#F4F4F5] pt-[8px] pr-[8px] pb-[8px] pl-[16px]">
        <input
          type="text"
          placeholder="Search"
          className="w-[114px] bg-[#F4F4F5] text-[#A1A1AA] text-[14px]"
        ></input>
        <div className="w-[16px] h-[16px]">
          <SearchIcon />
        </div>
      </div>
      <div className="flex lg:hidden">
        <NavList />
      </div>

      <div className="lg:hidden fixed top-[32px] right-[16px] z-50">
        <input
          type="checkbox"
          className="w-[36px] h-[36px]  opacity-0  border border-indigo-600 lg:hidden"
          checked={isChecked}
          onChange={handleToggle}
        />
      </div>
      <div
        className={`h-screen shadow-about1 lg:hidden fixed z-40 flex flex-col gap-[32px] top-[0px]  ${
          isChecked ? "right-[0]" : "right-[-100%]"
        } transition-right duration-1000 w-[100%]  bg-[#E8E8EA] px-[32px] py-[32px]`}
      >
        <div className="flex justify-between">
          <Link href={`/`}>
            <div className="flex gap-[8px] items-center">
              <div>
                <Logo width={30.76} height={26} />
              </div>

              <div className="flex items-center">
                <div className="text-[#141624] text-[24px]">Meta</div>
                <div className="text-[#141624] text-[24px] font-bold">Blog</div>
              </div>
            </div>
          </Link>
          <div className="flex lg:hidden text-3xl">X</div>
        </div>
        <div className="flex flex-col gap-[16px] text-[16px] text-[#3B3C4A] font-medium items-start pl-[32px]">
          <Link href={`/`}>
            {" "}
            <div>Home</div>{" "}
          </Link>
          <Link href={`/blogs`}>
            <div>Blog</div>
          </Link>
          <Link href={`/contact`}>
            <div>Contact</div>
          </Link>
        </div>
        <div className="flex mt-[48px] gap-[32px] items-center justify-center">
          <Link target="blank" href={"https://www.facebook.com/"}>
            <div>
              <Fb />
            </div>
          </Link>
          <Link target="blank" href={"https://www.twitter.com/"}>
            <div>
              <Twitter />
            </div>
          </Link>
          <Link target="blank" href={"https://www.instagram.com/"}>
            <div>
              <Insta />
            </div>
          </Link>
          <Link target="blank" href={"https://mn.linkedin.com/"}>
            <div>
              <In />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
