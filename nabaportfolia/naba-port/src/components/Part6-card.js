import { FaRegShareFromSquare } from "react-icons/fa6";
import { Button } from "./Button";
const data = [
  {
    text: "React",
  },
  {
    text: "Next.js",
  },
  {
    text: "Typescript",
  },
  {
    text: "PostgreSQL",
  },
  {
    text: "Tailwindcss",
  },
  {
    text: "Figma",
  },
  {
    text: "Cypress",
  },
  {
    text: "Storybook",
  },
  {
    text: "Git",
  },
];
export const Part6Card = (props) => {
  return (
    <div
      className={`flex dark:bg-[#1F2937] flex-col lg:flex lg:flex-row shadow-xl rounded - [20px] ${
        props.reverse ? "lg:flex-row-reverse " : ""
      }`}
    >
      <div className="flex flex-1 items-center justify-center bg-[#F3F4F6] px-[48px] py - [48px] rounded - [20px] ">
        <img className="w-[480px] h-[384px] rounded-[20px]" src={props.src} />
      </div>
      <div className="flex flex-col flex-1 gap-[24px] px-[48px] py-[48px] dark:text-[#F9FAFB]">
        <div className="font-semibold text-xl">{props.title}</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </div>
        <div className="flex gap-[8px] flex-wrap">
          {data.map((item) => (
            <Button value={item.text} />
          ))}
        </div>
        <div>
          <FaRegShareFromSquare className="w-[32px] h-[32px]" />
        </div>
      </div>
    </div>
  );
};
