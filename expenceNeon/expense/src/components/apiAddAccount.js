"use client";

import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { AccountContext } from "./context";
import { Eye } from "@/assets/eye";
import * as Icons from "react-icons/fa";
import { CategoryContext } from "./categoryContext";
import { isToday, isYesterday } from "date-fns";
import { BsTrash2 } from "react-icons/bs";

export const ApiAddAccount = ({
  filterType,
  onTotalAmountChange,
  sortOrder,
  timePeriod,
  maxValue,
  minValue,
  searchValue,
}) => {
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

  const { startDate, endDate } = (() => {
    switch (timePeriod) {
      case "All History":
        return getDateRange(365);
      case "Last 20 Days":
        return getDateRange(20);
      case "Last 10 Days":
        return getDateRange(10);
      default:
        return { startDate: new Date(0), endDate: new Date() };
    }
  })();

  const filteredAccounts = accounts
    .filter(
      (account) =>
        account.payee.includes(searchValue) ||
        account.amount.toString().includes(searchValue)
    )
    .filter(
      (account) => account.amount >= minValue && account.amount <= maxValue
    )
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
          return dateA - dateB;
        }
      } else if (
        sortOrder === "Highest First" ||
        sortOrder === "Lowest First"
      ) {
        const amountA = a.amount || 0;
        const amountB = b.amount || 0;

        if (sortOrder === "Highest First") {
          return amountB - amountA;
        } else {
          return amountA - amountB;
        }
      }
      return 0;
    });

  const totalAmount = filteredAccounts.reduce(
    (acc, account) =>
      acc + (account.type === "exp" ? -account.amount : account.amount),
    0
  );

  const todayRecords = filteredAccounts.filter((account) =>
    isToday(account.date)
  );
  const yesterdayRecords = filteredAccounts.filter((account) =>
    isYesterday(account.date)
  );
  const otherRecords = filteredAccounts.filter(
    (account) => !isToday(account.date) && !isYesterday(account.date)
  );

  const accountGroups = [
    { accounts: todayRecords, label: "Today" },
    { accounts: yesterdayRecords, label: "Yesterday" },
    { accounts: otherRecords, label: "Other" },
  ];

  // State to manage visible items
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    if (onTotalAmountChange) onTotalAmountChange(totalAmount);
  }, [totalAmount, onTotalAmountChange]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between bg-white py-[12px] px-[24px]">
        <div className="flex gap-4">
          <div className="font-semibold">Total Amount</div>
        </div>
        <div className="text-slate-400 font-bold" id="sumAccounts">
          {totalAmount}₮
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-[16px] font-semibold flex justify-between border-b pb-2">
          <div>History</div>
          <button
            className="flex justify-end pr-[20px] items-center text-gray-500 hover:text-green-500 cursor-pointer text-[20px]"
            onClick={deleteAccount}
            disabled={!selectedAccountId}
          >
            <BsTrash2 />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col justify-center w-full">
            <div className="flex flex-col gap-6">
              {accountGroups.map((group, index) => (
                <div key={index}>
                  <div className="font-semibold">{group.label}</div>
                  <div className="flex flex-col gap-5">
                    {group.accounts.slice(0, visibleCount).map((account) => {
                      const Icon = Icons[account.category?.icon];
                      return (
                        <div
                          className="flex justify-between bg-white items-center px-6 py-3 rounded-lg"
                          key={account.id}
                          onClick={() => {
                            setSelectedAccountId((prev) =>
                              prev === account.id ? null : account.id
                            );
                          }}
                          style={{
                            cursor: "pointer",
                            backgroundColor:
                              selectedAccountId === account.id
                                ? "#f0f0f0"
                                : "white",
                          }}
                        >
                          <div className="flex gap-4 items-center">
                            <Checkbox
                              height={6}
                              width={6}
                              className="border"
                              checked={selectedAccountId === account.id}
                              onCheck={() => {
                                setSelectedAccountId((prev) =>
                                  prev === account.id ? null : account.id
                                );
                              }}
                            />
                            <div className="w-8 h-8 flex justify-center items-center rounded-lg">
                              {Icon ? (
                                <Icon
                                  color={account.category?.color}
                                  className="w-8 h-8 "
                                />
                              ) : (
                                <Eye />
                              )}
                            </div>
                            <div>
                              <div>{account.category?.title}</div>
                              <div>{account.time}</div>
                              <div>{account.date}</div>
                            </div>
                            <div>{account.payee}</div>
                          </div>
                          <div
                            className={`${
                              account.type === "inc"
                                ? "text-[#23E01F]"
                                : "text-[#F54949]"
                            }`}
                          >
                            {account.type === "exp"
                              ? -account.amount
                              : account.amount}
                            ₮
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/* See More Button */}
                  {group.accounts.length > visibleCount && (
                    <button
                      className="mt-4 text-green-500 hover:underline"
                      onClick={() => setVisibleCount((prev) => prev + 6)}
                    >
                      See More
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
