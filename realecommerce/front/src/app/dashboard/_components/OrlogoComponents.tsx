"use client";

import { DownloadIcon } from "@/assets/DownloadIcon";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";
import { jsPDF } from "jspdf"; // Import jsPDF at the top
import "jspdf-autotable"; // Import autoTable plugin
import autoTable from "jspdf-autotable"; // Import autoTable

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

export const OrlogoComponents = () => {
  const [orderPackData, setOrderPackData] = useState<orderPackDataResponse[]>(
    []
  );
  const [filteredData, setFilteredData] = useState<orderPackDataResponse[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const getOrderPack = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await api.get("/orderPack", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrderPackData(response.data.orderPacks);
      setFilteredData(response.data.orderPacks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrderPack();
  }, []);

  useEffect(() => {
    filterData();
  }, [activeFilter]);

  const filterData = () => {
    const now = new Date();
    const filtered = orderPackData.filter((item) => {
      const createdAtDate = new Date(item.createdAt);
      switch (activeFilter) {
        case "today":
          return (
            createdAtDate.getDate() === now.getDate() &&
            createdAtDate.getMonth() === now.getMonth() &&
            createdAtDate.getFullYear() === now.getFullYear()
          );
        case "week":
          const sevenDaysAgo = new Date(now);
          sevenDaysAgo.setDate(now.getDate() - 7);
          return createdAtDate >= sevenDaysAgo && createdAtDate <= now;
        case "all":
        default:
          return true;
      }
    });
    setFilteredData(filtered);
  };

  const sumOrderPrice = () => {
    return filteredData.reduce((totalSum, orderPack) => {
      const orderTotal = orderPack.products.reduce((sum, product) => {
        return sum + product.count * product.price;
      }, 0);
      return totalSum + orderTotal;
    }, 0);
  };

  // Function to generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    const tableData = filteredData.map((item) => {
      const totalPrice = item.products.reduce((sum, product) => {
        return sum + product.count * product.price;
      }, 0);
      return [
        item._id,
        item.userName.slice(0, 12),
        item.phoneNumber.slice(0, 8),
        totalPrice.toLocaleString(), // Ensure the currency symbol is part of the string
        new Date(item.createdAt).toLocaleString("en-GB"),
      ];
    });

    autoTable(doc, {
      head: [["ID ", "UserName", "PhoneNumber", "SumPrice", "Date"]],
      body: tableData,
    });

    doc.save("order_pack_data.pdf");
  };

  return (
    <div className="flex flex-col gap-2 w-[724px]">
      <div className="flex flex-col bg-white rounded-[12px] ">
        <div className="flex justify-between p-6">
          <div className="font-bold text-lg">Орлого</div>
          <div
            className="flex gap-1 bg-[#f6f6f6] hover:bg-gray-400 rounded-lg py-2 px-3 items-center cursor-pointer"
            onClick={generatePDF}
          >
            <div>
              <DownloadIcon />
            </div>
            <div>Хуулга татах</div>
          </div>
        </div>
        <div className="flex justify-between p-6 border-t-[1px]">
          <div className="text-[28px] font-bold">
            {sumOrderPrice().toLocaleString()}₮
          </div>
          <div className="flex gap-2 text-sm">
            <div
              className={`py-3 px-4 rounded-[8px] cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#18BA51] text-white"
                  : "bg-white border"
              }`}
              onClick={() => setActiveFilter("all")}
            >
              Нийт хугацаанд
            </div>
            <div
              className={`py-3 px-4 rounded-[8px] cursor-pointer ${
                activeFilter === "today"
                  ? "bg-[#18BA51] text-white"
                  : "bg-white border"
              }`}
              onClick={() => setActiveFilter("today")}
            >
              Өнөөдөр
            </div>
            <div
              className={`py-3 px-4 rounded-[8px] cursor-pointer ${
                activeFilter === "week"
                  ? "bg-[#18BA51] text-white"
                  : "bg-white border"
              }`}
              onClick={() => setActiveFilter("week")}
            >
              7 хоног
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-lg">
        <div className="flex py-4 text-[#3F4145] text-[12px] font-semibold">
          <div className="w-[169px] flex justify-center pl-3">
            Захиалгын ID дугаар
          </div>
          <div className="w-[268px] flex justify-center">Захиалагч</div>
          <div className="w-[137px] flex justify-center">Төлбөр</div>
          <div className="w-[150px] flex justify-center">Огноо</div>
        </div>
        {filteredData.map((item, index) => {
          const totalPrice = item.products.reduce((sum, product) => {
            return sum + product.count * product.price;
          }, 0);

          const createdAtDate = new Date(item.createdAt);
          const formattedDate = createdAtDate
            .toLocaleString("en-GB", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
            .replace(",", "");

          return (
            <div key={index} className="flex py-4 border-t-[2px] text-[14px]">
              <div className="w-[169px] flex justify-center pl-3 font-semibold items-center">
                {item._id}
              </div>
              <div className="w-[268px] flex flex-col items-center justify-center">
                <div>{item.userName}</div>
                <div>{item.phoneNumber}</div>
              </div>
              <div className="w-[137px] flex justify-center items-center">
                {totalPrice.toLocaleString()}₮
              </div>
              <div className="w-[150px] flex justify-center items-center">
                {formattedDate}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
