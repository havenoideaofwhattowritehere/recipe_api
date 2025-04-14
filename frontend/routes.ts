export const routes = {
  BASE_URL: process.env.BASE_URL,
  API : {
    SEARCH_ALL: "/recipes",
    SEARCH_BY_INGREDIENT: "",
    SEARCH_BY_AREA: "https://www.themealdb.com/api/json/v1/1/filter.php?a=",
    SEARCH_BY_CATEGORY: "https://www.themealdb.com/api/json/v1/1/filter.php?c=",
    SEARCH_RECIPE_BY_ID: "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
  }
}