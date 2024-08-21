import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login({ loggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validate = () => {
    if (!email) {
      alert("Please enter your email");
      return false;
    } else if (!validateEmail(email)) {
      alert("Invalid email");
      return false;
    }

    if (!password) {
      alert("Please enter your password");
      return false;
    } else if (!/(?=.*\d)(?=.*[!@#$%^&*])/.test(password)) {
      alert("Password must contain at least one digit and one special character");
      return false;
    }

    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert("Login successful!");
        loggedIn(); // Update logged-in state
        navigate("/");
      } else {
        alert("Invalid email or password");
      }
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login">
      <div className="video">
        <video className="logo-video" autoPlay muted loop>
          <source
            src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/meal-8820888-7140050.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <h3 className="login-text">COOKING WITH LEPS</h3>
      <form className="login-form">
        <h1 className="login-heading">Login</h1>
        <div className="fieldset-login">
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="fieldset-login">
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
        <div>
          <p className="outer-message">
            Not registered yet? Then{" "}
            <span className="to-register-click" onClick={goToRegister}>
              click here
            </span>
            .
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
