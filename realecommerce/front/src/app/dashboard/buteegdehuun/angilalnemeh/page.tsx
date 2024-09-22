"use client";
import { WhitePlusIcon } from "@/assets/WhitePlus";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CategoryNemeh } from "../../_components/CateogryNemeh";
import { useEffect, useState } from "react";
import axios from "axios";
interface category {
  _id: string;
  categoryName: string;
}
export default function home() {
  const [category, setCategory] = useState<category[] | null>([]);
  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3001/category");
      setCategory(response.data.categories);
    } catch (error) {
      console.log("category awahad aldaa garlaa");
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="flex-1">
      <div className="flex flex-col w-full gap-6">
        <div className="flex border-b">
          <Link href={`/dashboard/buteegdehuun`}>
            <div className="px-4    py-4">Бүтээгдэхүүн</div>
          </Link>
          <div className="px-4  py-4 border-black border-b-2 text-sm font-semibold">
            Ангилал
          </div>
        </div>
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">№</TableHead>
              <TableHead>ID</TableHead>
              <TableHead>CategoryName</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {category?.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="text-center">{index + 1}</TableCell>
                  <TableCell className="font-medium">{item._id}</TableCell>
                  <TableCell className="font-medium">
                    {item.categoryName}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <CategoryNemeh getCategories={getCategories} />
      </div>
    </div>
  );
}
