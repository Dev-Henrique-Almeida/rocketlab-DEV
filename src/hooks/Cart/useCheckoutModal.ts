import { useState } from "react";
import { useCarts } from "./useCarts";

export const useCheckoutModal = () => {
  const { handleCheckoutCart } = useCarts();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showQrCode, setShowQrCode] = useState(false);

  const handleCheckoutCartScreen = () => {
    setIsCheckoutModalOpen(true);
  };

  const handleConfirmCheckout = () => {
    if (paymentMethod === "Pix") {
      setShowQrCode(true);
    } else {
      handleCheckoutCart();
      setIsCheckoutModalOpen(false);
    }
  };

  const handleCloseCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
    setShowQrCode(false);
  };

  const handleFinalConfirmCheckout = () => {
    handleCheckoutCart();
    setIsCheckoutModalOpen(false);
    setShowQrCode(false);
  };

  return {
    setIsCheckoutModalOpen,
    handleCheckoutCartScreen,
    handleCloseCheckoutModal,
    handleConfirmCheckout,
    handleFinalConfirmCheckout,
    isCheckoutModalOpen,
    paymentMethod,
    setPaymentMethod,
    showQrCode,
    setShowQrCode,
  };
};
