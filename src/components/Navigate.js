import React from "react";
import { Link } from "react-router-dom";
import "./Navigate.css";

function Navigate() {
  return (
    <div className="navigation">
      <nav className="navbar">
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/Recipes">Recipes</Link>
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
