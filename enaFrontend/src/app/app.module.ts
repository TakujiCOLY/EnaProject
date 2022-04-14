import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ParametreComponent } from './parametre/parametre.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ClasseGradeComponent } from './classe-grade/classe-grade.component';
import { EchelonComponent } from './echelon/echelon.component';
import { CorpsComponent } from './corps/corps.component';
import { CycleComponent } from './cycle/cycle.component';
import { EtatValidationComponent } from './etat-validation/etat-validation.component';
import { HierarchieComponent } from './hierarchie/hierarchie.component';
import { PaysComponent } from './pays/pays.component';
import { PromotionComponent } from './promotion/promotion.component';
import { RegionComponent } from './region/region.component';
import { SectionComponent } from './section/section.component';
import { StatutComponent } from './statut/statut.component';
import { VilleComponent } from './ville/ville.component';
import { VoieAccesComponent } from './voie-acces/voie-acces.component';
import { CreerDossierComponent } from './creer-dossier/creer-dossier.component';
import { MajDossierComponent } from './maj-dossier/maj-dossier.component';
import { ConsulterDossierComponent } from './consulter-dossier/consulter-dossier.component';
import { TraiterDossierComponent } from './traiter-dossier/traiter-dossier.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParametreComponent,
    AccueilComponent,
    ClasseGradeComponent,
    EchelonComponent,
    CorpsComponent,
    CycleComponent,
    EtatValidationComponent,
    HierarchieComponent,
    PaysComponent,
    PromotionComponent,
    RegionComponent,
    SectionComponent,
    StatutComponent,
    VilleComponent,
    VoieAccesComponent,
    CreerDossierComponent,
    MajDossierComponent,
    ConsulterDossierComponent,
    TraiterDossierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
