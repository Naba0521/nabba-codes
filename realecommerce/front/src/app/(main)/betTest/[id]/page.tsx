/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { request, gql } from "graphql-request";
import { useParams } from "next/navigation";
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
interface GameOdds {
  oddA: number;
  oddB: number;
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

const GET_ODDS = gql`
  query GetGameOdds($gameId: ID!) {
    getGameOdds(gameId: $gameId) {
      oddA
      oddB
    }
  }
`;
const CREATE_BET = gql`
  mutation CreateBet($input: CreateBetInput!) {
    createBet(input: $input) {
      id
      username
      game
      team
      amount
    }
  }
`;

export default function Home() {
  const [games, setGames] = useState<any[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>("");
  const [selectedBet, setSelectedBet] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const allowedNames = [
    "Билгүүндөл",
    "Сайнзаяа",
    "Ганбат",
    "Бат-Оргил",
    "Наранбаатар",
    "Янжинлхам",
    "Золбаяр",
    "Manlai",
    "Билгүүн",
    "Золбоо /Октябрь/",
    "Ган-Индра /Болдням/",
    "Зулсар /Хасархүү/",
    "Жавхлантөгс /Батманлай/",
    "Эрдэнэдарь /Чулуунбаатар/",
    "Золбоо /Цолмонбаатар/",
    "Сумъяабазар /Амаржаргал/",
    "Арвинбуян /Отгонжаргал/",
    "Лхагвасүрэн /Оргилсайхан/",
    "Болормаа /Ихбаяр/",
    "Наранцацралт /Бумнасан/",
    "Номин /Тунгалагтамир/",
    "Лхагва-Эрдэнэ /Бямбацогт/",
    "Элбэг /Амарбаясгалан/",
    "Төрболд /Чинзориг/",
    "Энэрэл /Бариашир/",
    "Дашням /Баасан/",
    "Дүүрэнбилэг /Дарьхүү/",
    "Ариунболд /Уламсайхан/",
    "Бадрал /Байгалмаа/",
    "Мишээл /Соёл-Эрдэнэ/",
    "Тайванбат /Болдбаяр/",
    "Энх-Амар /Батноров/",
    "Гэрэлтуяа /Мөнхзаяа/",
    "Мөнхтунгалаг /Нямаа/",
    "Амгалан /Батнямсүрэн/",
    "Тэмүүлэн /Нармандах/",
    "Sukhbat",
    "Маралмаа/Давааням/",
    "Төмөрхуяг /Энхнасан/",
  ];

  const params = useParams();
  const gamingId = params?.id;
  const fetchData = async () => {
    try {
      const gameRes = (await request(endpoint, GET_GAMES)) as GameResponse;

      const gamesWithOdds = await Promise.all(
        gameRes.getGames.map(async (game: Game) => {
          try {
            const oddsRes = (await request(endpoint, GET_ODDS, {
              gameId: game.id,
            })) as { getGameOdds: GameOdds };

            return {
              ...game,
              oddA: oddsRes.getGameOdds.oddA,
              oddB: oddsRes.getGameOdds.oddB,
            };
          } catch (err) {
            console.warn("Skipping game due to missing odds:", game.id);
            return null;
          }
        })
      );

      setGames(
        gamesWithOdds.filter(Boolean).filter((game) => game?.id === gamingId)
      );
    } catch (error) {
      console.error("Error fetching games or odds:", error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 2000);

    return () => clearInterval(interval);
  }, [gamingId]);

  const selectedTeamObj = games
    .flatMap((game) => [
      { name: game.teamA.name, odd: game.oddA },
      { name: game.teamB.name, odd: game.oddB },
    ])
    .find((team) => team.name === selectedTeam);

  const winniblePrice =
    selectedBet && selectedTeamObj ? selectedBet * selectedTeamObj.odd : null;

  const mockBets = [1000, 3000, 5000, 10000];

  const handleBet = async () => {
    if (!name.trim()) {
      alert("Нэрээ оруулна уу.");
      return;
    }

    if (!selectedTeam || !selectedBet) {
      alert("Баг болон бооцооны үнийн дүнг сонгоно уу.");
      return;
    }

    try {
      const game = games.find(
        (g) => g.teamA.name === selectedTeam || g.teamB.name === selectedTeam
      );
      if (!game) {
        alert("Тохирох тоглоом олдсонгүй.");
        return;
      }

      const teamKey = game.teamA.name === selectedTeam ? "teamA" : "teamB";

      const betInput = {
        input: {
          username: name,
          game: gamingId,
          team: teamKey,
          amount: selectedBet,
        },
      };

      await request(endpoint, CREATE_BET, betInput);

      alert("Бооцоо амжилттай тавигдлаа!");
      setSelectedTeam("");
      setSelectedBet(null);
      setName("");
      fetchData();
    } catch (error) {
      console.error("Бооцоо илгээхэд алдаа гарлаа:", error);
      alert("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col items-center gap-6 p-6">
      <div className="text-4xl font-extrabold text-blue-700 mb-2">
        🏆 Дээд лигийн бооцоо
      </div>

      {games.length > 0 && (
        <div className="flex justify-between items-center">
          {games.map((game) => (
            <div
              key={game.id}
              className="flex items-center justify-between gap-4"
            >
              {[
                { team: game.teamA, odd: game.oddA },
                { team: game.teamB, odd: game.oddB },
              ].map(({ team, odd }) => (
                <div
                  key={team.name}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    onClick={() => setSelectedTeam(team.name)}
                    className={clsx(
                      "w-48 h-48 rounded-xl cursor-pointer flex justify-center items-center text-2xl font-bold shadow transition transform hover:scale-105 bg-center bg-cover",
                      selectedTeam === team.name
                        ? "ring-4 ring-blue-500 text-red-500"
                        : "bg-slate-300 text-black"
                    )}
                    style={{ backgroundImage: `url(${team.image})` }}
                  >
                    {team.name}
                  </div>
                  <div className="flex justify-between w-full text-sm text-gray-600 items-center">
                    <span>{team.name}</span>
                    <span className="text-xl font-bold">{odd}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {games[0] && games[0].isStarted === false ? (
        <>
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
              {name && (
                <div>
                  <strong>{name}</strong> та{" "}
                </div>
              )}
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
            <select
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm text-gray-800"
            >
              <option value="">Нэрээ сонгоно уу</option>
              {allowedNames.map((person) => (
                <option key={person} value={person}>
                  {person}
                </option>
              ))}
            </select>
          </div>

          <Button
            onClick={handleBet}
            className="bg-blue-600 hover:bg-blue-700 text-white mt-4"
          >
            Бооцоо тавих
          </Button>
        </>
      ) : (
        <div>Тоглолт эхэлсэн байна</div>
      )}
    </div>
  );
}
