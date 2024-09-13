import { Icon2 } from "@/assets/icon2";
import { Icon3 } from "@/assets/icon3";

export const Part1 = () => {
  return (
    <div className="relative w-[100%] h-[990px]">
      <div className="">
        <img src="/img1.png" alt="" className="w-[100%] h-[100%] absolute " />
      </div>
      <div className="flex flex-col w-[100%] absolute z-[5]">
        <div className="text-lg text-[#FFFFFF] font-normal m-auto flex gap-[41px] pt-[132px] ">
          <div className="h-[60px] border-t-4 border-[rgba(0,0,0,0.0)] pt-[4px] duration-[1s] hover:border-t-4  hover:border-[orange] hover:pl-[20px]">
            <div></div>
            HOME
          </div>
          <div className="h-[60px] border-t-4 border-[rgba(0,0,0,0.0)] pt-[4px] duration-[1s] hover:border-t-4  hover:border-[orange]">
            ABOUT US
          </div>
          <div className="h-[60px] border-t-4 border-[rgba(0,0,0,0.0)] pt-[4px] duration-[1s] hover:border-t-4  hover:border-[orange]">
            CONTUCT US
          </div>
          <div className="h-[60px] border-t-4 border-[rgba(0,0,0,0.0)] pt-[4px] duration-[1s] hover:border-t-4  hover:border-[orange]">
            HELP CENTER
          </div>
        </div>
        <div className="absolute text-[100px] text-[#FFFFFF] font-normal top-[429px] left-[361px]">Feel The</div>
        <div className="absolute text-[100px] text-[#EC542D] font-normal top-[500px] left-[810px]">RIDE</div>
        <div className="m-auto mt-[740px] "><Icon2/></div>
        <div className="m-auto mt-[0px] "><Icon3/></div>
      </div>
    </div>
  );
};
