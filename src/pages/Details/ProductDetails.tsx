import { useParams } from "react-router-dom";
import { products } from "../../data/Database";
import CartConfirmationModal from "../../components/modal/CartConfirmationModal";
import { useCarts } from "../../hooks/useCarts";
import { convertPrice } from "../../utils";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);
  const {
    isModalOpen,
    handleAddToCart,
    handleCheckout,
    handleContinueShopping,
  } = useCarts();

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

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
        <p className="text-lg font-bold">R$ {convertPrice(product.price)}</p>
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
