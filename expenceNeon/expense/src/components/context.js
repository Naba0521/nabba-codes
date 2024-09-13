"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
// const { readJson, saveJson } = require("../../../testapi/src/utils");
import { useAuth } from "../components/providers/AuthProvider";
import { api } from "@/lib/axios";

export const AccountContext = createContext(null);

export const AccountContextProvider = ({ children, userId }) => {
  // const users = readJson("users.json");
  const [selectedAccountId, setSelectedAccountId] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const { user } = useAuth();
  console.log(accounts);
  const getAccounts = async () => {
    const response = await api.get("/accounts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }); //bi middlewarees minii ywuulj bui hvseltvvded token bga esehiig shalgaj bga. tegeed herew bhgvi bol minii await hiigdej bga hvdeltiig hiihgvi bolohoor
    setAccounts(response.data);
  };
  const deleteAccount = async () => {
    if (selectedAccountId) {
      await api.delete(`/${selectedAccountId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setAccounts(
        accounts?.filter((account) => account.id !== selectedAccountId)
      );
      setSelectedAccountId(null); // Clear selection after deletion
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);

  const [newTransaction, setNewTransaction] = useState({
    type: "exp",
    amount: 0,
    payee: "",
    note: "",
    date: "",
    time: "",
  });

  return (
    <AccountContext.Provider
      value={{
        newTransaction,
        setNewTransaction,
        accounts,
        getAccounts,
        setAccounts,
        deleteAccount,
        selectedAccountId,
        setSelectedAccountId,
        setCategoryId,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
