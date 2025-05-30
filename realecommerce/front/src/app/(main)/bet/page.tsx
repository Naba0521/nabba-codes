"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import clsx from "clsx";

export default function Home() {
  const mockTeams = [
    { name: "Team A", odd: 1.8 },
    { name: "Team B", odd: 1.2 },
  ];
  const mockBets = [1000, 3000, 5000, 10000];

  const [selectedTeam, setSelectedTeam] = useState<string>("");
  const [selectedBet, setSelectedBet] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const handleBet = () => {
    if (!name.trim()) {
      alert("Нэрээ оруулна уу.");
      return;
    }
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
    setName("");
  };

  const selectedTeamObj = mockTeams.find((team) => team.name === selectedTeam);
  const winniblePrice =
    selectedBet && selectedTeamObj ? selectedBet * selectedTeamObj.odd : null;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col items-center gap-6 p-6">
      <div className="text-4xl font-extrabold text-blue-700 mb-2">
        🏆 Дээд лигийн бооцоо
      </div>
      <div className="grid grid-cols-2 gap-10 items-start">
        {mockTeams.map((team) => (
          <div key={team.name} className="flex flex-col items-center gap-2">
            <div
              onClick={() => setSelectedTeam(team.name)}
              className={clsx(
                "w-48 h-48 rounded-xl cursor-pointer flex justify-center items-center text-xl font-semibold shadow transition transform hover:scale-105",
                selectedTeam === team.name
                  ? "bg-blue-500 text-white"
                  : "bg-slate-300"
              )}
            >
              {team.name}
            </div>
            <div className="flex justify-between w-full text-sm text-gray-600 items-center">
              <span>{team.name}</span>
              <span className="text-xl font-bold">{team.odd}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center text-lg font-medium text-blue-900">
        Өнөөдөр • 19:00 • <span className="font-bold">VS</span>
      </div>
      <div className="w-full max-w-md">
        <label className="block mb-1 font-medium text-gray-700 mt-4">
          Бооцоо тавих дүн:
        </label>
        <div className="flex flex-wrap gap-3 justify-evenly">
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
      {selectedTeam && selectedBet && (
        <div className="mt-4 text-blue-800 text-sm text-center">
          Та <strong>{selectedTeam}</strong> багт{" "}
          <strong>{selectedBet.toLocaleString()}₮</strong> бооцоо тавих гэж
          байна. <br />
          Хожвол <strong>{winniblePrice?.toLocaleString()}₮</strong> авах
          боломжтой.
        </div>
      )}
      <div className="w-full max-w-md mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Таны нэр:
        </label>
        <input
          type="text"
          placeholder="Нэрээ оруулна уу"
          className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm text-gray-800 placeholder-gray-400"
        />
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
