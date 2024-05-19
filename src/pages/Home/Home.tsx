import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useFilteredProducts } from "../../hooks/Selected/useFilteredProducts";
import ProductCard from "../../components/product/ProductCard";
import CartConfirmationModal from "../../components/modal/CartConfirmationModal";
import { useCarts } from "../../hooks/Cart/useCarts";
import FilterDropdown from "../../components/filterDropDown/FilterDropDown";
import classNames from "classnames";
import { useHandlePage } from "../../hooks/Pages/useHandlePage";

const Home = () => {
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 640 ? 2 : 8);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const {
    isModalOpen,
    handleAddToCart,
    handleCheckout,
    handleContinueShopping,
  } = useCarts();

  const { categories, setCategory, filteredProducts, selectedCategory } =
    useFilteredProducts();

  const { totalPages, currentPage, handleNextPage, handlePreviousPage } =
    useHandlePage(filteredProducts, itemsPerPage, itemsPerPage);

  return (
    <div
      className={classNames("p-8 pb-2 flex flex-col", {
        "h-[85vh]": window.innerWidth < 640,
        "min-h-screen": window.innerWidth >= 640,
      })}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">
          BiGTech - Produtos de Informática
        </h1>
      </div>
      <div className="mb-6 sm:hidden">
        <FilterDropdown
          categories={categories}
          selectedCategory={selectedCategory}
          setCategory={setCategory}
        />
      </div>
      <div className="hidden sm:flex flex-wrap justify-start space-x-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={classNames(
              "m-1 p-2 rounded text-xs sm:text-sm",
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
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
        </div>
        <div className="sm:hidden w-full">
          <div className="grid grid-cols-1 gap-4">
            {filteredProducts
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded mx-2"
            >
              Anterior
            </button>
            <span className="text-lg font-bold mx-2">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded mx-2"
            >
              Próximo
            </button>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex justify-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded mx-2"
        >
          Anterior
        </button>
        <span className="text-lg font-bold mx-2">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded mx-2"
        >
          Próximo
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

export default Home;
