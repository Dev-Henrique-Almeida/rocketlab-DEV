import React from "react";

interface CartConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const CartConfirmationModal: React.FC<CartConfirmationModalProps> = ({
  isOpen,
  onClose,
  onCheckout,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-600 p-4 rounded shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">Confirmação de Compra</h2>
        <p className="mb-4">
          Deseja finalizar o pedido ou continuar comprando?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="p-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          >
            Continuar Comprando
          </button>
          <button
            onClick={onCheckout}
            className="p-2 bg-orange-500 hover:bg-orange-600 text-white rounded "
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartConfirmationModal;
