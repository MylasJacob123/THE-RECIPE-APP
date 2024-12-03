import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Navigate.css";

function Navigate({ isLogged, loggedOut }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      text: "You will need to log in again to access your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, log out",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user");
        loggedOut();
        Swal.fire("Logged Out", "You have been logged out successfully.", "success").then(() => {
          navigate("/");
        });
      }
    });
  };

  return (
    <div className="navigation">
      <nav className="navbar">
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          {isLogged ? (
            <>
              <li className="username">Welcome, {user?.username}!</li>
              <li>
                <Link to="/add">Add New Recipes</Link>
              </li>
              <li>
                <button className="logout" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navigate;
