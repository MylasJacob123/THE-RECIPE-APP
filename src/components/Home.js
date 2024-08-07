import React from "react";
import Recipes from "../DB/db.json";

function Home() {
  return (
    <div style={{margin: "20px" }}>
      <h1>Great Rice Diner Recipes</h1>
      {Recipes.recipes.map((recipe) => (
        <div style={{ border: "1px solid #ddd", padding: "20px", margin: "20px 0", borderRadius: "10px" }}>
          <h2>{recipe.name}</h2>
          <img src={recipe.image} alt={recipe.name} style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "10px" }} />
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <h3>Directions:</h3>
          <ol>
            {recipe.directions.map((direction) => (
              <li>{direction}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

export default Home;
