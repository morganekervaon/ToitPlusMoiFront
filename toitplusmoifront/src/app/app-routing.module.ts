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
import { ModificationdossierComponent } from './modificationdossier/modificationdossier.component';
import { MainProprioComponent } from './main-proprio/main-proprio.component';
import { RechercheLocataireComponent } from './recherche-locataire/recherche-locataire.component';
import { MenuComponent } from './menu/menu.component';
import { ProfilProprioComponent } from './profil-proprio/profil-proprio.component';
import { AjoutmaisonComponent } from './ajoutmaison/ajoutmaison.component';
import { MatchsComponent } from './matchs/matchs.component';
import { AuthguarproprioService } from './authguarproprio.service';
import { AuthgardlocaService } from './authgardloca.service';
import { MatchProprioComponent } from './match-proprio/match-proprio.component';

const routes: Routes = [
  { path: 'ajoutmaison', canActivate: [AuthguarproprioService], component: AjoutmaisonComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'profil', canActivate: [AuthgardService], component: ProfilComponent },
  { path: 'ajoutbien', canActivate: [AuthguarproprioService], component: AjoutbienComponent },
  { path: 'filtre', canActivate: [AuthgardlocaService], component: FiltreComponent },
  { path: 'main', canActivate: [AuthgardlocaService], component: MainComponent },
  { path: 'searchMaison', canActivate: [AuthgardlocaService], component: RechercheMaisonComponent },
  { path: 'searchAppart', canActivate: [AuthgardlocaService], component: RechercheAppartComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'dossier', canActivate: [AuthgardlocaService], component: DossierComponent },
  { path: 'filtreModif', canActivate: [AuthgardlocaService], component: FiltreModifComponent },
  { path: 'modifdossier', canActivate: [AuthgardlocaService], component: ModificationdossierComponent },
  { path: 'mainProprio', canActivate: [AuthguarproprioService], component: MainProprioComponent },
  { path: 'searchLocataire', canActivate: [AuthguarproprioService], component: RechercheLocataireComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'profilProprio', canActivate: [AuthguarproprioService], component: ProfilProprioComponent },
  { path: 'matchs', canActivate: [AuthgardlocaService], component: MatchsComponent },
  { path: 'matchsProprio', canActivate: [AuthguarproprioService], component: MatchProprioComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
