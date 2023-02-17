import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  status: any;

  constructor(private http: HttpClient, private route: Router, private authService: AuthService, public dialogRefSignin: MatDialogRef<InscriptionComponent>,) { }

  ngOnInit(): void {
    if (this.authService.isConnected()) {
      this.route.navigateByUrl('main');
    }
  }

  inscrireUser(val: any) {
    //let user = { nom: val.nom, prenom: val.prenom, mail: val.mail, numero: val.numero, login: val.login, mdp: val.password};
    console.log(val);
    //if(this.status.equals("true")){
    //  let user = { nom: val.nom, prenom: val.prenom, mail: val.mail, numero: val.numero, login: val.login, mdp: val.password, status: true};
    //}
    this.http.post('http://localhost:8183/inscription', val).subscribe({
      next: (data) => {
        console.log(data);
        this.route.navigateByUrl('accueil')
      },
      error: (err) => { console.log(err); }
    });
  }

  onNoClick(): void {
    this.dialogRefSignin.close();
  }

}
