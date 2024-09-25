"use client";

import { BHeart } from "@/assets/BHeart";
import { useAuthContext } from "@/components/ui/utils/authProvider";
import Image from "next/image";

export default function Home() {
  const { userMe, savedProductData, loading } = useAuthContext();

  // Filter saved products based on userId
  const filteredSavedProducts = savedProductData.filter(
    (savedProduct) => savedProduct.userId === userMe?.id
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading...</div>
      </div>
    ); // Show a loading state
  }

  return (
    <div className="min-h-[65vh] w-full bg-[#f7f7f7] flex justify-center pt-[52px] pb-[52px]">
      <div className="w-[622px] flex flex-col gap-4 ">
        <div className="flex gap-1">
          <div className="font-bold text-[20px]">Хадгалсан бараа</div>
          <div className="font-medium text-xl text-[#5E6166]">
            ({filteredSavedProducts.length}) {/* Show filtered count */}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {filteredSavedProducts.map((item, index) => (
            <div
              key={index}
              className="flex p-4 bg-white rounded-2xl justify-between"
            >
              <div className="flex gap-6">
                <div className="relative w-[100px] h-[100px] rounded-2xl overflow-hidden">
                  <Image
                    src={item.productId.image[0] || "/placeholder.jpg"}
                    className="object-contain"
                    fill
                    alt={item.productId.productName}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div>{item.productId.productName}</div>
                  <div className="text-sm font-bold">
                    {item.productId.price}₮
                  </div>
                  <div className="py-1 px-3 bg-[#2563EB] rounded-xl w-fit font-medium text-[14px] text-white">
                    Сагслах
                  </div>
                </div>
              </div>
              <div>
                <BHeart bgColor="red" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
