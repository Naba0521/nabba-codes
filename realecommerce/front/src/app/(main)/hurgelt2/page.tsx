"use client"; // Next.js-д 'client component'-ийг зааж өгдөг
import { Check } from "@/assets/Check"; // Check компонентыг импортолдог
import { useAuthContext } from "@/components/ui/utils/authProvider";
import axios from "axios"; // Axios-г импортолдож, HTTP хүсэлтүүдийг хийхэд ашиглана
import Image from "next/image"; // Next.js-ийн Image компонентыг импортолдож, зураг оруулахад ашиглана
import Link from "next/link"; // Link компонентыг импортолдож, хуудас хооронд шилжихэд ашиглана
import { useEffect, useState } from "react"; // React-ийн useEffect болон useState функцүүдийг импортолдож, компонентын төрлийг удирдахад ашиглана

// Ангиллын интерфэйс
interface category {
  _id: string; // Ангиллын ID
  categoryName: string; // Ангиллын нэр
}

// Барааны интерфэйс
interface Product {
  _id: string; // Барааны ID
  productName: string; // Барааны нэр
  price: number; // Барааны үнэ
  image: string[]; // Барааны зургийн массив
  category: category[]; // Барааны ангилал
  size: string[]; // Барааны хэмжээ
  quantity: number; // Барааны тоо хэмжээ
  saledCount: number; // Зарагдсан тоо
  salePercent: number; // Хямдралын хувь
}

// Захиалгын багцын хариу интерфэйс
type orderPackDataResponse = {
  products: {
    product: Product; // Бараа
    price: number; // Үнэ
    count: number; // Тоо
    selectedSize: string; // Сонгосон хэмжээ
  }[];
  userId: string; // Хэрэглэгчийн ID
  status: string; // Статус
}[];

// Home компонент
export default function Home() {
  const { userMe } = useAuthContext(); // Access userMe from AuthContext

  const [orderPackData, setOrderPackData] = useState<orderPackDataResponse>(); // Захиалгын багцын мэдээллийг хадгалах state

  // Захиалгын багцын мэдээллийг авах функц
  const getOrderPack = async () => {
    try {
      const response = await axios.get("http://localhost:3001/orderPack"); // Захиалгын багцын мэдээллийг авах
      setOrderPackData(response.data.orderPacks); // Хариуг state-д хадгална
      console.log(response.data.orderPacks); // Консолд мэдээллийг хэвлэнэ
    } catch (error) {
      console.log(error); // Алдаа гарах үед консолд хэвлэнэ
    }
  };

  // Компонент анхдагчаар ачааллах үед getOrderPack функцыг дуудаж байна
  useEffect(() => {
    getOrderPack();
  }, []);

  // Бүх барааны нийт үнийг тооцоолох функц
  const calculateTotalPrice = () => {
    return orderPackData?.reduce((total, pack) => {
      return (
        total +
        pack.products.reduce((packTotal, orderItem) => {
          return packTotal + orderItem.price * orderItem.count; // Барааны үнэ * Тоо
        }, 0)
      );
    }, 0);
  };

  return (
    <div className="py-4 px-6 flex justify-center w-full bg-[#f7f7f7]">
      <div className="w-[1440px] px-[200px] py-16 flex flex-col items-center gap-8">
        <div className="flex items-center justify-center">
          <Link href={`/hurgelt`}>
            <div className="w-8 h-8 bg-[#2563EB] rounded-2xl flex justify-center items-center text-white">
              <Check />
            </div>
          </Link>
          <div className="h-[1px] w-20 bg-[#2563EB] flex justify-center items-center"></div>
          <Link href={`/hurgelt2`}>
            <div className="w-8 h-8 bg-[#2563EB] rounded-2xl flex justify-center items-center font-bold text-white">
              2
            </div>
          </Link>
          <div className="h-[1px] w-20 bg-[#18181B] flex justify-center items-center"></div>
          <div className="w-8 h-8 border-black border rounded-2xl flex justify-center items-center">
            3
          </div>
        </div>
        <div className="flex gap-5 w-full">
          <div className="py-8 px-6 flex flex-col flex-1 gap-4 bg-white rounded-xl h-fit">
            <div>
              Сагс ({orderPackData && orderPackData[0]?.products.length})
            </div>{" "}
            {/* Сагсны барааны тоо */}
            <div className="flex flex-col gap-4">
              {orderPackData?.map(
                (
                  pack,
                  index // Захиалгын багцын мэдээллийг давтах
                ) => (
                  <div key={index} className="flex flex-col gap-4">
                    {pack.products.map(
                      (
                        orderItem,
                        idx // Бараа мэдээллийг давтах
                      ) => (
                        <div key={idx} className="flex gap-4">
                          <div className="relative w-[80px] h-20">
                            <Image
                              src={orderItem.product.image[0]} // Барааны зургийг гаргах
                              fill
                              alt={orderItem.product.productName} // Барааны нэрийг alt-д ашиглаж болно
                              className="rounded-2xl"
                            />
                          </div>
                          <div className="flex flex-col">
                            <div>{orderItem.product.productName}</div>{" "}
                            {/* Барааны нэр */}
                            <div className="flex">
                              <div>{orderItem.count}x</div> {/* Тоо ширхэг */}
                              <div>{orderItem.price}₮</div> {/* Үнэ */}
                            </div>
                            <div className="font-bold">
                              {orderItem.price * orderItem.count}₮
                            </div>{" "}
                            {/* Нийт үнэ */}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )
              )}
            </div>
            <div className="flex justify-between border-t-2 border-dashed pt-[16px]">
              <div>Нийт төлөх дүн:</div>
              <div className="font-bold">{calculateTotalPrice()}₮</div>{" "}
              {/* Нийт дүнг тооцоолно */}
            </div>
          </div>
          <div className="flex-[2] flex flex-col p-8 rounded-2xl bg-white gap-9">
            <div>2. Хүргэлтийн мэдээлэл оруулах</div>
            <div className="flex flex-col gap-6">
              {/* Хүргэлтийн мэдээллийг оруулах талбарууд */}
              <div className="flex flex-col gap-2">
                <div className="font-medium text-[14px]">Овог:</div>
                <input
                  className="rounded-[18px] border w-full pl-2 text-[14px]"
                  placeholder={`${userMe?.userName}`}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-medium">Нэр:</div>
                <input
                  className="rounded-[18px] border w-full pl-2 text-[14px] py-1"
                  placeholder={`${userMe?.userName}`}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-medium text-[14px]">Утасны дугаар:</div>
                <input
                  className="rounded-[18px] border w-full pl-2 text-[14px]"
                  placeholder={userMe?.phone || "Утасны дугаар оруулна уу"}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-medium text-[14px]">Хаяг:</div>
                <textarea
                  placeholder={
                    userMe?.phone ||
                    "Хүргэлт хийгдэх хаягийг дэлгэрэнгүй оруулна уу."
                  }
                  className="rounded-[18px] border w-full min-h-[52px] pl-2 pt-2 text-[14px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-medium text-[14px]">Нэмэлт мэдээлэл:</div>
                <textarea className="rounded-[18px] border w-full min-h-[66px] pt-2 pl-2 text-[14px]" />
                <div className="text-xs text-[#71717A]">
                  Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <Link href={`/hurgelt`}>
                <div className="border py-2 px-9 flex justify-center items-center rounded-2xl text-[14px]">
                  Буцах
                </div>
              </Link>
              <Link href={`/hurgelt3`}>
                <div className="border py-2 px-9 flex justify-center items-center rounded-2xl bg-[#2563EB] text-white text-[14px]">
                  Төлбөр төлөх
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
