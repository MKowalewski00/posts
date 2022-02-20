import { Injectable } from '@angular/core';
import { Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential } from '@angular/fire/auth';
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  public emailLogin(email: string, password: string): Observable<UserCredential> {
    const loginPromise = signInWithEmailAndPassword(this.auth, email, password)
    return from(loginPromise);
  }

  public createUserWithEmail(email: string, password: string): Observable<UserCredential> {
    const userCreationPromise = createUserWithEmailAndPassword(this.auth, email, password);
    return from(userCreationPromise);
  }
}
