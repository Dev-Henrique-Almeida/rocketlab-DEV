import { useState } from "react";
import { products } from "../data/Database";

export const useFilteredProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const setCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return {
    categories,
    setCategory,
    filteredProducts,
    selectedCategory,
  };
};
