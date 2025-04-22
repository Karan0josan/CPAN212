import React, { useState } from "react";
import "./GetStarted.css";
import logo from "../../assets/logo.PNG";
import axios from "axios";

const GetStarted = () => {
  const [personName, setPersonname] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Signed up succesfull")

    try {
      const response = await axios.post("http://localhost:8000/user/register", { personName,companyName,email,password,phoneNumber });
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error("Error sending data:", error);
      setResponseMessage("Error sending data.");
    }
  

    setCompanyName("")
    setPassword("")
    setEmail("")
    setPersonname("")
    setPhoneNumber("")
  };

  return (
    <div className="mainContainer">
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
        <h2>Sign Up</h2>
      </div>
      <div className="form-data">
        <form onSubmit={handleSubmit}>
          <div className="Person-name">
            <input
              type="text"
              value={personName}
              onChange={(e) => setPersonname(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="email">
          
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="E-mail address"
            />
          </div>
          <div className="password">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          </div>
          <div className="company-name">
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
            placeholder="Enter the company name"
          />
          </div>
          <div className="phone-number">
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            placeholder="Enter the phone number"
          />
          </div>


          <div className="submit">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetStarted;
