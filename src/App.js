import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigate";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Recipes from "./components/Recipes";
import Details from "./components/Details";
import AddRecipes from "./components/AddNewRecipes";
import Update from "./components/UpdateRecipe";

function App() {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem("user"));

  const loggedOut = () => {
    setIsLogged(false);
  };

  const loggedIn = () => {
    setIsLogged(true);
  };

  // Check login status on component mount
  useEffect(() => {
    setIsLogged(!!localStorage.getItem("user"));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation isLogged={isLogged} loggedOut={loggedOut} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register loggedIn={loggedIn} />} />
          <Route path="/login" element={<Login loggedIn={loggedIn} />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/details" element={<Details />} />
          <Route path="/add" element={<AddRecipes />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
