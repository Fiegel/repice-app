import { Ingredient } from 'src/app/shared/ingredient.model';

import { AppState } from '../../store/app.reducer';
import { Recipe } from '../recipe.model';
import * as RecipeActions from './recipe.actions';

export interface FeatureState extends AppState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
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
  ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };
    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case RecipeActions.UPDATE_RECIPE:
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case RecipeActions.DELETE_RECIPE:
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}
