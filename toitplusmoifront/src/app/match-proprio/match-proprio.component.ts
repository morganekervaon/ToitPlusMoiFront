import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-match-proprio',
  templateUrl: './match-proprio.component.html',
  styleUrls: ['./match-proprio.component.css']
})

export class MatchProprioComponent implements OnInit {

  matchsAppart: any;
  matchsMaison: any;
  constructor(private http: HttpClient, private route: Router, private authService: AuthService,
    public dialogRef: MatDialogRef<MatchProprioComponent>) { }
  public userConnect = this.authService.getUserConnect();

  ngOnInit(): void {
    console.log(this.userConnect.id + " est id");
    this.RecupAppart();
    this.RecupMaison();
  };

  RecupAppart(): void {
    this.http.get('http://localhost:8183/allMatchsProprioMaison/' + this.userConnect.id).subscribe({
      next: (data) => {
        this.matchsMaison = data;
        console.log(this.matchsMaison);
        console.log(this.userConnect.id + " est id");
      },
      error: (err) => { console.log(err); }
    })
  }


  RecupMaison(): void {
    this.http.get('http://localhost:8183/allMatchsProprioAppart/' + this.userConnect.id).subscribe({
      next: (data) => {
        this.matchsAppart = data;
        console.log(this.matchsAppart)
      },
      error: (err) => { console.log(err); }
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
