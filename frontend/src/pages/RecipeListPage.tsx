import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  useGetRecipesByCountryQuery,
  useGetRecipesByIngredientQuery,
  useGetRecipesByCategoryQuery,
  useGetAllRecipesQuery,
} from '../redux/api/apiSlice';
import RecipeCard from '../components/RecipeCard';
import { Meal } from '../models/meal';

const RecipeListPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const type = queryParams.get('type'); // Тип пошуку (ingredient, country, category, id)
  const query = queryParams.get('query'); // Пошуковий запит (інгредієнт, країна, категорія або ID)
  const { data: countryData, isLoading: isLoadingCountry, error: errorCountry } = useGetRecipesByCountryQuery(query || '');
  const { data: ingredientData, isLoading: isLoadingIngredient, error: errorIngredient } = useGetRecipesByIngredientQuery(query || '');
  const { data: categoryData, isLoading: isLoadingCategory, error: errorCategory } = useGetRecipesByCategoryQuery(query || '');
  const { data: allRecipesData, isLoading: isLoadingAllRecipes, error: errorAllRecipes } = useGetAllRecipesQuery('');
  const navigate = useNavigate();

  // Якщо є ID, переходимо на сторінку деталі рецепту (шлях з id в параметрах)
  if (type === 'id' && query) {
    navigate(`/id/${query}`); // Параметр id у шляху
    return null; // Зупиняємо виконання компонента
  }

  // Викликаємо всі необхідні API запити незалежно від типу


  // Змінні для вибору правильних даних
  let data;
  let isLoading = false;
  let error;

  // Вибір даних для рендеру в залежності від типу пошуку
  if (type === 'country' && query) {
    data = countryData;
    isLoading = isLoadingCountry;
    error = errorCountry;
  } else if (type === 'ingredient' && query) {
    data = ingredientData;
    isLoading = isLoadingIngredient;
    error = errorIngredient;
  } else if (type === 'category' && query) {
    data = categoryData;
    isLoading = isLoadingCategory;
    error = errorCategory;
  } else {
    // Якщо немає конкретного запиту, показуємо всі рецепти
    data = allRecipesData;
    isLoading = isLoadingAllRecipes;
    error = errorAllRecipes;
  }

  if (isLoading) return <div>Loading...</div>;
  if (error || !data?.meals) return <div>No recipes found!</div>;

  const getTitle = () => {
    if (type === 'country') return `Recipes from ${query}`;
    if (type === 'ingredient') return `Recipes with ${query}`;
    if (type === 'category') return `Recipes in ${query}`;
    if (!type && !query) return 'All Recipes'; // Якщо немає типу і запиту, відображаємо всі рецепти
    return 'Search Results';
  };

  return (
    <div>
      <h2>{getTitle()}</h2>
      <div className="recipe-list">
        {data.meals.map((recipe: Meal) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeListPage;
