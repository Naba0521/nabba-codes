"use client";

import { HeaderLogo } from "@/assets/headerlogo";
import { Header } from "@/components/Header";
import LoadingSpinner from "@/components/LoadingIcon";
import { LogInCard } from "@/components/LogInCard";
import Link from "next/link";

const Loading = () => {
  return (
    <main className="w-screen h-screen flex items-center justify-center flex-col gap-4">
      <div className="flex items-center justify-center gap-3">
        <Link href={`/`}>
          <div>
            <HeaderLogo />
          </div>
        </Link>
        <div className="text-[64px] font-bold">Geld</div>
      </div>
      <div>
        <LoadingSpinner />
      </div>
      <div>Түр хүлээнэ үү...</div>
    </main>
  );
};
export default Loading;
