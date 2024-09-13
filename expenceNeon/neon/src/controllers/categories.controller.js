import { eq } from "drizzle-orm";
import { db } from "../database/index.js";
import { categories, users } from "../database/schema.js";

export const getCategories = async (req, res) => {
  try {
    const allCategories = await db.query.categories.findMany({
      where: eq(categories.userId, req.user.id),
    });

    res.json(allCategories);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve categories." });
  }
};

export const createCategories = async (req, res) => {
  const { title, userId, icon, color } = req.body;

  try {
    const newCategory = await db
      .insert(categories)
      .values({ title, userId: req.user.id, icon, color })
      .returning();

    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: "Failed to create categories." });
  }
};
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const existingCategory = await db.query.categories.findFirst({
      where: eq(categories.id, id),
    });

    if (!existingCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    await db.delete(categories).where(eq(categories.id, id));

    res.json({
      message: "Category successfully deleted",
      deletedCategory: existingCategory,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// const deleteCategory = async (req, res) => {
//   try {
//     const filePath = path.join(__dirname, "..", "data", "category.json");
//     const { id } = req.params;
//     const rawData = fs.readFileSync(filePath);
//     let categories = JSON.parse(rawData);

//     categories = categories.filter((category) => category.id != id);

//     fs.writeFileSync(filePath, JSON.stringify(categories, null, 2));
//     res.status(204).end();
//   } catch (error) {}
// };
