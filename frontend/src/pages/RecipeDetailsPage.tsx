import React from 'react';
import { Link } from 'react-router-dom';
import { Meal } from '../models/meal';

interface RecipeDetailsProps {
  recipe: Meal;
}

const RecipeDetailsPage: React.FC<RecipeDetailsProps> = ({ recipe }) => {
  return (
    <div className="recipe-details">
      <div className="recipe-image">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>

      <h2>{recipe.strMeal}</h2>

      <div className="recipe-country">
        <span>Country: </span>
        <Link to={`/recipes?a=${recipe.strArea}`}>{recipe.strArea}</Link>
      </div>

      <div className="recipe-instructions">
        <h3>Instructions</h3>
        <p>{recipe.strInstructions}</p>
      </div>

      <div className="recipe-ingredients">
        <h3>Ingredients</h3>
        <ul>
          {[...Array(20)].map((_, index) => {
            const ingredient = recipe[`strIngredient${index + 1}` as keyof Meal];
            const measure = recipe[`strMeasure${index + 1}` as keyof Meal];
            if (!ingredient || ingredient.trim() === '') return null;

            return (
              <li key={index}>
                <Link to={`/recipes?i=${ingredient}`}>
                  {measure} {ingredient}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
