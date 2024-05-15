import { useFilteredProducts } from "../../hooks/useFilteredProducts";

import ProductCard from "../../components/product/ProductCard";
import CartConfirmationModal from "../../components/modal/CartConfirmationModal";
import { useCarts } from "../../hooks/useCart";

const Home = () => {
  const { categories, setCategory, filteredProducts } = useFilteredProducts();
  const {
    isModalOpen,
    handleAddToCart,
    handleCheckout,
    handleContinueShopping,
  } = useCarts();

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
