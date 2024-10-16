import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { AccountContextProvider } from "@/components/context";
import { CategoryContextProvider } from "@/components/categoryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <CategoryContextProvider>
        <AccountContextProvider>
          <body className={inter.className}>
            <Header />
            {children}
            {/* <ToastContainer /> */}
          </body>
        </AccountContextProvider>
      </CategoryContextProvider>
    </html>
  );
}
