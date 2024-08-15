import React from 'react'

function YourRecipes({recipe}) {
  return (
    <div className="personal-recipes">
        <h2>Personal Recipes</h2>
        {recipe.length > 0 (
          <div key={index} className="card" onClick={() => { navigate("/details", { state: recipe }) }}>
          <h2>{recipe.category}</h2>
          <h2>{recipe.name}</h2>
          <img
            src={recipe.image}
            alt={recipe.name}
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
          />
          <h3>Ingredients</h3>
          <ul className="ingredients">
              <li>{ingredient}</li>
          </ul>
          <h3>Directions</h3>
          <ol>
              <li>{direction}</li>
          </ol>
          <p><strong>Prep Time:</strong> {recipe.prep}</p>
          <p><strong>Cook Time:</strong> {recipe.cook}</p>
          <p><strong>Serves:</strong> {recipe.serves}</p>
        </div>
        )}
      </div>
  )
}
export default YourRecipes;