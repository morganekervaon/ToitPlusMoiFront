import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  msgErr: any;
  private user: any;
  constructor(private http: HttpClient, private route: Router, private AuthService: AuthService) { }

  ngOnInit(): void {
    if (this.AuthService.isConnected()) {
      this.route.navigateByUrl('accueil');
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
            this.AuthService.setUserConnect(this.user);
            this.route.navigateByUrl('accueil');
          }
        },
        error: (err) => { console.log(err) }
      })
    } else {
      this.msgErr = "Veuillez remplir tous les champs";
    }
  }
}
