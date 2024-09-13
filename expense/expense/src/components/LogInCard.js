"use client";

import { HeaderLogo } from "@/assets/headerlogo";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export const LogInCard = () => {
  return (
    <div className="flex flex-row lg:w-screen w-[390px] font-normal m-auto  h-screen">
      <div className="flex-1 flex flex-col h-full w-fit items-center justify-center gap-[40px] pr-[126px] pl-[222px] border ">
        <div className="flex items-center justify-center gap-3">
          <Link href={`/`}>
            <div>
              <HeaderLogo />
            </div>
          </Link>
          <div className="text-2xl font-bold">Geld</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-2xl font-semibold">Welcome Back</div>
          <div className="text-[#334155]">
            Welcome back, Please enter your details
          </div>
        </div>
        <div className="flex flex-col gap-4 w-2/5">
          <input
            className="pl-4 border rounded-sm h-[48px] bg-[#F3F4F6]"
            placeholder="Email"
            type="email"
          ></input>
          <input
            className="pl-4 border rounded-sm h-[48px] bg-[#F3F4F6]"
            placeholder="Password"
            type="password"
          ></input>
          <div className="flex justify-center">
            <Link href={`/geldCurrency`}>
              <Button>
                <div className="flex items-center justify-center bg-[#0166FF] text-[16px] w-[384px]  text-[#FFFFFF] ">
                  Log in
                </div>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <div className="text-[#0F172A]">Don’t have account?</div>
          <Link href={`/signUp`}>
            <div className="text-[#0166FF]">Sign up</div>
          </Link>
        </div>
      </div>
      <div className="flex-1 bg-[#0166FF] w-full h-full border "></div>
    </div>
  );
};
