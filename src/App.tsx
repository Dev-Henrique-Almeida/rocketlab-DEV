import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import Navbar from "./components/navBar/NavBar";
import Cart from "./pages/Cart/Cart.";
import ProductDetails from "./pages/Details/ProductDetails";
import Orders from "./pages/Orders/Orders";
import Footer from "./components/footer/Footer";

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
          {/*   <Footer /> */}
        </OrderProvider>
      </CartProvider>
    </Router>
  );
};

export default App;
