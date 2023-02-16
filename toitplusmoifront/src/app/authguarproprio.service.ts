import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguarproprioService {

  constructor(private authService: AuthService, private route: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    //this.router.navigate(['/'])
    return new Promise((resolve, reject) => {
      //console.log("auth "+la)
      if (this.authService.getUserConnect() != null) {
        if (this.authService.getUserConnect().proprio) {
          resolve(true);
        } else {
          resolve(false);
        }
      } else {
        this.route.navigate(['/connexion'])
        resolve(false);
      }
    })
  }
}
