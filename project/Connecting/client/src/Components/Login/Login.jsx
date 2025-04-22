import React, { useState } from "react";
import logo from "../../assets/logo.PNG";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        const { token, user } = data;
      
        localStorage.setItem("token", token); 
        localStorage.setItem("isAdmin", user.isAdmin);
      
        if (user.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/user", {
            state: {
              companyName: data.user.companyName,
              personName: data.user.personName,
              email: data.user.email,
            },
          });
        }
      }
       else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Try again.");
    }
  };
  return (
    <div className="container">
      <div className="title">
        <img
          src={logo}
          style={{
            width: 150,
            height: 80,
            borderRadius: "50%",
            cursor: "pointer",
          }}
          alt=""
        />
        <h2>Log-in to your account</h2>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="email-div">
            <FaUser className="icon" />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              placeholder="E-mail address"
            />
          </div>
          <div className="password-div">
            <FaLock className="icon" />

            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              placeholder="Password"
            />
          </div>
          <div className="submit">
            <button type="submit">Login</button>
          </div>
          <div>
            
            <p className="signup-text"> Don't have an account? 
              <Link to="/getStarted">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
