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
  const getAccounts = async () => {
    try {
      const response = await api.get("/accounts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setAccounts(response.data);
    } catch (error) {
      console.error(
        "Error fetching accounts:",
        error.response?.data || error.message
      );
    }
  };
  const deleteAccount = async () => {
    if (selectedAccountId) {
      try {
        // Correct URL with '/accounts/' path
        await api.delete(`/accounts/${selectedAccountId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        // Filter out the deleted account from the state
        setAccounts((prevAccounts) =>
          prevAccounts?.filter((account) => account.id !== selectedAccountId)
        );

        // Clear the selected account after deletion
        setSelectedAccountId(null);
      } catch (error) {
        console.error(
          "Error deleting account:",
          error.response?.data || error.message
        );
      }
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
