"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { FoodIcon } from "@/assets/foodIcon";
import { HomeIcon } from "@/assets/homeIcon";

export const RecordsCard = ({ title, date, amount }) => {
  return (
    <div className="flex justify-between bg-white items-center px-6 py-3 rounded-lg">
      <div className="flex gap-4 items-center">
        <Checkbox height={6} width={6} />
        <div>{title === "Food & Drinks" ? <FoodIcon /> : <HomeIcon />}</div>
        <div>
          <div>{title}</div>
          <div>{date}</div>
        </div>
      </div>
      <div className={`${amount > 0 ? "text-[#23E01F]" : "text-[#F54949]"}`}>
        {amount}₮
      </div>
    </div>
  );
};
