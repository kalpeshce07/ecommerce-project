import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const API_URL = "https://localhost:7001/api/orders";

  if (cartItems.length === 0) {
    return <h2 style={{ padding: "20px" }}>Cart is empty</h2>;
  }

  const total = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const handlePlaceOrder =async (e) => {
    e.preventDefault();
    const OrderData = {
      customerName: name,
      address: address,
      totalAmount: total,
      orderItems: cartItems.map((item) => ({
        productId: item.id,
        productName: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
    };
    try {
      const response =await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(OrderData),
      });
      if (response.ok) {
        console.log("Before clear:", cartItems);
        clearCart();
        console.log("After clear called");
        navigate("/");
      }
    } catch (error) {
      console.error("Sorry, unable to placed order", 500);
    }

    alert("Order placed successfully!");

    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>

      <h3>Order Summary</h3>

      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} × {item.quantity} = ₹{item.price * item.quantity}
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <hr />

      <h3>Shipping Details</h3>

      <form onSubmit={handlePlaceOrder}>
        <div>
          <label htmlFor="name">Full Name:</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label htmlFor="address">Address:</label>
          <br />
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: "15px" }}>
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
