import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent implements OnInit {
  constructor(private http: HttpClient, private route: Router, private authService : AuthService) {}
  public userConnect=this.authService.getUserConnect();
  ngOnInit(): void {
  }
  
  saveDossier(val: any){
    val.locataire=this.userConnect;
    console.log(val);
    this.http.post('http://localhost:8183/registerdossier', val).subscribe({
      next: (data) => {
        console.log(data);
        this.route.navigateByUrl('profil')
      },
      error: (err) => { console.log(err); }
    });
  }

}
