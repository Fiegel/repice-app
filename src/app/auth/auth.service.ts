import 'firebase/auth';

import * as firebase from 'firebase/app';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router,
    private store: Store<fromApp.AppState>) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.store.dispatch(new AuthActions.Signup());
        firebase.auth().currentUser.getIdToken()
          .then((t: string) => this.store.dispatch(new AuthActions.SetToken(t)));
      })
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.store.dispatch(new AuthActions.Signin());
        this.router.navigate(['./']);
        firebase.auth().currentUser.getIdToken()
          .then((t: string) => this.store.dispatch(new AuthActions.SetToken(t)));
      })
      .catch(error => console.log(error));
  }

  logout() {
    firebase.auth().signOut();
    this.store.dispatch(new AuthActions.Logout());
  }
}
