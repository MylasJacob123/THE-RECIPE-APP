import React, { useState, useEffect } from "react";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./db/DB.json");
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <div key={index} style={{ marginBottom: "40px" }}>
            <h2>{recipe.category}</h2>
            <h2>{recipe.name}</h2>
            <img
              src={recipe.image}
              alt={recipe.name}
              style={{ width: "100%", maxWidth: "400px", height: "auto" }}
            />
            <h3>Ingredients</h3>
            <ul>
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
            <p><strong>Prep Time:</strong> {recipe.prep}</p>
            <p><strong>Cook Time:</strong> {recipe.cook}</p>
            <p><strong>Serves:</strong> {recipe.serves}</p>
          </div>
        ))
      ) : (
        <p>Loading recipes...</p>
      )}
    </div>
  );
}

export default Recipes;
