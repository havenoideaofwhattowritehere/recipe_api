import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recipeApi = createApi({
  reducerPath: 'recipeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getAllRecipes: builder.query({
      query: () => 'recipes',
    }),
    getRecipeById: builder.query({
      query: (id) => `recipes/id/${id}`,
    }),
    getRecipesByIngredient: builder.query({
      query: (ingredient) => `recipes?i=${ingredient}`,
    }),
    getRecipesByCountry: builder.query({
      query: (country) => `recipes?a=${country}`,
    }),
    getRecipesByCategory: builder.query({
      query: (category) => `recipes?c=${category}`,
    }),
  })
});

export const {
  useGetAllRecipesQuery,
  useGetRecipeByIdQuery,
  useGetRecipesByIngredientQuery,
  useGetRecipesByCountryQuery,
  useGetRecipesByCategoryQuery,
} = recipeApi;
