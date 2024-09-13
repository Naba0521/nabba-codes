const { Router } = require("express");
const {
  getAllAccounts,
  createAccount,
  deleteAccount,
} = require("../controllers/account.controller");

const accountRouter = Router();

accountRouter.get("/", getAllAccounts);
accountRouter.post("/", createAccount);
accountRouter.delete("/:id", deleteAccount); // Add this for deletion

module.exports = { accountRouter };
