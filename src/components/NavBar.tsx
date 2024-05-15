import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const Navbar: React.FC = () => {
  const { state } = useCart();

  // Calcula a quantidade total de itens no carrinho
  const totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-blue-500 p-4 flex justify-center">
      <div className="flex space-x-4">
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/cart" className="text-white flex items-center relative">
          Carrinho <FiShoppingCart size={24} className="ml-2" />
          {totalItems > 0 && (
            <span
              className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"
              style={{ fontSize: "0.6rem" }}
            >
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
