import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
      Swal.fire({
        icon: "warning",
        title: "Invalid Username",
        text: "Please enter your username.",
      });
      return false;
    } else if (username.length < 6) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Username",
        text: "Username must be at least 6 characters long.",
      });
      return false;
    }

    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Email",
        text: "Please enter your email.",
      });
      return false;
    } else if (!validateEmail(email)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return false;
    }

    if (!password) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Password",
        text: "Please enter your password.",
      });
      return false;
    } else if (password.length < 6) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Password",
        text: "Password must be at least 6 characters long.",
      });
      return false;
    }

    return true;
  };

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (validate()) {
      const newUser = {
        username,
        email,
        password,
      };

      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "Your account has been created!",
      }).then(() => {
        loggedIn();
        navigate("/");
      });
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
            required
          />
        </div>
        <div className="fieldset-register">
          <input
            className="register-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="fieldset-register">
          <input
            className="register-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
