import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Button from "./Button.jsx";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white px-6 py-4 shadow-md">
      <h1 className="text-xl font-bold flex items-center gap-2">🛒 <span>Shop</span></h1>
      <div className="flex items-center gap-6 text-sm">
        
      <Link  to="/" className="hover:text-gray-300">Home</Link>
      <Link to="/orders" className="hover:text-gray-300">Orders</Link>

      {user ? (
        <>
          <span>Welcome, {user.email}</span>
          {/* <button onClick={logout}>Logout</button> */}
          <Button variant="primary">Logout</Button>
        </>
      ) : (
        <>
        <Link to="/register" className="hover:text-gray-300">Register</Link>
        <Link to="/login" className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600">Login</Link>
        </>
      )}
      </div>
    </nav>
  );
}

export default Navbar;