import { DashboardProfileIcon } from "@/assets/DashboardProfile";
import { HonhIcon } from "@/assets/HonhIcon";
import { Logo } from "@/assets/logo";
import { ProfileIcon } from "@/assets/ProfileIcon";

export const HeaderDashboard = () => {
  return (
    <div className="w-full bg-black py-2 justify-center flex items-center">
      <div className="flex w-[1440px] justify-between px-6">
        <div className="">
          <Logo />
        </div>
        <div className="flex gap-4 text-white">
          <div>
            <HonhIcon />
          </div>
          <div>
            <DashboardProfileIcon />
          </div>
          <div className="text-[14px] flex items-center">Username</div>
        </div>
      </div>
    </div>
  );
};
