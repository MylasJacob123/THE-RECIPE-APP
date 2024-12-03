import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
      Swal.fire({
        icon: "warning",
        title: "Missing Email",
        text: "Please enter your email.",
      });
      return false;
    } else if (!validateEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return false;
    }

    if (!password) {
      Swal.fire({
        icon: "warning",
        title: "Missing Password",
        text: "Please enter your password.",
      });
      return false;
    }

    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome back, ${user.username}!`,
        }).then(() => {
          localStorage.setItem("user", JSON.stringify(user));
          loggedIn();
          navigate("/");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "The email or password you entered is incorrect.",
        });
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
