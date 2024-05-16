import { useNavigate } from "react-router-dom";
import { useSelectedProduct } from "./useSelectedProduct";
import { useModal } from "./useModal";
import { Product } from "../types/interfaces/Product";
import { useCart } from "../context/CartContext";
import { Order } from "../types/interfaces/Order";
import { useSelectedOrder } from "./useSelectedOrder";
import { useOrders } from "../context/OrderContext";
import { useOrderItems } from "./useOrderItems";
import { useOrderModal } from "./useOrderModal";

export const useCarts = () => {
  const { isModalOpen, setIsModalOpen } = useModal();
  const { isSelectedProductId, setSelectedProductId } = useSelectedProduct();
  const { isSelectedOrder, setSelectedOrder } = useSelectedOrder();
  const { addOrder } = useOrders();
  const { state, dispatch } = useCart();
  const { isOrderItems, setOrderItems } = useOrderItems();
  const { setIsOrderModalOpen } = useOrderModal();
  const navigate = useNavigate();

  const total = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleAddToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", product });
    setSelectedProductId(product.id);
    setIsModalOpen(true);
  };

  const handleContinueShopping = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };

  const handleCheckout = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
    navigate("/cart");
  };

  const handleCheckoutCart = () => {
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

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const handleRemoveClick = (productId: string) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const handleConfirmRemove = () => {
    if (isSelectedProductId) {
      dispatch({ type: "REMOVE_FROM_CART", productId: isSelectedProductId });
      setIsModalOpen(false);
      setSelectedProductId(null);
    }
  };

  const handleDecrementQuantity = (productId: string, quantity: number) => {
    if (quantity <= 1) {
      handleRemoveClick(productId);
    } else {
      dispatch({ type: "DECREMENT_QUANTITY", productId });
    }
  };

  return {
    handleAddToCart,
    handleContinueShopping,
    handleCheckout,
    handleOrderClick,
    handleCloseModal,
    handleRemoveClick,
    setIsModalOpen,
    handleConfirmRemove,
    handleDecrementQuantity,
    handleCheckoutCart,
    dispatch,
    isModalOpen,
    isSelectedOrder,
    isSelectedProductId,
    isOrderItems,
    state,
    total,
  };
};
