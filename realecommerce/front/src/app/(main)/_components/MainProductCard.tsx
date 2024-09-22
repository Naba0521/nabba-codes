"use client";
import { BHeart } from "@/assets/BHeart";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Unified Product interface
interface Product {
  _id: string;
  productName: string;
  price: number;
  image: string[];
  category: Category[]; // Using the correct category interface
  size: string[];
  quantity: number;
  saledCount: number;
  salePercent: number;
}

interface Category {
  id: string;
  categoryName: string;
}

interface ProductsResponse {
  products: Product[];
}

// Correct MainProductCardProps with Product type
type MainProductCardProps = {
  index: number;
  item: Product; // Directly using the Product interface here
};

type addUserToSavedProduct = {
  productId: string;
  userId: string;
};

export const MainProductCard = ({ item, index }: MainProductCardProps) => {
  const [savedHeart, setSavedHeart] = useState(false);

  const createToSavedProduct = async (productId: string) => {
    const userId = "66e8dee21af9722ca42e9a96"; // Your default user ID
    const addUserToSavedProduct: addUserToSavedProduct = { productId, userId };

    try {
      const response = await axios.post(
        "http://localhost:3001/savedProducts",
        addUserToSavedProduct
      );
      // You can handle the response if needed
      console.log("Product saved:", response.data);
    } catch (error) {
      console.error("Error adding product to saved:", error);
    }
  };

  return (
    <div key={index} className={`relative flex flex-col gap-2 group h-[400px]`}>
      <Link
        href={`/product/${item._id}`}
        className={`relative h-[80%] overflow-hidden rounded-2xl`}
      >
        <Image
          quality={100}
          src={item.image?.[0] || "/placeholder.jpg"} // Fallback to placeholder if image array is empty
          fill
          alt={item.productName}
          className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-125"
        />
      </Link>

      <div
        onClick={() => {
          setSavedHeart((prev) => !prev); // Toggle heart state
          if (!savedHeart) {
            createToSavedProduct(item._id); // Call createToSavedProduct if saving
          }
        }}
        className="absolute top-4 right-4 cursor-pointer"
      >
        <BHeart bgColor={savedHeart ? "black" : "none"} />
      </div>

      <div className="flex flex-col relative">
        <div>{item.productName}</div>
        <div className="font-bold">{item.price}₮</div>
      </div>
    </div>
  );
};
