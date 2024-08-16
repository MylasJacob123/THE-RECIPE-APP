import React from "react";
import "./Details.css";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const recipe = location.state;

  return (
    <div class="detail-display">
      <div className="detail-top">
        <h2 className="colour">{recipe.category}</h2>
        <h2>{recipe.name}</h2>
        <img
          src={recipe.image}
          alt={recipe.name}
          style={{
            width: "100%",
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </div>
      <div class="main-directions">
        <div className="ingredients">
          <h3>Ingredients</h3>
          <ul className="details-list-info">
            {recipe.ingredients.map((ingredient, i) => (
              <li className="details-list" key={i}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div class="ingredients">
          <h3 className="directions">Directions</h3>
          <ol className="details-info">
            {recipe.directions.map((direction, i) => (
              <li key={i}>{direction}</li>
            ))}
          </ol>
        </div>
      </div>
      <div class="bottom">
        <p>
          <strong>Prep Time:</strong> <span>{recipe.prep}</span>{" "}
        </p>
        <p>
          <strong>Cook Time:</strong> <span>{recipe.cook}</span>{" "}
        </p>
        <p>
          <strong>Serves:</strong> <span>{recipe.serves}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Details;
