import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ConnexionComponent } from '../connexion/connexion.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { InscriptionComponent } from '../inscription/inscription.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public userConnect: any;
  constructor(public authService: AuthService, private route: Router, public dialog: MatDialog) { };

  ngOnInit(): void {
    if (this.authService.isConnected()) {
      this.userConnect = this.authService.getUserConnect();
      if (this.userConnect.proprio) {
        this.route.navigateByUrl('mainProprio');
      } else {
        this.route.navigateByUrl('main');
      }
    }
  }

  openModalConnexion() {
    const dialogRefLogin = this.dialog.open(ConnexionComponent, {
      height: '500px',
      width: '400px',
    });
  }

  openModalInscription() {
    const dialogRefSignin = this.dialog.open(InscriptionComponent, {
      height: '650px',
      width: '800px',
    });
  }


}
