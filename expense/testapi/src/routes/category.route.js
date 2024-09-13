const { Router } = require("express");

const {
  getAllCategories,
  createCategory,
  deleteCategory,
} = require("../controllers/category.controller");

const categoryRouter = Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.post("/", createCategory);
categoryRouter.delete("/:id", deleteCategory);

module.exports = { categoryRouter };
