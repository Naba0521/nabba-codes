"use client";

import { useContext, useEffect, useState } from "react";
import * as Icons from "react-icons/fa"; // Import all FontAwesome icons
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Ensure these imports are correct
import { AddCategoryDialog } from "./AddCategoryDialog"; // Ensure correct import/export
import { AccountContext } from "./context"; // Ensure correct context import
import { api } from "@/lib/axios"; // Ensure correct axios setup

export const AddCategory = () => {
  const { newTransaction, setNewTransaction } = useContext(AccountContext);
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");

  // Fetch categories on component mount
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("/categories", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getData();
  }, []);

  // Handle the category selection change
  const handleSelectChange = (event) => {
    setNewTransaction({
      ...newTransaction,
      categoryId: event.id, // Assuming event contains id
    });
  };

  return (
    <Select onValueChange={(event) => handleSelectChange(event)}>
      <SelectTrigger className="">
        <SelectValue placeholder="Choose category" />
      </SelectTrigger>
      <SelectContent className="flex flex-col">
        {/* AddCategoryDialog component */}
        {/* <div className="flex px-4 py-4 gap-3 border-b">
          <AddCategoryDialog />
        </div> */}

        {/* Map categories to SelectItem */}
        {categories.map((category) => {
          const Icon = Icons[category.icon] || Icons.FaQuestionCircle; // Fallback if icon is not found
          return (
            <SelectItem value={category.id} key={category.id}>
              {" "}
              {/* Use category.id as key */}
              <div className="flex px-4 py-4 gap-3 items-center">
                <div>
                  <Icon color={category.color} /> {/* Render the icon */}
                </div>
                <div className="text-[16px]">{category.title}</div>{" "}
                {/* Render the title */}
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
