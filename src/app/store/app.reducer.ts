import { ActionReducerMap } from '@ngrx/store';

import * as fromAuthReducer from '../auth/store/auth.reducer';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuthReducer.State;
}

export const reducers: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  auth: fromAuthReducer.authReducer
};
