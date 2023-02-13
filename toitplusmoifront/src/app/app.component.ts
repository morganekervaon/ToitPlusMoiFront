import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'toitplusmoifront';

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.route.navigateByUrl("accueil")
  }

}
