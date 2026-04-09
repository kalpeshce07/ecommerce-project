import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, addToCart, removeFromCart } =
    useContext(CartContext);

  if (cartItems.length === 0) {
    return <h2 style={{ padding: "20px" }}>Your cart is empty</h2>;
  }

  const total = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px"
            
          }}
        >
          <h4>{item.name}</h4>
          <p>Price: ₹{item.price}</p>

          <div>
            <button onClick={() => removeFromCart(item.id)}>
              -
            </button>

            <span style={{ margin: "0 10px" }}>
              {item.quantity}
            </span>

            <button onClick={() => addToCart(item)}>
              +
            </button>
          </div>

          <p>
            Subtotal: ₹{item.price * item.quantity}
          </p>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
}

export default Cart;