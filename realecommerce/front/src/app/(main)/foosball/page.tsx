"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/lib/axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState<string[]>(["", ""]);

  const createFoosBallMembers = async () => {
    try {
      await api.post("/foosball", {
        memberNames: selectedMembers,
      });
      getMembers();
      setSelectedMembers(["", ""]);
    } catch (error) {
      console.error("Error adding foosball:", error);
    }
  };

  const getMembers = async () => {
    try {
      const response = await api.get("/foosball");
      setMembers(response.data.memberNames);
    } catch (error) {
      console.error("Error fetching foosball:", error);
    }
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col items-center justify-start p-6">
      <div className="text-3xl font-extrabold text-blue-700 mb-6">
        🏆 Бамбар лигийн бүртгэл
      </div>
      <div className="flex justify-between gap-5">
        <Link href={"/betTest"} target="blank">
          <Button className="text-xl font-bold mb-4 text-white self-center">
            Бооцоо тавих
          </Button>
        </Link>
        <Link href={"/upperMembers"} target="blank">
          <Button className="text-xl font-bold mb-4 text-white self-center">
            Дээд лигийн гишүүд
          </Button>
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md flex flex-col gap-4">
        <div className="text-lg font-semibold text-gray-700">
          👥 Шинэ баг бүртгүүлэх
        </div>
        <div className="flex gap-3">
          <input
            value={selectedMembers[0]}
            onChange={(e) =>
              setSelectedMembers([e.target.value, selectedMembers[1]])
            }
            placeholder="Тоглогч 1"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={selectedMembers[1]}
            onChange={(e) =>
              setSelectedMembers([selectedMembers[0], e.target.value])
            }
            placeholder="Тоглогч 2"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={createFoosBallMembers}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          ➕ Бүртгүүлэх
        </button>
      </div>

      <div className="mt-10 w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          📋 Бүртгүүлсэн багууд:
        </h2>
        <table className="w-full text-left border border-gray-300 shadow-sm rounded-xl overflow-hidden">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="px-4 py-2 border border-gray-300">#</th>
              <th className="px-4 py-2 border border-gray-300">Баг</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member: { memberNames: string[] }, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2 border border-gray-300">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {member.memberNames?.join(" & ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
