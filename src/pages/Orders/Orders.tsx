import { useOrders } from "../../context/OrderContext";
import OrderDetailsModal from "../../components/modal/OrdersDetailsModal";
import { useCarts } from "../../hooks/useCarts";
import { convertPrice } from "../../utils";

const Orders = () => {
  const { orders } = useOrders();

  const { isModalOpen, isSelectedOrder, handleOrderClick, handleCloseModal } =
    useCarts();

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
                      {convertPrice(item.price * item.quantity)}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-bold">
                Total: R$ {convertPrice(order.total)}
              </p>
            </div>
          ))}
        </div>
      )}
      <OrderDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        order={isSelectedOrder}
      />
    </div>
  );
};

export default Orders;
