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
import PrivateRoute from "./components/PrivateRoute"; 
import NotFound from "./components/notAPage";

function App() {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem("user"));

  const loggedOut = () => {
    setIsLogged(false);
  };

  const loggedIn = () => {
    setIsLogged(true);
  };

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
          <Route 
            path="/recipes" 
            element={<PrivateRoute isAuthenticated={isLogged}><Recipes /></PrivateRoute>} 
          />
          <Route 
            path="/details" 
            element={<PrivateRoute isAuthenticated={isLogged}><Details /></PrivateRoute>} 
          />
          <Route 
            path="/add" 
            element={<PrivateRoute isAuthenticated={isLogged}><AddRecipes /></PrivateRoute>} 
          />
          <Route 
            path="/update" 
            element={<PrivateRoute isAuthenticated={isLogged}><Update /></PrivateRoute>} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
