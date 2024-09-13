"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/`);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <main>
      <div>asdasdasdasd</div>
      {data.map((item) => (
        <div key={item.title}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </main>
  );
}
