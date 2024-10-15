"use client";

import styles from "./page.module.css";
import { Landig } from "../components/Landig";

import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const handleClick = () => {
    setIsDark(!isDark);
  };
  return (
    <div className={isDark ? "dark" : ""}>
      <main className="flex flex-col min-w-[360px] h-full lg:max-w-[100%] lg:h-full items-center m-auto overflow-hidden bg-[#202C6A] dark:bg-[#030712] px-[4px]">
        <Landig />
      </main>
    </div>
  );
}
