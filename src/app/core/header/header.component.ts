import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

import { Component } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
    private authService: AuthService) { }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe((response: Response) => {
        console.log(response);
      });
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }
}
