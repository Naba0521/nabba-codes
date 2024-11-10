"use client";

import { Heart } from "@/assets/Heart";
import { Logo } from "@/assets/logo";
import { ProfileIcon } from "@/assets/ProfileIcon";
import { Search } from "@/assets/Search";
import { Tereg } from "@/assets/Tereg";
import Link from "next/link";
import { SearchCard } from "./SearchCard";
import { useState, useEffect } from "react";
import { useAuthContext } from "@/components/utils/authProvider";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { userMe, savedProductData, orderData } = useAuthContext();
  const [message, setMessage] = useState<string | null>(null);

  const handleSavedProductsClick = () => {
    if (!userMe?.userName) {
      setMessage("Та нэвтрэх шаардлагатай");
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="py-4 px-6 bg-black flex flex-col items-center justify-center w-full relative">
      <div className="w-full max-w-[1440px] flex justify-between items-center text-white">
        {/* Left Section - Logo and Navigation */}
        <div className="flex items-center gap-4">
          <Link href={`/`}>
            <div>
              <Logo />
            </div>
          </Link>
          <Link href={`/`} className="hidden sm:block">
            <div>ECOMMERCE</div>
          </Link>
          <Link href={`/product`}>
            <div>Ангилал</div>
          </Link>
        </div>

        {/* Search Input */}
        <div className="sm:flex hidden w-full max-w-[300px] bg-[#71717A] items-center py-2 px-4 gap-4 rounded-md relative">
          <div>
            <Search />
          </div>
          <input
            type="search"
            placeholder="Бүтээгдэхүүн хайх"
            className="bg-[#71717A] outline-none w-full text-sm sm:text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Right Section - Icons and Auth */}
        <div className="flex items-center gap-4 sm:gap-6">
          {userMe?.userName ? (
            <Link href="/saved" className="relative h-6 cursor-pointer">
              <div
                className={`${
                  savedProductData?.length
                    ? "absolute left-3.5 bottom-4 bg-[#2563EB] text-white rounded-full text-[10px] w-4 h-4 flex justify-center items-center"
                    : "hidden"
                }`}
              >
                {savedProductData?.length}
              </div>
              <Heart />
            </Link>
          ) : (
            <div
              className="relative h-6 cursor-pointer"
              onClick={handleSavedProductsClick}
            >
              <Heart />
            </div>
          )}

          {userMe?.userName ? (
            <Link href="/hurgelt">
              <div className="relative h-6">
                <div
                  className={`${
                    orderData?.length
                      ? "absolute left-3.5 bottom-4 bg-[#2563EB] text-white rounded-full text-[10px] w-4 h-4 flex justify-center items-center"
                      : "hidden"
                  }`}
                >
                  {orderData?.length}
                </div>
                <Tereg />
              </div>
            </Link>
          ) : (
            <div
              className="relative h-6 cursor-pointer"
              onClick={() => setMessage("Та нэвтрэх шаардлагатай")}
            >
              <Tereg />
            </div>
          )}

          {userMe?.userName ? (
            <Link href="/userInfo1" className="relative h-6">
              <ProfileIcon />
            </Link>
          ) : (
            <div
              className="relative h-6 cursor-pointer"
              onClick={() => setMessage("Та нэвтрэх шаардлагатай")}
            >
              <ProfileIcon />
            </div>
          )}

          {/* Auth Buttons */}
          {!userMe?.userName ? (
            <div className="flex gap-2 text-white">
              <Link href={`/signUp`}>
                <button className="hidden sm:block bg-black border border-[#2563EB] py-1 px-2 rounded-md font-medium text-sm sm:text-base">
                  Бүртгүүлэх
                </button>
              </Link>
              <Link href={`/logIn`}>
                <button className="bg-[#2563EB] py-1 px-2 rounded-md font-medium text-sm sm:text-base">
                  Нэвтрэх
                </button>
              </Link>
            </div>
          ) : (
            <div className="text-white  gap-2 items-center text-sm sm:text-base hidden lg:flex">
              <div> Сайн байна уу, {userMe.userName}</div>
            </div>
          )}
        </div>
      </div>

      {/* Search Results Display */}
      {searchTerm && (
        <div className="bg-white flex absolute top-20 rounded-lg h-fit justify-center z-50 p-8 border max-w-[90%] md:max-w-[400px]">
          <SearchCard searchTerm={searchTerm} />
        </div>
      )}

      {/* Notification Message */}
      {message && (
        <div className="absolute top-6 right-6 bg-red-500 text-white p-2 rounded-lg shadow-md z-50 text-sm sm:text-base">
          {message}
        </div>
      )}
    </div>
  );
};
