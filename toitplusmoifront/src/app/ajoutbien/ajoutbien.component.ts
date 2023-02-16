import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSelect } from '@angular/material/select';


@Component({
  selector: 'app-ajoutbien',
  templateUrl: './ajoutbien.component.html',
  styleUrls: ['./ajoutbien.component.css']
})

export class AjoutbienComponent implements OnInit {


  constructor(private http: HttpClient, private route: Router, private authService: AuthService) { }
  public userConnect = this.authService.getUserConnect();
  ngOnInit(): void { }

  adresse_id: any;
  createAppart(val: any) {
    val.proprio = this.userConnect;
    val.adresse = this.adresse_id;

    /*affiche le proprio dans la console */
    console.log(val);

    this.http.get('http://localhost:8183/appartement', val).subscribe({

      next: (data) => {
        console.log(data);
        this.route.navigateByUrl('accueil')
      },
      error: (err) => { console.log(err); }
    });
  }
  createAdresse(prout: any) {
    this.http.post('http://localhost:8183/adresse', prout).subscribe({
      next: (data) => {
        console.log(data);
      }
    });

    this.adresse_id = this.http.get('http://localhost:8183/adresse' + prout.numero + '/' + prout.voie + '/' + prout.ville).subscribe({
      next: (data) => {
        console.log(data);
      }
    });

  }


}




