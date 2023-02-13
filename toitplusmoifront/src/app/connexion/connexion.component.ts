import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  private user: any;
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {

  }

  connexion(val: any) {
    if (val.login !== '' && val.mdp !== '') {
      this.http.post('http://localhost:8183/login', val).subscribe({
        next: (data) => { this.user = data },
        error: (err) => { console.log(err) }
      })
      if (this.user == null) {
        console.log("Connexion ratée");
      } else {
        console.log("Connexion réussie");
        this.route.navigateByUrl('accueil');
      }
    } else {
      console.log("remplis non ?");
    }
  }
}
