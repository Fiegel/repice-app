import { Subscription } from 'rxjs';

import { Component, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  saveDataSubscription: Subscription;

  constructor(private dataStorageService: DataStorageService) { }

  onSaveData() {
    this.saveDataSubscription = this.dataStorageService.storeRecipes()
      .subscribe((response: Response) => {
        console.log(response);
      });
  }

  ngOnDestroy() {
    if (this.saveDataSubscription) {
      this.saveDataSubscription.unsubscribe();
    }
  }
}
