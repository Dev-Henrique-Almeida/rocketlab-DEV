import React, { useState } from "react";
import classNames from "classnames";

interface FilterDropdownProps {
  categories: string[];
  selectedCategory: string | null;
  setCategory: (category: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  categories,
  selectedCategory,
  setCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category: string) => {
    setCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded"
      >
        {selectedCategory || "Selecione uma Categoria"}{" "}
        <span className="ml-2">▼</span>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-gray-700 shadow-lg rounded z-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={classNames(
                "block w-full text-left px-4 py-2 hover:bg-orange-500 hover:text-white",
                cat === selectedCategory
                  ? "bg-orange-600 text-white"
                  : "text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
