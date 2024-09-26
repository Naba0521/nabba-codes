import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Header />
      <div style={{ minHeight: "calc(100vh - 320.5px - 70px)" }}>
        {children}
      </div>

      <Footer />
    </div>
  );
}
