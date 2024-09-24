"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
type addUserRespponse = {
  email: string;
  password: string;
};
export default function home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const logIn = async (addUser: addUserRespponse) => {
    try {
      const response = await axios.post("http://localhost:3001/user", addUser);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col pt-[68px] gap-6 items-center">
        <div className="font-semibold text-2xl">Нэвтрэх</div>
        <div className="flex flex-col w-[340px] gap-4 items-center">
          <input
            placeholder="Имэйл хаяг"
            className="py-3 px-2 border rounded-2xl w-full bg-white"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            placeholder="Нууц үг"
            className="py-3 px-2  border rounded-2xl w-full bg-white"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <div
            className="bg-[#2563EB] text-white rounded-2xl flex justify-center items-center py-2 w-full cursor-pointer"
            onClick={() => {
              logIn({
                email: email,
                password: password,
              });
            }}
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
