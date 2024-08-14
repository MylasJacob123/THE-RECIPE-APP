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
      alert("Password must contain at least one digit and one special character");
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
      <h1 className="login-HEADING">Login</h1>
      <form className="login-form">
        <div className="fieldset-login">
          <label className="login-label">Email</label>
          <br />
          <input
            className="login-input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="fieldset-login">
          <label className="login-label">Password</label>
          <br />
          <input
            className="login-input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" onClick={goToHome}>
          Login
        </button>
      </form>
      <p className="outer-message">
        Not registered yet? Then{" "}
        <span className="to-register-click" onClick={goToRegister}>
          click here
        </span>
        .
      </p>
    </div>
  );
}

export default Login;
