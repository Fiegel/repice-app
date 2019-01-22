import { Observable, Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListState: Observable<{ ingredients: Ingredient[] }>;
  private slServiceSubscription: Subscription;

  constructor(private slService: ShoppingListService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    // this.slServiceSubscription = this.slService.ingredientsChanged
    //   .subscribe((ingredients: Ingredient[]) =>
    //     this.ingredients = ingredients);
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.slServiceSubscription.unsubscribe();
  }
}
