import * as firebase from 'firebase/app';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCjipnZVtxkzEdO3sL17K-HiTewcKVOHIA',
      authDomain: 'ng-recipe-book-id.firebaseapp.com'
    });
  }
}
