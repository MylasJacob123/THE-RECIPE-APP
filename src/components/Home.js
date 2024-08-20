import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToRecipes = (category) => {
    navigate("/Recipes", { state: { category } });
  };

  return (
    <div className="home-display">
      <div className="top-section">
        <div className="info">
          <h1 className="HEADING">Come and explore delicious recipes</h1>
          <p className="PARA">
            Discover new flavors and cooking techniques that are guaranteed to upgrade your
            cooking repertoire
          </p>
          <button className="browse" onClick={() => goToRecipes("")}>
            Browse Recipes
          </button>
        </div>
        <div className="image-grid">
          <img
            src="https://img.taste.com.au/HxblZKUi/taste/2017/03/top-20-easy-eggs-for-breakfast-125112-2.jpg"
            alt="Breakfast"
          />
          <img
            src="https://img.taste.com.au/wH8iaWxU/taste/2018/02/chicken-caesar-veggie-wraps-taste-135072-1.jpg"
            alt="Lunch"
          />
          <img
            src="https://img.taste.com.au/aID66rr4/taste/2017/12/peach-fizz-taste_1980x1320-134162-1.jpg"
            alt="Drinks"
          />
          <img
            src="https://img.taste.com.au/m-njHupb/taste/2019/01/summer-peach-and-berry-sorbet-cake-146094-2.jpg"
            alt="Desserts"
          />
        </div>
      </div>
      <div className="bottom-section">
        <h2 className="browse-section">Browse through Categories</h2>
        <div className="category-grid">
          <div
            className="category-directory"
            onClick={() => goToRecipes("Breakfast")}
          >
            <img
              className="category-image"
              src="https://joyfoodsunshine.com/wp-content/uploads/2019/01/healthy-greek-yogurt-pancakes-recipe-1.jpg"
              alt="Breakfast"
            />
            <h3 className="category-name">
              <span>Breakfast</span>
            </h3>
            <p className="category-description">
              Start your day with a delicious breakfast
            </p>
          </div>
          <div
            className="category-directory"
            onClick={() => goToRecipes("Lunch")}
          >
            <img
              className="category-image"
              src="https://www.feastingathome.com/wp-content/uploads/2022/02/Banh-Mi-Sandwich-5.jpg"
              alt="Lunch"
            />
            <h3 className="category-name">
              <span>Lunch</span>
            </h3>
            <p className="category-description">
              Enjoy a satisfying lunch with our recipes
            </p>
          </div>
          <div
            className="category-directory"
            onClick={() => goToRecipes("Drink")}
          >
            <img
              className="category-image"
              src="https://www.watchwhatueat.com/wp-content/uploads/2019/04/Refreshing-Homemade-Strawberry-Lemonade-6.jpg"
              alt="Drinks"
            />
            <h3 className="category-name">
              <span>Drinks</span>
            </h3>
            <p className="category-description">
              Quench your thirst with our refreshing drinks
            </p>
          </div>
          <div
            className="category-directory"
            onClick={() => goToRecipes("Dessert")}
          >
            <img
              className="category-image"
              src="https://img.taste.com.au/hi4kp6iC/taste/2023/10/5-ingredient-espresso-martini-terrine-192734-2.jpg"
              alt="Desserts"
            />
            <h3 className="category-name">
              <span>Desserts</span>
            </h3>
            <p className="category-description">
              Indulge in our decadent desserts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
