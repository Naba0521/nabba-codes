"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [accounts, setAccounts] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedAccountId, setSelectedAccountId] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3001/accounts");
      setAccounts(response.data);
    };
    getData();
  }, []);

  const createAccount = async () => {
    const newAccount = { title, amount };
    const response = await axios.post(
      "http://localhost:3001/accounts",
      newAccount
    );
    setAccounts([...accounts, response.data]);
    setTitle("");
    setAmount("");
  };

  const deleteAccount = async () => {
    if (selectedAccountId) {
      await axios.delete(`http://localhost:3001/accounts/${selectedAccountId}`);
      setAccounts(
        accounts.filter((account) => account.id !== selectedAccountId)
      );
      setSelectedAccountId(null); // Clear selection after deletion
    }
  };

  return (
    <div className="flex justify-center w-full">
      <h1>Accounts</h1>
      <ul>
        {accounts.map((account) => (
          <li
            className="flex gap-4"
            key={account.id}
            onClick={() => setSelectedAccountId(account.id)}
            style={{
              cursor: "pointer",
              backgroundColor:
                selectedAccountId === account.id ? "#f0f0f0" : "transparent",
            }}
          >
            <div
              className="rounded-[50%] w-4 h-4 border"
              style={{
                cursor: "pointer",
                backgroundColor:
                  selectedAccountId === account.id ? "red" : "yellow",
              }}
            ></div>
            {account.title} - {account.amount}
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <input
          className="border"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          className="border"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <button onClick={createAccount}>Create</button>
        <button onClick={deleteAccount} disabled={!selectedAccountId}>
          Delete
        </button>
      </div>
    </div>
  );
}
