"use client";
import { DeesheeSum } from "@/assets/DeesheeSum";
import { DooshooSum } from "@/assets/DooshooSum";
import { useAuthContext } from "@/components/utils/authProvider";
import { api } from "@/lib/axios";
import Image from "next/image";
import { useEffect, useState } from "react";

type orderPackDataResponse = {
  _id: string;
  orderPackAdress: string;
  orderPackDetail: string;
  status: string;
  createdAt: Date;
  products: productsResponse[];
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

export default function Home() {
  const { userMe } = useAuthContext();
  const [orderPackData, setOrderPackData] = useState<orderPackDataResponse[]>(
    []
  );

  const [hideOrder, setHideOrder] = useState("Хэрэглэгчийн хэсэг");
  const [deeshee, setDeeshee] = useState(false);
  const [addNewOwog, setAddNewOwog] = useState<string>("");
  const [addNewUserName, setAddNewUserName] = useState<string>("");
  const [addNewPhone, setAddNewPhone] = useState<string>("");
  const [addNewEmail, setAddNewEmail] = useState<string>("");
  const [addNewAddress, setAddNewAddress] = useState<string>("");

  const editUserData = async ({
    _id,
    newOwog,
    newUserName,
    newPhone,
    newEmail,
    newAddress,
  }: {
    _id: string;
    newOwog: string;
    newUserName: string;
    newPhone: string;
    newEmail: string;
    newAddress: string;
  }) => {
    const token = localStorage.getItem("token");

    try {
      await api.put(
        "/auth/edit",
        { _id, newOwog, newUserName, newPhone, newEmail, newAddress },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.reload();
    } catch (error) {
      console.error("Error editing userData", error);
    }
  };

  const getOrderPack = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await api.get("/orderPack/oneUser", {
        params: { userId: userMe?.id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrderPackData(response.data.orderPacks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrderPack();
  }, []);

  return (
    <div
      className=" bg-white flex justify-center  "
      style={{ minHeight: "calc(100vh - 320.5px - 74px)" }}
    >
      <div className="px-[278px] pt-[100px] w-[1440px] pb-[76px] flex gap-5">
        <div className="flex flex-col w-[240px gap-1]">
          <button
            onClick={() => setHideOrder("Хэрэглэгчийн хэсэг")}
            className={` rounded-2xl px-4 py-2 w-full font-medium text-sm text-[#09090B] ${
              hideOrder === "Хэрэглэгчийн хэсэг" ? "bg-[#F4F4F5]" : ""
            }`}
          >
            Хэрэглэгчийн хэсэг
          </button>
          <button
            onClick={() => setHideOrder("Захиалгын түүх")}
            className={` rounded-2xl px-4 py-2 w-full font-medium text-sm text-[#09090B] ${
              hideOrder === "Захиалгын түүх" ? "bg-[#F4F4F5]" : ""
            }`}
          >
            Захиалгын түүх
          </button>
        </div>

        {/* Захиалгын түүх хэсэг */}
        <div
          className={`flex-1  flex-col ${
            hideOrder === "Захиалгын түүх" ? "flex" : "hidden"
          }`}
        >
          <div className="text-[#09090B] text-lg font-medium">
            Захиалгын түүх
          </div>
          <div className="py-6">
            <div className="h-[1px] w-full bg-[#E4E4E7] "></div>
          </div>
          <div className="flex flex-col gap-8">
            {orderPackData?.map((order, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 bg-[#F4F4F5] rounded-2xl"
              >
                <div className="w-full py-8 px-6 flex flex-col gap-4">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <div className="font-bold">
                        {new Date(order.createdAt).toLocaleString()}
                      </div>
                      <div className="text-white bg-[#2563EB] text-[12px] rounded-full font-semibold px-[10px] py-1">
                        {order.status}
                      </div>
                    </div>
                    <button
                      onClick={() => setDeeshee(!deeshee)}
                      className="flex justify-center items-center"
                    >
                      {deeshee === false ? <DeesheeSum /> : <DooshooSum />}
                    </button>
                  </div>
                  <div className="flex flex-col gap-2 pb-4">
                    {order.products.map((product, prodIndex) => (
                      <div
                        key={prodIndex}
                        className={` justify-between ${
                          deeshee === false ? "flex" : "hidden"
                        }`}
                      >
                        <div className="flex gap-2">
                          <div className="relative w-9 h-9 flex justify-center items-center">
                            <Image
                              fill
                              src={
                                product.product.image[0] ||
                                "https://res.cloudinary.com/dgivvztkg/image/upload/v1726459017/cld-sample-2.jpg"
                              }
                              alt="Product Image"
                              className="rounded-md"
                            />
                          </div>
                          <div className="flex flex-col text-xs">
                            <div>{product.product.productName}</div>
                            <div className="flex">
                              <div>{product.count} x </div>
                              <div>{product.price}₮</div>
                            </div>
                          </div>
                        </div>
                        <div className="font-bold text-xs flex items-center">
                          {product.count * product.price}₮
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between pt-4 border-t-[2px] border-dashed">
                    <div>Үнийн дүн:</div>
                    <div className="font-bold text-lg">
                      {order.products.reduce(
                        (acc, item) => acc + item.count * item.price,
                        0
                      )}
                      ₮
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`flex-1  flex-col  ${
            hideOrder === "Хэрэглэгчийн хэсэг" ? "flex" : "hidden"
          }`}
        >
          <div className="text-[#09090B] text-lg font-medium">
            Хэрэглэгчийн хэсэг
          </div>
          <div className="py-6">
            <div className="h-[1px] w-full bg-[#E4E4E7] "></div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="text-[#09090B] text-sm font-medium">Овог:</div>
              <input
                placeholder={userMe?.owog}
                className="w-full rounded-md border h-[28px] shadow-sm px-2"
                value={addNewOwog}
                onChange={(e) => setAddNewOwog(e.target.value)}
                type="text"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#09090B] text-sm font-medium">Нэр:</div>
              <input
                placeholder={userMe?.userName}
                className="w-full rounded-md border h-[28px] shadow-sm px-2"
                value={addNewUserName}
                onChange={(e) => setAddNewUserName(e.target.value)}
                type="text"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#09090B] text-sm font-medium">
                Утасны дугаар:
              </div>
              <input
                placeholder={userMe?.phone}
                className="w-full rounded-md border h-[28px] shadow-sm px-2"
                type="text"
                value={addNewPhone}
                onChange={(e) => setAddNewPhone(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#09090B] text-sm font-medium">
                Имэйл хаяг:
              </div>
              <input
                placeholder={userMe?.email}
                className="w-full rounded-md border h-[28px] shadow-sm px-2"
                type="e-mail"
                value={addNewEmail}
                onChange={(e) => setAddNewEmail(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#09090B] text-sm font-medium">Хаяг</div>
              <input
                placeholder={userMe?.address}
                className="w-full rounded-md border h-[94px] shadow-sm px-2"
                type="text"
                value={addNewAddress}
                onChange={(e) => setAddNewAddress(e.target.value)}
              ></input>
            </div>
          </div>
          <div
            className="mt-6 self-end font-medium bg-[#2563EB] text-white rounded-2xl py-2 px-9 cursor-pointer"
            onClick={() =>
              editUserData({
                _id: userMe?.id || "", // Хэрвээ _id байхгүй бол алдаа гарахаас сэргийлэх
                newOwog: addNewOwog,
                newUserName: addNewUserName,
                newPhone: addNewPhone,
                newEmail: addNewEmail,
                newAddress: addNewAddress,
              })
            }
          >
            Мэдээлэл шинэчлэх
          </div>
        </div>
      </div>
    </div>
  );
}
