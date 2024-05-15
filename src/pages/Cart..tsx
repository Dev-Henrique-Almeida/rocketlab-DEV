// src/pages/Cart.tsx
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { state, dispatch } = useCart();

  const total = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Carrinho de Compras</h1>
      {state.items.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          {state.items.map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <div className="flex">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover mr-4"
                />
                <div>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p>Quantidade: {item.quantity}</p>
                  <p>Preço: ${item.price.toFixed(2)}</p>
                </div>
              </div>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", productId: item.id })
                }
                className="p-2 bg-red-500 text-white rounded"
              >
                Remover
              </button>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button
              onClick={() => dispatch({ type: "CLEAR_CART" })}
              className="mt-2 p-2 bg-blue-500 text-white rounded"
            >
              Limpar Carrinho
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
