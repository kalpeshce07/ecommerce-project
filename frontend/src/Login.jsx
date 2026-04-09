import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "./context/AuthContext";
function Login() {
  const {login}=useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("https://localhost:7001/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const data = await response.json();
      // localStorage.setItem("token", data.token);
      login(data.token);
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div style={{ marginTop: "10px" }}>
          <label htmlFor="email">Password</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div style={{ marginTop: "15px" }}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
