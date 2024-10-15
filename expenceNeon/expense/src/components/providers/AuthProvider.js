"use client";

import { api } from "@/lib/axios";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, createContext, useContext } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();
const authPaths = ["/login", "/signUp"];

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [totalAmount, setTotalAmount] = useState(0);
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const createUser = async ({ email, name, password }) => {
    try {
      await api.post("/auth/register", { name, email, password });
      router.push("/login");
      toast.success("Account created");
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data.message ?? "Please check your email or password"
      );
    }
  };

  const login = async (email, password) => {
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      toast.success(res.data.message);
      router.replace("/geldCurrency");
    } catch (error) {
      console.error(error);
      toast.error("Invalid email or password");
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem("token");
      setUser(null);
      toast.success("You have been logged out successfully.");
      await router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed");
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        setIsReady(false);
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await api.get("/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(res.data);
      } catch (err) {
        console.error(err);
        localStorage.removeItem("token");
        toast.error("Your session has expired. Please log in again.");
      } finally {
        setIsReady(true);
      }
    };

    loadUser();
  }, []);

  useEffect(() => {
    if (authPaths.includes(pathname)) return;
    if (!isReady) return;
    if (!user) router.replace("/login");
  }, [pathname, user, isReady]);

  if (!isReady) return null;

  return (
    <AuthContext.Provider
      value={{
        setUser,
        user,
        login,
        logout,
        totalAmount,
        setTotalAmount,
        createUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
