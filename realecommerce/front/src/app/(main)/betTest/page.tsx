/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import { request, gql } from "graphql-request";
import Image from "next/image";
import Link from "next/link";
interface Team {
  name: string;
  image: string;
  players: string[];
}

interface Game {
  id: string;
  teamA: Team;
  teamB: Team;
  isFinished: boolean;
  isStarted: boolean;
}

interface GameResponse {
  getGames: Game[];
}

const endpoint =
  typeof window !== "undefined"
    ? window.location.origin + "/api/graphql"
    : "http://localhost:3000/api/graphql";

const GET_GAMES = gql`
  query GetGames {
    getGames {
      id
      teamA {
        name
        image
        players
      }
      teamB {
        name
        image
        players
      }
      isFinished
      isStarted
    }
  }
`;

export default function Home() {
  const [games, setGames] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const gameRes = (await request(endpoint, GET_GAMES)) as GameResponse;

      console.log(gameRes.getGames);
      setGames(gameRes.getGames);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col items-center gap-6 p-6">
      <div className="text-4xl font-extrabold text-blue-700 mb-2">
        🏆 Дээд лигийн бооцоо баг сонгох
      </div>
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-6">
          {games.map((game, index) => (
            <Link href={`/betTest/${game.id}`} key={game.id}>
              <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col gap-4">
                <div className="text-xl font-bold text-center text-gray-700">
                  Тоглоом {index + 1}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={game.teamA.image}
                      alt={game.teamA.name}
                      width={100}
                      height={100}
                      className="w-24 h-24 object-cover rounded-full border"
                    />
                    <div className="font-semibold">{game.teamA.name}</div>
                    <div className="text-sm text-gray-500">
                      {game.teamA.players.join(", ")}
                    </div>
                  </div>

                  <div className="text-xl font-bold text-blue-600">VS</div>

                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={game.teamB.image}
                      alt={game.teamB.name}
                      width={100}
                      height={100}
                      className="w-24 h-24 object-cover rounded-full border"
                    />
                    <div className="font-semibold">{game.teamB.name}</div>
                    <div className="text-sm text-gray-500">
                      {game.teamB.players.join(", ")}
                    </div>
                  </div>
                </div>

                <div className="text-center text-sm text-gray-600">
                  {game.isStarted
                    ? "Тоглолт эхэлсэн"
                    : game.isFinished
                    ? "Тоглолт дууссан"
                    : "Тоглолт эхлээгүй"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
