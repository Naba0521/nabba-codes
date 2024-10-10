"use client";
import { BlackSearchIcon } from "@/assets/BlackSearchIcon";
import { CalendarIcon } from "@/assets/CalendarIcon";
import { DooshooSum } from "@/assets/DooshooSum";
import { RightDirectionIcon } from "@/assets/RightDirectionIcon";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { api } from "@/lib/axios";

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
export const ZahialgaComponent = () => {
  const [orderPackData, setOrderPackData] = useState<orderPackDataResponse[]>(
    []
  );
  const [selectedTolow, setSelectedTolow] = useState(0);
  const Tolowuud = [
    "Бүгд",
    "Шинэ захиалга",
    "Бэлтгэгдэж байна",
    "Хүргэлтэнд гарсан",
    "Хүргэгдсэн",
    "Цуцлагдсан",
  ];
  const Tolowuud1 = [
    "Шинэ захиалга",
    "Бэлтгэгдэж байна",
    "Хүргэлтэнд гарсан",
    "Хүргэгдсэн",
    "Цуцлагдсан",
  ];

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
  const editOrderPackStatus = async (_id: string, newStatus: string) => {
    const token = localStorage.getItem("token");
    try {
      await api.put(
        "/orderPack",
        { _id, newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOrderPack();
  }, []);
  return (
    <div className="flex flex-col  w-full gap-8">
      <div className="flex border-b">
        {Tolowuud.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setSelectedTolow(index)}
              className={`text-sm text-[#3F4145] py-2 px-4 cursor-pointer  ${
                selectedTolow === index
                  ? "font-bold border-b-[2px] border-black"
                  : ""
              }`}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="flex px-4  justify-between">
        <div className="flex gap-2 text-sm">
          <div className="bg-[#18BA51] text-white text-sm font-semibold py-3 px-4 rounded-[8px]">
            Өнөөдөр
          </div>
          <div className="bg-white text-sm font-semibold py-3 px-4 rounded-[8px]">
            7 хоног
          </div>
          <div className="bg-white text-sm font-semibold py-3 px-4 rounded-[8px] flex gap-2 items-center">
            <div>
              <CalendarIcon />
            </div>
            <div>Сараар</div>
            <div>
              <DooshooSum />
            </div>
          </div>
        </div>
        <div className="bg-white text-sm font-semibold border py-3 px-4 rounded-[8px] flex gap-2 items-center">
          <div>
            <BlackSearchIcon />
          </div>
          <input
            className="outline-none text-[#8B8E95] text-sm"
            placeholder="Дугаар, Имэйл"
          ></input>
        </div>
      </div>
      <div className="flex flex-col px-6 bg-white py-5 rounded-2xl">
        <div className="font-bold text-lg px-6 bg-white">Захиалга</div>
        <Table>
          <TableCaption>Захиалгын мэдээлэл</TableCaption>
          <TableHeader>
            <TableRow className=" text-[12px] text-[#3F4145] bg-[#f7f7f7] font-semibold">
              <TableHead className="w-[200px]">Захиалгын ID дугаар</TableHead>
              <TableHead>Үйлчлүүлэгч</TableHead>
              <TableHead>Огноо</TableHead>
              <TableHead>Цаг</TableHead>
              <TableHead>Төлбөр</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead className="text-center">Дэлгэрэнгүй</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orderPackData.map((item, index) => {
              const TotalPrice = item.products.reduce((acc, product) => {
                return acc + product.count * product.price;
              }, 0);
              return (
                <TableRow key={index} className="py-4">
                  <TableCell className="font-medium w-[200px]">
                    {item._id}
                  </TableCell>
                  <TableCell>
                    <div>{item.userName}</div>
                    <div>{item.userId.email}</div>
                  </TableCell>
                  <TableCell>{item.createdAt.slice(0, 10)}</TableCell>
                  <TableCell>{item.createdAt.slice(11, 16)}</TableCell>
                  <TableCell>{TotalPrice}₮</TableCell>
                  <TableCell>
                    <div className="bg-[#C1E6CF] text-[#0A4E22] py-2 px-4 h-fit w-fit text-center rounded-full flex self-center">
                      <Select
                        onValueChange={(newStatus) =>
                          editOrderPackStatus(item._id, newStatus)
                        }
                      >
                        <SelectTrigger className="w-[180px] outline-none border-none shadow-none">
                          <SelectValue placeholder={item.status} />
                        </SelectTrigger>
                        <SelectContent>
                          {Tolowuud1.map((statusItem, index) => {
                            return (
                              <SelectItem key={index} value={statusItem}>
                                {statusItem}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`/dashboard/zahialga/${item._id}`}
                      className="flex justify-center items-center"
                    >
                      <RightDirectionIcon />
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
