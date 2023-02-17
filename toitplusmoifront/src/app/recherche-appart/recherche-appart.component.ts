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
  match: any;
  public afficher = false;
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

    this.http.get('http://localhost:8183/allMatchsAppart/' + this.userConnect.id).subscribe({
      next: (data) => {
        this.match = data; console.log("1", this.match);
        if (this.match != null) {
          console.log("3", this.match);
          if (this.match.appart == this.appart) {
            this.afficher = true;
            console.log("4", this.match);
          }
        }
      },
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
    let val = { likeur: this.userConnect, appartLiked: this.appart };
    this.http.post('http://localhost:8183/hateappart', val).subscribe({
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
