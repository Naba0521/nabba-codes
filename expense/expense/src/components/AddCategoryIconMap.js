"use client";

import React, { useContext, useState } from "react";

import { AddHome } from "@/assets/addHome";

import * as Icons from "react-icons/fa";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoryContext } from "./categoryContext";

const categoryData = [
  {
    icon: "FaBus",
  },
  {
    icon: "FaApple",
  },
  {
    icon: "FaAndroid",
  },
  {
    icon: "FaAngellist",
  },
  {
    icon: "FaApplePay",
  },
  {
    icon: "FaArchway",
  },
  {
    icon: "FaAppStore",
  },
  {
    icon: "FaAtlas",
  },
  {
    icon: "FaBabyCarriage",
  },
];
const ColorData = [
  {
    color: "#0166FF",
  },
  {
    color: "#01B3FF",
  },
  {
    color: "#41CC00",
  },
  {
    color: "#F9D100",
  },
  {
    color: "#FF7B01",
  },
  {
    color: "#AE01FF",
  },
  {
    color: "#FF0101",
  },
];
export const AddCategoryIconMap = () => {
  const [Color, setColor] = useState("");
  const { newCategories, setNewCategories, newCategory, SetNewCategory } =
    useContext(CategoryContext);

  return (
    <Select
      onValueChange={(value) =>
        SetNewCategory({ ...newCategory, icon: value.icon })
      }
    >
      <SelectTrigger className="w-[100%] h-12 ">
        <SelectValue placeholder={<AddHome />} />
      </SelectTrigger>
      <SelectContent>
        <div className="px-6 py-6">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-5">
              {categoryData.map((item, index) => {
                const Icon = Icons[item.icon];
                return (
                  <SelectItem value={item}>
                    <div className=" p-0 items-center">
                      <Icon style={{ color: Color }} className="text-[20px]" />
                    </div>
                  </SelectItem>
                );
              })}
            </div>
            <div className="flex gap-4 border-t pt-6">
              {ColorData.map((item, index) => (
                <div
                  className="w-8 h-8 rounded-[50%] ${item.color}"
                  style={{ backgroundColor: item.color }}
                  onClick={() => {
                    setColor(item.color);
                    SetNewCategory({ ...newCategory, color: item.color });
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </SelectContent>
    </Select>
  );
};
