import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
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
    } else if (!/^[A-Za-z][A-Za-z0-9]{4,13}[!@#$%^&*]{2,}$/.test(username)) {
      alert("Invalid username");
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
      alert(
        "Password must contain at least one digit and one special character"
      );
      return false;
    }

    return true;
  };

  const navigate = useNavigate();

  const goToHome = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/");
    }
  };

  const goToLogin = () => {
    navigate("/Login");
  };

  return (
    <div className="register">
      <div class="vid">
        <video className="logo-video-gif" autoPlay muted loop>
          <source
            src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/meal-8820888-7140050.mp4"
            type="video/mp4"
          ></source>
          Your browser does not support the video tag.
        </video>
      </div>
      <h3 className="register-text">COOKING WITH LEPS</h3>

      <form className="register-form">
        <h1 className="register-HEADING">Register</h1>
        <div className="fieldset-register">
          <input
            className="register-input"
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="fieldset-register">
          <input
            className="register-input"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="fieldset-register">
          <input
            className="register-input"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="register-btn" onClick={goToHome}>
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
