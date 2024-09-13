const express = require("express");
const cors = require("cors");
const { accountRouter } = require("./routes/account.route");
const { categoryRouter } = require("./routes/category.route");
const { authRouter } = require("./routes/auth.route");
const { authMiddleware } = require("./middlewares/auth.middleware");
const { userRouter } = require("./routes/user.route");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(authMiddleware);

app.use("/accounts", accountRouter);
app.use("/categories", categoryRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
