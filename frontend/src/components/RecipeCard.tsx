import React from 'react';
import { Meal } from '../models/meal'; // Припустимо, що твоя модель `Meal` тут

const RecipeCard = ({ recipe }: { recipe: Meal }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
      <p>{recipe.strCategory} | {recipe.strArea}</p>
      <p>{recipe.strInstructions}</p>
      {/* Додаємо інтерактивні елементи, щоб можна було клікати на категорію чи інгредієнт */}
      <div>
        <span>{recipe.strCategory}</span> | <span>{recipe.strArea}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
