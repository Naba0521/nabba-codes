"use client";

import { Left } from "@/assets/left";
import { Right } from "@/assets/right";
import { Part1Card } from "./Part1Card";
import { useEffect, useState } from "react";
import Link from "next/link";

const itemsPerPage = 4;

export const Part1 = ({ data }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    setStartIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNextClick = () => {
    setStartIndex((prev) => (prev === itemsPerPage - 1 ? 0 : prev + 1));
  };

  return (
    <div className="lg:w-[1220px] w-[390px] flex flex-col gap-[11px] m-auto">
      <div className="overflow-hidden w-full">
        <div
          className={`flex duration-1000`}
          style={{
            width: `${itemsPerPage * 100}%`,
            transform: `translateX(${(-startIndex * 100) / itemsPerPage}%)`,
          }}
        >
          {data.slice(0, itemsPerPage).map((item, index) => (
            <Link key={item.id} href={`/blogs/${item.id}`}>
              <Part1Card
                // key={index}
                img={item.cover_image}
                title={item.title}
                description={item.description}
                tags={item.tag_list}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex lg:justify-end justify-center gap-[9px]">
        <button onClick={handlePrevClick}>
          <Left />
        </button>
        <button onClick={handleNextClick}>
          <Right />
        </button>
      </div>
    </div>
  );
};
