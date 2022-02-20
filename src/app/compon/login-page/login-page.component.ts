import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth/services/auth.service";
import {UserCredential} from "@angular/fire/auth";
import firebase from "firebase/compat";
import FirebaseError = firebase.FirebaseError;
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  private user!: UserCredential;

  form = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(64)])
    }
  )
  email = '';
  password = '';
  private errorMessage: string = '';
  error!: FirebaseError;

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this._authService.emailLogin(this.email, this.password).subscribe({
      next: (user) => {
        this.user = user;
        this._router.navigate(['/home'])
        console.log(this.user.user.providerData[0]);
        console.log(this.user.user.toJSON());
        console.log(this.user.user.metadata);
      },
      error: (error) => {
        this.error = error;
        console.log(this.error.code);
      }
    });
  }

  createAccount() {
    this._authService.createUserWithEmail(this.email, this.password).subscribe({
      next: (user) => {
        this.user = user
        console.log(this.user.user.toJSON())
      },
      error: (error) => {
        this.error = error;
        console.log(this.error.code);
      }
    });
  }


}
