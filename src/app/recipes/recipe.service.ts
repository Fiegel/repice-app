import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/09/08/13/16/recipe-2728726_960_720.jpg'),
    new Recipe('Another Recipe', 'Same description :)', 'https://cdn.pixabay.com/photo/2016/01/08/08/31/paella-1127334_960_720.jpg')
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
