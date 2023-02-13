
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.route.navigateByUrl("accueil")
  }
}
