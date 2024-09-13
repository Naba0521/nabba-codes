"use client";

import { HeaderLogo } from "@/assets/headerlogo";
import { MoneyLogo } from "@/assets/moneyLogo";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CoinIcon } from "@/assets/coinIcon";

const GeldBalance = () => {
  return (
    <main className="w-screen h-screen flex  pt-[40px] flex-col gap-[140px]">
      <div className="flex flex-col ">
        <div className="flex items-center justify-center gap-3 pb-[48px]">
          <Link href={`/`}>
            <div>
              <HeaderLogo />
            </div>
          </Link>
          <div className="text-[64px] font-bold">Geld</div>
        </div>
        <div className="flex items-center justify-center">
          <div className=" flex flex-col items-center justify-center gap-4px">
            <div className="w-[24px] h-[24px] bg-[#0166FF] rounded-[50%] text-sm text-white flex justify-center items-center ">
              1
            </div>
          </div>
          <div className="w-[92px] h-[2px] border-4 border-[#0166FF] "></div>
          <div className=" flex flex-col items-center justify-center gap-4px">
            <div className="w-[24px] h-[24px] bg-[#0166FF] rounded-[50%] text-sm text-white flex justify-center items-center ">
              2
            </div>
          </div>
          <div className="w-[92px] h-[2px] border-4 border-[#E5E7EB] "></div>
          <div className=" flex flex-col items-center justify-center gap-4px">
            <div className="w-[24px] h-[24px] bg-[#E5E7EB] rounded-[50%] text-sm text-black flex justify-center items-center ">
              3
            </div>
          </div>
        </div>
        <div className="flex gap-16  pt-[12px] justify-center">
          <div className="text-[14px] text-slate-900">Currency</div>
          <div className="text-[14px] text-slate-900">Balance</div>
          <div className="text-[14px] text-slate-900">Finish</div>
        </div>
      </div>

      <div className="flex flex-col gap-6 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <CoinIcon />
          </div>
          <div className="font-semibold text-[24px]">
            Set up your cash Balance
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <input
              placeholder="Email"
              type="email"
              className="bg-[#F3F4F6] pl-4 h-[48px] w-[384px] rounded-lg"
            ></input>
          </div>
          <div className="w-[384px] text-[12px] text-[#475569]">
            How much cash do you have in your wallet?{" "}
          </div>
        </div>
        <Link href={`/geldFinish`}>
          <div>
            <button className="bg-[#0166FF] text-white h-[48px] rounded-[20px] flex justify-center items-center w-[384px]">
              Confirm
            </button>
          </div>
        </Link>
      </div>
    </main>
  );
};
export default GeldBalance;
