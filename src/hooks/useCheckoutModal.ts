import { useState } from "react";
import { useCarts } from "./useCarts";

export const useCheckoutModal = () => {
  const { handleCheckoutCart } = useCarts();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const handleCheckoutCartScreen = () => {
    setIsCheckoutModalOpen(true);
  };

  const handleConfirmCheckout = () => {
    handleCheckoutCart();
    setIsCheckoutModalOpen(false);
  };

  const handleCloseCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
  };

  return {
    setIsCheckoutModalOpen,
    handleCheckoutCartScreen,
    handleCloseCheckoutModal,
    handleConfirmCheckout,
    isCheckoutModalOpen,
  };
};
