import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css']
})
export class FiltreComponent implements OnInit {
  codePostaux = new FormControl('');
  CPList: string[] = ['75001', '75002', '75003', '75004', '75005', '75006'];

  meuble: any;
  ascenseur: any;
  machineALaver: any;
  laveVaisselle: any;
  jardin: any;
  parking: any;
  cave: any;
  balcon: any;
  salleEau: any;
  status: any;
  dateDispo: any;

  constructor(private http: HttpClient, private route: Router, private authService: AuthService, public dialogRef: MatDialogRef<FiltreComponent>,
  ) { }
  public userConnect = this.authService.getUserConnect();
  ngOnInit(): void {

  }

  paramFiltre(val: any) {
    val.user = this.userConnect;
    console.log(val);
    this.http.post('http://localhost:8183/filtre', val).subscribe({
      next: (data) => {
        console.log(data);
        this.route.navigateByUrl('profil')
      },
      error: (err) => { console.log(err); }
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
