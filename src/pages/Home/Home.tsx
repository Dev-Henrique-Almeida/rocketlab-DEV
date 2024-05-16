import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useFilteredProducts } from "../../hooks/useFilteredProducts";
import ProductCard from "../../components/product/ProductCard";
import CartConfirmationModal from "../../components/modal/CartConfirmationModal";
import classNames from "classnames";
import { useCarts } from "../../hooks/useCarts";
import Slider from "react-slick";

const Home = () => {
  const { categories, setCategory, filteredProducts, selectedCategory } =
    useFilteredProducts();
  const {
    isModalOpen,
    handleAddToCart,
    handleCheckout,
    handleContinueShopping,
  } = useCarts();

  const [visibleProducts, setVisibleProducts] = useState(8); // Number of products to display initially

  const handleShowMore = () => {
    if (visibleProducts >= filteredProducts.length) {
      setVisibleProducts(8);
    } else {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const showMoreButtonVisible =
    selectedCategory === "Todos" || filteredProducts.length > visibleProducts;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Produtos de Informática High-End</h1>
      </div>
      <div className="flex flex-wrap justify-start">
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
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.slice(0, visibleProducts).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
        <div className="sm:hidden w-full">
          <Slider {...settings}>
            {filteredProducts.map((product) => (
              <div key={product.id} className="p-2">
                <ProductCard
                  product={product}
                  onAddToCart={() => handleAddToCart(product)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {showMoreButtonVisible && (
        <div className="hidden sm:flex justify-center mt-4">
          <button
            onClick={handleShowMore}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
          >
            {visibleProducts >= filteredProducts.length
              ? "Ver Menos"
              : "Ver Mais"}
          </button>
        </div>
      )}
      <CartConfirmationModal
        isOpen={isModalOpen}
        onClose={handleContinueShopping}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Home;
