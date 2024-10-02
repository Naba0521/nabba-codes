"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { DeleteIcon } from "@/assets/DeleteIcon";
import Image from "next/image";
import { useAuthContext } from "@/components/utils/authProvider";

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

export default function Home() {
  const { userMe } = useAuthContext(); // Access userMe from AuthContext
  const [orderData, setOrderData] = useState<orderDataResponse>([]);
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const [notification, setNotification] = useState("");

  const getOrder = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get("http://localhost:3001/order", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrderData(response.data.orders);
      const initialCounts = response.data.orders.reduce((acc, order) => {
        acc[order._id] = order.count;
        return acc;
      }, {});
      setCounts(initialCounts);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredOrderData = orderData.filter(
    (orderData) => orderData.userId === userMe?.id
  );

  const editOrderCount = async (_id: string, newCount: number) => {
    const token = localStorage.getItem("token");
    try {
      await axios.put(
        "http://localhost:3001/order",
        { _id, newCount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Error editing order count:", error);
    }
  };

  const deleteOrder = async (_id: string) => {
    const token = localStorage.getItem("token");

    try {
      await axios.delete("http://localhost:3001/order", {
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

  useEffect(() => {
    getOrder();
  }, []);

  const handleIncrement = (id: string) => {
    setCounts((prev) => {
      const updatedCount = (prev[id] || 0) + 1; // Increment the count
      editOrderCount(id, updatedCount); // Update the backend
      return { ...prev, [id]: updatedCount }; // Update the local state
    });
  };

  const handleDecrement = (id: string) => {
    setCounts((prev) => {
      const updatedCount = Math.max((prev[id] || 1) - 1, 1); // Ensure count doesn't go below 1
      editOrderCount(id, updatedCount); // Update the backend
      return { ...prev, [id]: updatedCount }; // Update the local state
    });
  };

  const totalSum = filteredOrderData.reduce(
    (acc, item) => acc + item.price * (counts[item._id] || item.count),
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
                filteredOrderData.map((item) => (
                  <div
                    key={item._id}
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
                          <div>Size: {item.size}</div>
                          <div className="flex">
                            <button
                              className="w-8 h-8 border rounded-2xl bg-white"
                              onClick={() => handleDecrement(item._id)}
                            >
                              -
                            </button>
                            <div className="w-8 h-8 flex justify-center items-center">
                              {counts[item._id] || item.count}{" "}
                              {/* Displaying count from state */}
                            </div>
                            <button
                              className="w-8 h-8 border rounded-2xl bg-white"
                              onClick={() => handleIncrement(item._id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div>
                          {item.price * (counts[item._id] || item.count)}₮
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <button
                        onClick={() => deleteOrder(item._id)}
                        className="flex justify-center items-center w-10 h-10 hover:bg-gray-100 rounded-full"
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div>Сагс хоосон байна</div>
              )}
            </div>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <div>Нийт дүн:</div>
            <div>{totalSum}₮</div>
          </div>
        </div>
      </div>
    </div>
  );
}
