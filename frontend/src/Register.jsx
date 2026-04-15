import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button.jsx";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API_URL = "https://localhost:7001/api/auth/register";
  const navigate=useNavigate();
  const handleRegister =async (e) => {
    e.preventDefault();
    const response=await fetch(API_URL,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name,
            email,
            password
        })
    })
    if(response.ok)
    {
        alert("Registration Successful.");
        navigate("/login");
    }
    else
    {
        const error=await response.text();
        alert(error);
    }
  };
  return(<div style={{padding:"20px"}}>
    <h2>Register</h2>
    <form onSubmit={handleRegister}>
        <div>
            <div style={{marginTop:"10px"}}>
                <label htmlFor="name">Name</label><br/>
                <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}></input>                
            </div>
            <div style={{marginTop:"10px"}}>
                <label htmlFor="email">email</label><br/>
                <input type="text" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div style={{marginTop:"10px"}}>
                <label htmlFor="email">password</label><br/>
                <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <div>
                {/* <button type="submit">Register</button> */}
                <Button variant="primary">Register</Button>

            </div>

        </div>
    </form>
  </div>);
};
export default Register;
