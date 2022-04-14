"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var accueil_component_1 = require("./accueil/accueil.component");
var classe_grade_component_1 = require("./classe-grade/classe-grade.component");
var consulter_dossier_component_1 = require("./consulter-dossier/consulter-dossier.component");
var corps_component_1 = require("./corps/corps.component");
var creer_dossier_component_1 = require("./creer-dossier/creer-dossier.component");
var cycle_component_1 = require("./cycle/cycle.component");
var echelon_component_1 = require("./echelon/echelon.component");
var etat_validation_component_1 = require("./etat-validation/etat-validation.component");
var hierarchie_component_1 = require("./hierarchie/hierarchie.component");
var home_component_1 = require("./home/home.component");
var maj_dossier_component_1 = require("./maj-dossier/maj-dossier.component");
var parametre_component_1 = require("./parametre/parametre.component");
var pays_component_1 = require("./pays/pays.component");
var promotion_component_1 = require("./promotion/promotion.component");
var region_component_1 = require("./region/region.component");
var section_component_1 = require("./section/section.component");
var statut_component_1 = require("./statut/statut.component");
var traiter_dossier_component_1 = require("./traiter-dossier/traiter-dossier.component");
var ville_component_1 = require("./ville/ville.component");
var voie_acces_component_1 = require("./voie-acces/voie-acces.component");
var routes = [
    {
        path: '', component: home_component_1.HomeComponent, children: [
            { path: '', redirectTo: 'accueil', pathMatch: 'full' },
            { path: 'accueil', component: accueil_component_1.AccueilComponent },
            {
                path: 'parametres', component: parametre_component_1.ParametreComponent, children: [
                    { path: 'classeGrades', component: classe_grade_component_1.ClasseGradeComponent },
                    { path: 'echelons', component: echelon_component_1.EchelonComponent },
                    { path: 'corps', component: corps_component_1.CorpsComponent },
                    { path: 'cycles', component: cycle_component_1.CycleComponent },
                    { path: 'etatValidations', component: etat_validation_component_1.EtatValidationComponent },
                    { path: 'hierarchies', component: hierarchie_component_1.HierarchieComponent },
                    { path: 'pays', component: pays_component_1.PaysComponent },
                    { path: 'promotions', component: promotion_component_1.PromotionComponent },
                    { path: 'regions', component: region_component_1.RegionComponent },
                    { path: 'sections', component: section_component_1.SectionComponent },
                    { path: 'statuts', component: statut_component_1.StatutComponent },
                    { path: 'villes', component: ville_component_1.VilleComponent },
                    { path: 'voieAcces', component: voie_acces_component_1.VoieAccesComponent },
                ]
            },
            { path: 'creerDossier', component: creer_dossier_component_1.CreerDossierComponent },
            { path: 'updateDossier', component: maj_dossier_component_1.MajDossierComponent },
            { path: 'traiterDossier', component: traiter_dossier_component_1.TraiterDossierComponent },
            { path: 'consulterDossier', component: consulter_dossier_component_1.ConsulterDossierComponent }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
