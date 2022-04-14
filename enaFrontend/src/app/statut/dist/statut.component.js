"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StatutComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var statut_1 = require("../models/statut");
var StatutComponent = /** @class */ (function () {
    function StatutComponent(api, fb) {
        this.api = api;
        this.fb = fb;
    }
    StatutComponent.prototype.ngOnInit = function () {
        this.searchStatutForm = this.fb.group({
            nom: [''],
            active: ['']
        });
        this.editStatutForm = this.fb.group({
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
    StatutComponent.prototype.getData = function () {
        var _this = this;
        this.api.findAllStatut().subscribe(function (response) {
            _this.statuts = response;
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(StatutComponent.prototype, "f", {
        get: function () { return this.editStatutForm.controls; },
        enumerable: false,
        configurable: true
    });
    StatutComponent.prototype.addStatut = function () {
        var _this = this;
        this.submitted = true;
        if (this.editStatutForm.invalid)
            return;
        var statut = new statut_1.Statut();
        statut.nom = this.editStatutForm.value.nom;
        statut.active = Boolean(parseInt(this.editStatutForm.value.active));
        if (this.editStatutForm.value.id == '') {
            this.api.add(statut, '/v1/statuts/add').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            statut.id = parseInt(this.editStatutForm.value.id);
            this.api.update(statut, '/v1/statuts/update').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
    };
    StatutComponent.prototype.searchStatut = function () {
        if (this.searchStatutForm.value.nom == '' && this.searchStatutForm.value.active == '') {
            this.submittedSearch = true;
            return;
        }
        var statut = new statut_1.Statut();
        statut.nom = this.searchStatutForm.value.nom;
        if (this.searchStatutForm.value.active != '')
            statut.active = Boolean(parseInt(this.searchStatutForm.value.active));
    };
    StatutComponent.prototype.getStatut = function (statut) {
        this.editStatutForm.patchValue({
            id: statut.id.toString(),
            nom: statut.nom,
            active: (statut.active == true) ? '1' : '0'
        });
    };
    StatutComponent.prototype.effacerChamps = function () {
        this.editStatutForm.patchValue({
            id: '',
            nom: '',
            active: ''
        });
        this.submitted = false;
    };
    StatutComponent.prototype.effacerSearchChamps = function () {
        this.searchStatutForm.patchValue({
            nom: '',
            active: ''
        });
        this.submittedSearch = false;
    };
    StatutComponent.prototype.getIpp = function (nombre) {
        this.ipp = parseInt(nombre);
    };
    StatutComponent = __decorate([
        core_1.Component({
            selector: 'app-statut',
            templateUrl: './statut.component.html',
            styleUrls: ['./statut.component.scss']
        })
    ], StatutComponent);
    return StatutComponent;
}());
exports.StatutComponent = StatutComponent;
