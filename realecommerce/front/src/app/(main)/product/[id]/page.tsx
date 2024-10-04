"use client";
import { BHeart } from "@/assets/BHeart";
import { HalfStar } from "@/assets/HalfStar";
import { Heart } from "@/assets/Heart";
import { Star } from "@/assets/Star";
import axios from "axios";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MainProductCard } from "../../_components/MainProductCard";
import { FaStar } from "react-icons/fa";
import { useAuthContext } from "@/components/utils/authProvider"; // Import the useAuthContext hook

type ParamsType = {
  id: string;
};
type ProductType = {
  productName: string;
  price: number;
  description: string;
  size: string[];
  image: string[];
  averageRating: number;
  reviewCount: number;
};
interface category {
  _id: string;
  categoryName: string;
}
interface Product {
  _id: string;
  productName: string;
  price: number;
  image: string[];
  category: category[];
  size: string[];
  quantity: number;
  saledCount: number;
  salePercent: number;
}
type reviewResponse = {
  _id: string;
  productId: string;
  userId: userIdResponse;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
};
type userIdResponse = {
  _id: string;
  userName: string;
};

interface ProductsResponse {
  products: Product[]; // This represents the `products.products` structure
}
type addCommentType = {
  comment: string;
};
type addReviewType = {
  productId: string;
  userId: string;
  comment: string;
  rating: number;
};
interface AddOrderResponse {
  productId: string;
  userId: string;
  count: number;
  price: number;
  size: string;
}
export default function Home() {
  const {
    userMe,
    createToSavedProduct,
    deleteToSavedProduct,
    savedProductData,
    getOneUserOrderForHeader,
  } = useAuthContext(); // Access userMe from AuthContext

  const [savedHeart, setSavedHeart] = useState(false);

  const [size, setSize] = useState(0);
  const [productNumber, setProductNumber] = useState(1);
  const [hidebox, setHideBox] = useState(false);
  const [hideComment, setHideComment] = useState(false);

  const [product, setProduct] = useState<ProductType>();
  const [reviews, setReviews] = useState<reviewResponse[]>([]);
  const [ratingSelect, setRatingSelect] = useState<number>(0);

  const { id } = useParams<ParamsType>();
  const [productsa, setProductsa] = useState<ProductsResponse | null>(null);

  const [addComment, setAddComment] = useState<addCommentType>({
    comment: "",
  });

  const [notification, setNotification] = useState("");

  const getProducts = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get("http://localhost:3001/product");
      setProductsa(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getOneProduct = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:3001/product/${id}`);
      setProduct(response.data.product);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const getOneReview = async (id: string) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(`http://localhost:3001/review/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token in the headers
        },
      });
      setReviews(response.data.reviews);
      console.log("1111asdsasd", response.data.reviews);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  const createReview = async (addReview: addReviewType) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "http://localhost:3001/review",
        addReview, // Pass the review data as the second parameter
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token in the headers
          },
        }
      );
      getOneReview(id); // Refresh the reviews after posting
      getOneProduct(id); // Optionally refresh the product details
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };
  const createOrder = async (addOrder: AddOrderResponse) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "http://localhost:3001/order",
        addOrder, // Pass the review data as the second parameter
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token in the headers
          },
        }
      );
      setNotification("Захиалга амжилттай нэмэгдлээ"); // Set notification message
      // Clear notification after 3 seconds
      setTimeout(() => {
        setNotification("");
      }, 3000);
      getOneUserOrderForHeader();
    } catch (error) {
      // Check if the error response exists and has a status code of 409
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        setNotification("Энэ бүтээгдэхүүн сагсанд нэмэгдсэн байна");
        setTimeout(() => {
          setNotification("");
        }, 3000);
      } else {
        console.log(error); // Log other errors
      }
    }
  };

  useEffect(() => {
    const filteredSavedProducts = savedProductData.filter(
      (savedProduct) => savedProduct.userId === userMe?.id
    );

    const isSaved = filteredSavedProducts.some(
      (savedProduct) => savedProduct.productId._id === id
    );

    setSavedHeart(isSaved);
  }, [id, savedProductData, userMe]);

  const handleHeartClick = () => {
    if (savedHeart) {
      deleteToSavedProduct(id);
    } else {
      createToSavedProduct(id);
    }
    setSavedHeart((prev) => !prev); // Toggle savedHeart state
  };
  const [imgIndex, setImgIndex] = useState<number>(0);
  useEffect(() => {
    getOneProduct(id);
    getOneReview(id);
    getProducts();
  }, []);

  return (
    <div className="py-4 px-6 flex justify-center w-full min-h-screen">
      <div className=" w-[1440px] px-[200px] pb-16  gap-[120px] flex flex-col  ">
        {notification && (
          <div className="bg-green-500 text-white p-4 rounded-md mb-4 w-[200px] absolute top-[50px] right-[540px]">
            {notification}
          </div>
        )}
        <div className="flex gap-5">
          <div className="flex-1 flex gap-5  h-[520px] sticky top-0 pt-16">
            <div className="w-[67px] flex flex-col gap-2 justify-center">
              {product?.image.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setImgIndex(index);
                    }}
                    className={`relative w-full h-[67px] rounded overflow-hidden ${
                      index === imgIndex ? " border-[2px] border-[#09090B]" : ""
                    }`}
                  >
                    <Image src={item} fill alt="asd" className="object-cover" />
                  </div>
                );
              })}
            </div>
            <div className="flex-1 relative rounded-2xl h-[521px]">
              {product?.image ? (
                <Image
                  src={product.image[imgIndex]}
                  className="rounded-2xl"
                  fill
                  alt="Product Image"
                />
              ) : (
                <div className="rounded-2xl bg-gray-200 h-full flex items-center justify-center">
                  <p>Loading...</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex-1 flex flex-col pt-[164px]  gap-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="border border-[#2563EB] px-[10px] py-[2px] w-fit rounded-full font-semibold text-[12px]">
                    шинэ
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="font-bold text-2xl">
                      {product?.productName}
                    </div>
                    <div className="cursor-pointer" onClick={handleHeartClick}>
                      <BHeart bgColor={savedHeart ? "red" : "#D3D3D3"} />
                    </div>
                  </div>
                  <div>{product?.description}</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm underline">Хэмжээний заавар</div>
                  <div className="flex gap-1 text-xs">
                    {product?.size.map((item, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => setSize(index)}
                          className={`w-8 h-8 border flex justify-center items-center rounded-2xl hover:bg-[#E4E4E7] ${
                            index === size ? "bg-black text-white" : ""
                          }`}
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex">
                  <button
                    onClick={() =>
                      setProductNumber((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                    className="w-8 h-8 border rounded-2xl"
                  >
                    -
                  </button>
                  <div className="w-8 h-8 flex justify-center items-center">
                    {productNumber}
                  </div>
                  <button
                    onClick={() => setProductNumber((prev) => prev + 1)}
                    className="w-8 h-8 border rounded-2xl"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-xl font-bold">
                  {product?.price
                    ? product.price * productNumber
                    : "Loading..."}
                  ₮{" "}
                </div>
                <button
                  className="h-9 w-[175px] text-white bg-[#2563EB] rounded-[20px]"
                  onClick={() => {
                    if (userMe?.id) {
                      createOrder({
                        userId: userMe.id,
                        count: productNumber,
                        productId: id,
                        size: product?.size[size] ?? "",
                        price: product?.price ?? 0, // price нь undefined байвал 0
                      });
                    }
                  }}
                >
                  Сагсанд нэмэх
                </button>
              </div>
            </div>
            <div>
              <div className="flex gap-4 pt-8">
                <div className="text-sm">Үнэлгээ</div>
                <button
                  onClick={() => setHideBox(() => !hidebox)}
                  className="text-[#2563EB] text-sm underline"
                >
                  {hidebox === true ? "Бүгдийг хураах" : "Бүгдийг харах"}
                </button>
              </div>
              <div className="flex">
                <div className="flex gap-1 text-xl">
                  {Array(5)
                    .fill(null)
                    .map((item, index) => {
                      return (
                        <FaStar
                          className={`text-xl ${
                            (product?.averageRating ?? 0) > index
                              ? "text-[#FDE047]"
                              : "text-gray-300"
                          }`}
                        />
                      );
                    })}
                </div>
                <div className="font-bold text-sm">
                  {product?.averageRating}
                </div>
                <div className="text-sm text-[#71717A]">
                  ({product?.reviewCount})
                </div>
              </div>
            </div>
            <div
              className={`w-full h-fit gap-6 flex-col   ${
                hidebox === true ? "flex " : "hidden"
              }`}
            >
              <div
                className={`p-6 ${
                  hideComment === false ? "flex" : "hidden"
                } flex flex-col gap-6 bg-[#F4F4F5] rounded-lg`}
              >
                <div className="flex flex-col gap-2">
                  <div className="text-[#09090B] font-medium text-sm">
                    Одоор үнэлэх:
                  </div>
                  <div>
                    <div className="flex gap-1">
                      {Array(5)
                        .fill(null)
                        .map((item, index) => {
                          return (
                            <FaStar
                              className={`text-xl ${
                                ratingSelect > index
                                  ? "text-[#FDE047]"
                                  : "text-gray-300"
                              }`}
                              onClick={() => {
                                setRatingSelect(index + 1);
                              }}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 ">
                  <div className="text-[#09090B] font-medium text-sm">
                    Сэтгэгдэл үлдээх:
                  </div>
                  <input
                    onChange={(event) =>
                      setAddComment({
                        ...addComment,
                        comment: event.target.value,
                      })
                    }
                    placeholder="Энд бичнэ үү"
                    className="bg-[#FFFFFF] w-full pb-[94px] pt-2 flex justify-start items-start rounded-md px-3"
                  ></input>
                </div>
                <button
                  onClick={() => {
                    if (userMe?.id) {
                      createReview({
                        productId: id,
                        rating: ratingSelect,
                        comment: addComment.comment,
                        userId: userMe.id, // This will now be safe
                      });
                      setHideComment(!hideComment);
                    }
                  }}
                  className="text-white text-sm font-medium bg-[#2563EB] rounded-[20px] py-2 px-9 w-fit"
                >
                  Үнэлэх
                </button>
              </div>
              <div className="flex flex-col gap-5 [&>div:nth-child(1)]:border-none">
                {reviews.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-1 border-t border-dashed"
                    >
                      <div className="flex gap-1 pt-4">
                        <div>{item?.userId.userName}</div>
                        <div className="flex gap-1 items-center">
                          {Array(5)
                            .fill(null)
                            .map((_, index) => {
                              return (
                                <FaStar
                                  className={`text-xl ${
                                    item.rating > index
                                      ? "text-[#FDE047]"
                                      : "text-gray-300"
                                  }`}
                                />
                              );
                            })}
                        </div>
                      </div>
                      <div className="text-sm text-[#71717A]">
                        {item.comment}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-2xl font-bold">Холбоотой бараа</div>
          <div className="grid grid-cols-4 gap-x-4 gap-y-4">
            {productsa?.products.slice(1, 9).map((item, index) => {
              return <MainProductCard key={index} item={item} index={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
