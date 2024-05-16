import { useState, useEffect } from "react";
import { products } from "../data/Database";

export const useFilteredProducts = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "Todos"
  );
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const uniqueCategories: string[] = [
      "Todos",
      ...new Set(products.map((product) => product.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  useEffect(() => {
    if (selectedCategory && selectedCategory !== "Todos") {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory]);

  const resetCategory = () => {
    setSelectedCategory("Todos");
  };

  const setCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return {
    categories,
    setCategory,
    filteredProducts,
    selectedCategory,
    resetCategory,
  };
};
