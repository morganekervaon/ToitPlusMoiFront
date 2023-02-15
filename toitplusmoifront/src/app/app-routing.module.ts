import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfilComponent } from './profil/profil.component';
import { AjoutbienComponent } from './ajoutbien/ajoutbien.component';
import { FiltreComponent } from './filtre/filtre.component';
import { AuthgardService } from './authgard.service';
import { MainComponent } from './main/main.component';
import { DossierComponent } from './dossier/dossier.component';
import { FiltreModifComponent } from './filtre-modif/filtre-modif.component';
import { RechercheAppartComponent } from './recherche-appart/recherche-appart.component';
import { RechercheMaisonComponent } from './recherche-maison/recherche-maison.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'profil', canActivate: [AuthgardService], component: ProfilComponent },
  { path: 'ajoutbien', canActivate: [AuthgardService], component: AjoutbienComponent },
  { path: 'filtre', canActivate: [AuthgardService], component: FiltreComponent },
  { path: 'main', canActivate: [AuthgardService], component: MainComponent },
  { path: 'searchMaison', canActivate: [AuthgardService], component: RechercheMaisonComponent },
  { path: 'searchAppart', canActivate: [AuthgardService], component: RechercheAppartComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'dossier', canActivate: [AuthgardService], component: DossierComponent },
  { path: 'filtre-modif', canActivate: [AuthgardService], component: FiltreModifComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
