"use client";

import { Heart } from "@/assets/Heart";
import { Logo } from "@/assets/logo";
import { ProfileIcon } from "@/assets/ProfileIcon";
import { Search } from "@/assets/Search";
import { Tereg } from "@/assets/Tereg";
import Link from "next/link";
import { SearchCard } from "./SearchCard";
import { useState } from "react";
import { useAuthContext } from "@/components/utils/authProvider"; // Import the useAuthContext hook

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // User input for search
  const { userMe, savedProductData, orderData, LogOut } = useAuthContext(); // Access userMe from AuthContext

  return (
    <div className="py-4 px-6 bg-black flex flex-col items-center justify-center w-full relative">
      <div className="w-[1440px] flex justify-between text-white">
        <div className="flex items-center gap-4">
          <Link href={`/`}>
            <div>
              <Logo />
            </div>
          </Link>
          <Link href={`/`}>
            <div>ECOMMERCE</div>
          </Link>
          <Link href={`/product`}>
            <div>Ангилал</div>
          </Link>
        </div>

        {/* Search Input */}
        <div className="flex w-[300px] bg-[#71717A] items-center py-2 px-4 gap-4 rounded-md relative">
          <div>
            <Search />
          </div>
          <input
            type="search"
            placeholder="Бүтээгдэхүүн хайх"
            className="bg-[#71717A] outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm as user types
          />
        </div>

        <div className="flex items-center gap-6">
          <Link href={`/saved`}>
            <div className="relative h-6">
              <div
                className={`${
                  savedProductData?.length
                    ? "absolute left-3.5 bottom-4 bg-[#2563EB] text-white rounded-full text-[10px] w-4 h-4 flex justify-center items-center"
                    : "hidden"
                }   `}
              >
                {savedProductData?.length}
              </div>
              <Heart />
            </div>
          </Link>
          <Link href={`/hurgelt`}>
            <div className="relative h-6">
              <div
                className={`${
                  orderData?.length
                    ? "absolute left-3.5 bottom-4 bg-[#2563EB] text-white rounded-full text-[10px] w-4 h-4 flex justify-center items-center"
                    : "hidden"
                }   `}
              >
                {orderData?.length}
              </div>
              <Tereg />
            </div>
          </Link>
          <Link href={`/userInfo1`}>
            <ProfileIcon />
          </Link>

          {/* Conditionally show login/signup buttons or user information */}
          {!userMe?.userName ? (
            <div className="flex gap-2 text-white">
              <Link href={`/signUp`}>
                <button className="bg-black border border-[#2563EB] py-2 px-3 rounded-md font-medium">
                  Бүртгүүлэх
                </button>
              </Link>
              <Link href={`/logIn`}>
                <button className="bg-[#2563EB] py-2 px-3 rounded-md font-medium">
                  Нэвтрэх
                </button>
              </Link>
            </div>
          ) : (
            <div className="text-white flex gap-2 items-center">
              <div> Сайн байна уу, {userMe.userName}</div>
              <div
                className="cursor-pointer border-white border font-bold  p-2 rounded-lg"
                onClick={() => LogOut()}
              >
                Log out
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Conditionally render SearchCard based on searchTerm */}
      {searchTerm && (
        <div className="bg-white flex absolute top-20 rounded-lg w-[30%] h-fit justify-center z-50 p-8 border">
          <SearchCard searchTerm={searchTerm} />
        </div>
      )}
    </div>
  );
};
