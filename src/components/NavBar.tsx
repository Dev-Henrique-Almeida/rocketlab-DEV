import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-center">
      <div className="flex space-x-4">
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/cart" className="text-white">
          Carrinho
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
