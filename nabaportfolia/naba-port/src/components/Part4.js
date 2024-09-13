import { JavaIcon } from "../assets/icons/javaicon";
import { Button } from "./Button";
import { TypescriptIcon } from "@/assets/icons/typescript";
import { ReactIcon } from "@/assets/icons/react";
import { NextIcon } from "@/assets/icons/next";
import { NodeIcon } from "@/assets/icons/node";
import { ExpressIcon } from "@/assets/icons/express";
import { NestIcon } from "@/assets/icons/nest";
import { SocketIcon } from "@/assets/icons/socket";
import { MongoDB } from "@/assets/icons/mongoDB";
import { SassIcon } from "@/assets/icons/sass";
import { TailwindIcon } from "@/assets/icons/tailwind";
import { FigmaIcon } from "@/assets/icons/figma";
import { CybpressIcon } from "@/assets/icons/cybpress";
import { StorybookIcon } from "@/assets/icons/storybook";
import { GitIcon } from "@/assets/icons/git";

export const Part4 = () => {
  return (
    <div className="w-[90%] m-auto flex flex-col gap-[24px]  h-max rounded-[20px] py-[96px]">
      <div className=" flex items-center m-auto">
        <Button value="Skills" />
      </div>
      <div className="flex ">
        <div className="flex m-auto items-center justify-center dark:text-[#F9FAFB]">
          {" "}
          The skills, tools and technologies I am really good at:
        </div>
      </div>
      <div className=" flex gap-[64px] flex-wrap justify-center">
        <JavaIcon />
        <TypescriptIcon />
        <ReactIcon />
        <NextIcon />
        <NodeIcon />
        <ExpressIcon />
        <NestIcon />
        <SocketIcon />
        <ReactIcon />
        <MongoDB />
        <SassIcon />
        <TailwindIcon />
        <FigmaIcon />
        <CybpressIcon />
        <StorybookIcon />
        <GitIcon />
      </div>
    </div>
  );
};
