import { BiLogoGmail } from "react-icons/bi";
import { FaRegCopy } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Button } from "./Button";

export const Part7 = () => {
  return (
    <div className="w-[90%] m-auto flex flex-col gap-[48px]  h-max rounded-[20px] py-[96px]">
      <div className="flex items-center flex-col gap-[16px]">
        <div className=" flex items-center m-auto">
          <Button value="Get in touch" />
        </div>
        <div className="flex ">
          <div className="flex m-auto items-center justify-center dark:text-[#F9FAFB]">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center dark:text-[#F9FAFB]">
        <div className="flex gap-[8px] items-center dark:text-[#F9FAFB]">
          <div>
            <BiLogoGmail className="w-[32px] h-[32px] text-gray-400 dark:text-[#F9FAFB]	" />
          </div>
          <div className="font-semibold text-[36px]">tom@pinecone.mn</div>
          <div>
            <FaRegCopy className="w-[32px] h-[32px] text-gray-400	" />
          </div>
        </div>
        <div className="flex gap-[8px] items-center">
          <div>
            <FaPhone className="w-[32px] h-[32px] text-gray-400	" />
          </div>
          <div className="font-semibold text-[36px]">+976 88112233</div>
          <div>
            <FaRegCopy className="w-[32px] h-[32px] text-gray-400	" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[8px]">
        <div>You may also find me on these platforms!</div>
        <div className="flex gap-[16px] items-center">
          <FaFacebookSquare className="w-[24px] h-[24px]" />
          <FaInstagram className="w-[24px] h-[24px]" />
          <BiLogoGmail className="w-[24px] h-[24px]" />
        </div>
      </div>
    </div>
  );
};
