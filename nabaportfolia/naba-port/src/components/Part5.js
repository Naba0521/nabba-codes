import { Logo } from "../assets/icons/logo";
import { Button } from "./Button";
export const Part5 = () => {
  return (
    <div className=" w-[100%] bg-[#F9FAFB] dark:bg-[#111827]">
      <div className="w-[90%] m-auto flex flex-col gap-[48px]  h-max rounded-[20px] py-[96px]">
        <div className="flex items-center flex-col gap-[16px]">
          <div className=" flex items-center m-auto">
            <Button value="Experience" />
          </div>
          <div className="flex ">
            <div className="flex m-auto items-center justify-center dark:text-[#F9FAFB]">
              Here is a quick summary of my most recent experiences:
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex lg:flex-row items-center w-[70%] m-auto bg-white dark:bg-[#1F2937] gap-[16px] rounded-[20px] px-[32px] py-[32px] shadow-xl dark:text-[#F9FAFB]">
          <div className="flex-1 ">
            {" "}
            <Logo />{" "}
          </div>
          <div className="flex-2 order-last  flex flex-col gap-[16px]">
            <div className="font-semibold text-xl flex justify-center">
              Sr. Frontend Developer
            </div>
            <ul className="list-disc flex flex-col gap-[4px]">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
          <div className=" lg:order-last flex-1 flex justify-center ">
            Nov 2021 - Present
          </div>
        </div>
        <div className="flex flex-col lg:flex lg:flex-row items-center w-[70%] m-auto bg-white dark:bg-[#1F2937] rounded-[20px] px-[32px] py-[32px] shadow-xl dark:text-[#F9FAFB]">
          <div className="flex-1">
            {" "}
            <Logo />{" "}
          </div>
          <div className="flex-2 order-last flex flex-col gap-[16px] ">
            <div className="font-semibold text-xl flex justify-center ">
              Team Lead
            </div>
            <ul className="list-disc flex flex-col gap-[4px] ">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
          <div className=" lg:order-last flex-1 flex justify-center">
            Jul 2017 - Oct 2021
          </div>
        </div>
        <div className="flex flex-col lg:flex lg:flex-row items-center w-[70%] m-auto bg-white dark:bg-[#1F2937] rounded-[20px] px-[32px] py-[32px] shadow-xl dark:text-[#F9FAFB]">
          <div className="flex-1">
            {" "}
            <Logo />{" "}
          </div>
          <div className="flex-2 order-last flex flex-col gap-[16px]">
            <div className="font-semibold text-xl flex justify-center">
              Full Stack Developer
            </div>
            <ul className="list-disc flex flex-col gap-[4px] ">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
          <div className="lg:order-last flex-1 flex justify-center">
            Dec 2015 - May 2017
          </div>
        </div>
      </div>
    </div>
  );
};
