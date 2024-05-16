import React from "react";
import { CartConfirmationModalProps } from "../../types/interfaces/Cart";

const CartConfirmationModal: React.FC<CartConfirmationModalProps> = ({
  isOpen,
  onClose,
  onCheckout,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-gray-600 p-4 rounded shadow-lg max-w-lg w-full sm:w-3/4 md:w-1/2">
        <h2 className="text-xl font-bold mb-4">Confirmação de Compra</h2>
        <p className="mb-4">
          Deseja finalizar o pedido ou continuar comprando?
        </p>
        <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
          <button
            onClick={onClose}
            className="p-2 bg-gray-500 text-white rounded hover:bg-gray-700 w-full sm:w-auto"
          >
            Continuar Comprando
          </button>
          <button
            onClick={onCheckout}
            className="p-2 bg-orange-500 hover:bg-orange-600 text-white rounded w-full sm:w-auto"
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartConfirmationModal;
