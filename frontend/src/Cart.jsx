import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold text-gray-600">🛒 Your cart is empty</h2>
        <Link className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" to="/">Go Shopping</Link>
      </div>
    );
  }

  const total = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
            key={item.id}
          >
            <h4 className="font-semibold">{item.name}</h4>
            <p className="text-gray-500">Price: ₹{item.price}</p>

            <div className="flex items-center gap-3">
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={() => removeFromCart(item.id)}
              >
                -
              </button>

              <span className="font-semibold">{item.quantity}</span>

              <button
                className="bg-green-500 px-3 py-1 rounded hover:bg-gray-600"
                onClick={() => addToCart(item)}
              >
                +
              </button>
            </div>

            <p>Subtotal: ₹{item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-white p-4 rounded-lg shadow flex justify-between items-center">
        <h3 className="text-lg font-semibold">Total: ₹{total}</h3>
        <Link
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          to="/checkout"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
