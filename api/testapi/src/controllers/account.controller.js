const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const getAllAccounts = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);
    res.json(accounts);
  } catch (error) {
    console.error("Error reading accounts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createAccount = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);

    const newAccount = { ...req.body, id: uuidv4() };
    accounts.push(newAccount);

    fs.writeFileSync(filePath, JSON.stringify(accounts, null, 2));
    res.status(201).json(newAccount);
  } catch (error) {
    console.error("Error creating account:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");
    const { id } = req.params;

    const rawData = fs.readFileSync(filePath);
    let accounts = JSON.parse(rawData);

    accounts = accounts.filter((account) => account.id !== id);

    fs.writeFileSync(filePath, JSON.stringify(accounts, null, 2));
    res.status(204).end();
  } catch (error) {
    console.error("Error deleting account:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAllAccounts, createAccount, deleteAccount };
