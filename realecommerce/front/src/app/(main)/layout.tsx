import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="min-h-[60vh]">{children}</div>

      <Footer />
    </div>
  );
}
