"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreerDossierComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var adresse_1 = require("../models/adresse");
var dossier_1 = require("../models/dossier");
var eleve_1 = require("../models/eleve");
var eleve_cycle_1 = require("../models/eleve-cycle");
var eleve_promotion_1 = require("../models/eleve-promotion");
var eleve_section_1 = require("../models/eleve-section");
var telephone_1 = require("../models/telephone");
var urgence_1 = require("../models/urgence");
var CreerDossierComponent = /** @class */ (function () {
    function CreerDossierComponent(api, fb, dossierService, eleveService) {
        this.api = api;
        this.fb = fb;
        this.dossierService = dossierService;
        this.eleveService = eleveService;
    }
    CreerDossierComponent.prototype.ngOnInit = function () {
        this.getData();
        this.eleves = [];
        this.submitted = false;
        this.editForm = this.fb.group({
            voieAcces: ['', forms_1.Validators.required],
            cycle: ['', forms_1.Validators.required],
            section: [''],
            typeEleve: ['', forms_1.Validators.required],
            matricule: [''],
            numConcours: [''],
            promotion: ['', forms_1.Validators.required],
            prenom: ['', forms_1.Validators.required],
            nom: ['', forms_1.Validators.required],
            dateNaiss: ['', forms_1.Validators.required],
            sexe: ['', forms_1.Validators.required],
            nationalite: ['', forms_1.Validators.required],
            nci: ['', forms_1.Validators.required],
            pays: [''],
            region: [''],
            ville: [''],
            lieuNaiss: ['', forms_1.Validators.required],
            prenomPere: ['', forms_1.Validators.required],
            prenomMere: ['', forms_1.Validators.required],
            nomMere: ['', forms_1.Validators.required],
            nomPere: ['', forms_1.Validators.required],
            aDakar: [''],
            horsDakar: [''],
            emailPrive: ['', forms_1.Validators.required],
            emailPro: [''],
            mobile1: ['', forms_1.Validators.required],
            mobile2: [''],
            mobile3: [''],
            domicile: [''],
            prenomUrgence: ['', forms_1.Validators.required],
            nomUrgence: ['', forms_1.Validators.required],
            telephoneUrgence: ['', forms_1.Validators.required],
            adresseUrgence: ['', forms_1.Validators.required]
        });
        this.ipp = 10;
        this.p = 1;
    };
    CreerDossierComponent.prototype.getData = function () {
        var _this = this;
        this.api.findAllVoieAcces().subscribe(function (response) { _this.voies = response; }, function (error) { console.log(error); });
        this.api.findAllCycle().subscribe(function (response) { _this.cycles = response; }, function (error) { console.log(error); });
        this.api.findAllSection().subscribe(function (response) { _this.sections = response; }, function (error) { console.log(error); });
        this.api.findAllPromotion().subscribe(function (response) { _this.promotions = response; }, function (error) { console.log(error); });
        this.api.findAllPays().subscribe(function (response) { _this.pays = response; }, function (error) { console.log(error); });
    };
    CreerDossierComponent.prototype.getRegions = function (event) {
        var _this = this;
        if (event.target.value != '') {
            this.api.findRegionsByPaysId(parseInt(event.target.value)).subscribe(function (response) { _this.regions = response; }, function (error) { console.log(error); });
        }
    };
    CreerDossierComponent.prototype.getVilles = function (event) {
        var _this = this;
        if (event.target.value != '') {
            this.api.findVillesByRegionId(parseInt(event.target.value)).subscribe(function (response) { _this.villes = response; }, function (error) { console.log(error); });
        }
    };
    Object.defineProperty(CreerDossierComponent.prototype, "f", {
        get: function () { return this.editForm.controls; },
        enumerable: false,
        configurable: true
    });
    CreerDossierComponent.prototype.addDossier = function () {
        var _this = this;
        this.submitted = true;
        if (this.editForm.invalid)
            return;
        var dossier = new dossier_1.Dossier();
        var eleve = new eleve_1.Eleve();
        var adresse = new adresse_1.Adresse();
        var urgence = new urgence_1.Urgence();
        var telephone = new telephone_1.Telephone();
        var eleveCycle = new eleve_cycle_1.EleveCycle();
        var elevePromotion = new eleve_promotion_1.ElevePromotion();
        var eleveSection = new eleve_section_1.EleveSection();
        eleve.nom = this.editForm.value.nom;
        eleve.prenom = this.editForm.value.prenom;
        eleve.typeEleve = this.editForm.value.typeEleve;
        eleve.sexe = this.editForm.value.sexe;
        eleve.dateNaiss = new Date(this.editForm.value.dateNaiss);
        eleve.nationalite = this.editForm.value.nationalite;
        eleve.nci = this.editForm.value.nci;
        eleve.lieuNaiss = this.editForm.value.lieuNaiss;
        eleve.prenomMere = this.editForm.value.prenomMere;
        eleve.prenomPere = this.editForm.value.prenomPere;
        eleve.nomMere = this.editForm.value.nomMere;
        eleve.nomPere = this.editForm.value.nomPere;
        eleve.matricule = this.editForm.value.matricule;
        eleve.numDosCandidat = this.editForm.value.numConcours;
        eleve.ville = parseInt(this.editForm.value.ville);
        eleve.emailPrive = this.editForm.value.emailPrive;
        eleve.emailPro = this.editForm.value.emailPro;
        dossier.voieAcces = parseInt(this.editForm.value.voieAcces);
        elevePromotion.promotion = parseInt(this.editForm.value.promotion);
        if (this.editForm.value.section != '') {
            eleveSection.section = parseInt(this.editForm.value.section);
        }
        eleveCycle.cycle = parseInt(this.editForm.value.cycle);
        adresse.dakar = this.editForm.value.aDakar;
        adresse.horsDakar = this.editForm.value.horsDakar;
        telephone.mobile1 = this.editForm.value.mobile1;
        telephone.mobile2 = this.editForm.value.mobile2;
        telephone.mobile3 = this.editForm.value.mobile3;
        telephone.domicile = this.editForm.value.domicile;
        urgence.prenom = this.editForm.value.prenomUrgence;
        urgence.nom = this.editForm.value.nomUrgence;
        urgence.adresse = this.editForm.value.adresseUrgence;
        urgence.telephone = this.editForm.value.telephoneUrgence;
        this.eleveService.add(eleve, '/eleves/add').subscribe(function (response) {
            console.log(response);
            var idEleve = response.id;
            dossier.eleve = idEleve;
            elevePromotion.eleve = idEleve;
            eleveSection.eleve = idEleve;
            eleveCycle.eleve = idEleve;
            adresse.eleve = idEleve;
            telephone.eleve = idEleve;
            urgence.eleve = idEleve;
            _this.dossierService.add(dossier, '/dossiers/add').subscribe(function (response8) { }, function (error) { console.log(error); });
            _this.eleveService.add(elevePromotion, '/elevePromotions/add').subscribe(function (response1) { }, function (error) { console.log(error); });
            _this.eleveService.add(eleveSection, '/eleveSections/add').subscribe(function (response2) { }, function (error) { console.log(error); });
            _this.eleveService.add(eleveCycle, '/eleveCycles/add').subscribe(function (response3) { }, function (error) { console.log(error); });
            _this.eleveService.add(adresse, '/adresses/add').subscribe(function (response4) { }, function (error) { console.log(error); });
            _this.eleveService.add(telephone, '/telephones/add').subscribe(function (response5) { }, function (error) { console.log(error); });
            _this.eleveService.add(urgence, '/urgences/add').subscribe(function (response6) { }, function (error) { console.log(error); });
            _this.eleveService.findById(idEleve).subscribe(function (response7) { _this.eleves.push(response7); }, function (error) { console.log(error); });
            _this.effacerChamps();
        }, function (error) { console.log(error); });
    };
    CreerDossierComponent.prototype.effacerChamps = function () {
        this.submitted = false;
        this.editForm.patchValue({
            voieAcces: '',
            typeEleve: '',
            numConcours: '',
            cycle: '',
            matricule: '',
            promotion: '',
            section: '',
            prenom: '',
            nom: '',
            dateNaiss: '',
            sexe: '',
            nationalite: '',
            nci: '',
            pays: '',
            region: '',
            ville: '',
            lieuNaiss: '',
            prenomPere: '',
            prenomMere: '',
            nomMere: '',
            nomPere: '',
            aDakar: '',
            horsDakar: '',
            emailPrive: '',
            emailPro: '',
            mobile1: '',
            mobile2: '',
            mobile3: '',
            domicile: '',
            prenomUrgence: '',
            nomUrgence: '',
            telephoneUrgence: '',
            adresseUrgence: ''
        });
    };
    CreerDossierComponent = __decorate([
        core_1.Component({
            selector: 'app-creer-dossier',
            templateUrl: './creer-dossier.component.html',
            styleUrls: ['./creer-dossier.component.scss']
        })
    ], CreerDossierComponent);
    return CreerDossierComponent;
}());
exports.CreerDossierComponent = CreerDossierComponent;
