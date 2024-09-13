import { SearchIcon } from "@/assets/searchicon";
import { Logo } from "@/assets/logo";
import { NavList } from "@/assets/navlist";
import Link from "next/link";

export const Contact = () => {
  return (
    <div className="flex flex-col lg:w-[1220px] w-[390px] items-center justify-between m-auto pt-[68px] pb-[32px] gap-[30px]">
      <div className="flex flex-col gap-[20px] lg:w-[624px] w-[390px]">
        <div className=" text-[36px] font-semibold">Contact Us</div>
        <div className=" text-[16px] text-[#696A75] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </div>
      </div>

      <div className="flex flex-row lg:w-[624px] w-[390px] gap-[50px]">
        <div className="flex-1 flex flex-col gap-[12px] border rounded-xl py-[16px] px-[16px]">
          <div className="text-[24px] font-semibold">Address</div>
          <div className="text-[18px] font-normal">
            1328 Oak Ridge Drive, Saint Louis, Missouri
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-[12px] border rounded-xl py-[16px] px-[16px]">
          <div className="text-[24px] font-semibold">Contact</div>
          <div className="text-[18px] font-normal">
            313-332-8662 <br /> info@email.com
          </div>
        </div>
      </div>

      <div className="bg-[#F6F6F7] lg:w-[624px] w-[390px] flex flex-col rounded-xl gap-[20px] py-[16px] px-[32px]">
        <div className="text-[28px] font-semibold">Leave a Message</div>
        <div className="lg:flex lg:flex-row lg:gap-[28px] flex flex-col gap-[20px]">
          <input
            type="text"
            placeholder="Your Name"
            className=" bg-[#FFFFFF] text-[#A1A1AA] text-[16px] flex-1 py-[8px] px-[8px] rounded-xl border"
          ></input>
          <input
            type="text"
            placeholder="Your Email"
            className=" bg-[#FFFFFF] text-[#A1A1AA] text-[16px] px-[8px] flex-1 py-[8px] rounded-xl border"
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            className=" w-full bg-[#FFFFFF] text-[#A1A1AA] text-[16px] flex-1 py-[8px] px-[8px] rounded-xl border"
          ></input>
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Write a message"
            className="w-full h-[134px] bg-[#FFFFFF] text-[#A1A1AA] text-[16px] py-[8px] px-[8px] rounded-xl border flex items-start justify-start "
          ></textarea>
        </div>
        <div className="px-[16px] py-[10px] flex w-fit text-center rounded-md text-[14px] font-medium text-[#FFFFFF] bg-[#4B6BFB]">
          Send Message
        </div>
      </div>
    </div>
  );
};
