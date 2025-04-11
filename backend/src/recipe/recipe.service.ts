import {Injectable, Logger} from "@nestjs/common";
import {HttpService} from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import {MealResponse} from "../shared/interfaces/MealResponse";
import {AxiosResponse} from "axios";

@Injectable()
export class RecipeService {
    private readonly logger = new Logger(RecipeService.name);
    constructor(private readonly httpService: HttpService) {
    }

    async getAllRecipes(): Promise<AxiosResponse<MealResponse>> {
        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        const response = await this.httpService.axiosRef.get(url);
        return response.data;
    }

    async getRecipesByIngredient(ingredient: string): Promise<AxiosResponse<MealResponse>> {
        const url = `www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
        const response = await this.httpService.axiosRef.get(url);
        return response.data;
    }

    async getRecipesByCountry(country: string): Promise<AxiosResponse<MealResponse>> {
        const url = `www.themealdb.com/api/json/v1/1/filter.php?a=${country}`;
        const response = await this.httpService.axiosRef.get(url);
        return response.data;
    }

    async getRecipesByCategory(category: string): Promise<AxiosResponse<MealResponse>> {
        const url = `www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
        const response = await this.httpService.axiosRef.get(url);
        return response.data;
    }

    async getRecipeById(id: string): Promise<AxiosResponse<MealResponse>> {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        const response = await this.httpService.axiosRef.get(url);
        return response.data;
    }
}