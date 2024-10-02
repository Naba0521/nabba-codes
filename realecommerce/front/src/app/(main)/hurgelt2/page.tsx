"use client"; // Next.js-д 'client component'-ийг зааж өгдөг
import { Check } from "@/assets/Check"; // Check компонентыг импортолдог
import { useAuthContext } from "@/components/utils/authProvider";
import axios from "axios"; // Axios-г импортолдож, HTTP хүсэлтүүдийг хийхэд ашиглана
import Image from "next/image"; // Next.js-ийн Image компонентыг импортолдож, зураг оруулахад ашиглана
import Link from "next/link"; // Link компонентыг импортолдож, хуудас хооронд шилжихэд ашиглана
import { useEffect, useState } from "react"; // React-ийн useEffect болон useState функцүүдийг импортолдож, компонентын төрлийг удирдахад ашиглана
type addOrderPackResponse = {
  userId: string;
  products: {
    product: string;
    price: number;
    count: number;
    selectedSize: string;
  }[];
  status: string;
  orderPackAdress: string;
  orderPackDetail: string;
};
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
// Home компонент
export default function Home() {
  const { userMe } = useAuthContext(); // Access userMe from AuthContext
  const [orderData, setOrderData] = useState<orderDataResponse>([]);
  const [notification, setNotification] = useState("");
  const [addOrderPackAdress, setAddOrderPackAdress] = useState<string>("");
  const [addOrderPackDetail, setAddOrderPackDetail] = useState<string>("");

  const deleteAllOrder = async (userId: string) => {
    const token = localStorage.getItem("token");
    try {
      // Send DELETE request to remove all orders
      const response = await axios.delete("http://localhost:3001/order/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { userId }, // Make sure the backend expects this data
      });

      console.log("Delete all orders response:", response.data); // Log the response for debugging

      // Optionally display a success message
      setNotification("Бүх захиалга амжилттай устгагдлаа.");
      setTimeout(() => {
        setNotification("");
      }, 2000);

      // Fetch the updated order data to refresh the UI
      getOrder();
    } catch (error) {
      console.error("Error removing all orders:", error);
    }
  };
  const createOrderPack = async (addOrderPack: addOrderPackResponse) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/orderPack",
        addOrderPack
      );

      // Log the full response for debugging
      console.log("Order pack creation response:", response);

      // After successfully creating the order pack, check if the message indicates success
      if (response.data.message === "orderPack Nemegdlee") {
        try {
          await deleteAllOrder(addOrderPack.userId);
          setNotification("Амжилттай үүсгэгдэж, сагс хоослогдлоо");
        } catch (deleteError) {
          console.error("Error deleting all orders:", deleteError); // Log deletion errors
        }
      } else {
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Error adding orderPack:", error); // Log order creation errors
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
  // Компонент анхдагчаар ачааллах үед getOrderPack функцыг дуудаж байна
  useEffect(() => {
    getOrder();
  }, []);

  // Бүх барааны нийт үнийг тооцоолох функц
  const calculateTotalPrice = () => {
    return filteredOrderData.reduce((total, pack) => {
      return total + pack.price * pack.count; // Барааны үнэ * Тоо
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
            <div>Сагс ({filteredOrderData.length})</div>{" "}
            {/* Сагсны барааны тоо */}
            <div className="flex flex-col gap-4">
              {filteredOrderData?.map(
                (
                  pack,
                  index // Захиалгын багцын мэдээллийг давтах
                ) => (
                  <div key={index} className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <div className="relative w-[80px] h-20">
                        <Image
                          src={pack.productId.image[0]} // Барааны зургийг гаргах
                          fill
                          alt={pack.productId.productName} // Барааны нэрийг alt-д ашиглаж болно
                          className="rounded-2xl"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div>{pack.productId.productName}</div>{" "}
                        {/* Барааны нэр */}
                        <div className="flex">
                          <div>{pack.count}x</div> {/* Тоо ширхэг */}
                          <div>{pack.price}₮</div> {/* Үнэ */}
                        </div>
                        <div className="font-bold">
                          {pack.price * pack.count}₮ {/* Нийт үнэ */}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="flex justify-between border-t-2 border-dashed pt-[16px]">
              <div>Нийт төлөх дүн:</div>
              <div className="font-bold">{calculateTotalPrice()}₮</div>
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
                    userMe?.address ||
                    "Хүргэлт хийгдэх хаягийг дэлгэрэнгүй оруулна уу."
                  }
                  className="rounded-[18px] border w-full min-h-[52px] pl-2 pt-2 text-[14px]"
                  value={addOrderPackAdress} // `value` нь хувьсагч байна
                  onChange={(e) => setAddOrderPackAdress(e.target.value)} // `onChange` нь текст оролтыг засах үед ажиллана
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-medium text-[14px]">Нэмэлт мэдээлэл:</div>
                <textarea
                  className="rounded-[18px] border w-full min-h-[66px] pt-2 pl-2 text-[14px]"
                  value={addOrderPackDetail}
                  onChange={(e) => setAddOrderPackDetail(e.target.value)}
                />
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
                <div
                  onClick={() => {
                    if (userMe?.id) {
                      const products = filteredOrderData.map((item) => ({
                        product: item.productId._id, // Pass only the product ID (string)
                        price: item.price, // Use the updated price
                        count: item.count, // Use the updated count
                        selectedSize: item.size, // Pass the selected size
                      }));

                      createOrderPack({
                        userId: userMe.id, // Pass the user ID
                        status: "Төлбөр төлөгдсөн", // Order status
                        products, // Array of products with updated count
                        orderPackAdress: addOrderPackAdress,
                        orderPackDetail: addOrderPackDetail,
                      });
                    } else {
                      console.error("User ID is undefined");
                    }
                  }}
                  className="border py-2 px-9 flex justify-center items-center rounded-2xl bg-[#2563EB] text-white text-[14px]"
                >
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
