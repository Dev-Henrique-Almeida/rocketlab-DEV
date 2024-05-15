import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../assets/data/Database";
import CartConfirmationModal from "../components/modal/CartConfirmationModal";
import { Product } from "../types/interfaces/Product";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const { dispatch } = useCart();
  const product = products.find((p) => p.id === productId);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", product });
    setIsModalOpen(true);
  };

  const handleContinueShopping = () => {
    setIsModalOpen(false);
  };

  const handleCheckout = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    navigate("/cart");
  };

  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-center">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-96 h-96 object-cover mb-8"
      />
      <div className="text-center">
        <p className="text-xl mb-2">{product.description}</p>
        <p className="text-lg font-bold">R$ {product.price.toFixed(2)}</p>
        <button
          onClick={addToCart}
          className="mt-4 p-2 bg-orange-500 hover:bg-orange-600 text-white rounded "
        >
          Adicionar ao Carrinho
        </button>
      </div>
      <CartConfirmationModal
        isOpen={isModalOpen}
        onClose={handleContinueShopping}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default ProductDetails;
