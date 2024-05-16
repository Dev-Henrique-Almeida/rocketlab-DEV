import React from "react";
import { StockLimitModalProps } from "../../types/interfaces/Cart";

const StockLimitModal: React.FC<StockLimitModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-600    p-8 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Estoque máximo</h2>
        <p className="mb-4">
          Não há mais estoque disponível para este produto.
        </p>
        <button
          onClick={onClose}
          className="p-2 w-full bg-orange-500 hover:bg-orange-600 text-white rounded"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default StockLimitModal;
