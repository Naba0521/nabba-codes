"use client";

import Link from "next/link";
import { CardLogo } from "@/assets/cardLogo";
import { Payway } from "@/assets/payWay";
import { GreenDot } from "@/assets/greenDot";
import { GreenUp } from "@/assets/greenUp";
import { GreenDown } from "@/assets/greenDown";
import { Eye, TrendingUp } from "lucide-react";
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
import { Circle } from "@/assets/circle";

export default function Home() {
  const {
    accounts,
    setAccounts,
    deleteAccount,
    selectedAccountId,
    setSelectedAccountId,
  } = useContext(AccountContext);

  const getStartAndEndOfMonth = (monthOffset = 0) => {
    const now = new Date();
    const startDate = new Date(
      now.getFullYear(),
      now.getMonth() + monthOffset,
      1
    );
    const endDate = new Date(
      now.getFullYear(),
      now.getMonth() + 1 + monthOffset,
      0
    );
    return { startDate, endDate };
  };

  const getMonthlyAccountData = (monthOffset = 0) => {
    const { startDate, endDate } = getStartAndEndOfMonth(monthOffset);
    return accounts.filter((account) => {
      const accountDate = new Date(account.date || "2024-01-01");
      return accountDate >= startDate && accountDate <= endDate;
    });
  };

  const calculateIncomeExpense = (monthOffset = 0) => {
    const monthAccounts = getMonthlyAccountData(monthOffset);
    const incomeSum = monthAccounts
      .filter((account) => account.type === "inc")
      .reduce((acc, account) => acc + (account.amount || 0), 0);
    const expenseSum = monthAccounts
      .filter((account) => account.type === "exp")
      .reduce((acc, account) => acc + (account.amount || 0), 0);
    return { incomeSum, expenseSum };
  };

  const last5MonthsData = Array.from({ length: 5 }, (_, index) => {
    const monthOffset = -(4 - index);
    const { incomeSum, expenseSum } = calculateIncomeExpense(monthOffset);
    const date = new Date();
    date.setMonth(date.getMonth() + monthOffset);
    const monthName = date.toLocaleString("default", { month: "long" });
    return { month: monthName, Income: incomeSum, Expense: expenseSum };
  });

  const totalAmount = accounts.reduce(
    (acc, account) =>
      acc + (account.type === "exp" ? -account.amount : account.amount),
    0
  );

  const formatter = new Intl.NumberFormat("mn-MN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedtotalAmount = formatter.format(totalAmount);
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

  const last5Accounts = accounts
    .slice(-5)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main className="">
      <div className="bg-gray-100 h-full">
        <div className="flex flex-col lg:w-[1220px] w-[390px] font-normal text-[16px] items-center justify-between m-auto pt-[32px] pb-[40px] gap-6">
          <div className="flex flex-row w-full gap-[24px]">
            <div className="flex-1 flex flex-col bg-[#0166FF] h-[216px] rounded-2xl justify-between relative">
              <div className="px-8 py-8">
                <CardLogo />
              </div>
              <div className="flex justify-between relative z-10 px-8 py-8">
                <div className="flex flex-col">
                  <div className="text-white opacity-50">Cash</div>
                  <div className=" text-white text-[20px] font-semibold">
                    {formattedtotalAmount}₮
                  </div>
                </div>
                <div className="absolute right-0 bottom-0">
                  <Circle />
                </div>
                <div className="absolute bottom-4 right-6">
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
              <div className="flex flex-col pt-[16px]">
                <div className="text-[36px] font-semibold">
                  {formatter.format(last5MonthsData[4].Income)}₮
                </div>
                <div className="text-[18px] text-[#64748B]">
                  Your Income Amount
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
              <div className="flex flex-col pt-[16px]">
                <div className="text-[36px] font-semibold">
                  -{formatter.format(last5MonthsData[4].Expense)}₮
                </div>
                <div className="text-[18px] text-[#64748B]">
                  Your Expense Amount
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full gap-6">
            <div className="flex flex-1 flex-col">
              <Card>
                <CardHeader>
                  <CardTitle>Income - Expense</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig}>
                    <BarChart data={last5MonthsData}>
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
            <div className="flex flex-1 flex-col">
              <CircleChart />
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 bg-white py-[16px] px-[24px] rounded-lg">
            <div className="text-[16px] font-semibold">Last Records</div>
            <div className="flex flex-col gap-3">
              {last5Accounts.map((item) => {
                const Icon = Icons[item.category?.icon];
                return (
                  <div
                    key={item.category?.id}
                    className="flex justify-between bg-white items-center px-6 py-3 border-t-slate-200 border-t-[1px]"
                  >
                    <div className="flex gap-4 items-center">
                      <div>
                        {Icon ? (
                          <Icon
                            color={item.category?.color}
                            className="w-8 h-8"
                          />
                        ) : (
                          <Eye />
                        )}
                      </div>
                      <div>
                        <div className="font-semibold">
                          {item.category?.title}
                        </div>
                        <div className="text-[12px] text-[#6B7280]">
                          {item.date}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${
                        item.type === "inc" ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {item.type === "inc" ? "+" : "-"}
                      {formatter.format(item.amount)}
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
