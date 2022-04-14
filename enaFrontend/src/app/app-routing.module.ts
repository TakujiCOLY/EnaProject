import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ClasseGradeComponent } from './classe-grade/classe-grade.component';
import { ConsulterDossierComponent } from './consulter-dossier/consulter-dossier.component';
import { CorpsComponent } from './corps/corps.component';
import { CreerDossierComponent } from './creer-dossier/creer-dossier.component';
import { CycleComponent } from './cycle/cycle.component';
import { EchelonComponent } from './echelon/echelon.component';
import { EtatValidationComponent } from './etat-validation/etat-validation.component';
import { HierarchieComponent } from './hierarchie/hierarchie.component';
import { HomeComponent } from './home/home.component';
import { MajDossierComponent } from './maj-dossier/maj-dossier.component';
import { ParametreComponent } from './parametre/parametre.component';
import { PaysComponent } from './pays/pays.component';
import { PromotionComponent } from './promotion/promotion.component';
import { RegionComponent } from './region/region.component';
import { SectionComponent } from './section/section.component';
import { StatutComponent } from './statut/statut.component';
import { TraiterDossierComponent } from './traiter-dossier/traiter-dossier.component';
import { VilleComponent } from './ville/ville.component';
import { VoieAccesComponent } from './voie-acces/voie-acces.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
      { path: 'accueil', component: AccueilComponent },
      {
        path: 'parametres', component: ParametreComponent, children: [
          { path: 'classeGrades', component: ClasseGradeComponent },
          { path: 'echelons', component: EchelonComponent },
          { path: 'corps', component: CorpsComponent },
          { path: 'cycles', component: CycleComponent },
          { path: 'etatValidations', component: EtatValidationComponent },
          { path: 'hierarchies', component: HierarchieComponent },
          { path: 'pays', component: PaysComponent },
          { path: 'promotions', component: PromotionComponent },
          { path: 'regions', component: RegionComponent },
          { path: 'sections', component: SectionComponent },
          { path: 'statuts', component: StatutComponent },
          { path: 'villes', component: VilleComponent },
          { path: 'voieAcces', component: VoieAccesComponent },
        ]
      },
      { path: 'creerDossier', component: CreerDossierComponent },
      { path: 'updateDossier', component: MajDossierComponent },
      { path: 'traiterDossier', component: TraiterDossierComponent },
      { path: 'consulterDossier', component: ConsulterDossierComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
