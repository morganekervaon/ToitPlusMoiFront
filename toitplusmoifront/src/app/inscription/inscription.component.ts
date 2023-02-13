import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private http: HttpClient, private route : Router) {}
  ngOnInit(): void {
  }

  inscrireUser(val: any){
    let user = { nom: val.nom, prenom: val.prenom, mail: val.mail, numero: val.numero, login: val.login, mdp: val.password};
    console.log(user);
    this.http.post('http://localhost:8183/inscription', user).subscribe({
      next: (data) => {
        console.log(data);
        this.route.navigateByUrl('accueil')
      },
      error:(err) => {console.log(err);}
    });
  }

}
