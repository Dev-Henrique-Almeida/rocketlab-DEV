import { useOrders } from "../context/OrderContext";

const Orders = () => {
  const { orders } = useOrders();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Todos os Pedidos</h1>
      {orders.length === 0 ? (
        <p>Nenhum pedido feito.</p>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <h2 className="text-lg font-bold mb-2">Pedido {index + 1}</h2>
              <p className="text-sm mb-2">Data: {order.date}</p>
              <ul className="mb-2">
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.quantity}x {item.name} - R$
                    {(item.price * item.quantity).toFixed(2)}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-bold">
                Total: R$ {order.total.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
