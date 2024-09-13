"use client";

import { Error } from "@/components/Error";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const PageError = () => {
  return (
    <main className="flex flex-col m-auto bg-white  w-full">
      <Header />
      <Error />
      <Footer />
    </main>
  );
};
export default PageError;
