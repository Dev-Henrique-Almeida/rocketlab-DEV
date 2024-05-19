import { useOrders } from "../../context/OrderContext";
import OrderDetailsModal from "../../components/modal/OrdersDetailsModal";
import { useCarts } from "../../hooks/Cart/useCarts";
import { convertPrice } from "../../utils";
import { useHandlePage } from "../../hooks/Pages/useHandlePage";

const Orders = () => {
  const { orders } = useOrders();
  const { isModalOpen, isSelectedOrder, handleOrderClick, handleCloseModal } =
    useCarts();

  const {
    totalPages,
    itemsPerPage,
    currentPage,
    handleNextPage,
    handlePreviousPage,
  } = useHandlePage(orders, 2, 8);

  return (
    <div className="p-8 pb-2 flex flex-col h-[85vh] sm:min-h-screen-0 sm:h-[85vh]">
      <h1 className="text-2xl font-bold mb-6">Todos os Pedidos</h1>
      {orders.length === 0 ? (
        <p>Nenhum pedido feito.</p>
      ) : (
        <div>
          {orders
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((order, index) => (
              <div
                key={index}
                className="mb-4 p-4 border rounded cursor-pointer"
                onClick={() => handleOrderClick(order)}
              >
                <h2 className="text-lg font-bold mb-2">
                  Pedido {(currentPage - 1) * itemsPerPage + index + 1}
                </h2>
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
          <div className="flex justify-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded mx-2"
            >
              Anterior
            </button>
            <span className="text-lg font-bold mx-2">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded mx-2"
            >
              Próximo
            </button>
          </div>
          <div className="hidden sm:flex justify-center mt-4"></div>
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
