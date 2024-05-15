import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Orders from "./pages/Orders";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import Navbar from "./components/navBar/NavBar";
import Cart from "./pages/Cart.";

const App = () => {
  return (
    <Router>
      <CartProvider>
        <OrderProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </OrderProvider>
      </CartProvider>
    </Router>
  );
};

export default App;
