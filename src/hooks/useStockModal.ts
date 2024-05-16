import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useStockModal = () => {
  const navigate = useNavigate();

  const [isStockLimitModalOpen, setStockLimitModalOpen] = useState(false);
  const handleCloseStockLimitModal = () => {
    setStockLimitModalOpen(false);
  };

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };
  return {
    setStockLimitModalOpen,
    handleCloseStockLimitModal,
    handleProductClick,
    isStockLimitModalOpen,
  };
};
