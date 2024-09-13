import { format } from "date-fns";
import { Button } from "./Button";
export const Acard = ({ img, title, description, time, tags }) => {
  const now = time;
  const formattedDate = format(now, "MMMM dd, yyyy");
  return (
    <div className="w-[392px] rounded-md flex flex-col border border-gray-200 gap-[20px] items-center ">
      <img src={img} className="rounded-md w-[360px] h-[240px]" />
      <div className="flex flex-col gap-[20px] ml-[24px] mr-[24px] pb-[24px]">
        <div className="px-[10px] py-[4px]">
          <Button lai={tags} textColor="text-blue-500" bgColor="bg-gray-300" />
        </div>

        <div className="text-[24px] font-semibold text-[#181A2A]">{title}</div>
        <div className="text-[#97989F] text-[16px] font-normal">
          {formattedDate}
        </div>
      </div>
    </div>
  );
};
