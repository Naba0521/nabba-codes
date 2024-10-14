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
    <div className="flex flex-col gap-6 p-4 bg-white shadow-md rounded-md">
      {/* Display filtered products */}
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item, index) => (
          <Link
            key={index}
            href={`/product/${item._id}`}
            className="w-full border-b border-gray-300 hover:bg-gray-100 transition duration-200"
          >
            <div className="flex items-center gap-4 py-4">
              <div className="relative h-[80px] w-[80px] rounded-full overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src={item.image[0]}
                  fill
                  alt={item.productName}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-semibold text-lg text-gray-800">
                  {item.productName}
                </div>
                <div className="text-gray-600 text-sm">{item.price}₮</div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-gray-500 text-center py-4">No products found</p>
      )}
    </div>
  );
};
