import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-recherche-appart',
  templateUrl: './recherche-appart.component.html',
  styleUrls: ['./recherche-appart.component.css']
})
export class RechercheAppartComponent implements OnInit {

  appart: any;
  constructor(private authService: AuthService, private route: Router, private http: HttpClient) { };
  private userConnect = this.authService.getUserConnect();

  ngOnInit(): void {
    this.recupAnnonce();

  }

  recupAnnonce() {
    this.http.get('http://localhost:8183/appartement/random').subscribe({
      next: (data) => {
        this.appart = data;
        console.log(this.appart);
      },
      error: (err) => { console.log(err) }
    })
  }
}
