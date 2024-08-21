import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigate.css";

function Navigate({ isLogged, loggedOut }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    loggedOut(); // Update the logged-in state in the parent component
    navigate("/");
  };

  return (
    <div className="navigation">
      <nav className="navbar">
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          {isLogged ? (
            <>
              <li className="username">
                Welcome, {user?.username}!
              </li>
              <li>
                <button className="logout" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/add">Add New Recipes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigate;
