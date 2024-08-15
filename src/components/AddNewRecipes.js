import React, { useState } from "react";
import "./AddNewRecipes.css";

function AddNewRecipes(props) {
  const [category, setCategory] = useState("");
  const [foodName, setFoodName] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [serves, setServes] = useState("");

  const Add = () => {
    props.onAddRecipe({
      category,
      foodName,
      image,
      ingredients: ingredients.split(',').map(item => item.trim()),
      directions: directions.split('.').map(item => item.trim()),
      prepTime,
      cookTime,
      serves,
    });

    setCategory("");
    setFoodName("");
    setImage("");
    setIngredients("");
    setDirections("");
    setPrepTime("");
    setCookTime("");
    setServes("");

    window.alert("The form has been submitted successfully!");
  };

  return (
    <div>
      <h1>Add New Recipes</h1>
      <div>
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="Drink">Drink</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <div>
        <label>Food Name</label>
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
        <label>Image URL</label>
        <input 
          type="text" 
          name="Image" 
          placeholder="Image URL" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
        />
      </div>
      <div>
        <label>Ingredients (comma-separated)</label>
        <input 
          type="text" 
          name="Ingredients" 
          placeholder="Ingredients" 
          value={ingredients} 
          onChange={(e) => setIngredients(e.target.value)} 
        />
      </div>
      <div>
        <label>Directions (period-separated)</label>
        <input 
          type="text" 
          name="Directions" 
          placeholder="Directions" 
          value={directions} 
          onChange={(e) => setDirections(e.target.value)} 
        />
      </div>
      <div>
        <label>Prep Time</label>
        <input 
          type="text" 
          name="Prep Time" 
          placeholder="Prep Time" 
          value={prepTime} 
          onChange={(e) => setPrepTime(e.target.value)} 
        />
      </div>
      <div>
        <label>Cook Time</label>
        <input 
          type="text" 
          name="Cook Time" 
          placeholder="Cook Time" 
          value={cookTime} 
          onChange={(e) => setCookTime(e.target.value)} 
        />
      </div>
      <div>
        <label>Serves</label>
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
        <h3>{foodName}</h3>
        <img src={image} alt={foodName} style={{ width: "200px", height: "150px" }} />
        <h4>Category: {category}</h4>
        <p>Prep Time: {prepTime}</p>
        <p>Cook Time: {cookTime}</p>
        <p>Serves: {serves}</p>
        <h4>Ingredients</h4>
        <ul>
          {ingredients.split(',').map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ul>
        <h4>Directions</h4>
        <ol>
          {directions.split('.').map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default AddNewRecipes;
