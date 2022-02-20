import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword, getAuth,
  signInWithEmailAndPassword, updateProfile,
  UserCredential
} from '@angular/fire/auth';
import {from, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: UserCredential;

  constructor(private _auth: Auth, private _router: Router) {

    this.user = JSON.parse(localStorage.getItem('user') || '{}');

  }

  public emailLogin(email: string, password: string): Observable<UserCredential> {
    const loginPromise = signInWithEmailAndPassword(this._auth, email, password)
    return from(loginPromise);
  }

  public createUserWithEmail(email: string, password: string): Observable<UserCredential> {
    const userCreationPromise = createUserWithEmailAndPassword(this._auth, email, password);
    return from(userCreationPromise);
  }

  public isLoggedIn(): boolean {
    if(localStorage.getItem('user'))
    {
      return true
    }
    return false
  }

  public getCurrentUser(){
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  public setCurrentUser(user: any){
    localStorage.setItem('user', JSON.stringify(user));
    console.log(JSON.parse(localStorage.getItem('user') || '{}'));
   // this.user = user;
  }

  public updateUser(displayName: string){
    const auth = getAuth();
    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName: displayName
      }).then(() => {
        console.log("success displayname")
      }).catch(() => {
        console.log("error displayname")
      })
    }
  }

  public logOut()
  {
    localStorage.removeItem('user')
    this._router.navigate(['login'])
    console.log('logged out')
  }

}
