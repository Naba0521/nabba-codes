import styles from "./part.module.css";
export const Part1 = () => {
  return (
    <div className="relative w-[100%] h-[990px]">
      <div className={`${styles.open}`}>
        <img src="/part1.png" alt="" className="w-[100%] h-[100%] absolute " />
        <img src="/image61.png" alt="" className="w-[100%] h-[100%] absolute" />
        <img src="/image65.png" alt="" className="w-[100%] h-[100%] absolute" />
      </div>
      <div className="flex flex-col w-[100%] relative z-[5]">
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
        <div className="text-[64px] text-[#FFFFFF] m-auto text-center font-semibold w-[699px] pt-[156px]">
          Sands of Gobi Gobi Desert, Mongolia
        </div>
        <div className="flex m-auto flex-col pt-[230px]">
          <div className="text-[28px] text-[#FFFFFF] font-[400]">FROM</div>
          <div className="text-[28px] text-[#FFFFFF] font-[400]">€2.390</div>
        </div>
      </div>
    </div>
  );
};
