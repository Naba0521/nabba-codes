"use client";

import { FaListUl } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { SunIcon } from "@/assets/icons/sun";
import { MoonIcon } from "@/assets/icons/moon";

export const Navbar = ({ toggleDarkMode, isDark }) => {
  const [isChecked, setIsCheked] = useState(false);

  const handleToggle = () => {
    setIsCheked(!isChecked);
  };

  return (
    <div className="relative w-[100%] lg:w-[960px] m-auto flex justify-between items-center h-max rounded-[20px] py-[32px] ">
      <div className="w-[90%] m-auto flex justify-between items-center h-max ">
        <div className="text-4xl font-extrabold dark:text-white">NABA</div>
        <div>
          <FaListUl className="w-[36px] h-[36px] lg:hidden dark:text-white" />
        </div>
      </div>

      <div>
        <input
          type="checkbox"
          className="w-[36px] h-[36px] z-10 opacity-0 absolute top-[32px] right-[26px] border border-indigo-600 lg:hidden"
          checked={isChecked}
          onChange={handleToggle}
        />
      </div>

      <div
        className={`h-screen shadow-about1 lg:hidden absolute flex flex-col top-[0px] ${
          isChecked ? "right-[0]" : "right-[-100%]"
        } transition-right duration-1000 w-[300px] bg-white px-[32px] py-[32px] dark:bg-[#030712] `}
      >
        <div className="flex justify-between border-b-[1px] border-grey-100 pb-[16px] ">
          <div className="flex justify-center items-center text-4xl font-extrabold dark:text-white ">
            NABA
          </div>
          <div className="flex justify-center items-center dark:text-white">
            <FaXmark className="w-[36px] h-[36px]" />
          </div>
        </div>
        <div className="flex flex-col gap-[16px] text-[#4B5563] pt-[16px] pb-[16px] text-[16px] font-medium dark:text-white">
          <div>Миний тухай</div>
          <div>Ажлын туршлага</div>
          <div>Чадвар</div>
          <div>Холбоо барих</div>
        </div>
        <div className="flex items-center justify-between pt-[16px] text-[#4B5563]">
          <div className="dark:text-white">Switch Theme</div>
          <button onClick={toggleDarkMode}>
            {isDark ? (
              <SunIcon color={isDark ? "#D1D5DB" : "black"} />
            ) : (
              <MoonIcon />
            )}
          </button>
        </div>
        <div className="pt-[16px]">
          <div className="px-[24px] py-[8px] rounded-[16px] bg-black text-white dark:text-black dark:bg-white text-center">
            CV татах
          </div>
        </div>
      </div>

      <div className="lg:flex  hidden ">
        <div className="flex gap-[24px] border-r-2 border-grey pr-16 items-center dark:text-white">
          <div>Миний тухай</div>
          <div>Ажлын туршлага</div>
          <div>Чадвар</div>
          <div>Холбоо барих</div>
        </div>
        <div className="flex gap-[24px] pl-16 items-center">
          <button onClick={toggleDarkMode}>
            {isDark ? (
              <SunIcon color={isDark ? "#D1D5DB" : "black"} />
            ) : (
              <MoonIcon />
            )}
          </button>
          <div className="px-[24px] py-[8px] rounded-[16px] bg-black dark:bg-white text-white dark:text-black text-center">
            CV татах
          </div>
        </div>
      </div>
    </div>
  );
};
