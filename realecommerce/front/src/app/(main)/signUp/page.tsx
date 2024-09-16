export default function () {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col py-[100px] gap-6 items-center">
        <div className="font-semibold text-2xl">Бүртгүүлэх</div>
        <div className="flex flex-col w-[340px] gap-4 items-center ">
          <input
            placeholder="Нэр"
            className="py-3 px-2 border rounded-2xl w-full bg-white"
          ></input>
          <input
            placeholder="Имэйл хаяг"
            className="py-3 px-2  border rounded-2xl w-full bg-white"
          ></input>
          <input
            placeholder="Нууц үг"
            className="py-3 px-2  border rounded-2xl w-full bg-white"
          ></input>
          <input
            placeholder="Нууц үг давтах "
            className="py-3 px-2  border rounded-2xl w-full bg-white"
          ></input>
          <div className="bg-[#2563EB] text-white rounded-2xl flex justify-center items-center py-2 w-full">
            Нэр
          </div>
          <div className="text-sm text-[#71717A] underline">
            Нууц үг мартсан
          </div>
        </div>
        <div className="bg-white border border-[#2563EB] text-[#2563EB] rounded-2xl flex justify-center items-center py-2 w-full mt-6">
          Бүртгүүлэх
        </div>
      </div>
    </div>
  );
}
