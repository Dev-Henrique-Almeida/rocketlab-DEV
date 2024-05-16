import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types/interfaces/Product";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="border flex flex-col items-center w-full">
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col items-center flex-1 hover:bg-gray-500 transition-colors text-white hover:text-white"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-32 h-32 pt-4 object-cover mb-4"
        />
        <div className="flex flex-col items-center justify-between flex-1">
          <h3 className="text-lg font-bold text-center">{product.name}</h3>
          <p className="text-xs text-center mb-2 overflow-hidden h-15">
            {product.description.length > 82
              ? `${product.description.slice(0, 79)}...`
              : product.description}
          </p>
          <p className="text-lg font-bold">
            R${" "}
            {product.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart();
            }}
            className="mt-2 mb-2 p-2 bg-orange-500 hover:bg-orange-600 text-white rounded hover:border-green-700 focus:outline-none focus:ring-0"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
