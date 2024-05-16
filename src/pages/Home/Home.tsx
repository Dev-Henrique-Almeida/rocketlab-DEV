import { useFilteredProducts } from "../../hooks/useFilteredProducts";
import ProductCard from "../../components/product/ProductCard";
import CartConfirmationModal from "../../components/modal/CartConfirmationModal";
import classNames from "classnames";
import { useCarts } from "../../hooks/useCarts";

const Home = () => {
  const { categories, setCategory, filteredProducts, selectedCategory } =
    useFilteredProducts();
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
            className={classNames(
              "m-2 p-2 rounded",
              cat === selectedCategory
                ? "bg-orange-600 text-white"
                : "bg-orange-500 hover:bg-orange-600 text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
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
