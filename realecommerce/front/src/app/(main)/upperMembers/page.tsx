import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const players = [
    {
      name: "Билгүүндөл",
      nickname: '🎯 "Өнцгийн бурхан Дөлөө"',
      image:
        "https://res.cloudinary.com/dgivvztkg/image/upload/v1748507167/Screenshot_2025-05-29_at_16.21.00_f9msc0.png",
    },
    {
      name: "Ганбат",
      nickname: '⚡ “Дууны хурд Ганбаа"',
      image:
        "https://res.cloudinary.com/dgivvztkg/image/upload/v1748508145/Image_utqb8s.jpg",
    },
    {
      name: "Бат-Оргил",
      nickname: '🧠 "Талбайн мастер Оргил"',
      image:
        "https://res.cloudinary.com/dgivvztkg/image/upload/v1748508698/Person_Orgil_BG_No_uw2sdn.jpg",
    },
    {
      name: "О.Золбоо",
      nickname: '🔨 "Цохилтын хаан О.Золбоо"',
      image:
        "https://res.cloudinary.com/dgivvztkg/image/upload/v1748508488/Screenshot_2025-05-29_at_16.47.45_kiklqm.png",
    },
    {
      name: "Жавхлантөгс",
      nickname: '🌀 "Хөдөлгөөний шидтэн Жавхаа"',
      image:
        "https://res.cloudinary.com/dgivvztkg/image/upload/v1748507200/Screenshot_2025-05-29_at_16.21.59_onnmkt.png",
    },
    {
      name: "Наранцацралт",
      nickname: '💪 "Бариул таслагч Нараа"',
      image:
        "https://res.cloudinary.com/dgivvztkg/image/upload/v1748507091/Screenshot_2025-05-29_at_16.20.33_wnxhqt.png",
    },
    {
      name: "Дашням",
      nickname: '🚀 "Давшилтын аянга Дашка"',
      image:
        "https://res.cloudinary.com/dgivvztkg/image/upload/v1748508765/Screenshot_2025-05-29_at_16.52.31_udo6wp.png",
    },
    {
      name: "Батмөнх",
      nickname: '🧩 "Тактикийн мастер Батаа"',
      image:
        "https://res.cloudinary.com/dgivvztkg/image/upload/v1748508385/Person_Bataa_BG_No_ryhpmf.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-orange-100 p-8">
      <div className="text-3xl font-bold text-center text-red-600 mb-6">
        🧨 Дээд лигийн Тамирчдын бүрэлдэхүүн
      </div>
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <table className="w-full table-auto border-collapse text-left">
          <thead className="bg-red-100 text-red-800">
            <tr>
              <th className="px-4 py-3 border">№</th>
              <th className="px-4 py-3 border">🖼️ Зураг</th>
              <th className="px-4 py-3 border">🧍‍♂️ Тоглогчийн нэр</th>
              <th className="px-4 py-3 border">💥 Хоч</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-orange-50"}
              >
                <td className="px-4 py-2 border text-center font-semibold">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border">
                  <Link href={player.image}>
                    <Image
                      width={200}
                      height={200}
                      src={player.image}
                      alt={player.name}
                      className="w-16 h-16 rounded-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-150 hover:shadow-xl"
                    />
                  </Link>
                </td>
                <td className="px-4 py-2 border">{player.name}</td>
                <td className="px-4 py-2 border italic">{player.nickname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
