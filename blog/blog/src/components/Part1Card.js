import { Button } from "./Button";

export const Part1Card = ({ img, title, description, tags }) => {
  return (
    <div className="lg:w-[1220px] w-[390px] h-[600px] rounded-md overflow-hidden relative m-auto">
      <img src={img} className=" w-[100%] h-[100%] object-cover rounded-md " />
      <div className="absolute flex flex-col gap-[24px] bg-[#FFFFFF] py-[40px] shadow-md rounded-md	bottom-[13px] lg:left-[11px] left-[5%] lg:w-[598px] w-[90%] lg:h-[252px] justify-evenly">
        <div className="px-[50px]">
          <div>
            <Button
              lai={tags}
              textColor="text-[#FFFFFF]"
              bgColor="bg-[#4B6BFB]"
            />
          </div>

          <div className="text-[36px] font-semibold text-[#181A2A] lg:w-[400px] w-fit h-[108px] lg:h-[108px] overflow-hidden">
            {title}
          </div>

          <div className="text-[16px] font-normal text-[#97989F]">
            August 20, 2022
          </div>
        </div>
      </div>
    </div>
  );
};
