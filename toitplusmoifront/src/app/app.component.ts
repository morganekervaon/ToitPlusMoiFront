import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'toitplusmoifront';
  public userConnect: any;
  constructor(private http: HttpClient, private route: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }
}
