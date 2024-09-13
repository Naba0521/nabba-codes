const { json } = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { saveJson, readJson } = require("../utils");

const getAllCategories = async (req, res) => {
  try {
    // const filePath = path.join(__dirname, "..", "data", "category.json");
    // const rawData = fs.readFileSync(filePath);
    // const categories = JSON.parse(rawData);
    const categories = await readJson("category.json");
    const userCategories = categories.filter(
      (category) => category.userId === req.user.id
    );
    res.json(userCategories);
  } catch (error) {
    console.error("Error reading categories:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createCategory = async (req, res) => {
  try {
    // const filePath = path.join(__dirname, "..", "data", "category.json");
    // const rawData = fs.readFileSync(filePath);
    // const categories = JSON.parse(rawData);
    const categories = await readJson("category.json");

    const newCategory = { ...req.body, id: uuidv4(), userId: req.user.id };

    categories.push(newCategory);

    console.log("jj");

    // fs.writeFileSync(filePath, JSON.stringify(categories, null, 2));
    // res.status(201).json(newCategory);
    await saveJson("category.json", categories);
    res.status(201).json(newCategory);
  } catch (error) {
    console.error("Error reading categories:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "category.json");
    const { id } = req.params;
    const rawData = fs.readFileSync(filePath);
    let categories = JSON.parse(rawData);

    categories = categories.filter((category) => category.id != id);

    fs.writeFileSync(filePath, JSON.stringify(categories, null, 2));
    res.status(204).end();
  } catch (error) {}
};

module.exports = { getAllCategories, createCategory, deleteCategory };
