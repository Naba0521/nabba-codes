import { Part2 } from "@/components/Part2";
import { Part3 } from "@/components/Part3";
import { Part1 } from "@/components/part1";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-600">
      <div className="flex w-[1512px] m-auto flex-col items-center justify-center ">
        <Part1 />
        <Part2 />
        <Part3 />
        
      </div>
    </div>
  );
}
