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
    this.http.get('http://localhost:8183/maison/random/' + this.userConnect.id).subscribe({
      next: (data) => { this.maison = data; },
      error: (err) => { console.log(err) }
    })
  }

  likerAnnonce() {
    let val = { likeur: this.userConnect, maisonLiked: this.maison };
    this.http.post('http://localhost:8183/likemaison', val).subscribe({
      next: (data) => { },
      error: (err) => { console.log(err) }
    });
    this.ngOnInit();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  haterAnnonce() {
    let val = { likeur: this.userConnect, maisonLiked: this.maison };
    this.http.post('http://localhost:8183/hatemaison', val).subscribe({
      next: (data) => { },
      error: (err) => { console.log(err) }
    });
    this.ngOnInit();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}