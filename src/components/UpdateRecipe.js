import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import "./UpdateRecipe.css";

function UpdateRecipe() {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state;

  const [editData, setEditData] = useState(recipe);

  useEffect(() => {
    setEditData(recipe);
  }, [recipe]);

  const handleUpdate = () => {
    axios.put(`http://localhost:3000/recipes/${recipe.id}`, editData)
      .then(() => {
        console.log("Recipe updated");
        navigate("/recipes");
      })
      .catch((error) => {
        console.error("Error updating recipe:", error);
      });
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
      </div>
      <div>
        <textarea
          className="update-textarea"
          name="ingredients"
          placeholder="Enter ingredients, one per line"
          value={editData.ingredients?.join('\n') || ''}
          onChange={handleIngredientsChange}
        />
      </div>
      <div>
        <textarea
          className="update-textarea"
          name="directions"
          placeholder="Enter directions, one per line"
          value={editData.directions?.join('\n') || ''}
          onChange={handleDirectionsChange}
        />
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
      </div>
      <div className="btn-section">
        <button className="update-button" onClick={handleUpdate}>Update</button>
        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default UpdateRecipe;
