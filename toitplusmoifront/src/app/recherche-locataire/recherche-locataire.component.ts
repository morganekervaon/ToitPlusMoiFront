import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-recherche-locataire',
  templateUrl: './recherche-locataire.component.html',
  styleUrls: ['./recherche-locataire.component.css']
})
export class RechercheLocataireComponent implements OnInit {
  locataire: any;
  dossier: any;
  constructor(private authService: AuthService, private route: Router, private http: HttpClient) { }
  private userConnect = this.authService.getUserConnect();

  ngOnInit(): void {
    this.recupLocataire();
  }

  recupLocataire() {
    this.http.get('http://localhost:8183/user/random').subscribe({
      next: (data) => {
        this.locataire = data;
      },
      error: (err) => { console.log(err) }
    });


  }

  detail(locat: any) {
    this.http.get('http://localhost:8183/dossier/user/' + locat.id).subscribe({
      next: (data) => {
        this.dossier = data;
        console.log('id est', this.dossier);
      },
      error: (err) => { console.log(err); }
    });
  }


  likerLocataire() {
    let val = { likeur: this.userConnect, liked: this.locataire[0] };
    this.http.post('http://localhost:8183/likeproprio', val).subscribe({
      next: (data) => { },
      error: (err) => { console.log(err) }
    });
    this.ngOnInit();
  }

  haterLocataire() {
    let val = { likeur: this.userConnect, liked: this.locataire[0] };
    this.http.post('http://localhost:8183/hateproprio', val).subscribe({
      next: (data) => { },
      error: (err) => { console.log(err) }
    });
    this.ngOnInit();
  }
}
