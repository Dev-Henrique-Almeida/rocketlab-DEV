import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import RemoveModal from "../components/modal/RemoveModal";
import OrderModal from "../components/modal/OrderModal";
import { useModal } from "../hooks/useModal";
import { useSelected } from "../hooks/useSelected";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { addOrder } = useOrders();
  const { isModalOpen, setIsModalOpen } = useModal();
  const { selectedProductId, setSelectedProductId } = useSelected();
  const [orderItems, setOrderItems] = useState<
    { name: string; quantity: number; price: number }[]
  >([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const total = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemoveClick = (productId: string) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const handleConfirmRemove = () => {
    if (selectedProductId) {
      dispatch({ type: "REMOVE_FROM_CART", productId: selectedProductId });
      setIsModalOpen(false);
      setSelectedProductId(null);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };

  const handleDecrementQuantity = (productId: string, quantity: number) => {
    if (quantity <= 1) {
      handleRemoveClick(productId);
    } else {
      dispatch({ type: "DECREMENT_QUANTITY", productId });
    }
  };

  const handleCheckout = () => {
    const order = {
      items: state.items,
      total,
      date: new Date().toLocaleString(),
    };
    addOrder(order);
    setOrderItems(state.items);
    setIsOrderModalOpen(true);
    dispatch({ type: "CHECKOUT" });
  };

  const handleOrderModalClose = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Carrinho de Compras</h1>
      {state.items.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          {state.items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover mr-4"
                />
                <div>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-lg font-bold">
                    Total: R${" "}
                    {item.price.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-5">
                <button
                  onClick={() =>
                    handleDecrementQuantity(item.id, item.quantity)
                  }
                  className="flex justify-center items-center w-6 h-6 bg-orange-500 hover:bg-orange-600 text-white rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch({ type: "INCREMENT_QUANTITY", productId: item.id })
                  }
                  className="flex justify-center items-center w-6 h-6 bg-orange-500 hover:bg-orange-600 text-white rounded"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemoveClick(item.id)}
                  className="p-2 bg-red-500 text-white rounded ml-4"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-lg font-bold">
              Total: R${" "}
              {total.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>{" "}
            <button
              onClick={() => dispatch({ type: "CLEAR_CART" })}
              className="mt-2 p-2 bg-gray-500 hover:bg-gray-600 text-white rounded"
            >
              Limpar Carrinho
            </button>
            <button
              onClick={handleCheckout}
              className="mt-2 ml-2 p-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
            >
              Fechar Pedido
            </button>
          </div>
        </div>
      )}
      <RemoveModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmRemove}
        message="Tem certeza de que deseja remover este produto do carrinho?"
      />
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleOrderModalClose}
        items={orderItems}
      />
    </div>
  );
};

export default Cart;
