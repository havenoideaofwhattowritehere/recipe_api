import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetRecipeByIdQuery } from '../redux/api/apiSlice';
import RecipeDetailsPage from './RecipeDetailsPage';

const RecipeInfoPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetRecipeByIdQuery(id!);

  if (isLoading) return <div>Loading recipe...</div>;
  if (error || !data?.meals || data.meals.length === 0) return <div>Recipe not found</div>;

  const recipe = data.meals[0];

  return <RecipeDetailsPage recipe={recipe} />;
};

export default RecipeInfoPage;
