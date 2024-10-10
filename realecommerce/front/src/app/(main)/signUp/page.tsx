"use client";
import { api } from "@/lib/axios";
import Link from "next/link";
import { useState } from "react";
type addUserRespponse = {
  userName: string;
  email: string;
  password: string;
};
export default function Home() {
  const [addUserName, setAddUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const createUser = async (addUser: addUserRespponse) => {
    try {
      await api.post("/user", addUser);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col py-[100px] gap-6 items-center">
        <div className="font-semibold text-2xl">Бүртгүүлэх</div>
        <div className="flex flex-col w-[340px] gap-4 items-center ">
          <input
            placeholder="Нэр"
            className="py-3 px-2 border rounded-2xl w-full bg-white"
            onChange={(e) => setAddUserName(e?.target.value)}
          ></input>
          <input
            placeholder="Имэйл хаяг"
            className="py-3 px-2  border rounded-2xl w-full bg-white"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            placeholder="Нууц үг"
            className="py-3 px-2  border rounded-2xl w-full bg-white"
          ></input>
          <input
            placeholder="Нууц үг давтах "
            className="py-3 px-2  border rounded-2xl w-full bg-white"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <div
            className="bg-[#2563EB] cursor-pointer text-white rounded-2xl flex justify-center items-center py-2 w-full"
            onClick={() => {
              createUser({
                userName: addUserName,
                email: email,
                password: password,
              });
            }}
          >
            Бүртгүүлэх
          </div>
          <div className="text-sm text-[#71717A] underline">
            Нууц үг мартсан
          </div>
        </div>
        <Link
          href={`/logIn`}
          className="bg-white border border-[#2563EB] text-[#2563EB] rounded-2xl flex justify-center items-center py-2 w-full mt-6"
        >
          <div>Нэвтрэх</div>
        </Link>
      </div>
    </div>
  );
}
