import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register({ loggedIn }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validate = () => {
    if (!username) {
      alert("Please enter your username");
      return false;
    } else if (!/^[A-Z][a-zA-Z0-9]*\d+$/g.test(username)) {
      alert("Invalid username. It must start with a capital letter and contain at least one number.");
      return false;
    }

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

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (validate()) {
      const user = {
        username,
        email,
        password,
      };
      localStorage.setItem("user", JSON.stringify(user));
      loggedIn(); // Update the logged-in state
      navigate("/");
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="register">
      <div className="vid">
        <video className="logo-video-gif" autoPlay muted loop>
          <source
            src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/meal-8820888-7140050.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <h3 className="register-text">COOKING WITH LEPS</h3>
      <form className="register-form">
        <h1 className="register-heading">Register</h1>
        <div className="fieldset-register">
          <input
            className="register-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="fieldset-register">
          <input
            className="register-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="fieldset-register">
          <input
            className="register-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="register-btn" onClick={handleRegister}>
          Register
        </button>
        <div>
          <p className="outer-message">
            Already have an account? Then{" "}
            <span className="to-register-click" onClick={goToLogin}>
              click here
            </span>
            .
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
