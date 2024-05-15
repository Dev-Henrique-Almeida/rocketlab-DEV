import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useFilteredProducts } from "../hooks/useFilteredProducts";

const Home = () => {
  const { categories, setCategory, filteredProducts } = useFilteredProducts();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Produtos High-End por Categoria</h1>
      </div>
      <div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className="m-2 p-2 bg-blue-500 text-white rounded"
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
