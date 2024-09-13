export default function home() {
  return (
    <div className="flex-1 flex justify-center pt-[52px] h-fit">
      <div className="w-[728px] bg-white rounded-xl p-8 flex flex-col gap-5">
        <div className="font-semibold text-lg">Тохиргоо</div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between border py-2 px-3 rounded-lg items-center">
            <div>Баннер зураг </div>
            <div className="py-2 px-4 font-semibold text-sm border rounded-lg text-[#121316]">
              солих
            </div>
          </div>
          <div className="flex justify-between border py-2 px-3 rounded-lg items-center">
            <div>Эхний бүтээгдэхүүнээ нэмнэ үү</div>
            <div className="py-2 px-4 font-semibold text-sm border rounded-lg text-[#121316]">
              Бүтээгдэхүүн нэмэх
            </div>
          </div>
          <div className="flex justify-between border py-2 px-3 rounded-lg items-center">
            <div>Хүргэлтийг тохируулна уу </div>
            <div className="py-2 px-4 font-semibold text-sm border rounded-lg text-[#121316]">
              Хүргэлт тохируулах
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
