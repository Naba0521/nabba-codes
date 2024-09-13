"use client";

import styles from "./page.module.css";
import { Navbar } from "../components/Navbar";
import { Landig } from "../components/Landig";
import { About } from "../components/About";
import { Part4 } from "../components/Part4";
import { Part5 } from "../components/Part5";
import { Part6 } from "../components/Part6";
import { Part7 } from "../components/Part7";
import { Part8 } from "../components/Part8";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const handleClick = () => {
    setIsDark(!isDark);
  };
  return (
    <div className={isDark ? "dark" : ""}>
      <main className="flex flex-col min-w-[520px] lg:max-w-[1440px] items-center m-auto overflow-hidden bg-white dark:bg-[#030712]">
        <Navbar toggleDarkMode={handleClick} isDark={isDark} />
        <Landig />
        <About />
        <Part4 />
        <Part5 />
        <Part6 />
        <Part7 />
        <Part8 />
      </main>
    </div>
  );
}
