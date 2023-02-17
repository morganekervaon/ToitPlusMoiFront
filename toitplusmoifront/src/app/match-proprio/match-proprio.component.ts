import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatchsComponent } from '../matchs/matchs.component';

@Component({
  selector: 'app-match-proprio',
  templateUrl: './match-proprio.component.html',
  styleUrls: ['./match-proprio.component.css']
})
export class MatchProprioComponent {


  matchsAppart: any;
  matchsMaison: any;
  constructor(private http: HttpClient, private route: Router, private authService: AuthService, public dialogRef: MatDialogRef<MatchsComponent>) { }
  public userConnect = this.authService.getUserConnect();
  ngOnInit(): void {


    this.http.get('http://localhost:8183/allMatchsProprioMaison/' + this.userConnect.id).subscribe({
      next: (data) => {
        this.matchsMaison = data;
        console.log(this.matchsMaison)
      },
      error: (err) => { console.log(err); }
    })

    this.http.get('http://localhost:8183/allMatchsProprioAppart/' + this.userConnect.id).subscribe({
      next: (data) => {
        this.matchsAppart = data;
        console.log(this.matchsAppart)
      },
      error: (err) => { console.log(err); }
    })
  };


  onNoClick(): void {
    this.dialogRef.close();

  }
}
