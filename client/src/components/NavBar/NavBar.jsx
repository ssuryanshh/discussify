import {NavLink} from "react-router-dom";
import "./NavBar.css";
import React from 'react';
import logo from "./brand.png"

function NavBar() {
  return (
    <header>
        <div  className="navbar">
            <div className="logo">
                <img src={logo} className="brand"></img>
            </div>
            <div></div>
            <nav>
            <ul className="nav-links-container">
                    <li className="links">
                        <NavLink to="/" activeClassName="active" className="nav-link">Home</NavLink>
                    </li >
                    <li className="links">
                        <NavLink to="/services" activeClassName="active" className="nav-link">Services</NavLink>
                    </li>
                    <li className="links">
                        <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
                    </li>
                    <li className="links">
                        <NavLink to="/contact" activeClassName="active" className="nav-link">Contact</NavLink>
                    </li>   
                    <li className="links">
                            <NavLink to="/login" ><button className = "ed-register" type="button">Login / Register</button></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default NavBar
