import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css']
})
export class FiltreComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {

  }

  paramFiltre(val: any) {
    let filtre;
    console.log(filtre);
    this.http.post('http://localhost:8183/filtre', filtre).subscribe({
      next: (data) => {
        console.log(data);
        this.route.navigateByUrl('profil')
      },
      error: (err) => { console.log(err); }
    })
  }
}
