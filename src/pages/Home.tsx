import { useNavigate } from "react-router-dom";
import { useFilteredProducts } from "../hooks/useFilteredProducts";
import { useCart } from "../context/CartContext";
import { useModal } from "../hooks/useModal";
import { useSelected } from "../hooks/useSelected";
import { Product } from "../types/interfaces/Product";
import ProductCard from "../components/product/ProductCard";
import CartConfirmationModal from "../components/modal/CartConfirmationModal";

const Home = () => {
  const { categories, setCategory, filteredProducts } = useFilteredProducts();
  const { isModalOpen, setIsModalOpen } = useModal();
  const { setSelectedProductId } = useSelected();
  const { dispatch } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", product });
    setSelectedProductId(product.id);
    setIsModalOpen(true);
  };

  const handleContinueShopping = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };

  const handleCheckout = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
    navigate("/cart");
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Produtos de Informática High-End</h1>
      </div>
      <div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className="m-2 p-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
      <CartConfirmationModal
        isOpen={isModalOpen}
        onClose={handleContinueShopping}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Home;
