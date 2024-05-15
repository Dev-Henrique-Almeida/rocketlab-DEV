import { useParams } from "react-router-dom";
import { products } from "../assets/data/Database";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

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
          <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
