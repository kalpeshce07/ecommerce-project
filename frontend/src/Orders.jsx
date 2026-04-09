import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function Orders() {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const API_URL = "https://localhost:7001/api/orders";

  useEffect(() => {
    // 🔒 If not logged in → redirect
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchOrders = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        // 🔥 If token expired or invalid
        if (response.status === 401) {
          alert("Session expired. Please login again.");
          logout();
          navigate("/login");
          return;
        }

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [token, navigate, logout]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "15px",
            }}
          >
            <h4>Order ID: {order.id}</h4>
            <p>
              <strong>Name:</strong> {order.customerName}
            </p>
            <p>
              <strong>Address:</strong> {order.address}
            </p>
            <p>
              <strong>Total:</strong> ₹{order.totalAmount}
            </p>

            <h5>Items:</h5>
            <ul>
              {order.orderItems.map((item, index) => (
                <li key={index}>
                  {item.productName} × {item.quantity} = ₹
                  {item.price * item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;