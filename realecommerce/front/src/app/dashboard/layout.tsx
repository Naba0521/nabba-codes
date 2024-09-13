import { HeaderDashboard } from "./_components/HeaderDashboard";
import { LeftSideBar } from "./_components/LeftSideBar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col  items-center h-[98vh] bg-[#f7f7f7]">
      <HeaderDashboard />
      <div className="flex w-[1440px]  gap-6">
        <LeftSideBar />
        {children}
      </div>
    </div>
  );
}
