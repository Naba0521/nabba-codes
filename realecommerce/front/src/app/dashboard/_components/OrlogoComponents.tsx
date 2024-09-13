import { CalendarIcon } from "@/assets/CalendarIcon";
import { DooshooSum } from "@/assets/DooshooSum";
import { DownloadIcon } from "@/assets/DownloadIcon";

export const OrlogoComponents = () => {
  const ZahialgaData = [
    {
      ProductId: "#12345678",
      email: "Zoloosoko0526@gmail.com",
      phone: 88556061,
      price: 12000,
      date: "2024-01-10",
    },
    {
      ProductId: "#12345678",
      email: "Zoloosoko0526@gmail.com",
      phone: 88556061,
      price: 12000,
      date: "2024-01-10",
    },
    {
      ProductId: "#12345678",
      email: "Zoloosoko0526@gmail.com",
      phone: 88556061,
      price: 12000,
      date: "2024-01-10",
    },
    {
      ProductId: "#12345678",
      email: "Zoloosoko0526@gmail.com",
      phone: 88556061,
      price: 12000,
      date: "2024-01-10",
    },
    {
      ProductId: "#12345678",
      email: "Zoloosoko0526@gmail.com",
      phone: 88556061,
      price: 12000,
      date: "2024-01-10",
    },
    {
      ProductId: "#12345678",
      email: "Zoloosoko0526@gmail.com",
      phone: 88556061,
      price: 12000,
      date: "2024-01-10",
    },
    {
      ProductId: "#12345678",
      email: "Zoloosoko0526@gmail.com",
      phone: 88556061,
      price: 12000,
      date: "2024-01-10",
    },
    {
      ProductId: "#12345678",
      email: "Zoloosoko0526@gmail.com",
      phone: 88556061,
      price: 12000,
      date: "2024-01-10",
    },
    {
      ProductId: "#12345678",
      email: "Zoloosoko0526@gmail.com",
      phone: 88556061,
      price: 12000,
      date: "2024-01-10",
    },
    {
      ProductId: "#12345678",
      email: "Zoloosoko0526@gmail.com",
      phone: 88556061,
      price: 12000,
      date: "2024-01-10",
    },
  ];
  return (
    <div className="flex flex-col gap-2 w-[724px]">
      <div className="flex flex-col bg-white rounded-[12px] ">
        <div className="flex justify-between p-6">
          <div className="font-bold text-lg">Орлого</div>
          <div className="flex gap-1 bg-[#f6f6f6] rounded-lg py-2 px-3 items-center">
            <div>
              <DownloadIcon />
            </div>
            <div>Хуулга татах</div>
          </div>
        </div>
        <div className="flex justify-between p-6 border-t-[1px]">
          <div className="text-[28px] font-bold">235,000₮</div>
          <div className="flex gap-2 text-sm">
            <div className="bg-[#18BA51] text-white text-sm font-semibold py-3 px-4 rounded-[8px]">
              Өнөөдөр
            </div>
            <div className="bg-white border text-sm font-semibold py-3 px-4 rounded-[8px]">
              7 хоног
            </div>
            <div className="bg-white border text-sm font-semibold py-3 px-4 rounded-[8px] flex gap-2 items-center">
              <div>
                <CalendarIcon />
              </div>
              <div>Сараар</div>
              <div>
                <DooshooSum />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-lg">
        <div className="flex py-4 text-[#3F4145] text-[12px] font-semibold">
          <div className="w-[169px] flex justify-center pl-3">
            Захиалгын ID дугаар
          </div>
          <div className="w-[268px] flex justify-center">Захиалагч</div>
          <div className="w-[137px] flex justify-center">Төлбөр</div>
          <div className="w-[150px] flex justify-center">Огноо</div>
        </div>
        {ZahialgaData.map((item, index) => {
          return (
            <div key={index} className="flex py-4 border-t-[2px] text-[14px]">
              <div className="w-[169px] flex justify-center pl-3 font-semibold items-center ">
                {item.ProductId}
              </div>
              <div className="w-[268px] flex flex-col items-center justify-center">
                <div>{item.email}</div>
                <div>{item.phone}</div>
              </div>
              <div className="w-[137px] flex justify-center items-center ">
                {item.price}₮
              </div>
              <div className="w-[150px] flex justify-center items-center ">
                {item.date}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
