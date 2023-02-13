import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  log: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  connexion(val: any) {
    this.http.get('http://localhost:8183/login').subscribe({
      next: (data) => { this.log = data; },
      error: (err) => { console.log(err) }
    })
  }
}
