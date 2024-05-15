import { useState } from "react";
import { products } from "../assets/data/Database";

export const useFilteredProducts = () => {
  const [category, setCategory] = useState("Todos");

  const categories = [
    "Todos",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    category === "Todos"
      ? products
      : products.filter((product) => product.category === category);

  return { category, setCategory, categories, filteredProducts };
};
