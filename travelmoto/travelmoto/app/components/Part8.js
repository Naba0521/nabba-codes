export const Part8 = ()=>{
    return(
            <div className="w-[100%] flex flex-row bg-white">
                <div className="flex-1 flex flex-col gap-[50px] justify-center ">
                    <div className="flex flex-col pl-[120px] gap-[30px]">
                        <div className="text-[40px] text-[#FC6220] font-bold">-10° TO +35°</div>
                        <div className="text-[18px] text-[#000000] font-bold">Opposite poles attract.</div>
                    </div>
                    <ul className="flex flex-col gap-[90px] text-[18px] text-[#000000] font-normal pl-[92px]">
                     <li className="ml-[20px] w-[331px] h-[88px] text-justify">The climate of the Gobi desert is quite extreme. It posses rapid changes of temperature of as much as 35°C (63 °F). These can occur not only seasonally but within 24 hours.</li>
                     <li className="ml-[20px] w-[331px] h-[66px]">Prepare for warm-to-hot days and chill-to-cold nights.</li>
                    </ul>
                </div>
                <div className="flex-1 "><img src="/image55.png" alt="" className="w-[100%] h-[982px]" /></div>
            </div>
    )
}