import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-filtre-modif',
  templateUrl: './filtre-modif.component.html',
  styleUrls: ['./filtre-modif.component.css']
})
export class FiltreModifComponent implements OnInit {
  meubleM: any;
  machineALaverM: any;
  laveVaisselleM: any;
  jardinM: any;
  parkingM: any;
  caveM: any;
  balconM: any;
  salleEauM: any;
  dateDispoM: any;

  critere: any;

  constructor(private http: HttpClient, private route: Router, private authService: AuthService) { }
  public userConnect = this.authService.getUserConnect();
  ngOnInit(): void {
    this.http.get('http://localhost:8183/critere/user/' + this.userConnect.id).subscribe({
      next: (data) => {
        this.critere = data;
      },
      error: (err) => { console.log(err); }
    })
  }

  modifFiltre(critere: any) {
    critere.user = this.userConnect;
    this.http.put('http://localhost:8183/filtre/' + this.critere.id_critere, critere).subscribe({
      next: (data) => {
        this.route.navigateByUrl('profil')
      },
      error: (err) => { console.log(err); }
    })
  }
}
