"use client";
import { WhitePlusIcon } from "@/assets/WhitePlus";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { useState } from "react";

type addCategoryType = {
  categoryName: string;
};
type CategoryNemehProps = {
  getCategories: () => void; // Receive getCategories function as a prop
};

export const CategoryNemeh = ({ getCategories }: CategoryNemehProps) => {
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>("");

  const createCategory = async (addCategory: addCategoryType) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/category",
        addCategory
      );
      getCategories();
      console.log("Category created:", response.data);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="text-white flex gap-2 bg-black px-12 py-2 items-center rounded-xl w-fit font-semibold">
          <WhitePlusIcon />
          <div>Ангилал нэмэх</div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-4">
          <DialogTitle>Ангилалын нэрийг энд оруулна уу </DialogTitle>
          <input
            type="text"
            className="input-class"
            value={selectedCategoryName}
            onChange={(e) => setSelectedCategoryName(e.target.value)}
          />
          <DialogClose>
            <button
              className="bg-black rounded-lg py-2 px-4 text-white font-bold border"
              onClick={() =>
                createCategory({
                  categoryName: selectedCategoryName,
                })
              }
            >
              Ангилал нэмэх
            </button>
          </DialogClose>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
