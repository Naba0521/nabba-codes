import styles from "./Part3.module.css";
export const Part3 = ()=>{
    return(
        <div className="relative w-[100%] ">
            <img src="/image61.png" alt="" className="w-[100%] h-[941px] absolute" />
            <div className="flex flex-col relative z-2 ">
                <div className="text-[#FC6220] text-[40px] font-medium m-auto pt-[226px]">RIDE REMOTE</div>
                <div className={`${styles.hovertext} flex flex-row gap-[143px] text-[#FFFFFF] m-auto pt-[100px]`}>
                    <div className="w-[215px] h-[103px] flex gap-[35px] flex-col">
                        <div className="text-[24px] font-bold "> Level</div>
                        <div className="text-[18px] font-normal">Intermediate-to-advanced enduro bikers.</div>
                    </div>
                    <div className="w-[117px] h-[81px] flex gap-[35px] flex-col">
                        <div className="text-[24px] font-bold">Group</div>
                        <div className="text-[18px] font-normal">7 people max.</div>
                    </div>
                    <div className="w-[243px] h-[195px] flex gap-[35px] flex-col">
                        <div className="text-[24px] font-bold">Period</div>
                        <div className="text-[20px] font-normal">April, 2022</div>
                        <div className="text-[18px] font-normal">7 days / 6 nights of travel in the countryside2 nights in Ulaanbaatar city, Mongolia</div>
                    </div>
                    <div className="w-[266px] h-[81px] flex gap-[35px] flex-col">
                        <div className="text-[24px] font-bold">Food & Accommodation</div>
                        <div className="text-[18px] font-normal">Camps, yurts, lodges and hotels</div>
                    </div>
                </div>
                <div className="flex flex-col gap-[21px] pl-[122px] text-[#FFFFFF] pt-[88px]">
                    <div className="text-[40px] font-bold">Silent Night at Gobi</div>
                    <div className="text-[22px] font-normal w-[667px] h-[155px]">The Gobi desert is the base camp to extremely remote landscapes, no cell phone coverage, and nobody else around you in hundreds of kilometers (except the last living nomad families). On top of a dirtbike, you will cross sand hills, rocky mountains, old canyons, forests, and endless steppes.</div>
                </div>
            </div>
        </div>
    )
}