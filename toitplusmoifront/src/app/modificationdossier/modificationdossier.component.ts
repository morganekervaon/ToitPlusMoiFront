import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-modificationdossier',
  templateUrl: './modificationdossier.component.html',
  styleUrls: ['./modificationdossier.component.css']
})
export class ModificationdossierComponent implements OnInit {
  doss: any;
  constructor(private http: HttpClient, private route: Router, private authService: AuthService) {}
  public userConnect = this.authService.getUserConnect();

  ngOnInit(): void{
    this.http.get('http://localhost:8183/dossier/user/' + this.userConnect.id).subscribe({
      next: (data) => {
        this.doss=data;
        console.log('id est', this.doss);
      },
      error: (err) => {console.log(err);}
    });
  }

  modifDossier(doss: any) {
    doss.locataire = this.userConnect;
    this.http.put('http://localhost:8183/dossier/' + this.doss.id_dossier, doss).subscribe({
      next: (data) => {
        console.log(data);
        this.route.navigateByUrl('profil')
      },
      error: (err) => { console.log(err)}
    });
    
  }
}
