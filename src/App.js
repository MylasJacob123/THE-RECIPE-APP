import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigate";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Recipes from "./components/Recipes";
// import FetchedData from "./components/Fetch.js";


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
        </Routes>
      </BrowserRouter>
      <div>
        {/* <FetchedData /> */}
      </div>
    </div>
  );
}

export default App;
