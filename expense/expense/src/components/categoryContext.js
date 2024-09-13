"use client";

import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const CategoryContext = createContext(null);
export const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
  const [newCategory, SetNewCategory] = useState({
    title: "",
    icon: "",
    color: "",
  });

  const createCategory = async () => {
    const response = await axios.post(
      "http://localhost:3001/categories",
      newCategory
    );
  };

  const getCategories = async () => {
    const response = await axios.get("http://localhost:3001/categories", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setCategories(response.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const deleteCategory = async () => {
    if (selectedCategoryIds.length > 0) {
      await Promise.all([
        selectedCategoryIds.map((id) =>
          axios.delete(`http://localhost:3001/categories/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
        ),
      ]);

      setCategories(
        categories.filter(
          (category) => !selectedCategoryIds.includes(category.id)
        )
      );
      setSelectedCategoryIds([]);
    }
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryIds((prevSelectedIds) => {
      // Check if the categoryId is already in the selected array
      if (prevSelectedIds.includes(categoryId)) {
        // If it is, remove it from the array (deselect it)
        return prevSelectedIds.filter((id) => id !== categoryId);
      } else {
        // Otherwise, add it to the array (select it)
        return [...prevSelectedIds, categoryId];
      }
    });
  };
  return (
    <CategoryContext.Provider
      value={{
        newCategory,
        SetNewCategory,
        categories,
        createCategory,
        getCategories,
        deleteCategory,
        setCategories,
        selectedCategoryIds,
        setSelectedCategoryIds,
        handleCategoryClick,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
