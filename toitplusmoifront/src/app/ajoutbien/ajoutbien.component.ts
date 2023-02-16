import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-ajoutbien',
  templateUrl: './ajoutbien.component.html',
  styleUrls: ['./ajoutbien.component.css']
})

export class AjoutbienComponent implements OnInit {
  meuble: any;
  classNRJ: any;
  surface: any;
  jardin: any;/**/
  parking: any;/**/
  cave: any;/**/
  balcon: any;/**/
  salleEau: any;/**/
  status: any;
  Dispo: any;
  nbchambres: any;
  etages: any;
  prix: any;
  date: any;
  transport: any;
  exposition: any;
  machineALaver: any;/**/
  laveVaisselle: any;/**/
  accessibilite: any;/**/


  constructor(private http: HttpClient, private route: Router, private authService: AuthService) { }
  public userConnect = this.authService.getUserConnect();
  ngOnInit(): void { }
  createAppart(val: any) {
    val.proprio = this.userConnect;
    /*affiche le proprio dans la console */
    console.log(val);

    this.http.post('http://localhost:8183/bien', val).subscribe({
      next: (data) => {
        console.log(data);
        this.route.navigateByUrl('home');
      },
      error: (err) => { console.log(err); }
    });

  }
}
