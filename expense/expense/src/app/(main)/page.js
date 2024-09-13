"use client";

import Link from "next/link";
import { CardLogo } from "@/assets/cardLogo";
import { Payway } from "@/assets/payWay";
import { GreenDot } from "@/assets/greenDot";
import { GreenUp } from "@/assets/greenUp";
import { GreenDown } from "@/assets/greenDown";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import * as Icons from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CircleChart } from "@/components/circleChart";
import { useAuth } from "@/components/providers/AuthProvider";
import { AccountContext } from "@/components/context";
import { useContext, useEffect } from "react";

export default function Home() {
  const {
    accounts,
    setAccounts,
    deleteAccount,
    selectedAccountId,
    setSelectedAccountId,
  } = useContext(AccountContext);
  // const { totalAmount, setTotalAmount } = useAuth();
  // const handleTotalAmountChange = (amount) => {
  //   setTotalAmount(amount);
  // };
  const getStartAndEndOfMonth = () => {
    const now = new Date();
    const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    return { startDate, endDate };
  };

  const { startDate, endDate } = getStartAndEndOfMonth();

  const thisMonthAccounts = accounts.filter((account) => {
    const accountDate = new Date(account.date || "2024-01-01");
    return accountDate >= startDate && accountDate <= endDate;
  });
  const getStartAndEndOfLastMonth = () => {
    const now = new Date();
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

    return { startOfLastMonth, endOfLastMonth };
  };

  const { startOfLastMonth, endOfLastMonth } = getStartAndEndOfLastMonth();
  const lastMonthAccounts = accounts.filter((account) => {
    const accountDate = new Date(account.date || "2024-01-01");
    return accountDate >= startOfLastMonth && accountDate <= endOfLastMonth;
  });
  const incomeSumLastMonth = lastMonthAccounts
    .filter((account) => account.type === "inc") // Filter accounts where type is "inc"
    .reduce((acc, account) => acc + (account.amount || 0), 0); // Sum the amount of filtered accounts

  const incomeSum = thisMonthAccounts
    .filter((account) => account.type === "inc") // Filter accounts where type is "inc"
    .reduce((acc, account) => acc + (account.amount || 0), 0); // Sum the amount of filtered accounts

  const expenseSumLastMonth = lastMonthAccounts
    .filter((account) => account.type === "exp") // Filter accounts where type is "inc"
    .reduce((acc, account) => acc + (account.amount || 0), 0);
  const expenseSum = thisMonthAccounts
    .filter((account) => account.type === "exp") // Filter accounts where type is "inc"
    .reduce((acc, account) => acc + (account.amount || 0), 0); // Sum the amount of filtered accounts

  const incPercentage = (
    ((incomeSum - incomeSumLastMonth) / incomeSumLastMonth) *
    100
  ).toFixed(2);
  const expPercentage = (
    ((expenseSum - expenseSumLastMonth) / expenseSumLastMonth) *
    100
  ).toFixed(2);
  const last5Accounts = accounts
    .slice(-5) // Get the last 5 elements
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const totalAmount = accounts.reduce(
    (acc, account) =>
      acc + (account.type === "exp" ? -account.amount : account.amount),
    0
  );
  const formatter = new Intl.NumberFormat("mn-MN", {
    // style: "currency",
    // currency: "MNT", // Use the appropriate currency code
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formattedtotalAmount = formatter.format(totalAmount);
  const formattedincomeSum = formatter.format(incomeSum);
  const formattedexpenseSum = formatter.format(expenseSum);

  const chartData = [
    // { month: "January", Income: 186, Expense: 80 },
    // { month: "February", Income: 305, Expense: 200 },
    // { month: "March", Income: 237, Expense: 120 },
    { month: "April", Income: 2730, Expense: 1900 },
    { month: "May", Income: 2000, Expense: 1300 },
    { month: "June", Income: 3500, Expense: 4000 },
    { month: "July", Income: incomeSumLastMonth, Expense: expenseSumLastMonth },
    { month: "August", Income: incomeSum, Expense: expenseSum },
  ];
  const chartConfig = {
    Income: {
      label: "Income",
      color: "hsl(var(--chart-2))",
    },
    Expense: {
      label: "Expense",
      color: "hsl(var(--chart-1))",
    },
  };
  return (
    <main className="">
      <div className="bg-gray-100 h-full">
        <div className="flex flex-col lg:w-[1220px] w-[390px] font-normal text-[16px] items-center justify-between m-auto pt-[32px] pb-[40px] gap-6">
          <div className="flex flex-row w-full gap-[24px]">
            <div className="flex-1 flex flex-col bg-[#0166FF] h-[216px] rounded-2xl px-[32px] py-[32px] justify-between relative">
              <img
                src="./noise.png"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
              />
              <div className="">
                <CardLogo />
              </div>
              <div className="flex justify-between relative z-10 ">
                <div className="flex flex-col">
                  <div className="text-white opacity-50">Cash</div>
                  <div className=" text-white text-[24px] font-semibold">
                    {formattedtotalAmount}₮
                  </div>
                </div>
                <div className="flex items-center">
                  {" "}
                  <Payway />
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col bg-white h-[216px] rounded-2xl px-[24px] py-[24px]">
              <div className="flex pb-[16px] border-b-slate-400 border-b-[1px] gap-[8px]">
                <div className="flex items-center">
                  <GreenDot Color={"#84CC16"} />
                </div>
                <div className="font-semibold">Your Income This month</div>
              </div>
              <div className="flex flex-col  pt-[16px]">
                <div className="text-[36px] font-semibold">
                  {formattedincomeSum}₮
                </div>
                <div className="text-[18px] text-[#64748B]">
                  Your Income Amount
                </div>
                <div className="flex gap-2">
                  <div>{incPercentage < 0 ? <GreenDown /> : <GreenUp />}</div>
                  <div className="text-[18px]">
                    {incPercentage}% from last month
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col bg-white h-[216px] rounded-2xl px-[24px] py-[24px]">
              <div className="flex pb-[16px] border-b-slate-400 border-b-[1px] gap-[8px]">
                <div className="flex items-center">
                  <GreenDot Color={"#0166FF"} />
                </div>
                <div className="font-semibold">Total Expenses This month</div>
              </div>
              <div className="flex flex-col  pt-[16px]">
                <div className="text-[36px] font-semibold">
                  -{formattedexpenseSum}₮
                </div>
                <div className="text-[18px] text-[#64748B]">
                  Your Income Amount
                </div>
                <div className="flex gap-2">
                  <div>{expPercentage < 0 ? <GreenDown /> : <GreenUp />}</div>
                  <div className="text-[18px]">
                    {expPercentage}% from last month
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-1 flex-col">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Income - Expense</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig}>
                      <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          tickMargin={10}
                          axisLine={false}
                          tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar
                          dataKey="Income"
                          fill="var(--color-Income)"
                          radius={4}
                        />
                        <Bar
                          dataKey="Expense"
                          fill="var(--color-Expense)"
                          radius={4}
                        />
                      </BarChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex flex-1 flex-col ">
              <div>
                <CircleChart />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 bg-white py-[16px] px-[24px] rounded-lg">
            <div className="text-[16px] font-semibold">Last Records</div>
            <div className="flex flex-col gap-3 ">
              {last5Accounts.map((item) => {
                const Icon = Icons[item.category?.icon];
                return (
                  <div className="flex justify-between bg-white items-center px-6 py-3  border-t-slate-200 border-t-[1px]">
                    <div className="flex gap-4 items-center">
                      <div>
                        {Icon ? <Icon color={item.category?.color} /> : <Eye />}
                      </div>
                      <div>
                        <div className="font-semibold">
                          {item.category.title}
                        </div>
                        <div className="text-[12px] text-[#6B7280]">
                          {item.date}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${
                        item.type === "inc"
                          ? "text-[#23E01F]"
                          : "text-[#F54949]"
                      }`}
                    >
                      {item.type === "exp" ? -item.amount : item.amount}₮
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
