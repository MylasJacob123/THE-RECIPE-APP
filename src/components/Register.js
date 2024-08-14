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
      <h1 className="register-HEADING">Register</h1>
      <form className="register-form">
        <div className="fieldset-register">
          <label className="register-label">Username</label>
          <br />
          <input
            className="register-input"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="fieldset-register">
          <label className="register-label">Email</label>
          <br />
          <input
            className="register-input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="fieldset-register">
          <label className="register-label">Password</label>
          <br />
          <input
            className="register-input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="register-btn" onClick={goToHome}>
          Register
        </button>
      </form>
      <p className="outer-message">
        Already have an account? Then{" "}
        <span className="to-register-click" onClick={goToLogin}>
          click here
        </span>
        .
      </p>
    </div>
  );
}

export default Register;
