"use client";

import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

// Define your types in a separate file for better organization
type UserMeResponse = {
  id: string;
  userName: string;
  email: string;
  phone: string;
  address: string;
  owog: string;
};
type deleteUserToSavedProduct = {
  productId: string;
  userId: string;
};
interface Product {
  _id: string;
  productName: string;
  price: number;
  image: string[];
  category: Category[];
  size: string[];
  quantity: number;
  saledCount: number;
  salePercent: number;
}

interface Category {
  id: string;
  categoryName: string;
}

type SavedProductDataResponse = {
  productId: Product;
  userId: string; // Assuming userId is of type string
};

type AuthContextType = {
  userMe: UserMeResponse | undefined;
  orderData: orderDataResponse;
  setUserMe: (userMe: UserMeResponse | undefined) => void; // Change null to undefined
  loading: boolean;
  savedProductData: SavedProductDataResponse[];
  createToSavedProduct: (productId: string) => Promise<void>; // Add this line
  deleteToSavedProduct: (productId: string) => Promise<void>; // Add this line
  getOneUserOrderForHeader: () => Promise<void>;
  LogOut: () => Promise<void>;
};

type addUserToSavedProduct = {
  productId: string;
  userId: string;
};
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

type AuthProviderProps = {
  children: ReactNode;
};
type orderDataResponse = {
  _id: string;
  productId: ProductResponse;
  userId: string;
  size: string;
  count: number;
  price: number;
}[];
type ProductResponse = {
  _id: string;
  productName: string;
  image: string[];
  price: number;
};
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userMe, setUserMe] = useState<UserMeResponse | undefined>();
  const [loading, setLoading] = useState(true);
  const [savedProductData, setSavedProductData] = useState<
    SavedProductDataResponse[]
  >([]);
  const [orderData, setOrderData] = useState<orderDataResponse>([]);
  const router = useRouter();

  const userId = userMe?.id || ""; // Use userMe ID

  // const token = localStorage.getItem("token");

  const getMe = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:3001/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserMe(response.data);
    } catch (error) {
      console.log("Error fetching user data", error);
    }
  };

  const getToSavedProduct = async () => {
    const token = localStorage.getItem("token");

    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:3001/savedProducts/oneUser",
        {
          params: { userId },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSavedProductData(response.data.savedProducts);
    } catch (error) {
      console.error("Error fetching user's saved products:", error);
    } finally {
      setLoading(false);
    }
  };

  const createToSavedProduct = async (productId: string) => {
    const token = localStorage.getItem("token");

    const addUserToSavedProduct: addUserToSavedProduct = { productId, userId };
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/savedProducts",
        addUserToSavedProduct,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await getToSavedProduct();
    } catch (error) {
      console.error("Error adding product to saved:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteToSavedProduct = async (productId: string) => {
    const token = localStorage.getItem("token");

    const deleteUserToSavedProduct = { productId, userId };

    setLoading(true); // Set loading state
    try {
      const response = await axios.delete(
        "http://localhost:3001/savedProducts",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: deleteUserToSavedProduct,
        }
      );
      console.log("Product removed:", response.data);

      // Update the savedProductData state
      setSavedProductData((prevData) =>
        prevData.filter(
          (savedProduct) => savedProduct.productId._id !== productId
        )
      );
    } catch (error) {
      console.error("Error removing product from saved:", error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  const getOneUserOrderForHeader = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get("http://localhost:3001/order/oneUser", {
        params: { userId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrderData(response.data.orders);
    } catch (error) {
      console.log(error);
    }
  };
  const LogOut = async () => {
    try {
      localStorage.removeItem("token");
      setUserMe(undefined);
      window.location.reload();
    } catch (error) {
      console.error("Logout error", error);
    }
  };
  useEffect(() => {
    getMe(); // Хэрэглэгчийн мэдээллийг татаж авч байна
  }, []);

  useEffect(() => {
    if (userMe) {
      // userMe-ийн утга байгаа эсэхийг шалга
      getToSavedProduct();
      getOneUserOrderForHeader();
    }
  }, [userMe]);

  return (
    <AuthContext.Provider
      value={{
        userMe,
        loading,
        savedProductData,
        createToSavedProduct,
        deleteToSavedProduct,
        setUserMe,
        orderData,
        getOneUserOrderForHeader,
        LogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
