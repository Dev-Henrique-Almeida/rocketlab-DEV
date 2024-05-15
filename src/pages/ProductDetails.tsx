import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../assets/data/Database";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const { dispatch } = useCart();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">{product.name}</h1>
      <div className="flex">
        <img
          src={product.image}
          alt={product.name}
          className="w-48 h-48 object-cover mr-8"
        />
        <div>
          <p className="text-xl mb-2">{product.description}</p>
          <p className="text-lg font-bold">R$ {product.price.toFixed(2)}</p>
          <button
            onClick={addToCart}
            className="mt-4 p-2 bg-green-500 text-white rounded"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
