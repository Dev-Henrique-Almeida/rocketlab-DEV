import { useState } from "react";
import { useOrders } from "../context/OrderContext";
import { Order } from "../types/interfaces/Order";
import OrderDetailsModal from "../components/modal/OrdersDetailsModal";

const Orders = () => {
  const { orders } = useOrders();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Todos os Pedidos</h1>
      {orders.length === 0 ? (
        <p>Nenhum pedido feito.</p>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div
              key={index}
              className="mb-4 p-4 border rounded cursor-pointer"
              onClick={() => handleOrderClick(order)}
            >
              <h2 className="text-lg font-bold mb-2">Pedido {index + 1}</h2>
              <p className="text-sm mb-2">Data: {order.date}</p>
              <ul className="mb-2">
                {order.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover mr-4"
                    />
                    <span>
                      {item.quantity}x {item.name} - R$
                      {(item.price * item.quantity).toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-bold">
                Total: R${" "}
                {order.total.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          ))}
        </div>
      )}
      <OrderDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        order={selectedOrder}
      />
    </div>
  );
};

export default Orders;
