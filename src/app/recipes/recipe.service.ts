import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Gouash Hongrois',
      'de Journal des Femmes',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Gulyas080.jpg/280px-Gulyas080.jpg',
      [
        new Ingredient('Viande de boeuf', 1),
        new Ingredient('Oignons', 500),
        new Ingredient('Tomates', 500),
        new Ingredient('Poivrons', 2),
        new Ingredient('Paprika', 3)
      ]),
    new Recipe('Boeuf Bourguignon',
      'de Odelices',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/B%C5%93uf_bourguignon_05.JPG/1024px-B%C5%93uf_bourguignon_05.JPG',
      [
        new Ingredient('Viande de boeuf', 1),
        new Ingredient('Oignons', 2),
        new Ingredient('Carottes', 3),
        new Ingredient('Gousse d\'ail', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
