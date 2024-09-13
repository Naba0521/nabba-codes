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
  //   const [isLoggedIn, setIsLoggedIn] = useState(false); // hereglegch newtersen esehiig shalgaj bga state
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);
  //   const [isChecking, setIsChecking] = useState(true);
  // const [newUser, setNewUser] = useState({
  //   name: "",
  //   email: "",
  //   password: 0,
  // });

  const createUser = async ({ email, name, password }) => {
    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
      });

      router.push("/login");
      toast.success("account created");
    } catch (err) {
      console.log(err);
      toast.error(
        err.response?.data.message ?? "Ta email eswel passwordoo shalgana uu"
      );
    }
    // const response = await api.post("/auth/register", {
    //   email,
    //   name,
    //   password,
    // });
  };
  const login = async (email, password) => {
    try {
      const res = await api.post("/auth/login", { email, password });
      // toast.success(response.data.message);

      localStorage.setItem("token", res.data.token); // token aa browser deeree hadgalsan

      setUser(res.data.user); // user gedeg state neg bol null bdag vgvi bol useriin medeelel hadgalana. useriin medeelel hadgalsan bwal bi newtersen gej vgvi
      // toast.success("You have been logged in successfully.");
      // toast.success("logged in ");

      router.replace("/"); //home ruugaa vsergene
      // toast.success("You have been logged in successfully.");

      //   const response = await api.post("/auth/login", { email, password });
      // toast.success(response.data.message);
      //   setIsLoggedIn(true);
      //   localStorage.setItem("token", "token");
      //   router.push("/");
    } catch (error) {
      toast.error(error.response?.data.message ?? "hahaha");
      //   console.log(err);
      // toast.error(error.message);
      // toast.error(error.response.data.message);
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem("token");
      toast.success("You have been logged out successfully.");
      await router.push("/login");

      // await router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("LogOut hiihed aldaa garlaa");
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        setIsReady(false);

        const token = localStorage.getItem("token");

        if (!token) return;

        const res = await api.get("/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
      } catch (err) {
        console.log(err);
        localStorage.removeItem("token");
        toast.error("Your session has expired. Please login again.");
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

  //   useEffect(() => {
  //     const token = localStorage.getItem("token");

  //     if (token) setIsLoggedIn(true);

  //     setIsChecking(false); // ene vildel duusaad is cheking false bolj bga<ToastContainer />
  //   }, []);

  //   useEffect(() => {
  //     if (isChecking) return; // is cheking baihiin bol yamar neg vildel hiihgvi shvv
  //     if (!isLoggedIn) router.push("/login");
  //   }, [isLoggedIn, isChecking]); // cheking false bolsonii daraa l ajilna shvv

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
