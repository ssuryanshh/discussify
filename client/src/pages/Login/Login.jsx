import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [isLoginMode, setIsLoginMode] = useState(true); // Default to login mode
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "", // Added for registration
  });
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const url = isLoginMode
        ? "https://edunity.onrender.com/api/auth/login" // Replace with your backend login URL
        : "https://edunity.onrender.com/api/auth/register"; // Replace with your backend registration URL

      const response = await axios.post(url, formData);

      if (response.status === 200 || response.status === 201) {
        // Handle successful login or registration
        if (isLoginMode) {
          // Login successful! Redirect to user profile or dashboard
          navigate("/user", { replace: true });
        } else {
          // Registration successful! Optionally, redirect to login or show a success message
          alert("Registration successful! Please log in to continue.");
          setIsLoginMode(true); // Switch back to login mode
        }
      } else {
        setErrorMessage(
          response.data.error || "An error occurred. Please try again later."
        ); // Use error message from response if available
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Please try again later."); // Set generic error message
    }
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode); // Toggle login/register mode
    setFormData({ email: "", password: "", username: "" }); // Clear form data on mode switch
    setErrorMessage(""); // Clear error message on mode switch
  };

  return (
    <div className="login">
      <div className="wrapper">
        <div className="card-switch">
          <label className="switch">
            <input
              type="checkbox"
              className="toggle"
              checked={isLoginMode} // Set checkbox state based on mode
              onChange={toggleMode}
            />
            <span className="slider"></span>
            <span className="card-side">
              {isLoginMode ? "Login" : "Register"}
            </span>
          </label>
          <div className="flip-card">
            <div className="flip-card__inner">
              <div className="flip-card__front">
                <div className="title">
                  {isLoginMode ? "Log in" : "Sign Up"}
                </div>
                <form className="flip-card__form" onSubmit={handleFormSubmit}>
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    autoComplete="off"
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={formData.password}
                    autoComplete="current-password"
                    onChange={handleInputChange}
                    required
                  />
                  {isLoginMode ? null : ( // Only display username field for registration
                    <input
                      className="flip-card__input"
                      name="username"
                      placeholder="Username"
                      type="text"
                      value={formData.username}
                      autoComplete="username"
                      onChange={handleInputChange}
                      required
                    />
                  )}
                  <button className="flip-card__btn" type="submit">
                    {isLoginMode ? "Let's go!" : "Confirm!"}
                  </button>
                  {/* Display error message if available */}
                  {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                  )}
                </form>
                {!isLoginMode && ( // Show switch back to login option during registration
                  <p className="switch-text">
                    Already have an account?{" "}
                    <a href="#" onClick={() => setIsLoginMode(true)}>
                      Log in
                    </a>
                  </p>
                )}

                {isLoginMode && ( // Show switch to registration option during login
                  <p className="switch-text">
                    New user?{" "}
                    <a href="#" onClick={() => setIsLoginMode(false)}>
                      Sign Up
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
