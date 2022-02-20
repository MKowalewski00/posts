import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate, Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {Auth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router, private _auth: Auth) {}

  user: any;


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.user = localStorage.setItem('uset', JSON.stringify(this._auth.currentUser));

    if (this.user !== null)
    {
      return true;
    } else {
      console.log("not logged in")
      this._router.navigate(['/login'])
      return false;
    }

  }


}
