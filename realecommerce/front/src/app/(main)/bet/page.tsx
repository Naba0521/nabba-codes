"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const mockMembers = ["Team A", "Team B", "Team C", "Team D"];
  const mockBets = [1000, 3000, 5000, 10000];

  const [selectedTeam, setSelectedTeam] = useState<string>("");
  const [selectedBet, setSelectedBet] = useState<number | null>(null);

  const handleBet = () => {
    if (!selectedTeam || !selectedBet) {
      alert("Баг болон бооцооны үнийн дүнг сонгоно уу.");
      return;
    }

    console.log("Бооцоо тавилаа:", {
      баг: selectedTeam,
      бооцоо: selectedBet,
    });

    setSelectedTeam("");
    setSelectedBet(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col items-center gap-6 p-6">
      <div className="text-4xl font-extrabold text-blue-700 mb-2">
        🏆 Дээд лигийн бооцоо
      </div>

      <div className="grid grid-cols-2 gap-10 items-start">
        <div className="flex flex-col items-center gap-2">
          <div className="w-48 h-48 rounded-xl bg-slate-300 flex justify-center items-center text-xl font-semibold shadow">
            Team A
          </div>
          <div className="flex justify-between w-full text-sm text-gray-600 items-center">
            <span>Team A</span>
            <span className="text-xl font-bold">1.8</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-48 h-48 rounded-xl bg-slate-300 flex justify-center items-center text-xl font-semibold shadow">
            Team B
          </div>
          <div className="flex justify-between w-full text-sm text-gray-600 items-center">
            <span>Team B</span>
            <span className="text-xl font-bold">1.8</span>
          </div>
        </div>
      </div>

      <div className="text-center text-lg font-medium text-blue-900">
        Өнөөдөр • 19:00 • <span className="font-bold">VS</span>
      </div>

      <div className="w-full max-w-md">
        <label className="block mb-1 font-medium text-gray-700">
          Баг сонгох:
        </label>
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="w-full p-2 border rounded bg-white shadow"
        >
          <option value="">-- Сонгоно уу --</option>
          {mockMembers.map((member, idx) => (
            <option key={idx} value={member}>
              {member}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full max-w-md">
        <label className="block mb-1 font-medium text-gray-700 mt-4">
          Бооцоо тавих дүн:
        </label>
        <div className="flex flex-wrap gap-3">
          {mockBets.map((bet, index) => (
            <Button
              key={index}
              variant={selectedBet === bet ? "default" : "outline"}
              onClick={() => setSelectedBet(bet)}
            >
              {bet.toLocaleString()}₮
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-4 text-blue-800 text-sm">
        {selectedTeam && selectedBet && (
          <div>
            Та <strong>{selectedTeam}</strong> багт{" "}
            <strong>{selectedBet.toLocaleString()}₮</strong> бооцоо тавих гэж
            байна.
          </div>
        )}
      </div>

      <Button
        onClick={handleBet}
        className="bg-blue-600 hover:bg-blue-700 text-white mt-4"
      >
        Бооцоо тавих
      </Button>
    </div>
  );
}
