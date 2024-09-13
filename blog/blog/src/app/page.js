"use client";

import { Part1 } from "@/components/Part1";
import { Part2 } from "@/components/Part2";

import { useEffect, useState } from "react";
import { Part3 } from "@/components/Part3";
import { AllBlogs } from "@/components/AllBlog";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Error } from "@/components/Error";

const getArticle = async () => {
  const res = await fetch("https://dev.to/api/articles");
  const articles = await res.json();
  return articles;
};

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getArticle();
      setArticles(data);
    };

    getData();
  }, []);

  return (
    <main className="flex flex-col m-auto bg-white  w-full">
      <Header />
      <Part1 data={articles} />
      <Part2 data={articles} />
      {/* <Part3 data={articles} /> */}
      <AllBlogs />
      <Footer />
    </main>
  );
}
