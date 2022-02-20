import { Component, OnInit } from '@angular/core';
import {Auth} from "@angular/fire/auth";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  email = this._Auth.currentUser?.email;
  uid = this._Auth.currentUser?.uid;
  lastSignInTime = this._Auth.currentUser?.metadata.lastSignInTime;
  creationTime = this._Auth.currentUser?.metadata.creationTime;

  constructor(private _Auth: Auth) { }
  ngOnInit(): void {
  }





}

