"use client";

import { BHeart } from "@/assets/BHeart";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const sizeData = ["Free", "S", "M", "L", "XL", "2XL", "3XL", "10XL"];

export default function Home() {
  interface product {
    _id: string;
    productName: string;
    price: number;
    category: category[];
    size: string[];
    image: string[];
  }
  interface ProductsResponse {
    products: product[];
  }
  interface category {
    id: string;
    categoryName: string;
  }
  interface CategoriesResponse {
    categories: category[];
  }

  const [savedHearts, setSavedHearts] = useState<number[]>([]);
  const [productsa, setproductsa] = useState<ProductsResponse | null>(null);
  const [categoriesa, setCategoriesa] = useState<CategoriesResponse | null>(
    null
  );
  const [size, setSize] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const toggleHeart = (index: number) => {
    if (savedHearts.includes(index)) {
      setSavedHearts(savedHearts.filter((i) => i !== index));
    } else {
      setSavedHearts([...savedHearts, index]);
    }
  };
  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/product");
      setproductsa(response.data);
      console.log("asdasdasd", response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3001/category");
      setCategoriesa(response.data);
    } catch (error) {
      console.log("category awahad aldaa garlaa");
    }
  };

  const filteredCategoryProducts = productsa?.products
    .filter((product) => {
      if (selectedCategory === "") return true; // Show all products if no category is selected
      return product.category.some(
        (cat) => cat.categoryName === selectedCategory
      );
    })
    .filter((product) => {
      if (size === "" || size === null) return true;
      return product.size.includes(size);
    });
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <div className="py-4 px-6 flex justify-center w-full">
      <div className=" w-[1440px] px-[200px] py-16 flex gap-5  ">
        <div className="w-[245px] flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div
              className="font-bold cursor-pointer"
              onClick={() => setSelectedCategory("")}
            >
              Ангилал
            </div>
            <div className="flex flex-col">
              {categoriesa?.categories.map((item, index) => {
                return (
                  <div
                    onClick={() => setSelectedCategory(item.categoryName)}
                    key={index}
                    className={`cursor-pointer hover:text-green-400  hover:font-semibold duration-1000 ${
                      selectedCategory === item.categoryName ? "underline" : ""
                    }`}
                  >
                    {item.categoryName}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div
              className="cursor-pointer font-bold"
              onClick={() => setSize("")}
            >
              Хэмжээ
            </div>
            <div className="flex flex-col">
              {sizeData.map((item, index) => {
                return (
                  <div
                    onClick={() => setSize(sizeData[index])}
                    className={`cursor-pointer hover:text-green-400  hover:font-semibold duration-1000 ${
                      size === sizeData[index] ? "underline" : ""
                    }`}
                    key={index}
                  >
                    {sizeData[index]}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-3 grid-rows-5 gap-x-5 gap-y-12">
          {filteredCategoryProducts?.map((item, index) => {
            const isHearted = savedHearts.includes(index);
            return (
              <div
                key={index}
                className={`relative flex flex-col gap-2 group h-[400px]`}
              >
                <Link
                  href={`/product/${item._id}`}
                  className={`relative h-[80%] overflow-hidden rounded-2xl `}
                >
                  <Image
                    quality={100}
                    src={item.image[0]}
                    fill
                    alt="a"
                    className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-125"
                  />
                </Link>
                <div
                  onClick={() => toggleHeart(index)}
                  className="absolute top-4 right-4 cursor-pointer"
                >
                  <BHeart bgColor={isHearted ? "black" : "none"} />
                </div>
                <div className="flex flex-col relative">
                  <div>{item.productName}</div>
                  <div className="font-bold">{item.price}₮</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
