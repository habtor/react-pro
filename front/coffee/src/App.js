import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartItemsProvider } from "./components/cartContext";
import CoffeeTypes from "./components/CoffeeTypes";

function App() {
  return (
    <Router>
      <div class="app-container">
        <div class="content-container">
          <CartItemsProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/mycart/" element={<Cart />} />
              <Route path="/types" element={<CoffeeTypes />} />
            </Routes>
          </CartItemsProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
