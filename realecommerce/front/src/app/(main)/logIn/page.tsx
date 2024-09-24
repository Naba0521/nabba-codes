"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

type AddUserResponse = {
  email: string;
  password: string;
};

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const logIn = async (addUser: AddUserResponse) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/login",
        addUser
      );

      // Store the token in localStorage (or sessionStorage)
      localStorage.setItem("token", response.data.token);

      // Redirect the user after successful login
      router.push("/");
    } catch (error: any) {
      console.error(error);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col pt-[68px] gap-6 items-center">
        <div className="font-semibold text-2xl">Нэвтрэх</div>
        <div className="flex flex-col w-[340px] gap-4 items-center">
          <input
            type="email"
            placeholder="Имэйл хаяг"
            className="py-3 px-2 border rounded-2xl w-full bg-white"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Нууц үг"
            className="py-3 px-2 border rounded-2xl w-full bg-white"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {error && <div className="text-red-500">{error}</div>}
          <div
            className="bg-[#2563EB] text-white rounded-2xl flex justify-center items-center py-2 w-full cursor-pointer"
            onClick={() => logIn({ email, password })}
          >
            Нэвтрэх
          </div>
          <div className="text-sm text-[#71717A] underline">
            Нууц үг мартсан
          </div>
        </div>
        <div className="bg-white border border-[#2563EB] text-[#2563EB] rounded-2xl flex justify-center items-center py-2 w-full mt-6">
          Бүртгүүлэх
        </div>
      </div>
    </div>
  );
}
