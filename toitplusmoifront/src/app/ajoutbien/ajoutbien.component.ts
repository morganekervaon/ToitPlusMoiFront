import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutbien',
  templateUrl: './ajoutbien.component.html',
  styleUrls: ['./ajoutbien.component.css']
})
export class AjoutbienComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router) { }
  ngOnInit(): void { }
  createAppart(val: any) {
    let user = { id: 2 };
    let appart = {
      meuble: val.meuble,
      classNRJ: val.classNRJ,
      surface: val.surface,
      nbchambres: val.nbchambres,
      nbetages: val.nbetages,
      prix: val.prix,
      date: val.date,
      transport: val.transport,
      exposition: val.exposition,
      machinealaver: val.machinealaver,
      jardin: val.jardin,
      cave: val.cave,
      balcon: val.balcon,
      laveVaisselle: val.laveVaisselle,
      salleEau: val.salleEau,
      accessibilite: val.accessibilite

    };



    console.log('l envois', appart);/*cette ligne sert à faire quand on inspecte le site internet,
     voir dans la console si contenu prend une valeur*/

    this.http.post('http://localhost:8183/ajoutbien', appart).subscribe({
      next: (data) => {
        console.log(data);
        this.route.navigateByUrl('home');
      },
      error: (err) => { console.log(err); }
    });

  }
}
