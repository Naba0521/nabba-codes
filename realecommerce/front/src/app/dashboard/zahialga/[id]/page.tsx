import { CarIcon } from "@/assets/CarIcon";
import { DooshooSum } from "@/assets/DooshooSum";
import { LeftDirectionArrow } from "@/assets/LeftDirectionArrow";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const zahialgaData = [
    {
      productName: "WOMEN'S HORSEBIT MULE Women’s",
      count: "2",
      price: 677100,
    },
    {
      productName: "WOMEN'S HORSEBIT MULE Women’s",
      count: "2",
      price: 125700,
    },
  ];
  const zahialgaBaraa = [
    {
      id: "30349049903",
      img: "/2.png",
      productName: "WOMEN'S HORSEBIT MULE Women’s",
      date: "2024-01-20",
      count: 3,
      price: 225700,
    },
    {
      id: "30349049903",
      img: "/1.png",
      productName: "WOMEN'S HORSEBIT MULE Women’s",
      date: "2024-01-20",
      count: 3,
      price: 225700,
    },
    {
      id: "30349049903",
      img: "/3.png",
      productName: "WOMEN'S HORSEBIT MULE Women’s",
      date: "2024-01-20",
      count: 3,
      price: 225700,
    },
  ];
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
      setOrderPackData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOneOrderPack(id);
  }, []);
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
              <div className="font-semibold">#12345678</div>
            </div>
            <div className="flex gap-2 bg-[#ECEDF0] rounded-xl items-center justify-center py-1 px-2 h-fit">
              <div className="text-[#3F4145]">Бэлтгэгдэж байна</div>
              <div>
                <DooshooSum />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[#3F4145]">Захиалагч: Хувь хүн </div>
            <div className="flex">
              <div className="font-semibold">Solongo Zoloo-</div>
              <div className="text-[#3F4145]">
                Zoloosoko0526@gmail.com, 88556061
              </div>
            </div>
          </div>
          {zahialgaBaraa.map((item, index) => {
            return (
              <div
                key={index}
                className="flex rounded-lg overflow-hidden bg-[#F7F7F8]"
              >
                <div className="w-[160px]  relative">
                  <Image
                    fill
                    src={item.img}
                    alt="aa"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col py-4 px-6 gap-3">
                  <div className="flex flex-col">
                    <div className="font-bold text-2xl">{item.productName}</div>
                    <div className="text-[#3F4145] text-[14px]">2024-01-20</div>
                    <div className="text-[#3F4145] text-[14px]">
                      Бүтээгдэхүүний ID: {item.id}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex">
                      <div>Тоо ширхэг: {item.count}</div>
                      <div className="text-[#3F4145]">* ₮{item.price}</div>
                    </div>
                    <div className="font-semibold text-lg">
                      {" "}
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
                Улаанбаатар, Сонгинохайрхан дүүрэг, 1-р хороо, 14r bair 8r orts
                6r darvar
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white  rounded-lg">
            <div className="py-5 px-6">Төлбөрийн мэдээлэл</div>
            <div className="h-[1px] w-full bg-gray-300"></div>
            <div className="flex flex-col p-6">
              <div>Бүтээгдэхүүн</div>
              <div className="flex flex-col gap-4">
                {zahialgaData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center ">
                        <div className="w-[262px] overflow-hidden text-sm font-semibold text-[#3F4145]">
                          {item.productName}
                        </div>
                        <div className=" font-semibold text-[#3F4145]">
                          x {item.count}
                        </div>
                      </div>
                      <div className=" font-semibold text-[#3F4145]">
                        ₮{item.price}
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
                <div className=" font-semibold text-[#3F4145]">₮ 5,000</div>
              </div>
              <div className="h-[1px] w-full bg-gray-300"></div>
              <div className="flex justify-between text-lg font-semibold py-5">
                <div>Нийт төлсөн дүн</div>
                <div>₮807,800</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
