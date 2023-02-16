import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-recherche-maison',
  templateUrl: './recherche-maison.component.html',
  styleUrls: ['./recherche-maison.component.css']
})
export class RechercheMaisonComponent implements OnInit {
  maison: any;
  constructor(private http: HttpClient, private authService: AuthService, private route: Router) { };
  private userConnect = this.authService.getUserConnect();

  ngOnInit(): void {
    this.recupAnnonce();
  }

  recupAnnonce() {
    this.http.get('http://localhost:8183/maison/random').subscribe({
      next: (data) => {
        this.maison = data;
        console.log(this.maison);
      },
      error: (err) => { console.log(err) }
    })
  }

  likerAnnonce() {
    let val = { likeur: this.userConnect, maisonLiked: this.maison[0] };
    console.log(val);
    this.http.post('http://localhost:8183/likemaison', val);
    this.recupAnnonce();
  }

  haterAnnonce() {
    let val = { likeur: this.userConnect, maisonLiked: this.maison[0] };
    console.log(val);
    this.http.post('http://localhost:8183/hatemaison', val);
    this.recupAnnonce();
  }
}