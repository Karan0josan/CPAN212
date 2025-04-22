import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.PNG'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
    
    <div className='navbar' >
      <Link to="/"><img src={logo} style={{width:150, height:80, borderRadius:'50%', cursor: "pointer"}}alt="" /></Link>
        
        

       
      <ul className="nav-menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/drivers">Drivers</Link></li>
      <li><Link to="/login">Log in</Link></li>
      </ul>
      <div className="get-started"><Link to="/getStarted">Get Started</Link></div>
   
    </div>
    </nav>

  )
}

export default Navbar
