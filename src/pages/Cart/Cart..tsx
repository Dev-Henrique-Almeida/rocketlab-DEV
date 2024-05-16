import RemoveModal from "../../components/modal/RemoveModal";
import OrderModal from "../../components/modal/OrderModal";
import { convertPrice } from "../../utils";
import { useCarts } from "../../hooks/useCarts";
import { useOrderModal } from "../../hooks/useOrderModal";

const Cart = () => {
  const {
    handleDecrementQuantity,
    handleRemoveClick,
    handleCloseModal,
    handleConfirmRemove,
    dispatch,
    handleCheckoutCart,
    isOrderItems,
    isModalOpen,
    state,
    total,
  } = useCarts();

  const { isOrderModalOpen, handleOrderModalClose } = useOrderModal();

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
                    Total: R$
                    {convertPrice(item.price)}
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
              Total: R$
              {convertPrice(total)}
            </p>
            <button
              onClick={() => dispatch({ type: "CLEAR_CART" })}
              className="mt-2 p-2 bg-gray-500 hover:bg-gray-600 text-white rounded"
            >
              Limpar Carrinho
            </button>
            <button
              onClick={handleCheckoutCart}
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
        items={isOrderItems}
      />
    </div>
  );
};

export default Cart;
