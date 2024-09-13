import { ButeegdehuunIcon } from "@/assets/ButeegdehuunIcon";
import { HyanaltiinSambarIcon } from "@/assets/HyanaltiinSambarIcon";
import { OrlogoIcon } from "@/assets/OrlogoIcon";
import { TohirgooIcon } from "@/assets/TohirgooIcon";
import { Zahialga } from "@/assets/ZahialgaIcon";
import Link from "next/link";

export const LeftSideBar = () => {
  return (
    <div className="w-[222px] flex flex-col gap-4 h-[95vh] bg-white pt-8">
      <Link href={`/dashboard`}>
        <div className={`flex gap-2 cursor-pointer py-2 `}>
          <div className="pl-2">
            <HyanaltiinSambarIcon />
          </div>
          <div className="font-semibold">Хяналтын самбар</div>
        </div>
      </Link>
      <Link href={`/dashboard/zahialga`}>
        <div className={`flex gap-2 cursor-pointer py-2 `}>
          <div className="pl-2">
            <Zahialga />
          </div>
          <div className="font-semibold">Захиалга</div>
        </div>
      </Link>
      <Link href={`/dashboard/orlogo`}>
        <div className={`flex gap-2 py-2 cursor-pointer `}>
          <div className="pl-2">
            <OrlogoIcon />
          </div>
          <div className="font-semibold">Орлого</div>
        </div>
      </Link>
      <Link href={`/dashboard/buteegdehuun`}>
        <div className={`flex gap-2 py-2 cursor-pointer `}>
          <div className="pl-2">
            <ButeegdehuunIcon />
          </div>
          <div className="font-semibold">Бүтээгдэхүүн</div>
        </div>
      </Link>
      <Link href={`/dashboard/tohirgoo`}>
        <div className="flex gap-2 py-2">
          <div className="pl-2">
            <TohirgooIcon />
          </div>
          <div className="font-semibold">Тохиргоо</div>
        </div>
      </Link>
    </div>
  );
};
