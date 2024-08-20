import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import "./UpdateRecipe.css";

function UpdateRecipe() {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state;

  const [editData, setEditData] = useState(recipe);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setEditData(recipe);
  }, [recipe]);

  const validate = () => {
    let errors = {};

    if (!editData.category) {
      errors.category = "Please choose a category.";
    }

    if (!editData.name.match(/^[A-Z][a-zA-Z\s]*$/)) {
      errors.name = "Food name must start with a capital letter and contain no numbers or symbols.";
    }

    if (!editData.image.match(/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i)) {
      errors.image = "Please enter a valid image URL (e.g., .jpg, .jpeg, .png, .gif).";
    }

    if (editData.ingredients.some(item => !item.trim().match(/^[a-zA-Z\s]+$/))) {
      errors.ingredients = "Ingredients should only contain letters and spaces, and each ingredient should be on a new line.";
    }

    if (editData.directions.some(item => !item.trim().match(/^[a-zA-Z0-9\s,.]+$/))) {
      errors.directions = "Directions should be on a new line and should not contain symbols.";
    }

    if (!editData.prep.match(/^\d+$/)) {
      errors.prep = "Prep time should only contain numbers.";
    }

    if (!editData.cook.match(/^\d+$/)) {
      errors.cook = "Cook time should only contain numbers.";
    }

    if (!editData.serves.match(/^\d+$/)) {
      errors.serves = "Serves should only contain numbers.";
    }

    return errors;
  };

  const handleUpdate = () => {
    const errors = validate();

    if (Object.keys(errors).length === 0) {
      axios.put(`http://localhost:3000/recipes/${recipe.id}`, editData)
        .then(() => {
          console.log("Recipe updated");
          navigate("/recipes");
        })
        .catch((error) => {
          console.error("Error updating recipe:", error);
        });
    } else {
      setErrors(errors);
    }
  };

  const handleCancel = () => {
    navigate("/recipes");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleIngredientsChange = (event) => {
    const ingredients = event.target.value.split('\n');
    setEditData({ ...editData, ingredients });
  };

  const handleDirectionsChange = (event) => {
    const directions = event.target.value.split('\n');
    setEditData({ ...editData, directions });
  };

  return (
    <div className="edit-form">
      <h2 className="edit-form-h">Update Recipe</h2>
      <div>
        <select
          className="update-selector"
          name="category"
          value={editData.category || ''}
          onChange={handleInputChange}
        >
          <option value="">Select a category</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Drink">Drink</option>
          <option value="Dessert">Dessert</option>
        </select>
        {errors.category && <p className="update-error">{errors.category}</p>}
      </div>
      <div>
        <input
          className="update-inputs"
          type="text"
          name="name"
          placeholder="Food Name"
          value={editData.name || ''}
          onChange={handleInputChange}
        />
        {errors.name && <p className="update-error">{errors.name}</p>}
      </div>
      <div>
        <input
          className="update-inputs"
          type="text"
          name="image"
          placeholder="Image URL"
          value={editData.image || ''}
          onChange={handleInputChange}
        />
        {errors.image && <p className="update-error">{errors.image}</p>}
      </div>
      <div>
        <textarea
          className="update-textarea"
          name="ingredients"
          placeholder="Enter ingredients, one per line"
          value={editData.ingredients?.join('\n') || ''}
          onChange={handleIngredientsChange}
        />
        {errors.ingredients && <p className="update-error">{errors.ingredients}</p>}
      </div>
      <div>
        <textarea
          className="update-textarea"
          name="directions"
          placeholder="Enter directions, one per line"
          value={editData.directions?.join('\n') || ''}
          onChange={handleDirectionsChange}
        />
        {errors.directions && <p className="update-error">{errors.directions}</p>}
      </div>
      <div>
        <input
          className="update-inputs"
          type="text"
          name="prep"
          placeholder="Prep Time"
          value={editData.prep || ''}
          onChange={handleInputChange}
        />
        {errors.prep && <p className="update-error">{errors.prep}</p>}
      </div>
      <div>
        <input
          className="update-inputs"
          type="text"
          name="cook"
          placeholder="Cook Time"
          value={editData.cook || ''}
          onChange={handleInputChange}
        />
        {errors.cook && <p className="update-error">{errors.cook}</p>}
      </div>
      <div>
        <input
          className="update-inputs"
          type="text"
          name="serves"
          placeholder="Serves"
          value={editData.serves || ''}
          onChange={handleInputChange}
        />
        {errors.serves && <p className="update-error">{errors.serves}</p>}
      </div>
      <div className="btn-section">
        <button className="update-button" onClick={handleUpdate}>Update</button>
        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default UpdateRecipe;
