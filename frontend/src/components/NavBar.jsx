import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/orders">Orders</Link> |{" "}

      {user ? (
        <>
          <span>Welcome, {user.email}</span>{" "}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
        <Link to="/register">Register</Link> |{" "}
        <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;