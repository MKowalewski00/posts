import { Component, OnInit } from '@angular/core';
import {Auth} from "@angular/fire/auth";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  email : any;

  constructor(private _Auth: Auth) { }
  ngOnInit(): void {
    if (this._Auth.currentUser) {
      this.email = this._Auth.currentUser.email;
    } else
    {
      this.email = 'kurw nima'
    }
  }



}

