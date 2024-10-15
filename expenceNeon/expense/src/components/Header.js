"use client";

import { HeaderLogo } from "@/assets/headerlogo";
import { AddComponent } from "./AddComponent";
import { SlLogout } from "react-icons/sl";
import { usePathname } from "next/navigation";
import { useAuth } from "./providers/AuthProvider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export const Header = () => {
  const pathname = usePathname();
  const { logout, user } = useAuth();
  const paths = [
    { name: "Dashboard", path: "/" },
    { name: "Record", path: "/record" },
  ];

  return (
    <div className="flex lg:w-[1220px] w-[390px] h-[72px] font-normal text-[16px] items-center justify-between m-auto">
      <div className="flex items-center gap-[24px]">
        <HeaderLogo />
        {paths.map((path, index) => (
          <Link key={index} href={path.path}>
            <div
              className="text-black font-normal"
              style={{ fontWeight: pathname === path.path ? "600" : "400" }}
            >
              {path.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-[24px]">
        <AddComponent name="Header" />
        <Dialog>
          <DialogTrigger>
            <div>
              <img
                className="shadow-about w-[40px] h-[40px] rounded-[20px]"
                src="/Placeholder.png"
                alt="User Avatar"
              />
            </div>
          </DialogTrigger>
          {user && (
            <DialogContent className="w-[300px] top-[10%] left-[65%]">
              <DialogHeader>
                <DialogTitle>User Information</DialogTitle>
                <DialogDescription>
                  <div className="flex flex-col gap-3 mt-[20px]">
                    <div className="flex gap-3">
                      <div>
                        <img
                          className="shadow-about w-[60px] h-[60px] rounded-[20px]"
                          src="/Placeholder.png"
                          alt="User Avatar"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="border-b-[1px]">
                          Name: {user?.username}
                        </div>
                        <div className="border-b-[1px]">
                          E-mail: {user?.email}
                        </div>
                        <div>ID: {user?.id}</div>
                      </div>
                    </div>
                    <button
                      className="cursor-pointer bg-[#ff6600] rounded-lg flex items-center justify-center text-black border gap-2 h-8 font-bold text-lg"
                      onClick={logout}
                    >
                      <SlLogout />
                      <div className="text-black">Log Out</div>
                    </button>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </div>
  );
};
