import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Login from "./Components/Login/Login.jsx";
import GetStarted from "./Components/Getstarted/GetStarted.jsx";
import Footer from "./Components/footer/footer.jsx";
import User from "./Components/User/User.jsx";
import Admin from "./Components/Admin/Admin.jsx";
import Drivers from "./Components/Drivers/Drivers.jsx";
import "./App.css"
const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Navbar /> {/* Navbar stays on all screens */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/getStarted" element={<GetStarted />} />
            <Route path="/user" element={<User />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/drivers" element={<Drivers />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
