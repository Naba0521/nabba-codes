"use client";

import { AllBlogs1 } from "@/components/AllBlog1";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
const BlogPage = () => {
  return (
    <main className="flex flex-col m-auto bg-white  w-full">
      <Header />
      <AllBlogs1 />
      <Footer />
    </main>
  );
};
export default BlogPage;
