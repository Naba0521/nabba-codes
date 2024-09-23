"use client";
import { BHeart } from "@/assets/BHeart";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  productName: string;
  price: number;
  image: string[];
  category: Category[];
  size: string[];
  quantity: number;
  saledCount: number;
  salePercent: number;
}

interface Category {
  id: string;
  categoryName: string;
}

type User = {
  _id: string;
};

type SavedProductDataResponse = {
  productId: Product;
  userId: User;
};

export default function Home() {
  const [savedProductData, setSavedProductData] = useState<
    SavedProductDataResponse[]
  >([]);
  const [loading, setLoading] = useState(true);

  const getToSavedProduct = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/savedProducts");
      setSavedProductData(response.data.savedProducts);
    } catch (error) {
      console.error("Error fetching user's saved products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getToSavedProduct();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    ); // Show a loading state
  }

  return (
    <div className="min-h-[65vh] w-full bg-[#f7f7f7] flex justify-center pt-[52px] pb-[52px]">
      <div className="w-[622px] flex flex-col gap-4 ">
        <div className="flex gap-1">
          <div className="font-bold text-[20px]">Хадгалсан бараа</div>
          <div className="font-medium text-xl text-[#5E6166]">
            ({savedProductData.length})
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {savedProductData.map((item, index) => (
            <div
              key={index}
              className="flex p-4 bg-white rounded-2xl justify-between"
            >
              <div className="flex gap-6">
                <div className="relative w-[100px] h-[100px] rounded-2xl overflow-hidden">
                  <Image
                    src={item.productId.image[0]}
                    className="object-contain"
                    fill
                    alt={item.productId.productName}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div>{item.productId.productName}</div>
                  <div className="text-sm font-bold">
                    {item.productId.price}₮
                  </div>
                  <div className="py-1 px-3 bg-[#2563EB] rounded-xl w-fit font-medium text-[14px] text-white">
                    Сагслах
                  </div>
                </div>
              </div>
              <div>
                <BHeart bgColor="black" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
