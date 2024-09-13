"use client";

import { useState } from "react";

import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { AddCategory } from "./addCategory";
import { AddComponent } from "./AddComponent";
import { AddCategoryDialog } from "./AddCategoryDialog";
import { ApiAddAccount } from "./apiAddAccount";
import { AddCategoryDialog2 } from "./AddCategoryDialog2";

import { useAuth } from "./providers/AuthProvider";

export const Records = () => {
  const [filterType, setFilterType] = useState("all");
  // const [totalAmount, setTotalAmount] = useState(0);
  const [sortOrder, setSortOrder] = useState("Newest First");
  const [timePeriod, setTimePeriod] = useState("All History");

  const { user, totalAmount, setTotalAmount } = useAuth();

  const [index, setIndex] = useState(0);

  const timePeriods = ["All History", "Last 20 Days", "Last 10 Days"];

  const next = () => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % timePeriods.length; // Wrap around using modulo
      setTimePeriod(timePeriods[newIndex]);
      return newIndex;
    });
  };

  const prev = () => {
    setIndex((prevIndex) => {
      const newIndex =
        (prevIndex - 1 + timePeriods.length) % timePeriods.length; // Wrap around
      setTimePeriod(timePeriods[newIndex]);
      return newIndex;
    });
  };

  const handleTotalAmountChange = (amount) => {
    setTotalAmount(amount);
  };
  return (
    <div className="flex flex-row lg:w-[1220px] w-[390px] font-normal m-auto pt-6 pb-6 gap-[100px]">
      <div className="flex-1 flex flex-col gap-[24px]  bg-white pl-4 pr-4 rounded-xl border pb-6">
        <div className="text-[24px] font-semibold">Records</div>
        <div>{user.username}</div>
        <AddComponent name="Records" />

        <div>
          <input
            className=" w-[100%] rounded-xl pl-[16px] border bg-[#F3F4F6]"
            placeholder="Search"
          ></input>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <div className="text-[16px] font-semibold">Types</div>
            <div className="flex-col gap-1">
              <RadioGroup
                defaultValue="all"
                value={filterType}
                onValueChange={(value) => setFilterType(value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all">All</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="inc" id="income" />
                  <Label htmlFor="income">Income</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="exp" id="expenses" />
                  <Label htmlFor="expences">Expences</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <AddCategoryDialog2 />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-[16px] font-semibold">Amount Range</div>
          <div className="flex gap-4">
            <div className="flex-1 flex items-center border rounded-lg h-12 pl-2 bg-[#F3F4F6]">
              0
            </div>
            <div className="flex-1 flex items-center border rounded-lg h-12 pl-2 bg-[#F3F4F6]">
              1000
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <Slider defaultValue={[0]} max={1000} step={50} />
            <div className="flex justify-between">
              <div>0</div>
              <div>1000</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6  flex-[4]">
        <div className="flex justify-between  ">
          <div className="w-[160px] pl-[48px]">
            <Carousel>
              <CarouselContent className="cursor-pointer">
                <CarouselItem onClick={() => setTimePeriod("All History")}>
                  All History
                </CarouselItem>
                <CarouselItem onClick={() => setTimePeriod("Last 20 Days")}>
                  Last 20 Days
                </CarouselItem>
                <CarouselItem onClick={() => setTimePeriod("Last 10 Days")}>
                  Last 10 Days
                </CarouselItem>
              </CarouselContent>
              <div onClick={prev}>
                <CarouselPrevious />
              </div>
              <div onClick={next}>
                <CarouselNext />
              </div>
            </Carousel>
          </div>
          <div>
            <Select onValueChange={(value) => setSortOrder(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Newest First" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Newest First">Newest First</SelectItem>
                <SelectItem value="Oldest First">Oldest First</SelectItem>
                <SelectItem value="Highest First">Highest First</SelectItem>
                <SelectItem value="Lowest First">Lowest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className=" flex flex-col gap-6">
          <div className="flex justify-between bg-white py-[12px] px-[24px]">
            <div className="flex gap-4">
              <div>
                <Checkbox height={6} width={6} />
              </div>
              <div>Select all</div>
            </div>
            <div className="text-slate-400" id="sumAccounts">
              {totalAmount}₮
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[16px] font-semibold">History</div>
            <div className="flex flex-col gap-3 ">
              <ApiAddAccount
                filterType={filterType}
                onTotalAmountChange={handleTotalAmountChange}
                sortOrder={sortOrder}
                timePeriod={timePeriod}
              />
            </div>
          </div>
          {/* <div className="flex flex-col gap-3">
            <div className="text-[16px] font-semibold">Yesterday</div>
            <div className="flex flex-col gap-3 ">
              <ApiAddAccount filterType={filterType} />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
