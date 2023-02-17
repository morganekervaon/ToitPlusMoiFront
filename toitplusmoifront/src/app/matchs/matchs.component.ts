import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css']
})
export class MatchsComponent {

  matchsm: any;
  matchsa: any;
  constructor(private http: HttpClient, private route: Router, private authService: AuthService, public dialogRef: MatDialogRef<MatchsComponent>) { }
  public userConnect = this.authService.getUserConnect();
  ngOnInit(): void {


    this.http.get('http://localhost:8183/allMatchsAppart/' + this.userConnect.id).subscribe({
      next: (data) => {
        this.matchsa = data;
        console.log(this.matchsa)
      },
      error: (err) => { console.log(err); }
    })

    this.http.get('http://localhost:8183/allMatchsMaison/' + this.userConnect.id).subscribe({
      next: (data) => {
        this.matchsm = data;
        console.log(this.matchsm)
      },
      error: (err) => { console.log(err); }
    })

  };


  onNoClick(): void {
    this.dialogRef.close();

  }
}





