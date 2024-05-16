import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RemoveModal from "../../components/modal/RemoveModal";
import OrderModal from "../../components/modal/OrderModal";
import StockLimitModal from "../../components/modal/StockLimitModal";
import { convertPrice } from "../../utils";
import { useCarts } from "../../hooks/useCarts";
import { useOrderModal } from "../../hooks/useOrderModal";
import { useClearModal } from "../../hooks/useClearModal";
import { useCheckoutModal } from "../../hooks/useCheckoutModal";
import { products } from "../../data/Database";
import { useStockModal } from "../../hooks/useStockModal";

const Cart = () => {
  const {
    handleDecrementQuantity,
    handleRemoveClick,
    handleCloseModal,
    handleConfirmRemove,
    dispatch,
    isOrderItems,
    isModalOpen,
    state,
    total,
  } = useCarts();

  const {
    isClearCartModalOpen,
    handleCloseClearCartModal,
    handleClearCart,
    handleConfirmClearCart,
  } = useClearModal();

  const {
    isCheckoutModalOpen,
    handleCheckoutCartScreen,
    handleCloseCheckoutModal,
    handleConfirmCheckout,
  } = useCheckoutModal();

  const {
    isStockLimitModalOpen,
    setStockLimitModalOpen,
    handleCloseStockLimitModal,
    handleProductClick,
  } = useStockModal();

  const { isOrderModalOpen, handleOrderModalClose } = useOrderModal();

  const handleIncrementQuantity = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    const cartItem = state.items.find((item) => item.id === productId);

    if (product && cartItem && cartItem.quantity < product.stock) {
      dispatch({ type: "INCREMENT_QUANTITY", productId });
    } else {
      setStockLimitModalOpen(true);
    }
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
              className="flex flex-col sm:flex-row justify-between items-center mb-4 cursor-pointer group"
              onClick={() => handleProductClick(item.id)}
            >
              <div className="flex items-center mb-4 sm:mb-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover mr-4"
                />
                <div>
                  <h2 className="text-lg font-bold group-hover:text-gray-400">
                    {item.name}
                  </h2>
                  <p className="text-lg font-bold group-hover:text-gray-400">
                    Total: R${convertPrice(item.price)}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDecrementQuantity(item.id, item.quantity);
                  }}
                  className="flex justify-center items-center w-6 h-6 bg-orange-500 hover:bg-orange-600 text-white rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleIncrementQuantity(item.id);
                  }}
                  className="flex justify-center items-center w-6 h-6 bg-orange-500 hover:bg-orange-600 text-white rounded"
                >
                  +
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveClick(item.id);
                  }}
                  className="p-2 bg-red-500 hover:bg-red-600 text-white rounded"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-lg font-bold mb-4 sm:mb-0">
              Total: R${convertPrice(total)}
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleClearCart}
                className="p-2 bg-gray-500 hover:bg-gray-600 text-white rounded"
              >
                Limpar Carrinho
              </button>
              <button
                onClick={handleCheckoutCartScreen}
                className="p-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
              >
                Fechar Pedido
              </button>
            </div>
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
      <RemoveModal
        isOpen={isClearCartModalOpen}
        onClose={handleCloseClearCartModal}
        onConfirm={handleConfirmClearCart}
        message="Tem certeza de que deseja limpar o carrinho?"
      />
      <RemoveModal
        isOpen={isCheckoutModalOpen}
        onClose={handleCloseCheckoutModal}
        onConfirm={handleConfirmCheckout}
        message="Tem certeza de que deseja fechar o pedido?"
      />
      <StockLimitModal
        isOpen={isStockLimitModalOpen}
        onClose={handleCloseStockLimitModal}
      />
    </div>
  );
};

export default Cart;
