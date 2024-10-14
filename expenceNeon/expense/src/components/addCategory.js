"use client";

import { useContext, useEffect, useState } from "react";
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
import { api } from "@/lib/axios";

export const AddCategory = () => {
  const { newTransaction, setNewTransaction, setCategoryId } =
    useContext(AccountContext);
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await api?.get("/categories", {
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
      categoryId: event.id,
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
            <SelectItem value={category} key={category.title}>
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
