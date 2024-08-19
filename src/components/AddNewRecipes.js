import React, { useState } from "react";
import "./AddNewRecipes.css";
import axios from "axios";

function AddNewRecipes() {
  const [category, setCategory] = useState("");
  const [foodName, setFoodName] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [serves, setServes] = useState("");
  const [recipe, setRecipe] = useState([]);

  const ingredientsChange = (e) => {
    setIngredients(e.target.value.split("\n"));
  };

  const directionsChange = (e) => {
    setDirections(e.target.value.split("\n"));
  };

  const Add = async () => {
    let newRecipe = {
      category: category,
      foodName: foodName,
      image: image,
      ingredients: ingredients,
      directions: directions,
      prepTime: prepTime,
      cookTime: cookTime,
      serves: serves,
    }

    const response = await axios.post("http://localhost:3000/recipes", newRecipe)
    setRecipe([
      ...recipe,
      response.data
    ])
    window.alert("Submitted successfully!");
  }

  return (
    <div>
      <h1>Add New Recipes</h1>
      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Drink">Drink</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          name="Food Name"
          placeholder="Food Name"
          required
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          name="Image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <textarea
          name="Ingredients"
          placeholder="Enter ingredients, one per line"
          onChange={ingredientsChange}
        />
      </div>
      <div>
        <textarea
          name="Directions"
          placeholder="Enter directions, one per line"
          onChange={directionsChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="Prep Time"
          placeholder="Prep Time"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          name="Cook Time"
          placeholder="Cook Time"
          value={cookTime}
          onChange={(e) => setCookTime(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          name="Serves"
          placeholder="Serves"
          value={serves}
          onChange={(e) => setServes(e.target.value)}
        />
      </div>
      <div>
        <button onClick={Add}>Add Recipe</button>
      </div>
      <div>
        <h2>Recipe Preview</h2>
        <h2>Category: {category}</h2>
        <h3>{foodName}</h3>
        <img
          src={image}
          alt={foodName}
          style={{ width: "100%", maxWidth: "400px", height: "auto" }}
        />
        
        <h4>Ingredients</h4>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ul>
        <h4>Directions</h4>
        <ol>
          {directions.map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}  
        </ol>
        <div class="add-new-recipes-bottom">
        <p>
          <strong>Prep Time:</strong> <span>{prepTime}</span>
        </p>
        <p>
          <strong>Cook Time:</strong> <span>{cookTime}</span>
        </p>
        <p>
          <strong>Serves:</strong> <span>{serves}</span>
        </p>
      </div>
      </div>
    </div>
  );
}

export default AddNewRecipes;
