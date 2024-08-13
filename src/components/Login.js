import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    }
  return (
    <div>
      <form className="login-form">
        <div class="fieldset-login">
            <label className="login-label">Email</label>
            <br />
            <input className="login-input" type="email" name="email" />
        </div>

        <div class="fieldset-login">
            <label className="login-label">Password</label>
            <br />
            <input className="login-input" type="password" name="password" />
        </div>

        <button className="login-btn" onClick={goToHome}>Login</button>
      </form>
    </div>
  );
}
export default Login;
