import React from "react";
import "./Details.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Details() {
  const location = useLocation();
  const recipe = location.state;
  const navigate = useNavigate();

  const goToUpdateRecipe = () => {
    navigate("/update", { state: recipe });
  };

  const deleteRecipe = () => {
    axios.delete(`http://localhost:3000/recipes/${recipe.id}`)
      .then(() => {
        console.log("Recipe deleted");
        navigate("/recipes");
      })
      .catch((error) => {
        console.error("Error deleting recipe:", error);
      });
  };

  return (
    <div className="detail-display">
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
      <div className="main-directions">
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
        <div className="ingredients">
          <h3 className="directions">Directions</h3>
          <ol className="details-info">
            {recipe.directions.map((direction, i) => (
              <li key={i}>{direction}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className="footer">
        <div className="bottom">
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
        <div className="button-section">
          <button className="update-btn" onClick={goToUpdateRecipe}>Update</button>
          <button className="delete-btn" onClick={deleteRecipe}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
