import { Controller, Query, Param, Get } from '@nestjs/common';

import { RecipeService } from './recipe.service';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  async filterRecipes(
    @Query('i') ingredient?: string,
    @Query('a') area?: string,
    @Query('c') category?: string,
  ) {
    if (ingredient) return this.recipeService.getRecipesByIngredient(ingredient);
    if (area) return this.recipeService.getRecipesByCountry(area);
    if (category) return this.recipeService.getRecipesByCategory(category);
    return this.recipeService.getAllRecipes();
  }

  @Get('id/:id')
  async getRecipeById(@Param('id') id: string) {
    return this.recipeService.getRecipeById(id);
  }
}
