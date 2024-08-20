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
    };

    const response = await axios.post(
      "http://localhost:3000/recipes",
      newRecipe
    );
    setRecipe([...recipe, response.data]);
    window.alert("Submitted successfully!");
  };

  return (
    <div className="addition">
      <div class="addition-section-A">
        <h1 className="addition-heading">Add New Recipes</h1>
        <div>
          <select
            className="addition-selector"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Drink">Drink</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <div>
          <input
            className="addition-inputs"
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
            className="addition-inputs"
            type="text"
            name="Image"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <textarea
            className="addition-textarea"
            name="Ingredients"
            placeholder="Enter ingredients, one per line"
            onChange={ingredientsChange}
          />
        </div>
        <div>
          <textarea
            className="addition-textarea"
            name="Directions"
            placeholder="Enter directions, one per line"
            onChange={directionsChange}
          />
        </div>
        <div>
          <input
            className="addition-inputs"
            type="text"
            name="Prep Time"
            placeholder="Prep Time"
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
          />
        </div>
        <div>
          <input
            className="addition-inputs"
            type="text"
            name="Cook Time"
            placeholder="Cook Time"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
          />
        </div>
        <div>
          <input
            className="addition-inputs"
            type="text"
            name="Serves"
            placeholder="Serves"
            value={serves}
            onChange={(e) => setServes(e.target.value)}
          />
        </div>
        <div>
          <button className="addition-button" onClick={Add}>
            Add Recipe
          </button>
        </div>
      </div>

      <div className="addition-section-B">
        <h2 className="addition-section-B-heading">Recipe Preview</h2>
        <h3 className="addition-section-B-subheadings">Category: {category}</h3>
        <h3 className="addition-section-B-subheadings">Food Name: {foodName}</h3>
        <img
          src={image}
          alt={foodName}
          style={{ width: "100%", maxWidth: "400px", maxheight: "300px" }}
        />

        <h3 className="addition-section-B-subheadings">Ingredients:</h3>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ul>
        <h3 className="addition-section-B-subheadings">Directions:</h3>
        <ol>
          {directions.map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ol>
        <div class="add-new-recipes-bottom">
          <p>
            <strong className="addition-section-B-subheadings">Prep Time:</strong> <span>{prepTime}</span>
          </p>
          <p>
            <strong className="addition-section-B-subheadings">Cook Time:</strong> <span>{cookTime}</span>
          </p>
          <p>
            <strong className="addition-section-B-subheadings">Serves:</strong> <span>{serves}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddNewRecipes;
