import { useState } from "react";
import { useCarts } from "../Cart/useCarts";

export const useClearModal = () => {
  const { dispatch } = useCarts();
  const [isClearCartModalOpen, setIsClearCartModalOpen] = useState(false);

  const handleClearCart = () => {
    setIsClearCartModalOpen(true);
  };

  const handleConfirmClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    setIsClearCartModalOpen(false);
  };

  const handleCloseClearCartModal = () => {
    setIsClearCartModalOpen(false);
  };

  return {
    setIsClearCartModalOpen,
    handleClearCart,
    handleConfirmClearCart,
    handleCloseClearCartModal,
    isClearCartModalOpen,
  };
};
