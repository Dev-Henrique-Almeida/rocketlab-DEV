import { useNavigate } from "react-router-dom";
import { useSelectedProduct } from "./useSelectedProduct";
import { useModal } from "./useModal";
import { Product } from "../types/interfaces/Product";
import { useCart } from "../context/CartContext";
import { Order } from "../types/interfaces/Order";
import { useSelectedOrder } from "./useSelectedOrder";

export const useCarts = () => {
  const { isModalOpen, setIsModalOpen } = useModal();
  const { setSelectedProductId } = useSelectedProduct();
  const { isSelectedOrder, setSelectedOrder } = useSelectedOrder();

  const { dispatch } = useCart();
  const navigate = useNavigate();

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

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return {
    handleAddToCart,
    handleContinueShopping,
    handleCheckout,
    handleOrderClick,
    handleCloseModal,
    isModalOpen,
    isSelectedOrder,
  };
};
