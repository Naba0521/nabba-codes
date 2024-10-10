"use client";

import { useEffect, useState } from "react";
import { MainProductCard } from "../_components/MainProductCard";
import { api } from "@/lib/axios";
const sizeData = ["Free", "S", "M", "L", "XL", "2XL", "3XL", "10XL"];

export default function Home() {
  interface product {
    _id: string;
    productName: string;
    price: number;
    image: string[];
    category: category[];
    size: string[];
    quantity: number;
    saledCount: number;
    salePercent: number;
  }
  interface ProductsResponse {
    products: product[];
  }
  interface category {
    _id: string;
    categoryName: string;
  }
  interface CategoriesResponse {
    categories: category[];
  }

  // const [savedHearts, setSavedHearts] = useState<number[]>([]);
  const [productsa, setproductsa] = useState<ProductsResponse | null>(null);
  const [categoriesa, setCategoriesa] = useState<CategoriesResponse | null>(
    null
  );
  const [size, setSize] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const limit = 6;

  // const toggleHeart = (index: number) => {
  //   if (savedHearts.includes(index)) {
  //     setSavedHearts(savedHearts.filter((i) => i !== index));
  //   } else {
  //     setSavedHearts([...savedHearts, index]);
  //   }
  // };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("/product", {
          params: { page, limit, selectedCategory, size },
        });
        setproductsa(response.data);
        setTotal(response.data.totalCount);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
    // console.log(selectedCategory);
  }, [page, selectedCategory, size]);

  const getCategories = async () => {
    try {
      const response = await api.get("/category");
      setCategoriesa(response.data);
    } catch (error) {
      console.log("category awahad aldaa garlaa");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="py-4 px-6 flex justify-center w-full">
      <div className=" w-[1440px] px-[200px] py-16 flex gap-5  ">
        <div className="w-[245px] flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div
              className="font-bold cursor-pointer"
              onClick={() => setSelectedCategory([])}
            >
              Ангилал
            </div>
            <div className="flex flex-col">
              {categoriesa?.categories.map((item, index) => {
                return (
                  <div
                    onClick={() =>
                      setSelectedCategory((prev) => {
                        if (prev.includes(item._id)) {
                          return prev.filter((id) => id !== item._id);
                        }
                        return [...prev, item._id];
                      })
                    }
                    key={index}
                    className={`cursor-pointer hover:text-green-400  hover:font-semibold duration-1000 ${
                      selectedCategory.includes(item._id) ? "underline" : ""
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
              onClick={() => setSize(null)}
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
        <div className="flex flex-col flex-1">
          <div className="flex-1 grid grid-cols-3 gap-x-5 gap-y-12">
            {productsa?.products &&
              productsa.products?.map((item, index) => {
                return (
                  <MainProductCard key={index} item={item} index={index} />
                );
              })}
          </div>
          <div className="flex justify-evenly pt-10">
            {new Array(Math.ceil(total / 6)).fill(0).map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setPage(index + 1)}
                  className={`w-8 h-8 flex justify-center items-center cursor-pointer rounded-lg ${
                    page === index + 1
                      ? "bg-green-400 text-white font-bold"
                      : ""
                  }`}
                >
                  {index + 1}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
