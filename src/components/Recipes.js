import React from "react";

const Recipes = props => (
  <div className="container">
    <div className="row">
      {props.recipes.map(recipe => {
        return (
          <div
            key={recipe.id}
            className="col-md-4"
            style={{ marginBottom: "2rem" }}
          >
            <div className="recipes__box">
              <img
                className="recipe__box-img"
                src={recipe.imageUrl}
                alt={recipe.title}
              />
              <div className="recipe__text">
                <h5 className="recipes__title">{recipe.title}</h5>
                <p className="recipes__subtitle">
                  Time: {recipe.readyInMinutes} minutes
                </p>
              </div>
              <button className="recipe_buttons">View Recipe</button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;
