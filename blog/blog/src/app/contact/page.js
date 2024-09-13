"use client";

import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const ContactPage = () => {
  return (
    <main className="flex flex-col m-auto bg-white  w-full">
      <Header />
      <Contact />
      <Footer />
    </main>
  );
};
export default ContactPage;
