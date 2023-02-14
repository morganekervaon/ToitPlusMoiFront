import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }
  private user: any;

  setUserConnect(user: any) {
    localStorage.setItem('userConnect', JSON.stringify(user));
  }

  getUserConnect() {
    let user: any = localStorage.getItem('userConnect');
    return JSON.parse(user);
  }

  isConnected() {
    if (this.getUserConnect() != null) {
      return true;
    } else {
      return false;
    }
  }

  deconnexion() {
    localStorage.removeItem('userConnect');
    this.route.navigateByUrl('accueil');
  }
}

