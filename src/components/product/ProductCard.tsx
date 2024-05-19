import React from "react";
import { Link } from "react-router-dom";
import { ProductCardProps } from "../../types/interfaces/Product";
import { convertPrice } from "../../utils";

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="border flex flex-col items-center w-full sm:w-auto hover:bg-gray-500 transition-colors text-white hover:text-white"
    >
      <div className="flex flex-col items-center flex-1">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 sm:w-32 sm:h-32 pt-4 object-cover mb-4"
        />
        <div className="flex flex-col items-center justify-between flex-1 p-2 sm:p-4">
          <h3 className="text-sm sm:text-lg font-bold text-center">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-center mb-2 overflow-hidden h-15">
            {product.description.length > 50
              ? `${product.description.slice(0, 47)}...`
              : product.description}
          </p>
          <p className="text-sm sm:text-lg font-bold">
            R$ {convertPrice(product.price)}
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart();
            }}
            className="mt-2 mb-2 p-1 sm:p-2 bg-orange-500 hover:bg-orange-600 text-white rounded hover:border-green-700 focus:outline-none focus:ring-0"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
