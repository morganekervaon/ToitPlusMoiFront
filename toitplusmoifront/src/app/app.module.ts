import { NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfilComponent } from './profil/profil.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutbienComponent } from './ajoutbien/ajoutbien.component';
import { FiltreComponent } from './filtre/filtre.component';
import { MainComponent } from './main/main.component';
import { DossierComponent } from './dossier/dossier.component';
import { FiltreModifComponent } from './filtre-modif/filtre-modif.component';
import { RechercheMaisonComponent } from './recherche-maison/recherche-maison.component';
import { RechercheAppartComponent } from './recherche-appart/recherche-appart.component';
import { ModificationdossierComponent } from './modificationdossier/modificationdossier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MainProprioComponent } from './main-proprio/main-proprio.component';
import { RechercheLocataireComponent } from './recherche-locataire/recherche-locataire.component';
import { MenuComponent } from './menu/menu.component';
import { ProfilProprioComponent } from './profil-proprio/profil-proprio.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    ProfilComponent,
    AccueilComponent,
    AjoutbienComponent,
    FiltreComponent,
    MainComponent,
    DossierComponent,
    ModificationdossierComponent,
    FiltreModifComponent,
    RechercheAppartComponent,
    RechercheMaisonComponent,
    MainProprioComponent,
    RechercheLocataireComponent,
    MenuComponent,
    ProfilProprioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatSelectModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
