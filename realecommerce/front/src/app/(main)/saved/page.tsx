"use client";

import { BHeart } from "@/assets/BHeart";
import { useAuthContext } from "@/components/ui/utils/authProvider";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface AddOrderResponse {
  productId: string;
  userId: string;
  count: number;
  price: number;
  size: string | null; // Allow null
}

export default function Home() {
  const { userMe, savedProductData, loading, deleteToSavedProduct } =
    useAuthContext();
  const [notification, setNotification] = useState("");
  const [selectedSizes, setSelectedSizes] = useState<{
    [key: string]: string | null;
  }>({}); // Use an object to hold sizes for each product

  // Filter saved products based on userId
  const filteredSavedProducts = savedProductData.filter(
    (savedProduct) => savedProduct.userId === userMe?.id
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading...</div>
      </div>
    ); // Show a loading state
  }

  const createOrder = async (addOrder: AddOrderResponse) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "http://localhost:3001/order",
        addOrder,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNotification("Захиалга амжилттай сагсанд нэмэгдлээ");
      setTimeout(() => {
        setNotification("");
      }, 3000);
    } catch (error) {
      // Check if the error response exists and has a status code of 409
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        setNotification("Энэ бүтээгдэхүүн сагсанд нэмэгдсэн байна");
        setTimeout(() => {
          setNotification("");
        }, 3000);
      } else {
        console.log(error); // Log other errors
      }
    }
  };

  return (
    <div className="min-h-[65vh] w-full bg-[#f7f7f7] flex justify-center pt-[52px] pb-[52px]">
      <div className="w-[622px] flex flex-col gap-4 ">
        {notification && (
          <div className="bg-green-500 text-white p-4 rounded-md mb-4 w-[200px] absolute top-[50px] right-[540px]">
            {notification}
          </div>
        )}
        <div className="flex gap-1">
          <div className="font-bold text-[20px]">Хадгалсан бараа</div>
          <div className="font-medium text-xl text-[#5E6166]">
            ({filteredSavedProducts.length}) {/* Show filtered count */}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {filteredSavedProducts.map((item, index) => (
            <div
              key={index}
              className="flex p-4 bg-white rounded-2xl justify-between"
            >
              <div className="flex gap-6">
                <div className="relative w-[100px] h-[100px] rounded-2xl overflow-hidden">
                  <Image
                    src={item.productId.image[0] || "/placeholder.jpg"}
                    className="object-contain"
                    fill
                    alt={item.productId.productName}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div>{item.productId.productName}</div>
                  <div className="flex gap-2">
                    {item.productId.size.map((sizeItem, sizeIndex) => (
                      <div
                        key={sizeIndex}
                        onClick={() => {
                          setSelectedSizes((prev) => ({
                            ...prev,
                            [item.productId._id]: sizeItem, // Set selected size for this product ID
                          }));
                        }}
                        className={`w-10 h-10 border flex justify-center items-center rounded-2xl hover:bg-[#E4E4E7] ${
                          sizeItem === selectedSizes[item.productId._id]
                            ? "bg-black text-white"
                            : ""
                        }`}
                      >
                        {sizeItem}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-bold">
                    {item.productId.price}₮
                  </div>
                  <div
                    onClick={() => {
                      if (userMe?.id && selectedSizes[item.productId._id]) {
                        createOrder({
                          userId: userMe.id,
                          count: 1,
                          productId: item.productId._id,
                          size: selectedSizes[item.productId._id], // Use the selected size for this product
                          price: item?.productId.price ?? 0,
                        });
                      } else {
                        setNotification("Та хэмжээ сонгоогүй байна."); // Notify if no size is selected
                        setTimeout(() => {
                          setNotification("");
                        }, 3000);
                      }
                    }}
                    className="py-1 px-3 bg-[#2563EB] rounded-xl w-fit font-medium text-[14px] cursor-pointer text-white"
                  >
                    Сагслах
                  </div>
                </div>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => deleteToSavedProduct(item.productId._id)}
              >
                <BHeart bgColor="red" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
