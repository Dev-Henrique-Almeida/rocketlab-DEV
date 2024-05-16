import React from "react";
import { Link } from "react-router-dom";
import { OrderDetailsModalProps } from "../../types/interfaces/Order";

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({
  isOpen,
  onClose,
  order,
}) => {
  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-gray-600 p-4 rounded shadow-lg max-w-lg w-full sm:w-3/4 md:w-1/2">
        <h2 className="text-xl font-bold mb-4">Detalhes do Pedido</h2>
        <p className="text-sm mb-2">Data: {order.date}</p>
        <ul className="mb-2">
          {order.items.map((item, idx) => (
            <li key={idx} className="flex items-center mb-2">
              <Link to={`/product/${item.id}`} className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <span>
                  {item.quantity}x {item.name} - R$
                  {(item.price * item.quantity).toFixed(2)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-lg font-bold">
          Total: R$
          {order.total.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
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

export default OrderDetailsModal;
