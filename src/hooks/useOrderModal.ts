import { useState } from "react";

export const useOrderModal = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOrderModalClose = () => {
    setIsOrderModalOpen(false);
  };

  return { isOrderModalOpen, setIsOrderModalOpen, handleOrderModalClose };
};
