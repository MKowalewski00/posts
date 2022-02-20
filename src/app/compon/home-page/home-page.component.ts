import { Component, OnInit } from '@angular/core';
import {Auth, UserCredential} from "@angular/fire/auth";
import {AuthService} from "../auth/services/auth.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user: UserCredential = JSON.parse(localStorage.getItem('user') || '{}');

  email = this.user.user.email;
  uid = this.user.user.uid;
  displayName = this.user.user.displayName;
  provider = this.user.user.providerData[0].providerId

  constructor(private _auth: Auth, private _authService: AuthService) {
  }
  ngOnInit(): void {

  }


  logOut() {
    this._authService.logOut();
  }
}

