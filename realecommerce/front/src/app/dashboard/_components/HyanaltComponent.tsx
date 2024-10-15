"use client";
import { OrlogoIcon } from "@/assets/OrlogoIcon";
import { RightDirectionIcon } from "@/assets/RightDirectionIcon";
import { Zahialga } from "@/assets/ZahialgaIcon";
import Image from "next/image";
import { GraphCard } from "./GraphCard";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";
type orderPackDataResponse = {
  _id: string;
  owog: string;
  userName: string;
  phoneNumber: string;
  orderPackAdress: string;
  orderPackDetail: string;
  status: string;
  createdAt: string;
  products: productsResponse[];
  userId: UserResponse;
};
type UserResponse = {
  _id: string;
  userName: string;
  email: string;
};
type productsResponse = {
  count: number;
  price: number;
  selectedSize: string;
  product: ProductResponse;
};
type ProductResponse = {
  _id: string;
  productName: string;
  image: string[];
  price: number;
};
export const HyanaltComponent = () => {
  const [orderPackData, setOrderPackData] = useState<orderPackDataResponse[]>(
    []
  );
  const getOrderPack = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await api.get("/orderPack", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrderPackData(response.data.orderPacks);
    } catch (error) {
      console.log(error);
    }
  };
  const sumOrderPrice = () => {
    return orderPackData.reduce((totalSum, orderPack) => {
      const orderTotal = orderPack.products.reduce((sum, product) => {
        return sum + product.count * product.price;
      }, 0);
      return totalSum + orderTotal;
    }, 0);
  };

  useEffect(() => {
    getOrderPack();
  }, []);
  const Initialdata = [
    {
      number: 1,
      name: "WOMEN'S HORSEBIT MULE",
      img: "/1.png",
      serial: "#12345678",
      price: 12000,
      count: 20,
    },
    {
      number: 2,
      name: "WOMEN'S HORSEBIT MULE",
      img: "/2.png",
      serial: "#12345678",
      price: 12000,
      count: 20,
    },
    {
      number: 3,
      name: "WOMEN'S HORSEBIT MULE",
      img: "/3.png",
      serial: "#12345678",
      price: 12000,
      count: 20,
    },
    {
      number: 4,
      name: "WOMEN'S HORSEBIT MULE",
      img: "/4.png",
      serial: "#12345678",
      price: 12000,
      count: 20,
    },
    {
      number: 5,
      name: "WOMEN'S HORSEBIT MULE",
      img: "/6.png",
      serial: "#12345678",
      price: 12000,
      count: 20,
    },
    {
      number: 7,
      name: "WOMEN'S HORSEBIT MULE",
      img: "/3.png",
      serial: "#12345678",
      price: 12000,
      count: 20,
    },
    {
      number: 8,
      name: "WOMEN'S HORSEBIT MULE",
      img: "/2.png",
      serial: "#12345678",
      price: 12000,
      count: 20,
    },
    {
      number: 9,
      name: "WOMEN'S HORSEBIT MULE",
      img: "/5.png",
      serial: "#12345678",
      price: 12000,
      count: 20,
    },
  ];
  return (
    <div className="w-full flex flex-col py-10 gap-9">
      <div className="flex gap-6">
        <div className="flex-1 bg-white rounded-xl p-4 flex flex-col gap-3">
          <div className="flex gap-2">
            <div>
              <OrlogoIcon />
            </div>
            <div className="font-semibold">Орлого</div>
          </div>
          <div className="font-bold text-3xl">
            {sumOrderPrice().toLocaleString()}₮
          </div>
          <div className="text-[#5E6166] text-sm">Нийт Орлого</div>
        </div>
        <div className="flex-1 bg-white rounded-xl p-4 flex flex-col gap-3">
          <div className="flex gap-2">
            <div>
              <Zahialga />
            </div>
            <div className="font-semibold">Захиалга</div>
          </div>
          <div className="font-bold text-3xl">{orderPackData.length}</div>
          <div className="text-[#5E6166] text-sm">Нийт Захиалга</div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex-1 bg-white rounded-xl py-4 px-6 flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="font-semibold text-lg ">Шилдэг бүтээгдэхүүн</div>
            <div>
              <RightDirectionIcon />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex bg-[#ecedf1] h-11 items-center text-[#3F4145] font-semibold text-sm ">
              <div className="flex-1 flex justify-center">№</div>
              <div className="flex-[4] flex justify-center">Бүтээгдэхүүн</div>
              <div className="flex-[2] flex justify-center">Зарагдсан</div>
              <div className="flex-[2] flex justify-center">Үнэ</div>
            </div>
            {Initialdata.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex  items-center  border-t-2 border-[#D6D8DB] py-4"
                >
                  <div className="flex-1 flex justify-center">
                    {item.number}
                  </div>
                  <div className="flex-[4] flex justify-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden ">
                      <Image
                        fill
                        src={item.img}
                        alt="aa"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-sm overflow-hidden">
                        {item.name}
                      </div>
                      <div className="text-[#3F4145] text-sm">
                        {item.serial}
                      </div>
                    </div>
                  </div>
                  <div className="flex-[2] flex justify-center text-sm">
                    {item.count}
                  </div>
                  <div className="flex-[2] flex justify-center text-sm">
                    {item.price}₮
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 bg-white rounded-xl py-4 px-6 flex flex-col gap-3 h-fit">
          <div className="flex justify-between">
            <div className="font-semibold text-lg ">Борлуулалт</div>
            <div>
              <RightDirectionIcon />
            </div>
          </div>
          <div className="">
            <GraphCard />
          </div>
        </div>
      </div>
    </div>
  );
};
