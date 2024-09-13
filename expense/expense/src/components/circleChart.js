"use client";
import { HeaderLogo } from "@/assets/headerlogo";
import { Plus } from "@/assets/plus";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "Bus", Categories: 275, fill: "var(--color-Bus)" },
  { browser: "Baby", Categories: 200, fill: "var(--color-Baby)" },
  { browser: "Phone", Categories: 187, fill: "var(--color-Phone)" },
  { browser: "Apple", Categories: 173, fill: "var(--color-Apple)" },
  { browser: "other", Categories: 90, fill: "var(--color-other)" },
];
const chartConfig = {
  Categories: {
    label: "Categories",
  },
  Bus: {
    label: "Bus",
    color: "hsl(var(--chart-1))",
  },
  Baby: {
    label: "Baby",
    color: "hsl(var(--chart-2))",
  },
  Phone: {
    label: "Phone",
    color: "hsl(var(--chart-3))",
  },
  Apple: {
    label: "Apple",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

export const CircleChart = () => {
  return (
    <Card className="flex flex-col ">
      <CardHeader className="flex flex-row justify-between pb-[60px]">
        <CardTitle>Income - Expense</CardTitle>
        <CardDescription>Jun 1 - Nov 30</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="Categories" />
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
