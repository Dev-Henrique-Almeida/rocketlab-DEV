import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import { useOrders } from "../../context/OrderContext";

const Navbar: React.FC = () => {
  const { state: cartState } = useCart();
  const { orders } = useOrders();

  const totalCartItems = cartState.items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalOrders = orders.length;

  return (
    <nav className="bg-gradient-to-r from-orange-400 to-orange-600 p-4 flex justify-center">
      <div className="flex space-x-4">
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/cart" className="text-white flex items-center relative">
          Carrinho <FiShoppingCart size={24} className="ml-2" />
          {totalCartItems > 0 && (
            <span
              className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"
              style={{ fontSize: "0.6rem", transform: "translate(50%, -50%)" }}
            >
              {totalCartItems}
            </span>
          )}
        </Link>
        <Link to="/orders" className="text-white flex items-center relative">
          Pedidos
          {totalOrders > 0 && (
            <span
              className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"
              style={{ fontSize: "0.6rem", transform: "translate(50%, -50%)" }}
            >
              {totalOrders}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
