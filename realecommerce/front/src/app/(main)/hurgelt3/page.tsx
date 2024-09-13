import { Check } from "@/assets/Check";
import Image from "next/image";
import Link from "next/link";

export default function home() {
  return (
    <div className="py-4 px-6 flex justify-center w-full bg-[#f7f7f7] ">
      <div className=" w-[1440px] px-[200px] py-16 flex flex-col  items-center gap-8  ">
        <div className="flex items-center justify-center">
          <Link href={`/hurgelt`}>
            <div className="w-8 h-8 bg-[#2563EB] rounded-2xl flex justify-center items-center text-white">
              <Check />
            </div>
          </Link>
          <div className="h-[1px] w-20 bg-[#2563EB] flex justify-center items-center"></div>
          <Link href={`/hurgelt2`}>
            <div className="w-8 h-8 bg-[#2563EB] rounded-2xl flex justify-center items-center text-white">
              <Check />
            </div>
          </Link>
          <div className="h-[1px] w-20 bg-[#2563EB] flex justify-center items-center"></div>
          <Link href={`/hurgelt3`}>
            <div className="w-8 h-8  border rounded-2xl flex justify-center items-center font-bold bg-[#2563EB] text-white ">
              3
            </div>
          </Link>
        </div>
        <div className="flex gap-5 w-[687px] bg-white p-8 flex-col rounded-2xl ">
          <div className="text-[#09090B] text-lg font-semibold">
            3. Төлбөр төлөлт
          </div>
          <div className="relative h-[512.75px] w-full">
            <Image src={`/bank.png`} alt="aa" fill className="object-cover" />
          </div>
          <div>
            <Link href={`/hurgelt2`}>
              <div className="border py-2 px-9 flex justify-center items-center rounded-2xl text-[14px] w-fit">
                Буцах
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
