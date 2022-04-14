"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VoieAccesComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var voie_acces_1 = require("../models/voie-acces");
var VoieAccesComponent = /** @class */ (function () {
    function VoieAccesComponent(api, fb) {
        this.api = api;
        this.fb = fb;
    }
    VoieAccesComponent.prototype.ngOnInit = function () {
        this.searchVoieForm = this.fb.group({
            nom: [''],
            active: ['']
        });
        this.editVoieForm = this.fb.group({
            id: [''],
            nom: ['', forms_1.Validators.required],
            active: ['', forms_1.Validators.required]
        });
        this.ipp = 10;
        this.p = 1;
        this.submitted = false;
        this.submittedSearch = false;
        this.getData();
    };
    VoieAccesComponent.prototype.getData = function () {
        var _this = this;
        this.api.findAllVoieAcces().subscribe(function (response) {
            _this.voies = response;
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(VoieAccesComponent.prototype, "f", {
        get: function () { return this.editVoieForm.controls; },
        enumerable: false,
        configurable: true
    });
    VoieAccesComponent.prototype.addVoie = function () {
        var _this = this;
        this.submitted = true;
        if (this.editVoieForm.invalid)
            return;
        var voie = new voie_acces_1.VoieAcces();
        voie.nom = this.editVoieForm.value.nom;
        voie.active = Boolean(parseInt(this.editVoieForm.value.active));
        if (this.editVoieForm.value.id == '') {
            this.api.add(voie, '/v1/voieAcceses/add').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            voie.id = parseInt(this.editVoieForm.value.id);
            this.api.update(voie, '/v1/voieAcceses/update').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
    };
    VoieAccesComponent.prototype.searchVoie = function () {
        if (this.searchVoieForm.value.nom == '' && this.searchVoieForm.value.active == '') {
            this.submittedSearch = true;
            return;
        }
        var voie = new voie_acces_1.VoieAcces();
        voie.nom = this.searchVoieForm.value.nom;
        if (this.searchVoieForm.value.active != '')
            voie.active = Boolean(parseInt(this.searchVoieForm.value.active));
    };
    VoieAccesComponent.prototype.getVoie = function (voie) {
        this.editVoieForm.patchValue({
            id: voie.id.toString(),
            nom: voie.nom,
            active: (voie.active == true) ? '1' : '0'
        });
    };
    VoieAccesComponent.prototype.effacerChamps = function () {
        this.editVoieForm.patchValue({
            id: '',
            nom: '',
            active: ''
        });
        this.submitted = false;
    };
    VoieAccesComponent.prototype.effacerSearchChamps = function () {
        this.searchVoieForm.patchValue({
            nom: '',
            active: ''
        });
        this.submittedSearch = false;
    };
    VoieAccesComponent.prototype.getIpp = function (nombre) {
        this.ipp = parseInt(nombre);
    };
    VoieAccesComponent = __decorate([
        core_1.Component({
            selector: 'app-voie-acces',
            templateUrl: './voie-acces.component.html',
            styleUrls: ['./voie-acces.component.scss']
        })
    ], VoieAccesComponent);
    return VoieAccesComponent;
}());
exports.VoieAccesComponent = VoieAccesComponent;
