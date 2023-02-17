import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AjoutbienComponent } from '../ajoutbien/ajoutbien.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-ajoutmaison',
  templateUrl: './ajoutmaison.component.html',
  styleUrls: ['./ajoutmaison.component.css']
})
export class AjoutmaisonComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router, private authService: AuthService, public dialogRefAjMaison: MatDialogRef<AjoutmaisonComponent>) { }
  public userConnect = this.authService.getUserConnect();
  ngOnInit(): void { }


  createMaison(val: any) {
    val.proprio = this.userConnect;
    val.adresse = { ville: val.ville, codePostal: val.codePostal, numero: val.numero, voie: val.voie }

    /*affiche le proprio dans la console */
    console.log(val);

    this.http.post('http://localhost:8183/maison', val).subscribe({

      next: (data) => {
        console.log(data);
        this.route.navigateByUrl('accueil')
      },
      error: (err) => { console.log(err); }
    });
  }

  onNoClick(): void {
    this.dialogRefAjMaison.close();
  }

}




