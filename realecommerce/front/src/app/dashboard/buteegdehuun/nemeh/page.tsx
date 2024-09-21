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
export default function home() {
  const [addProductName, setAddProductName] = useState<string>("");
  const [addDescription, setAddDescription] = useState<string>("");
  const [addPrice, setAddPrice] = useState<number>(0);
  const [addQuantity, setAddQuantity] = useState<number>(0);
  const [category, setCategory] = useState<category[] | null>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [isUploaded, setIsUploaded] = useState(false); // Track if the upload is done

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files) setImage(files[0]);
    setIsUploaded(false); // Reset upload status when a new file is selected
  };

  const handleUpload = async () => {
    if (!image) return;

    setLoading(true);

    const formData = new FormData();

    formData.append("image", image);

    const res = await axios.post("http://localhost:3001/upload", formData);

    console.log(res.data);
    const uploadedUrls = [...uploadedUrl, res.data.secure_url];
    setUploadedUrl(uploadedUrls);

    console.log(uploadedUrl);

    setLoading(false);
    setIsUploaded(true); // Mark upload as complete
  };

  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3001/category");
      setCategory(response.data.categories);
    } catch (error) {
      console.log("category awahad aldaa garlaa");
    }
  };

  const createProduct = async (addProduct: addProductType) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/product",
        addProduct
      );
    } catch (error) {
      console.error("Error add review:", error);
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
          <div className="p-6 flex flex-col bg-white rounded-lg  gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-sm font-semibold text-[#121316]">
                Бүтээгдэхүүний нэр
              </div>
              <input
                onChange={(event) => setAddProductName(event.target.value)}
                placeholder="Нэр"
                className="bg-[#F7F7F8] text-[#8B8E95] p-2 rounded-lg w-full"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm font-semibold text-[#121316]">
                Нэмэлт мэдээлэл
              </div>
              <textarea
                onChange={(event) => {
                  setAddDescription(event.target.value);
                }}
                placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                className="bg-[#F7F7F8] text-[#8B8E95] p-2 rounded-lg w-full  resize-none"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2"></div>
          </div>
          <div className="flex flex-col p-6 gap-4 bg-white rounded-lg">
            <div className="font-semibold text-lg">Бүтээгдэхүүний зураг</div>
            <div className="flex gap-2">
              <div className="flex-1 border-2 rounded-lg border-dashed h-[124px] relative flex justify-center items-center">
                {uploadedUrl.length > 0 ? (
                  <Image alt="Uploaded image" fill src={uploadedUrl[0]} />
                ) : (
                  "No image"
                )}
              </div>
              <div className="flex-1 border-2 rounded-lg border-dashed h-[124px] relative flex justify-center items-center">
                {uploadedUrl.length > 1 ? (
                  <Image alt="Uploaded image" fill src={uploadedUrl[1]} />
                ) : (
                  "No image"
                )}
              </div>
              <div className="flex-1 border-2 rounded-lg border-dashed h-[124px] relative flex justify-center items-center">
                {uploadedUrl.length > 2 ? (
                  <Image alt="Uploaded image" fill src={uploadedUrl[2]} />
                ) : (
                  "No image"
                )}
              </div>

              <div className="flex flex-col w-[160px] justify-center items-center">
                <input
                  type="file"
                  className="hidden"
                  id="fileInput"
                  multiple // Allow multiple file selection
                  onChange={handleChangeFile}
                />
                <label htmlFor="fileInput" className="cursor-pointer">
                  <div className="w-16 h-16 flex justify-center items-center bg-gray-200 rounded-full">
                    <Plus /> {/* Your Plus icon */}
                  </div>
                </label>
                <button onClick={handleUpload}>
                  {loading
                    ? "Uploading..."
                    : isUploaded
                    ? "Add picture"
                    : image
                    ? "Click to Upload"
                    : "Add picture"}
                </button>
              </div>

              {/* <div className="flex flex-col w-[160px] justify-center">
                <input
                  type="file"
                  placeholder="+"
                  onChange={handleChangeFile}
                ></input>
                <button onClick={handleUpload}>
                  {loading ? "Uploading..." : "Upload"}
                </button>
              </div> */}
            </div>
          </div>
          <div className="flex  p-6 gap-4 bg-white rounded-lg">
            <div className="flex-1">
              <div className="text-sm font-semibold">Үндсэн үнэ</div>
              <input
                onChange={(event) =>
                  setAddPrice(parseFloat(event.target.value))
                }
                className="p-3 bg-[#F7F7F8] text-[#8B8E95] rounded-lg w-full"
                type="number"
                placeholder="Үндсэн үнэ"
              ></input>
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
              ></input>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white rounded-lg w-full flex flex-col gap-4 p-6">
            <div className="flex flex-col gap-2">
              <div className="font-semibold">Ерөнхий ангилал</div>
              <Select onValueChange={(value) => setSelectedCategory(value)}>
                <SelectTrigger className="w-[full] bg-[#F7F7F8]">
                  <SelectValue placeholder="Сонгох" />
                </SelectTrigger>
                <SelectContent>
                  {category?.map((item, index) => {
                    return (
                      <SelectItem key={index} value={item._id}>
                        {item.categoryName}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="bg-white rounded-lg w-full flex flex-col gap-6 p-6">
            <div className="font-semibold">Хэмжээ сонгох</div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-6">
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
                {/* <div>
                  <Plus />
                </div> */}
              </div>
            </div>
            {/* <div className="border rounded-lg text-sm font-semibold w-fit py-2 px-3">
              Төрөл нэмэх
            </div> */}
          </div>
          {/* <div className="bg-white rounded-lg w-full flex flex-col gap-2 px-6 py-5">
            <div className="font-semibold">Таг</div>
            <textarea
              placeholder="Таг нэмэх..."
              className="border rounded-lg text-[#8B8E95] bg-[#F7F7F8] p-1 resize-none"
            ></textarea>
            <div className="text-sm text-[#5E6166]">
              Санал болгох: Гутал , Цүнх , Эмэгтэй{" "}
            </div>
          </div> */}
          <div className="w-full flex justify-center">
            <div className="flex gap-6">
              {/* <div className="border bg-white font-semibold rounded-lg w-fit px-5 py-4 text-lg">
                Ноорог
              </div> */}
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
