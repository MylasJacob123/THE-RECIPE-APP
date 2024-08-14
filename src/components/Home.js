import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const goToRecipes = () => {
        navigate("/Recipes"); 
      };
      
  return (
    <div className="home-display">
      <div class="top-section">
        <div className="info">
          <h1 className="HEADING">Come and explore delicious recipes</h1>
          <p className="PARA">
            Discover new flavors and cooking techniques that upgrade you cooking
            repertoire
          </p>
          <button className="browse" onClick={goToRecipes}>Browse Recipes</button>
        </div>
        <div className="image-grid">
          <img src="https://img.taste.com.au/HxblZKUi/taste/2017/03/top-20-easy-eggs-for-breakfast-125112-2.jpg" alt="" />
          <img src="https://img.taste.com.au/wH8iaWxU/taste/2018/02/chicken-caesar-veggie-wraps-taste-135072-1.jpg" alt="" />
          <img src="https://img.taste.com.au/aID66rr4/taste/2017/12/peach-fizz-taste_1980x1320-134162-1.jpg" alt="" />
          <img src="https://img.taste.com.au/m-njHupb/taste/2019/01/summer-peach-and-berry-sorbet-cake-146094-2.jpg" alt="" />
        </div>
      </div>
      <div className="bottom-section">
        
          <h2 className="browse-section">Browse through Categories</h2>

          <div className="category-grid">
            <div className="category-directory">
              <img
                className="category-image"
                src="https://joyfoodsunshine.com/wp-content/uploads/2019/01/healthy-greek-yogurt-pancakes-recipe-1.jpg" alt=""
              />
              <h3 className="category-name">Breakfast</h3>
              <p className="category-description">
                Start your day with a delicious breakfast
              </p>
            </div>
            <div className="category-directory">
              <img
                className="category-image"
                src="https://www.feastingathome.com/wp-content/uploads/2022/02/Banh-Mi-Sandwich-5.jpg" alt=""
              />
              <h3 className="category-name">Lunch</h3>
              <p className="category-description">
                Enjoy a satisfying lunch with our recipes
              </p>
            </div>
            <div className="category-directory">
              <img
                className="category-image"
                src="https://www.watchwhatueat.com/wp-content/uploads/2019/04/Refreshing-Homemade-Strawberry-Lemonade-6.jpg" alt=""
              />
              <h3 className="category-name">Drinks</h3>
              <p className="category-description">
                Quench your thirst with our refreshing drinks
              </p>
            </div>
            <div className="category-directory">
              <img
                className="category-image"
                src="https://img.taste.com.au/hi4kp6iC/taste/2023/10/5-ingredient-espresso-martini-terrine-192734-2.jpg" alt=""
              />
              <h3 className="category-name">Desserts</h3>
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
