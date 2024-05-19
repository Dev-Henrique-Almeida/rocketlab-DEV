import { useState } from "react";

export const useHandlePage = <T>(
  items: T[],
  itemsPerPage = 2,
  initialVisibleItems = 8
) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisibleItems, setVisibleItems] = useState(initialVisibleItems);

  const handleShowMore = () => {
    if (isVisibleItems >= items.length) {
      setVisibleItems(initialVisibleItems);
    } else {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
    }
  };

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    setCurrentPage,
    handleNextPage,
    handlePreviousPage,
    handleShowMore,
    isVisibleItems,
    currentPage,
    itemsPerPage,
    totalPages,
  };
};
