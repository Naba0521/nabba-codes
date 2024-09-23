"use client";
import { BHeart } from "@/assets/BHeart";
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

type MainProductCardProps = {
  index: number;
  item: Product;
};

type addUserToSavedProduct = {
  productId: string;
  userId: string;
};

type deleteUserToSavedProduct = {
  productId: string;
  userId: string;
};
type getUserToSavedProduct = {
  productId: Product;
  userId: string;
};

export const MainProductCard = ({ item, index }: MainProductCardProps) => {
  const [savedHeart, setSavedHeart] = useState(false);

  const userId = "66e8dee21af9722ca42e9a96"; // Your default user ID

  const createToSavedProduct = async (productId: string) => {
    const addUserToSavedProduct: addUserToSavedProduct = { productId, userId };

    try {
      const response = await axios.post(
        "http://localhost:3001/savedProducts",
        addUserToSavedProduct
      );
      console.log("Product saved:", response.data);
      setSavedHeart(true);
    } catch (error) {
      console.error("Error adding product to saved:", error);
    }
  };

  const getToSavedProduct = async () => {
    try {
      const response = await axios.get("http://localhost:3001/savedProducts");
      const isSaved = response.data.savedProducts.some(
        (savedProduct: getUserToSavedProduct) =>
          savedProduct.productId._id === item._id
      );
      setSavedHeart(isSaved);
    } catch (error) {
      console.error("Error fetching user's saved products:", error);
    }
  };

  const deleteToSavedProduct = async (productId: string) => {
    const deleteUserToSavedProduct: deleteUserToSavedProduct = {
      productId,
      userId,
    };
    try {
      const response = await axios.delete(
        "http://localhost:3001/savedProducts",
        { data: deleteUserToSavedProduct } // Include data in the correct format
      );
      console.log("Product removed:", response.data);
      setSavedHeart(false);
    } catch (error) {
      console.error("Error removing product from saved:", error);
    }
  };

  useEffect(() => {
    getToSavedProduct();
  }, []);

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
        onClick={() => {
          if (savedHeart) {
            deleteToSavedProduct(item._id); // Call delete function if already saved
          } else {
            createToSavedProduct(item._id); // Call save function if not saved
          }
          setSavedHeart((prev) => !prev); // Toggle the heart state
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
