import React, { useState, useEffect } from 'react';

function Fetch() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate fetching data (in a real scenario, you would fetch from an API)
    const fetchData = async () => {
      try {
        // Example data (replace this with your API call)
        const response = await fetch("./db/DB.json"); // Replace with your data source
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <h2>{recipe.name}</h2>
              <img src={recipe.image} alt={recipe.name} style={{ width: '200px' }} />
              <h3>Ingredients:</h3>
              <ul>
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
              </ul>
              <h3>Directions:</h3>
              <ol>
                {recipe.directions.map((direction, idx) => (
                  <li key={idx}>{direction}</li>
                ))}
              </ol>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Fetch;
