"use client";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { CategoryNemeh } from "../../_components/CateogryNemeh";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

interface Category {
  _id: string;
  categoryName: string;
}

type ProductType = {
  productName: string;
  price: number;
  description: string;
  size: string[];
  image: string[];
  averageRating: number;
  reviewCount: number;
  category: [{ categoryName: string }];
  quantity: number;
  saledCount: number;
  createdAt: Date;
  _id: string;
};

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);

  const getCategories = async () => {
    try {
      const response = await api.get("/category");
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await api.get("/product");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  // Count products per category
  const categoryProductCount = categories.map((category) => {
    const count = products.filter((product) =>
      product.category.some((cat) => cat.categoryName === category.categoryName)
    ).length;
    return { ...category, count };
  });

  return (
    <div className="flex-1">
      <div className="flex flex-col w-full gap-6">
        <div className="flex border-b">
          <Link href={`/dashboard/buteegdehuun`}>
            <div className="px-4 py-4">Бүтээгдэхүүн</div>
          </Link>
          <div className="px-4 py-4 border-black border-b-2 text-sm font-semibold">
            Ангилал
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">№</TableHead>
              <TableHead>ID</TableHead>
              <TableHead>CategoryName</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categoryProductCount.map((item, index) => (
              <TableRow key={item._id}>
                <TableCell className="text-center">{index + 1}</TableCell>
                <TableCell className="font-medium">{item._id}</TableCell>
                <TableCell className="font-medium">
                  {item.categoryName}
                </TableCell>
                <TableCell className="text-center">{item.count}</TableCell>{" "}
                {/* Display the count */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CategoryNemeh getCategories={getCategories} />
      </div>
    </div>
  );
}
