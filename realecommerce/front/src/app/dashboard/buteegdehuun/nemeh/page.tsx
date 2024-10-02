"use client";
import { LeftDirectionArrow } from "@/assets/LeftDirectionArrow";
import { Plus } from "@/assets/Plus";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CategoryNemeh } from "../../_components/CateogryNemeh";

type addProductType = {
  productName: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  image: string[];
  size: string[];
};

interface category {
  _id: string;
  categoryName: string;
}

export default function Home() {
  const [addProductName, setAddProductName] = useState<string>("");
  const [addDescription, setAddDescription] = useState<string>("");
  const [addPrice, setAddPrice] = useState<number>(0);
  const [addQuantity, setAddQuantity] = useState<number>(0);
  const [category, setCategory] = useState<category[] | null>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string[]>([]);
  const token = localStorage.getItem("token");

  const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files) {
      await handleUpload(files[0]); // Directly upload the selected file
    }
  };

  const handleUpload = async (file: File) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("http://localhost:3001/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const uploadedUrls = [...uploadedUrl, res.data.secure_url];
      setUploadedUrl(uploadedUrls);
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setLoading(false);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3001/category");
      setCategory(response.data.categories);
    } catch (error) {
      console.log("Failed to fetch categories:", error);
    }
  };

  const createProduct = async (addProduct: addProductType) => {
    try {
      await axios.post("http://localhost:3001/product", addProduct);
      window.location.reload();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-8">
      <div className="flex gap-4 items-center p-4 bg-white">
        <div className="">
          <Link href={`/dashboard/buteegdehuun`}>
            <LeftDirectionArrow />
          </Link>
        </div>
        <div>Бүтээгдэхүүн нэмэх</div>
      </div>
      <div className="flex gap-6">
        <div className="flex-1 flex flex-col gap-4">
          <div className="p-6 flex flex-col bg-white rounded-lg gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-sm font-semibold text-[#121316]">
                Бүтээгдэхүүний нэр
              </div>
              <input
                onChange={(event) => setAddProductName(event.target.value)}
                placeholder="Нэр"
                className="bg-[#F7F7F8] text-[#8B8E95] p-2 rounded-lg w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm font-semibold text-[#121316]">
                Нэмэлт мэдээлэл
              </div>
              <textarea
                onChange={(event) => setAddDescription(event.target.value)}
                placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                className="bg-[#F7F7F8] text-[#8B8E95] p-2 rounded-lg w-full resize-none"
              />
            </div>
          </div>
          <div className="flex flex-col p-6 gap-4 bg-white rounded-lg">
            <div className="font-semibold text-lg">Бүтээгдэхүүний зураг</div>
            <div className="flex gap-2">
              {uploadedUrl.map((url, index) => (
                <div
                  key={index}
                  className="flex-1 border-2 rounded-lg border-dashed h-[124px] relative flex justify-center items-center"
                >
                  <Image
                    alt="Uploaded image"
                    fill
                    src={url}
                    className="object-contain"
                  />
                </div>
              ))}
              <div className="flex flex-col w-[160px] justify-center items-center">
                <input
                  type="file"
                  className="hidden"
                  id="fileInput"
                  onChange={handleChangeFile}
                />
                <label htmlFor="fileInput" className="cursor-pointer">
                  <div className="w-16 h-16 flex justify-center items-center bg-gray-200 rounded-full">
                    <Plus />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex p-6 gap-4 bg-white rounded-lg">
            <div className="flex-1">
              <div className="text-sm font-semibold">Үндсэн үнэ</div>
              <input
                onChange={(event) =>
                  setAddPrice(parseFloat(event.target.value))
                }
                className="p-3 bg-[#F7F7F8] text-[#8B8E95] rounded-lg w-full"
                type="number"
                placeholder="Үндсэн үнэ"
              />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold">Үлдэгдэл тоо ширхэг</div>
              <input
                onChange={(event) =>
                  setAddQuantity(parseInt(event.target.value))
                }
                type="number"
                className="p-3 bg-[#F7F7F8] text-[#8B8E95] rounded-lg w-full"
                placeholder="Үлдэгдэл тоо ширхэг"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white rounded-lg w-full flex flex-col gap-4 p-6">
            <div className="flex flex-col gap-2">
              <div className="font-semibold">Ерөнхий ангилал</div>
              <Select onValueChange={(value) => setSelectedCategory(value)}>
                <SelectTrigger className="w-full bg-[#F7F7F8]">
                  <SelectValue placeholder="Сонгох" />
                </SelectTrigger>
                <SelectContent>
                  {category?.map((item) => (
                    <SelectItem key={item._id} value={item._id}>
                      {item.categoryName}
                    </SelectItem>
                  ))}
                  <CategoryNemeh getCategories={getCategories} />
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="bg-white rounded-lg w-full flex flex-col gap-6 p-6">
            <div className="font-semibold">Хэмжээ сонгох</div>
            <ToggleGroup
              onValueChange={(value) => setSelectedSizes(value)}
              type="multiple"
            >
              <ToggleGroupItem value="S">S</ToggleGroupItem>
              <ToggleGroupItem value="M">M</ToggleGroupItem>
              <ToggleGroupItem value="XL">XL</ToggleGroupItem>
              <ToggleGroupItem value="2XL">2XL</ToggleGroupItem>
              <ToggleGroupItem value="3XL">3XL</ToggleGroupItem>
              <ToggleGroupItem value="10XL">10XL</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="w-full flex justify-center">
            <div className="flex gap-6">
              <div
                onClick={() => {
                  createProduct({
                    productName: addProductName,
                    description: addDescription,
                    price: addPrice,
                    quantity: addQuantity,
                    category: selectedCategory,
                    image: uploadedUrl,
                    size: selectedSizes,
                  });
                }}
                className="bg-black text-white font-semibold cursor-pointer rounded-lg w-fit px-5 py-4 text-lg"
              >
                Бараа нэмэх
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
