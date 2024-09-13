const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { saveJson, readJson } = require("../utils");

const getAllAccounts = async (req, res) => {
  try {
    // const filePath = path.join(__dirname, "..", "data", "accounts.json");
    // const rawData = fs.readFileSync(filePath);
    // const accounts = JSON.parse(rawData);
    const accounts = await readJson("accounts.json");

    const userAccounts = accounts.filter(
      (account) => account.userId === req.user.id
    );

    res.json(userAccounts); // iim baidlaar ashiglaad bi hereglegch tus bvriin medeelliig awah bolomjtoi bolno
  } catch (error) {
    console.error("Error reading accounts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createAccount = async (req, res) => {
  try {
    // const filePath = path.join(__dirname, "..", "data", "accounts.json");
    // const rawData = fs.readFileSync(filePath);
    // const accounts = JSON.parse(rawData);
    const accounts = await readJson("accounts.json");
    console.log(req.user);
    const newAccount = { ...req.body, id: uuidv4(), userId: req.user.id };

    accounts.push(newAccount);

    await saveJson("accounts.json", accounts);

    // fs.writeFileSync(filePath, JSON.stringify(accounts, null, 2));
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
