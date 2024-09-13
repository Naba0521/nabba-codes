export const Button = (props) => {
  return (
    <div className="px-[24px] py-[8px] rounded-[16px] bg-[#E5E7EB] dark:bg-[#4B5563] text-[#4B5563] dark:text-[#F9FAFB]">
      {props.value}
    </div>
  );
};
