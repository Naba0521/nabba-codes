"use client";

import { useContext, useEffect, useState } from "react";
import * as Icons from "react-icons/fa"; // Ensure you're using the correct icons package
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
  const { newTransaction, setNewTransaction } = useContext(AccountContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/categories", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCategories(response.data);
    };
    getData();
  }, []);

  const handleSelectChange = (categoryId) => {
    const selectedCategory = categories.find((cat) => cat.id === categoryId);
    setNewTransaction({
      ...newTransaction,
      categoryId: selectedCategory.id,
    });
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="">
        <SelectValue placeholder="Choose category" />
      </SelectTrigger>
      <SelectContent className="flex flex-col">
        <div className="flex px-4 py-4 gap-3 border-b">
          <AddCategoryDialog />
        </div>
        {categories.map((category) => {
          // Ensure that the category.icon value matches the icon name in react-icons
          const Icon = Icons[category.icon];
          return (
            <SelectItem value={category.id} key={category.id}>
              <div className="flex px-4 py-4 gap-3 items-center">
                {Icon && <Icon color={category.color} />}
                <div className="text-[16px]">{category.title}</div>
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
