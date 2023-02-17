import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AjoutbienComponent } from '../ajoutbien/ajoutbien.component';
import { AjoutmaisonComponent } from '../ajoutmaison/ajoutmaison.component';
import { AuthService } from '../auth.service';
import { MatchsComponent } from '../matchs/matchs.component';

@Component({
  selector: 'app-profil-proprio',
  templateUrl: './profil-proprio.component.html',
  styleUrls: ['./profil-proprio.component.css']
})
export class ProfilProprioComponent implements OnInit {
  matchs: any;
  constructor(private http: HttpClient, private route: Router, private authService: AuthService, public dialog: MatDialog) { }
  public userConnect = this.authService.getUserConnect();
  ngOnInit(): void {
    if (this.userConnect.proprio) {
      this.route.navigateByUrl('profilProprio');
    } else {
      this.route.navigateByUrl('profil');
    }
  }

  openModalAjBien() {
    const dialogRefAjBien = this.dialog.open(AjoutbienComponent, {
      height: '600px',
      width: '800px',
    });
  }

  openModalAjMaison() {
    const dialogRefAjMaison = this.dialog.open(AjoutmaisonComponent, {
      height: '600px',
      width: '800px',
    });
  }

  openModalMatchs() {
    const dialogRef = this.dialog.open(MatchsComponent, {
      height: '600px',
      width: '800px',
    });
  }
}
