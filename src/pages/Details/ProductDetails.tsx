import { useParams } from "react-router-dom";
import { products } from "../../data/Database";
import CartConfirmationModal from "../../components/modal/CartConfirmationModal";
import { useCarts } from "../../hooks/Cart/useCarts";
import { convertPrice } from "../../utils";
import { useState, useEffect } from "react";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);
  const {
    isModalOpen,
    handleAddToCart,
    handleCheckout,
    handleContinueShopping,
  } = useCarts();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  const truncatedDescription =
    product.description.length > 200
      ? product.description.slice(0, 200) + "..."
      : product.description;

  return (
    <div className="p-8 pb-2  flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        {product.name}
      </h1>
      <img
        src={product.image}
        alt={product.name}
        className={`object-cover mb-8 ${
          isMobile ? "w-75 h-75" : "sm:w-64 sm:h-64 md:w-96 md:h-96"
        }`}
      />
      <div className="text-start">
        <p className={`text-xl ${isMobile ? "text-base" : ""} mb-2`}>
          {isMobile && !showFullDescription
            ? truncatedDescription
            : product.description}
          {isMobile && product.description.length > 200 && (
            <span
              onClick={handleToggleDescription}
              className="text-orange-500 cursor-pointer ml-2"
            >
              {showFullDescription ? "Ver menos" : "Ver mais"}
            </span>
          )}
        </p>
        <p className="text-lg md:text-xl font-bold">
          R$ {convertPrice(product.price)}
        </p>
        <p className="text-lg md:text-xl font-bold">
          Estoque disponível: {product.stock}
        </p>
        <button
          onClick={() => {
            handleAddToCart(product);
          }}
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
