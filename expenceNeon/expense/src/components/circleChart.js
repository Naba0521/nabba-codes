"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import { CategoryContext } from "./categoryContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AccountContext } from "./context";
import { useContext } from "react";
import { useState } from "react";

export function CircleChart() {
  const { categories } = useContext(CategoryContext);
  const { accounts } = useContext(AccountContext);
  const [showIncome, setShowIncome] = useState("inc");

  // Define an array of colors to be used for the chart
  const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
    "#FF6384",
  ];

  // Prepare the chart data with multiple colors
  const chartData = React.useMemo(() => {
    return categories.map((category, index) => {
      const totalAmount = accounts
        .filter(
          (account) =>
            account.categoryId === category.id &&
            account.type === (showIncome ? "inc" : "exp")
        )
        .reduce((acc, curr) => acc + curr.amount, 0);

      return {
        category: category.title,
        amount: totalAmount,
        fill: colors[index % colors.length], // Use colors cyclically
      };
    });
  }, [categories, accounts, showIncome]);

  const totalAmount = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0);
  }, [chartData]);

  // Updated chartConfig with multiple colors
  const chartConfig = React.useMemo(() => {
    return chartData.reduce((acc, curr) => {
      acc[curr.category] = {
        label: curr.category,
        color: curr.fill,
      };
      return acc;
    }, {});
  }, [chartData]);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - {showIncome ? "Income" : "Expense"}</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
        <button
          onClick={() => setShowIncome(!showIncome)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Show me {showIncome ? "Expense" : "Income"}
        </button>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalAmount.toLocaleString()}₮
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {showIncome ? "Income" : "Expense"}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing total {showIncome ? "income" : "expense"} for the last 2
          months
        </div>
      </CardFooter>
    </Card>
  );
}
