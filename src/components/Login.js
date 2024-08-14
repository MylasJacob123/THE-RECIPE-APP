import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const goToRegister = () => {
    navigate("/Register");
  };

  return (
    <div className="login">
      <div class="video">
        <video className="logo-video" autoPlay muted loop>
          <source
            src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/meal-8820888-7140050.mp4"
            type="video/mp4"
          ></source>
          Your browser does not support the video tag.
        </video>
      </div>
      <form className="login-form">
      <h1 className="login-HEADING">Login</h1>
        <div className="fieldset-login">
          <br />
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="fieldset-login">
          <br />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" onClick={goToHome}>
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
