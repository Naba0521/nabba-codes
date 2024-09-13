const { Router } = require("express");
const { login, createUser } = require("../controllers/auth.controller");

const authRouter = Router();

authRouter.post("/login", login).post("/register", createUser);

module.exports = { authRouter };
