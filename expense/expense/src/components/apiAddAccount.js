"use client";

import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { FoodIcon } from "@/assets/foodIcon";
import { HomeIcon } from "@/assets/homeIcon";
import { AccountContext } from "./context";
import { AddHome } from "@/assets/addHome";
import { AddGift } from "@/assets/addGift";
import { AddFood } from "@/assets/addFood";
import { AddDrink } from "@/assets/addDrink";
import { AddTaxi } from "@/assets/addTaxi";
import { AddShopping } from "@/assets/addShopping";
import { Eye } from "@/assets/eye";
import * as Icons from "react-icons/fa";
import { CategoryContext } from "./categoryContext";

export const ApiAddAccount = ({
  filterType,
  onTotalAmountChange,
  sortOrder,
  timePeriod,
}) => {
  // const [accounts, setAccounts] = useState([]);
  // const [selectedAccountId, setSelectedAccountId] = useState(null);
  // const { newTransaction, setNewTransaction } = useContext(AccountContext);
  const {
    accounts,
    setAccounts,
    deleteAccount,
    selectedAccountId,
    setSelectedAccountId,
  } = useContext(AccountContext);
  const { selectedCategoryIds } = useContext(CategoryContext);

  const getDateRange = (days) => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - days);
    return { startDate, endDate };
  };

  // Calculate the date range based on the selected time period
  const { startDate, endDate } = (() => {
    switch (timePeriod) {
      case "All History":
        return getDateRange(365);
      case "Last 20 Days":
        return getDateRange(20);
      case "Last 10 Days":
        return getDateRange(10);
      default:
        return { startDate: new Date(0), endDate: new Date() }; // Default to all time if no period selected
    }
  })();

  const filteredAccounts = accounts
    .filter((account) => {
      if (filterType === "all") return true;
      return account.type === filterType;
    })
    .filter((account) => !selectedCategoryIds.includes(account.category?.id))
    .filter((account) => {
      const accountDate = new Date(account.date || "1900-01-01");
      return accountDate >= startDate && accountDate <= endDate;
    })
    .sort((a, b) => {
      if (sortOrder === "Newest First" || sortOrder === "Oldest First") {
        const dateA = new Date(a.date || "1900-01-01");
        const dateB = new Date(b.date || "1900-01-01");

        if (sortOrder === "Newest First") {
          return dateB - dateA;
        } else {
          // Oldest First
          return dateA - dateB;
        }
      } else if (
        sortOrder === "Highest First" ||
        sortOrder === "Lowest First"
      ) {
        const amountA = a.amount || 0; // Replace `value` with the actual property name
        const amountB = b.amount || 0; // Replace `value` with the actual property name

        if (sortOrder === "Highest First") {
          return amountB - amountA;
        } else {
          // Lowest First
          return amountA - amountB;
        }
      }

      // Default case, could be an error or a fallback sort order
      return 0;
    });
  // .sort((a, b) => {
  //   const dateA = new Date(a.date || "1900-01-01");
  //   const dateB = new Date(b.date || "1900-01-01");

  //   if (sortOrder === "Newest First") {
  //     return dateB - dateA;
  //   } else {
  //     return dateA - dateB;
  //   }
  // });
  // .sort((a, b) => {
  //   // Convert date strings to Date objects
  //   const dateA = new Date(a.date || "1900-01-01"); // Default to a past date if no date is available
  //   const dateB = new Date(b.date || "1900-01-01");

  //   // If dates are the same, compare times
  //   if (dateA.getTime() === dateB.getTime()) {
  //     // Convert time strings to minutes since start of the day
  //     const timeToMinutes = (time) => {
  //       if (!time) return 0;
  //       const [hours, minutes] = time.split(":").map(Number);
  //       return hours * 60 + minutes;
  //     };

  //     const timeA = timeToMinutes(a.time);
  //     const timeB = timeToMinutes(b.time);

  //     // For descending order, reverse the comparison
  //     return timeB - timeA; // Change to `timeA - timeB` for ascending order
  //   }

  //   // If dates are different, compare dates
  //   return dateB - dateA; // Change to `dateA - dateB` for ascending order
  // });

  const totalAmount = filteredAccounts.reduce(
    (acc, account) =>
      acc + (account.type === "exp" ? -account.amount : account.amount),
    0
  );

  useEffect(() => {
    if (onTotalAmountChange) onTotalAmountChange(totalAmount);
  }, [totalAmount, onTotalAmountChange]);
  return (
    <div className="flex flex-col justify-center w-full">
      <button
        className="flex justify-end pr-[20px] items-center"
        onClick={deleteAccount}
        disabled={!selectedAccountId}
      >
        Delete
      </button>
      <div className="flex flex-col gap-5">
        {filteredAccounts?.map((account) => {
          const Icon = Icons[account.category?.icon];
          return (
            <div
              className="flex justify-between bg-white items-center px-6 py-3 rounded-lg"
              key={account.id}
              onClick={() => setSelectedAccountId(account.id)}
              style={{
                cursor: "pointer",
                backgroundColor:
                  selectedAccountId === account.id ? "#f0f0f0" : "white",
              }}
            >
              <div className="flex gap-4 items-center">
                <Checkbox
                  height={6}
                  width={6}
                  className=" border"
                  key={account.id}
                  onCheck={() => setSelectedAccountId(account.id)}
                />
                <div className="w-8 h-8 flex justify-center items-center bg-teal-50 rounded-lg">
                  {Icon ? <Icon color={account.category?.color} /> : <Eye />}
                </div>
                <div>
                  <div>{account.category.title}</div>
                  <div>{account.time}</div>
                  <div>{account.date}</div>
                </div>
              </div>
              <div
                className={`${
                  account.type === "inc" ? "text-[#23E01F]" : "text-[#F54949]"
                }`}
              >
                {account.type === "exp" ? -account.amount : account.amount}₮
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
