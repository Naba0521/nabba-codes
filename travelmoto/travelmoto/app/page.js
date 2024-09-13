import Image from "next/image";
import { Part1 } from "./components/part";
import { Part2 } from "./components/part2";
import { Part3 } from "./components/Part3";
import { Part4 } from "./components/Part4";
import { Part5 } from "./components/Part5";
import { Part6 } from "./components/Part6";
import { Part7 } from "./components/Part7";
import { Part8 } from "./components/Part8";
import { Part9 } from "./components/Part9";
import { Part10 } from "./components/Part10";
import { Part11 } from "./components/Part11";
import { Part12 } from "./components/Part12";
import { Part13 } from "./components/Part13";
import { Part14 } from "./components/Part14";

export default function Home() {
  return (
    <div className="bg-gray-600">
      <div className="flex w-[1512px] m-auto flex-col items-center justify-center ">
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
        <Part5 />
        <Part6 />
        <Part7 />
        <Part8 />
        <Part9 />
        <Part10 />
        <Part11 />
        <Part12 />
        <Part13 />
        <Part2 />
        <Part14 />
      </div>
    </div>
    
  );
}
