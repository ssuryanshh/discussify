import {NavLink} from "react-router-dom";
import "../NavBar/NavBar.css";
import logo from "../NavBar/brand.png"
import React from 'react';

function NavBar() {
  return (
    <header>
        <div className="container">
            <div className="logo-brand">
                <NavLink><img src={logo} alt="logo" className="logo"></img></NavLink>
                </div>
            <nav>
                <ul className="nav-links-container">
                    <li>
                        <NavLink to="/" activeClassName="active" className="nav-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" activeClassName="active" className="nav-link">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active" className="nav-link">Contact</NavLink>
                    </li>   
                    <li>
                            <NavLink to="/login" activeClassName="active" className="user" >Login/Register</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
        <hr className="line"/>
    </header>
  )
}

export default NavBar
