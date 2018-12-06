import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Gulyas080.jpg/280px-Gulyas080.jpg'),
    new Recipe('Another Recipe 2', 'Same description :)',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/B%C5%93uf_bourguignon_05.JPG/1024px-B%C5%93uf_bourguignon_05.JPG')
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
