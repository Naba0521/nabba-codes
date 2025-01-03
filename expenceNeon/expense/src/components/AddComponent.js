"use client";

import { Plus } from "@/assets/plus";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { useContext, useState, useRef } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddCategory } from "./addCategory";
import { AccountContext } from "./context";
import { api } from "@/lib/axios";

export const AddComponent = ({ name }) => {
  const { newTransaction, setNewTransaction, getAccounts } =
    useContext(AccountContext);
  const [selectedAccountId, setSelectedAccountId] = useState(null);
  const [activeButton, setActiveButton] = useState("expense");

  // Create a ref for DialogClose
  const dialogCloseRef = useRef(null);

  const createAccount = async () => {
    try {
      const response = await api.post("/accounts", newTransaction, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      getAccounts();
      // Programmatically close the dialog after successful API call
      if (dialogCloseRef.current) {
        dialogCloseRef.current.click();
      }
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div>
          <div className="flex items-center justify-center gap-[8px] w-[250px] bg-[#0166FF] text-[16px]  text-[#FFFFFF] rounded-3xl py-2 ">
            <Plus /> {name === "Records" ? "Add" : "Record"}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col bg-white gap-[20px]">
          <div className="flex pb-[20px] border-b-[1px] border-slate-400">
            <div className="text-[20px] font-semibold">Add Record</div>
          </div>
          <div className="flex gap-[16px]">
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex relative">
                <div
                  className={`py-2 px-14 cursor-pointer rounded-3xl z-10 transition-colors ${
                    activeButton === "expense"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 rounded-r-none"
                  }`}
                  onClick={() => {
                    setActiveButton("expense");
                    setNewTransaction({ ...newTransaction, type: "exp" });
                  }}
                >
                  Expense
                </div>
                <div
                  className={`py-2 px-14 cursor-pointer absolute top-0 left-40 rounded-r-3xl duration-1000 transition-colors ${
                    activeButton === "income"
                      ? "bg-green-600 text-white z-10 rounded-l-3xl"
                      : "bg-gray-200"
                  }`}
                  onClick={() => {
                    setActiveButton("income");
                    setNewTransaction({ ...newTransaction, type: "inc" });
                  }}
                >
                  Income
                </div>
              </div>
              <div className="border px-[16px] py-[12px] rounded-lg">
                <div>Amount</div>
                <div>
                  <input
                    className="border-none outline-none"
                    placeholder="₮ 000.00"
                    value={newTransaction.amount || ""} // Allows for an empty string
                    type="number"
                    onChange={(event) => {
                      const value = event.target.value; // Capture the input value
                      setNewTransaction({
                        ...newTransaction,
                        amount: value ? Number(value) : "", // Convert to number if not empty, else keep it empty
                      });
                    }}
                  />
                </div>
              </div>
              <div>
                <div>Category</div>
                <div>
                  <AddCategory />
                </div>
              </div>
              <div className="flex gap-6">
                <div>
                  <div>Date</div>
                  <div>
                    <input
                      type="date"
                      placeholder="Date"
                      value={newTransaction.date}
                      onChange={(event) =>
                        setNewTransaction({
                          ...newTransaction,
                          date: event.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div>
                  <div>Time</div>
                  <div>
                    <input
                      type="time"
                      placeholder="Time"
                      value={newTransaction.time}
                      onChange={(event) =>
                        setNewTransaction({
                          ...newTransaction,
                          time: event.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div
                className={`text-white bg-[#0166FF] rounded-3xl flex justify-center duration-1000 items-center py-[8px] ${
                  activeButton === "income"
                    ? "bg-green-600 text-white z-10 rounded-l-3xl"
                    : "bg-[#0166FF]"
                }`}
              >
                <DialogClose ref={dialogCloseRef}>
                  <button type="submit" onClick={createAccount}>
                    Add Record
                  </button>
                </DialogClose>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div>
                <div>Payee</div>
                <div>
                  <Input
                    placeholder="Write here"
                    onChange={(event) =>
                      setNewTransaction({
                        ...newTransaction,
                        payee: event.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <div>Note</div>
                <div>
                  <Textarea
                    placeholder="Write here"
                    className="pb-[200px]"
                    onChange={(event) =>
                      setNewTransaction({
                        ...newTransaction,
                        note: event.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
