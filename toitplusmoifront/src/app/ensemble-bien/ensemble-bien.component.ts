import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-ensemble-bien',
  templateUrl: './ensemble-bien.component.html',
  styleUrls: ['./ensemble-bien.component.css']
})
export class EnsembleBienComponent implements OnInit {

  bienA: any;
  bienM: any;
  constructor(private http: HttpClient, private route: Router, private authService: AuthService, public dialogRefBien: MatDialogRef<EnsembleBienComponent>) { }
  public userConnect = this.authService.getUserConnect();

  ngOnInit(): void {

    this.http.get('http://localhost:8183/appart/proprio/' + this.userConnect.id).subscribe({
      next: (data) => {
        this.bienA = data;
        console.log(this.bienA)
      },
      error: (err) => { console.log(err); }
    })

    this.http.get('http://localhost:8183/maison/proprio/' + this.userConnect.id).subscribe({
      next: (data) => {
        this.bienM = data;
        console.log(this.bienM)
      },
      error: (err) => { console.log(err); }
    })
  };

  onNoClick(): void {
    this.dialogRefBien.close();
  }
}
