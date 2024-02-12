import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./Login.css";
import axios from 'axios';
import { NavLink } from "react-router-dom";



function Login() {
 // const  navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });




  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://edunity.onrender.com/api/auth/login", loginData);
      if (response.status === 200) {
        alert("Login success");
        navigate('/user');
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.log("Login Error", error.message);
    }
  };
  

  const handleRegister = async () => {
    try {
      const response = await axios.post("https://edunity.onrender.com/api/auth/register", registerData);
      if (response.status === 200) {
        alert("registration successs")
      } else {
        alert("Login failed");
      }} catch (error) {
      console.log("Register Error", error.message);
    }
  };



  return (
    <div className="login">
      <div className="wrapper">
        <div className="card-switch">
          <label className="switch">
            <input type="checkbox" className="toggle"></input>
            <span className="slider"></span>
            <span className="card-side"></span>
            <div className="flip-card__inner">
              <div className="flip-card__front">
                <div className="title">Log in</div>
                <form className="flip-card__form" action="">
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={loginData.email}
                    autoComplete="off"
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                  ></input>
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={loginData.password}
                    autoComplete="current-password"
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                  ></input>
                  {/* <button className="flip-card__btn" onClick={handleLogin}>
                    Let's go!
                  </button> */}

                  <NavLink to="/user">
                    <button className="flip-card__btn" variant="contained">
                      Let's go!
                    </button>
                  </NavLink>

                </form>
              </div>
              <div className="flip-card__back">
                <div className="title">Sign up</div>
                <form className="flip-card__form" action="">
                  <input
                    className="flip-card__input"
                    placeholder="username"
                    type="text"
                    value={registerData.username}
                    autoComplete="username"
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        username: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={registerData.email}
                    autoComplete="abc123@gmail.com"
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        email: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={registerData.password}
                    autoComplete="new-password"
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        password: e.target.value,
                      })
                    }
                  ></input>
                    <button className="flip-card__btn" onClick={handleRegister}>
                      Confirm!
                    </button>
                </form>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
export default Login;
