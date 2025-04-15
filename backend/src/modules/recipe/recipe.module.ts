import { HttpModule } from '@nestjs/axios';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  controllers: [RecipeController],
  providers: [RecipeService],
  exports: [RecipeService],
})
export class RecipeModule {}
