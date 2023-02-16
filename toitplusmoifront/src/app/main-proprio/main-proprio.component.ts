import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main-proprio',
  templateUrl: './main-proprio.component.html',
  styleUrls: ['./main-proprio.component.css']
})
export class MainProprioComponent implements OnInit {
  constructor(private route: Router, private authService: AuthService) {}
  public userConnect = this.authService.getUserConnect();

  ngOnInit(): void{
    
  }
}
