import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import { Routes,Route } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import Cart from "./Cart";
import NavBar from "./components/NavBar";
import Checkout from "./Checkout";
import Orders from "./Orders";
import Login from "./Login";
import Register from "./Register";
function App() {
  const {cartItems}=useContext(CartContext);
  return (
    <div className="bg-gray-100 min-h-screen">    
    <NavBar />
      <Routes>
        <Route path="/" element={<Products/>}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

      </Routes>
    </div>
  );
}
export default App;
