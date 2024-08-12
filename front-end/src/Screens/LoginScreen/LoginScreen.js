import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginScreen.css";
import config from "../../config";
import { toast } from "react-toastify";

const { BASE_API_URL } = config;

function LoginScreen({ setUserInfo }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");
  const [isMentor, setIsMentor] = useState(false);
  const [areaOfExpertise, setAreaOfExpertise] = useState("");
  const checkboxRef = useRef(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleIsMentorChange = (e) => {
    setIsMentor(e.target.value === "true");
  };

  const handleAreaOfExpertiseChange = (e) => {
    setAreaOfExpertise(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const ENDPOINT = `${BASE_API_URL}/auth/login`;
    const payload = {
      email: email,
      password: password,
    };

    const OPTION = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    try {
      let res = await fetch(ENDPOINT, OPTION);
      const data = await res.json();
      if (data.success) {
        const { userId, username, category, token } = data;
        setUserInfo({
          isSignin: true,
          userId: userId,
          username: username,
          category: category,
          token: token,
        });
        toast.success("Successfully logged in!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/talksphere");
      } else {
        toast.error("Login Failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const ENDPOINT = `${BASE_API_URL}/auth/register`;
    const payload = {
      name: name,
      username: username,
      email: email,
      password: password,
      category: category,
      isMentor: isMentor,
      areaOfExpertise: areaOfExpertise,
    };
    const OPTION = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    try {
      let res = await fetch(ENDPOINT, OPTION);
      res = await res.json();
      if (res.success) {
        toast.success("Successfully registered! Please Sign in to continue!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log("register successful");
        checkboxRef.current.checked = false;
      } else {
        toast.error("Signup failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="login-screen-container">
      <div className="user-container">
        <div className="wrapper">
          <div className="card-switch">
            <label className="switch">
              <input type="checkbox" className="toggle" ref={checkboxRef} />
              <span className="slider"></span>
              <span className="card-side"></span>
              <div className="flip-card__inner">
                <div className="flip-card__front">
                  <div className="title">Log in</div>
                  <form className="flip-card__form" onSubmit={handleLogin}>
                    <input
                      className="flip-card__input"
                      name="email"
                      placeholder="Email"
                      type="email"
                      onChange={handleEmailChange}
                      required
                    />
                    <input
                      className="flip-card__input"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={handlePasswordChange}
                      required
                    />
                    <button className="flip-card__btn">Let's go!</button>
                  </form>
                </div>
                <div className="flip-card__back">
                  <div className="title">Register</div>
                  <form className="flip-card__form" onSubmit={handleSignUp}>
                    <input
                      className="flip-card__input"
                      placeholder="Name"
                      type="text"
                      onChange={handleNameChange}
                      required
                    />
                    <input
                      className="flip-card__input"
                      placeholder="Username"
                      type="text"
                      onChange={handleUsernameChange}
                      required
                    />
                    <input
                      className="flip-card__input"
                      name="email"
                      placeholder="Email"
                      type="email"
                      onChange={handleEmailChange}
                      required
                    />
                    <input
                      className="flip-card__input"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={handlePasswordChange}
                      required
                    />
                    <select
                      className="flip-card__input"
                      placeholder="Select your Category"
                      name="category"
                      onChange={handleCategoryChange}
                    >
                      <option value="" disabled>
                        Select your category
                      </option>
                      <option value="school">School</option>
                      <option value="college">College</option>
                      <option value="professional">Professional</option>
                    </select>
                    <select
                      className="flip-card__input"
                      placeholder="Select your Category"
                      name="isMentor"
                      onChange={handleIsMentorChange}
                    >
                      <option value="">Do you want to Mentor others</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                    <input
                      className="flip-card__input"
                      name="areaOfExpertise"
                      placeholder="Area of Interest"
                      type="text"
                      onChange={handleAreaOfExpertiseChange}
                      required={isMentor}
                    />
                    <button className="flip-card__btn">Confirm!</button>
                  </form>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
