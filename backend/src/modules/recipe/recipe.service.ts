import * as core from "@nestjs/common";
import { HttpService } from '@nestjs/axios';
import { ErrorMap } from '../../shared/common/utils/exceptions/ErrorMap';
import { ConfigService } from '@nestjs/config';

@core.Injectable()
export class RecipeService {
  private readonly logger = new core.ConsoleLogger(RecipeService.name);
  private readonly URL;
  constructor(private readonly httpService: HttpService,
              private readonly configService: ConfigService) {
    this.URL = this.configService.get<string>('API_URL');
  }
  async getAllRecipes() {
    const url = URL+'search.php?s=';
    try {
      this.logger.log(`Getting all recipes from ${url}`);
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (e) {
      this.logger.error(`Failed to fetch recipes from ${url}, error message: ${e.message}`);
      throw new core.BadRequestException(ErrorMap.FAILED_REQUEST)
    }
  }

  async getRecipesByIngredient(
    ingredient: string,
  ) {
    const url = URL+`filter.php?i=${ingredient}`;
    try {
      this.logger.log(`Getting recipes by ingredient criteria from ${url}`);
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (e) {
      this.logger.error(`Failed to fetch recipes by ingredient criteria from ${url}, error message: ${e.message}`);
      throw new core.BadRequestException(ErrorMap.FAILED_REQUEST)
    }
  }

  async getRecipesByCountry(
    country: string,
  ) {
    const url = URL+`filter.php?a=${country}`;
    try {
      this.logger.log(`Getting recipes by country criteria from ${url}`);
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (e) {
      this.logger.error(`Failed to fetch recipes by country criteria from ${url}, error message: ${e.message}`);
      throw new core.BadRequestException(ErrorMap.FAILED_REQUEST);
    }
  }

  async getRecipesByCategory(
    category: string,
  ) {
    const url = URL+`filter.php?c=${category}`;
    try {
      this.logger.log(`Getting recipes by category criteria from ${url}`);
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (e) {
      this.logger.error(`Failed to fetch recipes by category from ${category}, error message: ${e.message}`);
      throw new core.BadRequestException(ErrorMap.FAILED_REQUEST);
    }
  }

  async getRecipeById(id: string) {
    const url = URL+`lookup.php?i=${id}`;
    try {
      this.logger.log(`Getting recipe by id criteria from ${url}`);
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (e) {
      this.logger.error(`Failed to fetch recipe by id criteria from ${id}, error message: ${e.message}`);
      throw new core.BadRequestException(ErrorMap.FAILED_REQUEST);
    }
    core.
  }
}
