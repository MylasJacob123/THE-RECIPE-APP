import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigate";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Recipes from "./components/Recipes";
import Details from "./components/Details";
import AddRecipes from "./components/AddNewRecipes";
import Update from "./components/UpdateRecipe"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/details" element={<Details/>} />
          <Route path="/add" element={<AddRecipes/>} />
          <Route path="/update" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
