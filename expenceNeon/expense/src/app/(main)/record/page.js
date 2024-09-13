import { Header } from "@/components/Header";
import { LogInCard } from "@/components/LogInCard";
import { Records } from "@/components/Records";

export default function Home() {
  return (
    <main className="bg-gray-100 h-screen">
      <div className="bg-gray-100 h-full">
        <Records />
      </div>
    </main>
  );
}
