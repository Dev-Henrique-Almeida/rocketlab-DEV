import React, { useEffect, useState } from "react";
import { CheckoutModalProps } from "../../types/interfaces/Order";

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  handleFinalConfirmCheckout,
  paymentMethod,
  setPaymentMethod,
  showQrCode,
}) => {
  const [showConfirmButton, setShowConfirmButton] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (showQrCode) {
      timer = setTimeout(() => {
        setShowConfirmButton(true);
      }, 10000); // 10 segundos
    }
    return () => {
      clearTimeout(timer);
      setShowConfirmButton(false);
    };
  }, [showQrCode]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-gray-600 p-4 rounded shadow-lg max-w-lg w-full sm:w-3/4 md:w-1/2">
        <h2 className="text-xl font-bold mb-4">Escolha a forma de pagamento</h2>
        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="radio"
              value="Cartao de Credito"
              checked={paymentMethod === "Cartao de Credito"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="ml-2">Cartão de Crédito</span>
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              value="Dinheiro"
              checked={paymentMethod === "Dinheiro"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="ml-2">Dinheiro</span>
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              value="Pix"
              checked={paymentMethod === "Pix"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="ml-2">Pix</span>
          </label>
        </div>
        {showQrCode && (
          <div className="mb-4">
            <img src="https://i.imgur.com/mKnIuk7.png" alt="QR Code" />
          </div>
        )}
        {showQrCode && showConfirmButton && (
          <button
            onClick={handleFinalConfirmCheckout}
            className="w-full px-4 py-2 mt-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
          >
            Fechar Pedido
          </button>
        )}
        {!showQrCode && (
          <button
            onClick={onConfirm}
            className="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
          >
            Confirmar Pagamento
          </button>
        )}
        <button
          onClick={onClose}
          className="w-full px-4 py-2 mt-2 bg-gray-500 hover:bg-gray-700 text-white rounded"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;
