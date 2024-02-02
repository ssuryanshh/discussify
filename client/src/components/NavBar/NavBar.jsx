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
                        <NavLink to="/" activeClassName="active" className="nav-link">HOME</NavLink>
                    </li >
                    <li className="links">
                        <NavLink to="/services" activeClassName="active" className="nav-link">SERVICES</NavLink>
                    </li>
                    <li className="links">
                        <NavLink to="/about" activeClassName="active" className="nav-link">ABOUT</NavLink>
                    </li>
                    <li className="links">
                        <NavLink to="/contact" activeClassName="active" className="nav-link">CONTACT</NavLink>
                    </li>   
                    <li className="links">
                            <NavLink to="/login" ><button className = "ed-register" type="button">LOGIN / REGISTER</button></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default NavBar
