import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css']
})
export class FiltreComponent implements OnInit {
  type: any = [];
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

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {

  }

  paramFiltre(val: any) {
    console.log(val);
    // this.dateDispo.toISOString().split("T")[0];
    this.http.post('http://localhost:8183/filtre', val).subscribe({
      next: (data) => {
        console.log(data);
        this.route.navigateByUrl('profil')
      },
      error: (err) => { console.log(err); }
    })
  }
}
