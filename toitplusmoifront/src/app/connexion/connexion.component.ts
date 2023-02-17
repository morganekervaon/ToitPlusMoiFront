import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  msgErr: any;
  private user: any;
  constructor(private http: HttpClient, private route: Router, private authService: AuthService, public dialogRefLogin: MatDialogRef<ConnexionComponent>) { }

  ngOnInit(): void {
    if (this.authService.isConnected()) {
      this.route.navigateByUrl('main');
    }
  }

  connexion(val: any) {
    if (val.login !== '' && val.mdp !== '') {
      this.http.post('http://localhost:8183/login', val).subscribe({
        next: (data) => {
          this.user = data;
          if (this.user == null) {
            this.msgErr = "Mauvais identifiants";
          } else {
            if (this.user.proprio) {
              this.authService.setUserConnect(this.user);
              this.route.navigateByUrl('mainProprio');
            } else {
              this.authService.setUserConnect(this.user);
              this.route.navigateByUrl('main');
            }

          }
        },
        error: (err) => { console.log(err) }
      })
    } else {
      this.msgErr = "Veuillez remplir tous les champs";
    }
  }

  onNoClick(): void {
    this.dialogRefLogin.close();
  }

}
