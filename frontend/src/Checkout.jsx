import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button.jsx";

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

  const handlePlaceOrder = async (e) => {
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
      const response = await fetch(API_URL, {
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
    <div>
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Shipping Details</h3>
          <form onSubmit={handlePlaceOrder} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Full Name:
              </label>
              <br />
              <input
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 
              focus:ring-blue-400"
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
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="3"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

           <Button variant="success" >Place Order</Button>
              
            
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item.id}  className="flex justify-between mb-2">
              {item.name} × {item.quantity} = ₹{item.price * item.quantity}
            </div>
          ))}
          <hr className="my-3"/>
          <div className="flex justify-between font-semibold">
            <span>Total:</span>
            <span>₹{total}</span>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
