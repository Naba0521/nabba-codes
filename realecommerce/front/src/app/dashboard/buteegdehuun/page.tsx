"use client";
import { AngilalIcon } from "@/assets/AngilalIcon";
import { BlackSearchIcon } from "@/assets/BlackSearchIcon";
import { CalendarIcon } from "@/assets/CalendarIcon";
import { GrayEditIcon } from "@/assets/GrayEditButton";
import { GrayDeleteIcon } from "@/assets/GreyDeleteIcon";
import { WhitePlusIcon } from "@/assets/WhitePlus";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { api } from "@/lib/axios";
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
interface category {
  _id: string;
  categoryName: string;
}
interface CategoriesResponse {
  categories: category[];
}
export default function Home() {
  const [product, setProduct] = useState<ProductType[]>([]); // Changed to an array of products
  const [categoriesa, setCategoriesa] = useState<CategoriesResponse | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [priceSort, setPriceSort] = useState<string>("");
  const [dateSort, setDateSort] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [addNewProductName, setAddNewProductName] = useState<
    string | undefined
  >(undefined);
  const [addNewPrice, setAddNewPrice] = useState<string | undefined>(undefined);
  const [addNewQuantity, setAddNewQuantity] = useState<string | undefined>(
    undefined
  );

  const editProduct = async ({
    _id,
    newProductName,
    newPrice,
    newQuantity,
  }: {
    _id: string;
    newProductName: string | undefined;
    newPrice: string | undefined;
    newQuantity: string | undefined;
  }) => {
    try {
      await api.put("/product", {
        _id,
        newProductName,
        newPrice,
        newQuantity,
      });
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (_id: string) => {
    try {
      await api.delete("/product", { data: { _id } });
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await api.get("/product");
      setProduct(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const filteredProducts = product
    .filter((product) => {
      // Filter by category
      if (
        selectedCategory &&
        !product.category.some((cat) => cat.categoryName === selectedCategory)
      ) {
        return false;
      }
      // Filter by search input
      const productNameMatch = product.productName
        .toLowerCase()
        .includes(searchInput.toLowerCase());
      return productNameMatch; // Return true if product name matches search input
    })
    .sort((a, b) => {
      // Sort by price
      if (priceSort === "Үнэтэй нь эхэндээ") {
        return b.price - a.price;
      } else if (priceSort === "Хямд нь эхэндээ") {
        return a.price - b.price;
      }
      // Sort by date
      if (dateSort === "Шинэ нь эхэндээ") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else if (dateSort === "Хуучин нь эхэндээ") {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      }
      return 0; // No sorting
    });

  const getCategories = async () => {
    try {
      const response = await api.get("/category");
      setCategoriesa(response.data);
    } catch (error) {
      console.log("category awahad aldaa garlaa");
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div className="flex-1">
      <div className="flex flex-col w-full gap-6">
        <div className="flex border-b">
          <Link href={`/dashboard/buteegdehuun`}>
            <div className="px-4 text-sm font-semibold border-b-2 border-black py-4">
              Бүтээгдэхүүн
            </div>
          </Link>
          <Link href={`/dashboard/buteegdehuun/angilalnemeh`}>
            <div className="px-4 text-sm text-[#3F4145] py-4">Ангилал</div>
          </Link>
        </div>
        <div className="text-white flex gap-2 bg-black px-12 py-2 items-center rounded-xl w-fit font-semibold">
          <WhitePlusIcon />
          <Link href={`/dashboard/buteegdehuun/nemeh`}>
            <div>Бүтээгдэхүүн нэмэх</div>
          </Link>
        </div>
        <div className="flex justify-between h-10 pr-9">
          <div className="flex gap-3">
            <Select
              onValueChange={(value) =>
                setSelectedCategory(value === "clear" ? "" : value)
              }
            >
              <SelectTrigger className="w-[220px] bg-white rounded-lg h-10">
                <div className="flex items-center gap-2 font-semibold px-3 ">
                  <AngilalIcon />
                  <div className="text-[#3F4145]">Ангилал</div>
                </div>
                <SelectValue placeholder="Бүгд" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* Clear option */}
                  <SelectItem value="clear">Бүгд</SelectItem>
                  {categoriesa?.categories.map((item, index) => {
                    return (
                      <SelectItem key={index} value={item.categoryName}>
                        {item.categoryName}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => setPriceSort(value)}>
              <SelectTrigger className="w-[180px] bg-white rounded-lg h-10">
                <SelectValue placeholder="$ Үнэ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Үнэтэй нь эхэндээ">
                  Үнэтэй нь эхэндээ
                </SelectItem>
                <SelectItem value="Хямд нь эхэндээ">Хямд нь эхэндээ</SelectItem>
                <SelectItem value="Сортлохгүй">Сортлохгүй</SelectItem>
                {/* Optional: for no sorting */}
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => setDateSort(value)}>
              <SelectTrigger className="w-[260px] bg-white rounded-lg h-10">
                <div className="flex items-center gap-2 font-semibold px-3 ">
                  <CalendarIcon />
                  <div className="text-[#3F4145]">Сараар</div>
                </div>
                <SelectValue placeholder="сонгох" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Хуучин нь эхэндээ">
                  Хуучин нь эхэндээ
                </SelectItem>
                <SelectItem value="Шинэ нь эхэндээ">Шинэ нь эхэндээ</SelectItem>
                <SelectItem value="Сортлохгүй">Сортлохгүй</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2">
            <BlackSearchIcon />
            <input
              className="outline-none w-[360px]"
              placeholder="Бүтээгдэхүүний нэр"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-[12px]">
          <div className="flex w-full h-11 items-center border-b pl-4">
            <div className="flex-1 pl-[140px]">Бүтээгдэхүүн</div>
            <div className="flex-1 flex justify-center">Ангилал</div>
            <div className="flex-1 flex justify-center">Үнэ</div>
            <div className="flex-1">Үлдэгдэл</div>
            <div className="flex-1">Зарагдсан</div>
            <div className="flex-1 pr-[100px]">Нэмсэн огноо</div>
          </div>

          {filteredProducts.map((item, index) => (
            <div key={index} className="flex border-t h-[72px] text-sm">
              <div className="flex-[2] flex items-center gap-[80px] justify-center pl-4">
                <input
                  type="checkbox"
                  className="w-5 h-5 border-black border"
                />
                <div className="flex gap-3 justify-center">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image src={item.image[0]} fill alt="aa" />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-sm">
                      {item.productName}
                    </div>
                    <div className="text-[12px] text-[#5E6166]">{item._id}</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                {item.category[0]?.categoryName}
              </div>
              <div className="flex-1 flex items-center justify-center">
                {item.price}₮
              </div>
              <div className="flex-1 flex items-center justify-center">
                {item.quantity}
              </div>
              <div className="flex-1 flex items-center justify-center">
                {item.saledCount}
              </div>
              <div className="flex-1 flex items-center justify-center">
                {new Date(item.createdAt).toLocaleDateString()}
              </div>
              <div className="flex-1 flex items-center justify-center gap-3">
                <AlertDialog>
                  <AlertDialogTrigger>
                    <GrayDeleteIcon />
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Та энэ бүтээгдэхүүнийг усгахдаа итгэлтэй байна уу?{" "}
                      </AlertDialogTitle>
                      <AlertDialogDescription></AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Үгүй</AlertDialogCancel>
                      <AlertDialogAction
                        className="cursor-pointer"
                        onClick={() => deleteProduct(item._id)}
                      >
                        Тийм
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                {/* <div
                  className="cursor-pointer"
                  onClick={() => deleteProduct(item._id)}
                >
                  <GrayDeleteIcon />
                </div> */}
                <Dialog>
                  <DialogTrigger>
                    <GrayEditIcon />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="flex flex-col gap-8">
                      <DialogTitle className="font-bold">
                        Бүтээгдэхүүн засварлах
                      </DialogTitle>
                      <DialogDescription className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                          <div className="font-semibold text-black">
                            Бүтээгдэхүүний нэр засварлах
                          </div>
                          <input
                            placeholder={`${item.productName}`}
                            value={addNewProductName}
                            onChange={(e) =>
                              setAddNewProductName(e.target.value)
                            }
                          ></input>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="font-semibold text-black">
                            Үнэ засварлах
                          </div>
                          <input
                            placeholder={`${item.price}`}
                            value={addNewPrice}
                            onChange={(e) => setAddNewPrice(e.target.value)}
                          ></input>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="font-semibold text-black">
                            Үлдэгдэл засварлах
                          </div>
                          <input
                            placeholder={`${item.quantity}`}
                            value={addNewQuantity}
                            onChange={(e) => setAddNewQuantity(e.target.value)}
                          ></input>
                        </div>
                        <DialogClose>
                          <div
                            onClick={() =>
                              editProduct({
                                _id: item._id,
                                newProductName: addNewProductName,
                                newQuantity: addNewQuantity,
                                newPrice: addNewPrice,
                              })
                            }
                            className="self-center cursor-pointer py-2 px-4 bg-green-400 text-black font-semibold rounded-lg"
                          >
                            Өөрчлөх
                          </div>
                        </DialogClose>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
