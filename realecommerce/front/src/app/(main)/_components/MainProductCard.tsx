"use client";
import { BHeart } from "@/assets/BHeart";
import { useAuthContext } from "@/components/utils/authProvider";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Unified Product interface
interface Product {
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

interface category {
  _id: string;
  categoryName: string;
}

type MainProductCardProps = {
  index: number;
  item: Product;
};

export const MainProductCard = ({ item, index }: MainProductCardProps) => {
  const {
    userMe,
    createToSavedProduct,
    deleteToSavedProduct,
    savedProductData,
  } = useAuthContext();

  const [savedHeart, setSavedHeart] = useState(false);

  useEffect(() => {
    const filteredSavedProducts = savedProductData.filter(
      (savedProduct) => savedProduct.userId === userMe?.id
    );

    const isSaved = filteredSavedProducts.some(
      (savedProduct) => savedProduct.productId._id === item._id
    );

    setSavedHeart(isSaved);
  }, [item._id, savedProductData, userMe]);

  const handleHeartClick = () => {
    if (savedHeart) {
      deleteToSavedProduct(item._id);
    } else {
      createToSavedProduct(item._id);
    }
    setSavedHeart((prev) => !prev); // Toggle savedHeart state
  };

  return (
    <div key={index} className={`relative flex flex-col gap-2 group h-[400px]`}>
      <Link
        href={`/product/${item._id}`}
        className={`relative h-[80%] overflow-hidden rounded-2xl`}
      >
        <Image
          quality={100}
          src={item.image?.[0] || "/placeholder.jpg"}
          fill
          alt={item.productName}
          className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-125"
        />
      </Link>

      <div
        onClick={handleHeartClick}
        className={`absolute top-4 right-4 cursor-pointer`}
      >
        <BHeart bgColor={savedHeart ? "red" : "#D3D3D3"} />
      </div>

      <div className="flex flex-col relative">
        <div>{item.productName}</div>
        <div className="font-bold flex gap-3 items-center">
          {item.salePercent > 0 ? (
            <div className="font-bold">
              {(
                item.price -
                (item.price * item.salePercent) / 100
              ).toLocaleString()}
              ₮
            </div>
          ) : null}

          <div
            className={`${item.salePercent > 0 ? "line-through text-sm" : ""}`}
          >
            {item.price.toLocaleString()}₮
          </div>

          {item.salePercent > 0 ? (
            <div className="text-red-600">{item.salePercent}%</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
