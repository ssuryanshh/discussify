import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./Login.css";
import axios from 'axios';
function Login() {
  const  navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/auth/login", loginData);
  
      if (response.status === 200) {
        alert("login successs")
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.log("Login Error", error.message);
    }
  };
  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/auth/register", registerData);
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
      <div class="wrapper">
        <div class="card-switch">
          <label class="switch">
            <input type="checkbox" class="toggle"></input>
            <span class="slider"></span>
            <span class="card-side"></span>
            <div class="flip-card__inner">
              <div class="flip-card__front">
                <div class="title">Log in</div>
                <form class="flip-card__form" action="">
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
                  <button className="flip-card__btn" onClick={handleLogin}>
                    Let's go!
                  </button>
                </form>
              </div>
              <div class="flip-card__back">
                <div class="title">Sign up</div>
                <form class="flip-card__form" action="">
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
