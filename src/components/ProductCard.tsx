import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types/ProductInterface";
import { useCart } from "../context/CartContext";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <div className="border flex flex-col items-center w-64 h-80">
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col items-center flex-1 hover:bg-gray-500 transition-colors text-white hover:text-white"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-32 h-32 object-cover "
        />
        <div className="flex flex-col items-center justify-between flex-1">
          <h3 className="text-lg font-bold text-center">{product.name}</h3>
          <p className="text-sm text-center mb-2 overflow-hidden h-14">
            {product.description}
          </p>
          <p className="font-bold">R$ {product.price.toFixed(2)}</p>
          <button
            onClick={addToCart}
            className="mt-2 mb-2 p-2 bg-green-500 text-white rounded hover:bg-green-700 hover:border-green-700 focus:outline-none focus:ring-0"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
