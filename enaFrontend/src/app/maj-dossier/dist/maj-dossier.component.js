"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MajDossierComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var MajDossierComponent = /** @class */ (function () {
    function MajDossierComponent(api, fb, modal, dossierService, eleveService, pipe) {
        this.api = api;
        this.fb = fb;
        this.modal = modal;
        this.dossierService = dossierService;
        this.eleveService = eleveService;
        this.pipe = pipe;
    }
    MajDossierComponent.prototype.ngOnInit = function () {
        this.getData();
        this.searchForm = this.fb.group({
            matricule: [''],
            prenom: [''],
            nom: [''],
            promotion: [''],
            etatValidation: [''],
            cycle: [''],
            section: ['']
        });
        this.submitted = false;
        this.ipp = 10;
        this.p = 1;
        this.initializeForm();
    };
    MajDossierComponent.prototype.initializeForm = function () {
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
    };
    MajDossierComponent.prototype.initializeDocComplementaire = function () {
        this.docComplementaireForm = this.fb.group({
            idDossier: [''],
            idNationalite: [''],
            numeroNationalite: ['', forms_1.Validators.required],
            courAppelNationalite: [''],
            tribunalInstanceNationalite: [''],
            presidentInstanceNationalite: [''],
            dateNationalite: [''],
            idCasier: [''],
            numeroCasier: ['', forms_1.Validators.required],
            courAppelCasier: [''],
            tribunalInstanceCasier: [''],
            presidentInstanceCasier: [''],
            dateCasier: [''],
            idVisite: [''],
            medecin: ['', forms_1.Validators.required],
            examensCliniques: ['', forms_1.Validators.required],
            resultats: ['', forms_1.Validators.required],
            lieuVisite: ['', forms_1.Validators.required],
            dateVisite: ['', forms_1.Validators.required],
            medecinContreVisite: ['', forms_1.Validators.required],
            resultatsContreVisite: ['', forms_1.Validators.required],
            dateContreVisite: ['', forms_1.Validators.required],
            idEngagement: [''],
            numeroEngagement: ['', forms_1.Validators.required],
            legislation: [''],
            dureeEngagement: [''],
            dateLegislation: [''],
            dateEngagement: ['']
        });
    };
    MajDossierComponent.prototype.updateForm = function (eleve) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.getRegions1(eleve.ville.region.pays.id.toString());
        this.getVilles1(eleve.ville.region.id.toString());
        this.editForm.patchValue({
            voieAcces: (_a = eleve.dossiers[eleve.dossiers.length - 1]) === null || _a === void 0 ? void 0 : _a.voieAcces.id.toString(),
            cycle: (_b = eleve.eleveCycles[eleve.eleveCycles.length - 1]) === null || _b === void 0 ? void 0 : _b.cycle.id.toString(),
            section: (eleve.eleveSections.length > 0) ? eleve.eleveSections[eleve.eleveSections.length - 1].section.id.toString() : '',
            typeEleve: eleve.typeEleve,
            matricule: eleve.matricule,
            numConcours: eleve.numDosCandidat,
            promotion: (eleve.elevePromotions.length > 0) ? eleve.elevePromotions[eleve.elevePromotions.length - 1].promotion.id.toString() : '',
            prenom: eleve.prenom,
            nom: eleve.nom,
            dateNaiss: this.pipe.transform(eleve.dateNaiss, 'yyyy-MM-dd'),
            sexe: eleve.sexe,
            nationalite: eleve.nationalite,
            nci: eleve.nci,
            pays: eleve.ville.region.pays.id.toString(),
            region: eleve.ville.region.id.toString(),
            ville: eleve.ville.id.toString(),
            lieuNaiss: eleve.lieuNaiss,
            prenomPere: eleve.prenomPere,
            prenomMere: eleve.prenomMere,
            nomMere: eleve.nomMere,
            nomPere: eleve.nomPere,
            aDakar: (_c = eleve.adresses[eleve.adresses.length - 1]) === null || _c === void 0 ? void 0 : _c.dakar,
            horsDakar: (_d = eleve.adresses[eleve.adresses.length - 1]) === null || _d === void 0 ? void 0 : _d.horsDakar,
            emailPrive: eleve.emailPrive,
            emailPro: eleve.emailPro,
            mobile1: (_e = eleve.telephones[eleve.telephones.length - 1]) === null || _e === void 0 ? void 0 : _e.mobile1,
            mobile2: (_f = eleve.telephones[eleve.telephones.length - 1]) === null || _f === void 0 ? void 0 : _f.mobile2,
            mobile3: (_g = eleve.telephones[eleve.telephones.length - 1]) === null || _g === void 0 ? void 0 : _g.mobile3,
            domicile: (_h = eleve.telephones[eleve.telephones.length - 1]) === null || _h === void 0 ? void 0 : _h.domicile,
            prenomUrgence: (_j = eleve.urgences[eleve.urgences.length - 1]) === null || _j === void 0 ? void 0 : _j.prenom,
            nomUrgence: (_k = eleve.urgences[eleve.urgences.length - 1]) === null || _k === void 0 ? void 0 : _k.nom,
            telephoneUrgence: (_l = eleve.urgences[eleve.urgences.length - 1]) === null || _l === void 0 ? void 0 : _l.telephone,
            adresseUrgence: (_m = eleve.urgences[eleve.urgences.length - 1]) === null || _m === void 0 ? void 0 : _m.adresse
        });
    };
    MajDossierComponent.prototype.getData = function () {
        var _this = this;
        this.api.findAllSection().subscribe(function (response) { _this.sections = response; }, function (error) { console.log(error); });
        this.api.findAllCycle().subscribe(function (response) { _this.cycles = response; }, function (error) { console.log(error); });
        this.api.findAllPromotion().subscribe(function (response) { _this.promotions = response; }, function (error) { console.log(error); });
        this.api.findAllEtatValidation().subscribe(function (response) { _this.validations = response; }, function (error) { console.log(error); });
        this.eleveService.findAll().subscribe(function (response) { _this.eleves = response; }, function (error) { console.log(error); });
        this.api.findAllPays().subscribe(function (response) { _this.pays = response; }, function (error) { console.log(error); });
        this.api.findAllVoieAcces().subscribe(function (response) { _this.voies = response; }, function (error) { console.log(error); });
        this.api.findAllCorps().subscribe(function (response) { _this.corps = response; console.log(response); }, function (error) { console.log(error); });
        this.api.findAllClasseGrade().subscribe(function (response) { _this.classes = response; }, function (error) { console.log(error); });
        this.api.findAllStatut().subscribe(function (response) { _this.statuts = response; }, function (error) { console.log(error); });
        this.api.findAllEchelon().subscribe(function (response) { _this.echelons = response; }, function (error) { console.log(error); });
        this.api.findAllHierarchie().subscribe(function (response) { _this.hierarchies = response; }, function (error) { console.log(error); });
    };
    Object.defineProperty(MajDossierComponent.prototype, "f", {
        get: function () { return this.editForm.controls; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MajDossierComponent.prototype, "fDocComplementaire", {
        get: function () { return this.docComplementaireForm.controls; },
        enumerable: false,
        configurable: true
    });
    MajDossierComponent.prototype.getRegions = function (event) {
        var _this = this;
        if (event.target.value != '') {
            this.api.findRegionsByPaysId(parseInt(event.target.value)).subscribe(function (response) { _this.regions = response; }, function (error) { console.log(error); });
        }
    };
    MajDossierComponent.prototype.getRegions1 = function (id) {
        var _this = this;
        if (id != '') {
            this.api.findRegionsByPaysId(parseInt(id)).subscribe(function (response) { _this.regions = response; }, function (error) { console.log(error); });
        }
    };
    MajDossierComponent.prototype.getVilles = function (event) {
        var _this = this;
        if (event.target.value != '') {
            this.api.findVillesByRegionId(parseInt(event.target.value)).subscribe(function (response) { _this.villes = response; }, function (error) { console.log(error); });
        }
    };
    MajDossierComponent.prototype.getVilles1 = function (id) {
        var _this = this;
        if (id != '') {
            this.api.findVillesByRegionId(parseInt(id)).subscribe(function (response) { _this.villes = response; }, function (error) { console.log(error); });
        }
    };
    MajDossierComponent.prototype.searchEleve = function () {
        var _this = this;
        if (this.searchForm.value.matricule == '' && this.searchForm.value.prenom == '' && this.searchForm.value.nom == '' && this.searchForm.value.promotion == '' && this.searchForm.value.section == '' && this.searchForm.value.cycle == '' && this.searchForm.value.dateNaiss == '' && this.searchForm.value.etatValidation == '') {
            this.submitted = true;
            return;
        }
        this.eleveService.findEleves(this.searchForm.value).subscribe(function (response) { _this.eleves = response; }, function (error) { console.log(error); });
    };
    MajDossierComponent.prototype.getIpp = function (nombre) {
        this.ipp = parseInt(nombre);
    };
    MajDossierComponent.prototype.openUpdate = function (content, eleve) {
        this.eleve = eleve;
        this.updateForm(eleve);
        this.modal.open(content, { size: 'xl', scrollable: true });
    };
    MajDossierComponent.prototype.updateDossier = function () {
    };
    MajDossierComponent.prototype.addDocComplementaire = function () {
    };
    MajDossierComponent.prototype.getDocComplementaire = function (id) {
    };
    MajDossierComponent = __decorate([
        core_1.Component({
            selector: 'app-maj-dossier',
            templateUrl: './maj-dossier.component.html',
            styleUrls: ['./maj-dossier.component.scss']
        })
    ], MajDossierComponent);
    return MajDossierComponent;
}());
exports.MajDossierComponent = MajDossierComponent;
