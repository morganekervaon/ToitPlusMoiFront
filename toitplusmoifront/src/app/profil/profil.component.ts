import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FiltreComponent } from '../filtre/filtre.component';
import { FiltreModifComponent } from '../filtre-modif/filtre-modif.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  critere: any;
  constructor(private http: HttpClient, private route: Router, private authService: AuthService, public dialog: MatDialog) { }
  public userConnect = this.authService.getUserConnect();
  ngOnInit(): void {
    this.http.get('http://localhost:8183/critere/user' + this.userConnect.id).subscribe({
      next: (data) => {
        this.critere = data;
      },
      error: (err) => { console.log(err); }
    })
  }

  openModalFiltre() {
    const dialogRef = this.dialog.open(FiltreComponent);
  }

  openModalFiltreModif() {
    const dialogRefModif = this.dialog.open(FiltreModifComponent);
  }

}
