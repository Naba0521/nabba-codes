"use client";

import { HeaderLogo } from "@/assets/headerlogo";
import { Plus } from "@/assets/plus";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AddComponent } from "./AddComponent";
import { LogOut } from "lucide-react";
import { useAuth } from "./providers/AuthProvider";

export const Header = () => {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <div className="flex lg:w-[1220px] w-[390px] h-[72px] font-normal text-[16px] items-center justify-between m-auto">
      <div className="flex items-center gap-[24px]">
        <Link href={`/logIn`}>
          <div>
            <HeaderLogo />
          </div>
        </Link>
        <Link href={`/`}>
          <div
            style={{
              color: pathname === "/" ? "blue" : "black",
              fontWeight: pathname === "/" ? "700" : "400",
            }}
          >
            Dashboard
          </div>
        </Link>
        <Link href={`/record`}>
          <div
            style={{
              color: pathname === "/record" ? "blue" : "black",
              fontWeight: pathname === "/record" ? "700" : "400",
            }}
          >
            Records
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-[24px]">
        <AddComponent name="Header" />
        <div>
          <img
            className="shadow-about w-[40px] h-[40px]  rounded-[20px]"
            src="/Placeholder.png"
          />
        </div>
        {/* <Link href={`/loginaa`}> */}
        <button className="cursor-pointer" onClick={logout}>
          Out
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};
