import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FiltreComponent } from '../filtre/filtre.component';
import { FiltreModifComponent } from '../filtre-modif/filtre-modif.component';
import { AuthService } from '../auth.service';
import { MatchsComponent } from '../matchs/matchs.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  critere: any;
  matchs: any;
  constructor(private http: HttpClient, private route: Router, private authService: AuthService, public dialog: MatDialog) { }
  public userConnect = this.authService.getUserConnect();
  ngOnInit(): void {
    if (this.userConnect.proprio) {
      this.route.navigateByUrl('profilProprio');
    } else {
      this.route.navigateByUrl('profil');
    }

    this.http.get('http://localhost:8183/critere/user/' + this.userConnect.id).subscribe({
      next: (data) => {
        this.critere = data;
      },
      error: (err) => { console.log(err); }
    })
  }

  openModalFiltre() {
    const dialogRef = this.dialog.open(FiltreComponent, {
      height: '600px',
      width: '900px',
    });
  }

  openModalFiltreModif() {
    const dialogRefModif = this.dialog.open(FiltreModifComponent, {
      height: '600px',
      width: '900px',
    });
  }
  openModalMatchs() {
    const dialogRef = this.dialog.open(MatchsComponent, {
      height: '600px',
      width: '800px',
    });
  }

}
