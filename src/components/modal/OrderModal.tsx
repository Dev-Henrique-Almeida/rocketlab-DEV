import React from "react";
import { OrderModalProps } from "../../types/interfaces/Order";

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, items }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-600 p-4 rounded shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">Pedido Fechado</h2>
        <ul className="mb-4">
          {items.map((item, index) => (
            <li key={index} className="mb-2">
              {item.quantity}x {item.name} - R$
              {(item.price * item.quantity).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default OrderModal;