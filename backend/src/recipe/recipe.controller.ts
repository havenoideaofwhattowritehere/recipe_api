import {Controller, Get, HttpCode, HttpStatus, Query} from "@nestjs/common";
import {RecipeService} from "./recipe.service";

@Controller('recipe')
export class RecipeController {
    constructor(private readonly recipeService: RecipeService) {
    }

    @Get('all')
    @HttpCode(HttpStatus.OK)
    async getRecipes() {
        return await this.recipeService.getAllRecipes();
    }

    @Get('ingredient')
    @HttpCode(HttpStatus.OK)
    async getRecipesByIngredient(@Query('i') ingredient: string) {
        return await this.recipeService.getRecipesByIngredient(ingredient);
    }

    @Get('country')
    @HttpCode(HttpStatus.OK)
    async getRecipesByCountry(@Query('a') country: string) {
        return await this.recipeService.getRecipesByCountry(country);
    }

    @Get('category')
    @HttpCode(HttpStatus.OK)
    async getRecipesByCategory(@Query('c') category: string) {
        return await this.recipeService.getRecipesByCategory(category);
    }

    @Get('id')
    @HttpCode(HttpStatus.OK)
    async getRecipeInfo(@Query('i') id: string) {
        return await this.recipeService.getRecipeById(id);
    }
}