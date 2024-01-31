import {NavLink} from "react-router-dom";
import "../NavBar/NavBar.css";
import React from 'react';

function NavBar() {
  return (
    <header>
        <div className="container">
            <div className="logo-brand">
                <NavLink to = "/">edUnity</NavLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Register">Register</NavLink>
                    </li>
                
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default NavBar
