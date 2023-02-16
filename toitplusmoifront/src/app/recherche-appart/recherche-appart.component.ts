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
    this.http.get('http://localhost:8183/appartement/random/' + this.userConnect.id).subscribe({
      next: (data) => { this.appart = data; },
      error: (err) => { console.log(err) }
    });
  }

  likerAnnonce() {
    let val = { likeur: this.userConnect, appartLiked: this.appart };
    this.http.post('http://localhost:8183/likeappart', val).subscribe({
      next: (data) => { },
      error: (err) => { console.log(err) }
    })
    this.ngOnInit();
  }

  haterAnnonce() {
    let val = { likeur: this.userConnect, appartLiked: this.appart };
    this.http.post('http://localhost:8183/hateappart', val).subscribe({
      next: (data) => { },
      error: (err) => { console.log(err) }
    });
    this.ngOnInit();
  }
}
