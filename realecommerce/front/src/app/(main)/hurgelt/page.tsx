"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { DeleteIcon } from "@/assets/DeleteIcon";
import Image from "next/image";
import { useAuthContext } from "@/components/ui/utils/authProvider";

type orderDataResponse = {
  _id: string;
  productId: ProductResponse;
  userId: string;
  size: string;
  count: number;
  price: number;
}[];

type ProductResponse = {
  _id: string;
  productName: string;
  image: string[];
  price: number;
};
type addOrderPackResponse = {
  orderId: string[];
  userId: string;
  orderPackPrice: number;
  status: string;
};
export default function Home() {
  const { userMe } = useAuthContext(); // Access userMe from AuthContext

  const [orderData, setOrderData] = useState<orderDataResponse>([]);
  const [notification, setNotification] = useState("");

  const createOrderPack = async (addOrderPack: addOrderPackResponse) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/orderPack",
        addOrderPack
      );
    } catch (error) {
      console.log("Error adding orderPack:", error);
    }
  };

  const getOrder = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get("http://localhost:3001/order", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrderData(response.data.orders);
      console.log(response.data.orders);
    } catch (error) {
      console.log(error);
    }
  };
  const filteredOrderData = orderData.filter(
    (orderData) => orderData.userId === userMe?.id
  );
  const deleteOrder = async (_id: string) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.delete("http://localhost:3001/order", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { _id },
      });
      setNotification("Амжилттай хасагдлаа");
      setTimeout(() => {
        setNotification("");
      }, 2000);
      getOrder();
    } catch (error) {
      console.error("Error removing product from saved:", error);
    }
  };

  const incrementCount = (index: number) => {
    const updatedOrderData = [...filteredOrderData];
    updatedOrderData[index].count += 1;
    setOrderData(updatedOrderData);
  };

  const decrementCount = (index: number) => {
    const updatedOrderData = [...filteredOrderData];
    if (updatedOrderData[index].count > 1) {
      updatedOrderData[index].count -= 1;
      setOrderData(updatedOrderData);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  const totalSum = filteredOrderData.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <div className="py-4 px-6 flex justify-center w-full bg-[#F4F4F5]">
      <div className="w-[1440px] px-[200px] py-16 flex flex-col justify-center items-center gap-16">
        {notification && (
          <div className="bg-green-500 text-white p-4 rounded-md mb-4 w-[200px] absolute top-[10px] right-[30px]">
            {notification}
          </div>
        )}
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 bg-[#2563EB] rounded-2xl flex justify-center items-center text-white">
            1
          </div>
          <div className="h-[1px] w-20 bg-[#18181B] flex justify-center items-center"></div>
          <Link href={`/hurgelt2`}>
            <div className="w-8 h-8 border-black border rounded-2xl flex justify-center items-center">
              2
            </div>
          </Link>
          <div className="h-[1px] w-20 bg-[#18181B] flex justify-center items-center"></div>
          <div className="w-8 h-8 border-black border rounded-2xl flex justify-center items-center">
            3
          </div>
        </div>
        <div className="p-8 flex flex-col gap-6 w-[686px] bg-white rounded-2xl">
          <div className="flex flex-col gap-4">
            <div className="flex">
              <div className="font-bold text-xl">1. Сагс</div>
              <div className="text-xl text-[#71717A]">
                ({filteredOrderData.length})
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {filteredOrderData.length > 0 ? (
                filteredOrderData.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between border rounded-2xl p-4"
                  >
                    <div className="flex gap-6">
                      <div className="relative w-[120px] h-[120px]">
                        <Image
                          src={item.productId.image[0]}
                          fill
                          alt={item.productId.productName}
                          className="rounded-2xl object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-2">
                          <div>{item.productId.productName}</div>
                          <div>Size:{item.size}</div>
                          <div className="flex">
                            <button
                              className="w-8 h-8 border rounded-2xl bg-white"
                              onClick={() => decrementCount(index)}
                            >
                              -
                            </button>
                            <div className="w-8 h-8 flex justify-center items-center">
                              {item.count}
                            </div>
                            <button
                              className="w-8 h-8 border rounded-2xl bg-white"
                              onClick={() => incrementCount(index)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="font-bold">
                          {item.price * item.count}₮
                        </div>
                      </div>
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => deleteOrder(item._id)}
                    >
                      <DeleteIcon />
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500">
                  Сагс хоосон байна.
                </div>
              )}
            </div>
            <div className="flex justify-between border-t-[2px] border-dashed border-b-[2px] py-[24px]">
              <div>Үнийн дүн:</div>
              <div className="font-bold">{totalSum}₮</div>
            </div>
          </div>
          <Link href={`/hurgelt2`} className="self-end">
            <div
              onClick={() => {
                if (userMe?.id) {
                  const orderIds = filteredOrderData.map((item) => item._id); // _id утгыг массив болгож ялгаж авах
                  createOrderPack({
                    userId: userMe.id, // Хэрэглэгчийн ID-г дамжуулна
                    orderPackPrice: totalSum,
                    orderId: orderIds, // Order _id утгуудыг дамжуулна
                    status: "new",
                  });
                } else {
                  console.error("User ID is undefined");
                }
              }}
              className="text-white bg-[#2563EB] px-9 py-2 text-sm rounded-2xl w-fit self-end"
            >
              Худалдан авах
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
