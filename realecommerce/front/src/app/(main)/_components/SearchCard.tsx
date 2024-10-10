"use client";
import { api } from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

interface SearchCardProps {
  searchTerm: string;
}

export const SearchCard = ({ searchTerm }: SearchCardProps) => {
  const [product, setProduct] = useState<ProductType[]>([]); // List of products
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]); // Filtered products

  // Fetch all products when the component mounts
  const getProducts = async () => {
    try {
      const response = await api.get("/product");
      setProduct(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Filter products based on search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = product.filter((item) =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]); // Clear results when no search term
    }
  }, [searchTerm, product]);

  return (
    <div className="flex flex-col gap-4">
      {/* Display filtered products */}
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item, index) => (
          <Link
            key={index}
            href={`/product/${item._id}`}
            className="w-[500px] border-t"
          >
            <div className="flex gap-6 text-sm ">
              <div className="relative h-[60px] w-[60px] rounded-full overflow-hidden">
                <Image src={item.image[0]} fill alt={item.productName} />
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-semibold text-sm">{item.productName}</div>
                <div className="flex-1">{item.price}₮</div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};
