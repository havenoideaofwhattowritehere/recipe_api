import {Module} from "@nestjs/common";
import {HttpModule} from "@nestjs/axios";
import {RecipeController} from "./recipe.controller";
import {RecipeService} from "./recipe.service";

@Module({
    imports:[HttpModule],
    controllers:[RecipeController],
    providers:[RecipeService],
    exports:[RecipeService]
})
export class RecipeModule {}