export const Button = ({ lai, textColor, bgColor }) => {
  return (
    <div className=" w-fit   flex gap-2 flex-wrap">
      {lai.map((item) => (
        <div
          key={lai}
          className={`${bgColor} ${textColor} px-[10px] py-[4px] text-center rounded-md text-[14px] font-medium capitalize`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
