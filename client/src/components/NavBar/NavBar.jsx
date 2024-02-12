import {Link} from "react-router-dom";
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
                        <Link to="/" activeClassName="active" className="nav-link">HOME</Link>
                    </li >
                    <li className="links">
                        <Link to="/services" activeClassName="active" className="nav-link">SERVICES</Link>
                    </li>
                    <li className="links">
                        <Link to="/about" activeClassName="active" className="nav-link">ABOUT</Link>
                    </li>
                    <li className="links">
                        <Link to="/contact" activeClassName="active" className="nav-link">CONTACT</Link>
                    </li>   
                    <li className="links">
                            <Link to="/login" ><button className = "ed-register" type="button">LOGIN / REGISTER</button></Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default NavBar
