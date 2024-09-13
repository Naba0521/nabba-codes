"use client";
import { HeaderLogo } from "@/assets/headerlogo";
import { Plus } from "@/assets/plus";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AddIcon } from "@/assets/addIcon";
import { HomeIcon } from "@/assets/homeIcon";
import { FoodIcon } from "@/assets/foodIcon";
import { AddGift } from "@/assets/addGift";
import { AddFood } from "@/assets/addFood";
import { AddDrink } from "@/assets/addDrink";
import { AddTaxi } from "@/assets/addTaxi";
import { AddShopping } from "@/assets/addShopping";
import { AddHome } from "@/assets/addHome";
import { FaCashRegister } from "react-icons/fa";
import * as Icons from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AddCategoryDialog } from "./AddCategoryDialog";
import { AccountContext } from "./context";
import axios from "axios";
import { Eye } from "@/assets/eye";

export const AddCategory = () => {
  const { newTransaction, setNewTransaction } = useContext(AccountContext);
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios?.get("http://localhost:3001/categories", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCategories(response.data);
    };
    getData();
  }, []);

  const handleSelectChange = (event) => {
    setNewTransaction({
      ...newTransaction,
      category: event,
    });
  };
  return (
    <Select
      onValueChange={(event) => handleSelectChange(event)}
      // value={newTransaction.category.name}
    >
      <SelectTrigger className="">
        <SelectValue placeholder="Choose category" />
      </SelectTrigger>
      <SelectContent className="flex flex-col">
        <div className="flex px-4 py-4 gap-3 border-b">
          <AddCategoryDialog />
        </div>
        {categories.map((category) => {
          const Icon = Icons[category.icon];
          return (
            <SelectItem value={category}>
              <div className="flex px-4 py-4 gap-3 items-center">
                <div>{<Icon color={category.color} />}</div>
                <div className="text-[16px]">{category.title}</div>
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
