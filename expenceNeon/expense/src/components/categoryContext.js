"use client";

import { api } from "@/lib/axios";
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

  // const createCategory = async () => {
  //   const response = await axios.post(
  //     "http://localhost:3001/categories",
  //     newCategory
  //   );
  // };
  const createCategory = async () => {
    // const newCategory = { title };
    try {
      const response = await api.post("/categories", newCategory, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      getCategories();
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await api.get("/categories", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCategories(response.data);
    } catch (error) {
      console.error(
        "Error fetching categories:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const deleteCategory = async () => {
    if (selectedCategoryIds.length > 0) {
      await Promise.all([
        selectedCategoryIds.map((id) =>
          api.delete(`/categories/${id}`, {
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
