import { map } from 'rxjs/operators';

import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private httpClient: HttpClient,
    private recipeService: RecipeService) { }

  storeRecipes() {
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-id.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), { reportProgress: true });

    return this.httpClient.request(req);
  }

  getRecipes() {
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-id.firebaseio.com/recipes.json').pipe(map(recipes => {
      for (const recipe of recipes) {
        if (!recipe['ingredients']) {
          recipe['ingredients'] = [];
        }
      }

      return recipes;
    }))
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
