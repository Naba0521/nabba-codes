"use client";
import { CarIcon } from "@/assets/CarIcon";
import { DooshooSum } from "@/assets/DooshooSum";
import { LeftDirectionArrow } from "@/assets/LeftDirectionArrow";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type ParamsType = {
  id: string;
};
type orderPackDataResponse = {
  _id: string;
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
  phone: string;
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
export default function home() {
  const [orderPackData, setOrderPackData] = useState<orderPackDataResponse>();
  const { id } = useParams<ParamsType>();

  const getOneOrderPack = async (id: string) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        `http://localhost:3001/orderPack/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token in the headers
          },
        }
      );
      setOrderPackData(response.data.orderPack);
      console.log(response.data.orderPack);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOneOrderPack(id);
  }, [id]);
  const totalPrice = orderPackData?.products.reduce(
    (total, item) => total + item.price * item.count,
    0
  );
  const deliveryFee = 5000;
  return (
    <div className="flex-1 flex flex-col gap-6">
      <div className="flex gap-4 items-center p-4 bg-white">
        <Link href={`/dashboard/zahialga`}>
          <div className="">
            <LeftDirectionArrow />
          </div>
        </Link>
        <div>Захиалгын дэлгэрэнгүй</div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-6 w-[624px] bg-white rounded-lg min-h-[82vh] p-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <div className="text-[#3F4145]">Захиалгын ID дугаар: </div>
              <div className="font-semibold">{orderPackData?._id}</div>
            </div>
            <div className="flex gap-2 bg-[#ECEDF0] rounded-xl items-center justify-center py-1 px-2 h-fit">
              <div className="text-[#3F4145]">{orderPackData?.status}</div>
              <div>
                <DooshooSum />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[#3F4145]">Захиалагч: Хувь хүн </div>
            <div className="flex">
              <div className="font-semibold">
                {orderPackData?.userId.userName}-
              </div>
              <div className="text-[#3F4145]">
                {orderPackData?.userId?.email},{orderPackData?.userId.phone}
              </div>
            </div>
          </div>
          {orderPackData?.products.map((item, index) => {
            return (
              <div
                key={index}
                className="flex rounded-lg overflow-hidden bg-[#F7F7F8]"
              >
                <div className="w-[160px]  relative">
                  <Image
                    fill
                    src={item.product.image[0]}
                    alt="aa"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col py-4 px-6 gap-3">
                  <div className="flex flex-col">
                    <div className="font-bold text-2xl">
                      {item.product.productName}
                    </div>
                    <div className="text-[#3F4145] text-[14px]">
                      {orderPackData.createdAt.slice(0, 10)}
                    </div>
                    <div className="text-[#3F4145] text-[14px]">
                      Бүтээгдэхүүний ID: {item.product._id}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex">
                      <div>Тоо ширхэг: {item.count}</div>
                      <div className="text-[#3F4145]">* ₮{item.price}</div>
                    </div>
                    <div className="font-semibold text-lg">
                      ₮{item.price * item.count}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-6  flex-1">
          <div className="flex flex-col bg-white  rounded-lg ">
            <div className="py-5 px-6">Хүргэлтийн мэдээлэл</div>
            <div className="h-[1px] w-full bg-gray-300"></div>
            <div className="flex flex-col py-5 px-6 ">
              <div>Гэр</div>
              <div className="pb-5 font-semibold">
                {orderPackData?.orderPackAdress}
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white  rounded-lg">
            <div className="py-5 px-6">Төлбөрийн мэдээлэл</div>
            <div className="h-[1px] w-full bg-gray-300"></div>
            <div className="flex flex-col p-6">
              <div>Бүтээгдэхүүн</div>
              <div className="flex flex-col gap-4">
                {orderPackData?.products.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center ">
                        <div className="w-[262px] overflow-hidden text-sm font-semibold text-[#3F4145]">
                          {item.product.productName}
                        </div>
                        <div className=" font-semibold text-[#3F4145]">
                          x {item.count}
                        </div>
                      </div>
                      <div className=" font-semibold text-[#3F4145]">
                        ₮{item.price * item.count}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between py-5">
                <div className="flex">
                  <div className="w-[262px]"> Хүргэлт</div>
                  <div>
                    <CarIcon />
                  </div>
                </div>
                <div className=" font-semibold text-[#3F4145]">
                  ₮ {deliveryFee}
                </div>
              </div>
              <div className="h-[1px] w-full bg-gray-300"></div>
              <div className="flex justify-between text-lg font-semibold py-5">
                <div>Нийт төлсөн дүн</div>
                <div>₮{totalPrice ? totalPrice + deliveryFee : 0}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
