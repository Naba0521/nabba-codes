"use client";

import { Plus } from "@/assets/plus";
import { useState, useEffect, useContext } from "react";
import { Eye } from "@/assets/eye";
import { RDirect } from "@/assets/rdirect";
import { BluePlus } from "@/assets/blueplus";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { AddIcon } from "@/assets/addIcon";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "@/assets/homeIcon";
import { FoodIcon } from "@/assets/foodIcon";
import { RecordsCard } from "./RecordsCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { AddCategory } from "./addCategory";
import { AddHome } from "@/assets/addHome";
import { AddCategoryIconMap } from "./AddCategoryIconMap";
import axios, { Axios } from "axios";
import { CategoryContext } from "./categoryContext";

export const AddCategoryDialog = () => {
  // const [categories, setCategories] = useState([]);
  const { newCategory, SetNewCategory, getCategories } =
    useContext(CategoryContext);
  // const [title, setTitle] = useState("");
  const createCategory = async () => {
    // const newCategory = { title };
    const response = await axios.post(
      "http://localhost:3001/categories",
      newCategory,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    getCategories();
    // setCategories([...categories, response.data]);
    // setTitle("");
  };
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div>
            <div className="flex items-center gap-2">
              <BluePlus /> Add Category
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          <div className=" flex flex-col bg-white gap-[20px]">
            <div className="flex  pb-[20px] border-b-[1px] border-slate-400">
              <div className="text-[20px] font-semibold">Add Category</div>
            </div>
            <div className="flex gap-4 ">
              <div className="flex-1">
                <AddCategoryIconMap />
              </div>
              <div className="flex-[3]">
                <input
                  placeholder="Name"
                  onChange={(event) =>
                    SetNewCategory({
                      ...newCategory,
                      title: event.target.value,
                    })
                  }
                  className="bg-[#F9FAFB] text-[#D1D5DB] w-[100%] h-12 rounded-lg pl-4"
                ></input>
              </div>
            </div>
            <DialogClose>
              <button
                className="text-white bg-[#16A34A] w-full rounded-3xl flex justify-center items-center py-[8px]"
                onClick={createCategory}
              >
                Add Category
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
