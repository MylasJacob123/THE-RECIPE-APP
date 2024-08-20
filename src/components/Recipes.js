import React, { useState, useEffect } from "react";
import "./Recipes.css";
import { useNavigate, useLocation } from "react-router-dom";
import Search from "./Search";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./db/DB.json");
        const data = await response.json();
        setRecipes(data.recipes);

        if (location.state?.category) {
          const filtered = data.recipes.filter(
            (recipe) =>
              recipe.category &&
              recipe.category.toLowerCase() ===
              location.state.category.toLowerCase()
          );
          setFilteredRecipes(filtered);
        } else {
          setFilteredRecipes(data.recipes);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [location.state?.category]);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = recipes.filter(
      (recipe) =>
        (recipe.name && recipe.name.toLowerCase().includes(lowerCaseQuery)) ||
        (recipe.category && recipe.category.toLowerCase().includes(lowerCaseQuery))
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div className="recipes-body">
      <div className="search">
        <Search onSearch={handleSearch} />
      </div>
      <div className="recipe-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <div
              key={index}
              className="card"
              onClick={() => {
                navigate("/details", { state: recipe });
              }}
            >
              <h2>{recipe.category}</h2>
              <h2>{recipe.name}</h2>
              <img
                src={recipe.image}
                alt={recipe.name}
                style={{ width: "100%", maxWidth: "400px", height: "auto" }}
              />
              <h3>Ingredients</h3>
              <ul className="ingredients">
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <h3>Directions</h3>
              <ol>
                {recipe.directions.map((direction, i) => (
                  <li key={i}>{direction}</li>
                ))}
              </ol>
              <p>
                <strong>Prep Time:</strong> {recipe.prep}
              </p>
              <p>
                <strong>Cook Time:</strong> {recipe.cook}
              </p>
              <p>
                <strong>Serves:</strong> {recipe.serves}
              </p>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}

export default Recipes;
