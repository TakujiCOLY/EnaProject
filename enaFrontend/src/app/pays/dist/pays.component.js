"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaysComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var pays_1 = require("../models/pays");
var PaysComponent = /** @class */ (function () {
    function PaysComponent(api, fb) {
        this.api = api;
        this.fb = fb;
    }
    PaysComponent.prototype.ngOnInit = function () {
        this.editPaysForm = this.fb.group({
            id: [''],
            nom: ['', forms_1.Validators.required],
            nationalite: ['', forms_1.Validators.required],
            active: ['', forms_1.Validators.required]
        });
        this.searchPaysForm = this.fb.group({
            nom: [''],
            nationalite: [''],
            active: ['']
        });
        this.getData();
        this.ipp = 10;
        this.p = 1;
    };
    PaysComponent.prototype.getData = function () {
        var _this = this;
        this.api.findAllPays().subscribe(function (response) {
            _this.pays = response;
        });
    };
    Object.defineProperty(PaysComponent.prototype, "f", {
        get: function () { return this.editPaysForm.controls; },
        enumerable: false,
        configurable: true
    });
    PaysComponent.prototype.addPays = function () {
        var _this = this;
        this.submitted = true;
        if (this.editPaysForm.invalid)
            return;
        var pays = new pays_1.Pays();
        pays.nom = this.editPaysForm.value.nom;
        pays.nationalite = this.editPaysForm.value.nationalite;
        pays.active = Boolean(parseInt(this.editPaysForm.value.active));
        if (this.editPaysForm.value.id == '') {
            this.api.add(pays, '/v1/payses/add').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            pays.id = parseInt(this.editPaysForm.value.id);
            this.api.update(pays, '/v1/payses/update').subscribe(function (response) {
                _this.getData();
                _this.effacerChamps();
            }, function (error) {
                console.log(error);
            });
        }
    };
    PaysComponent.prototype.searchPays = function () {
        if (this.searchPaysForm.value.nom == '' && this.searchPaysForm.value.active == '' && this.searchPaysForm.value.nationalite == '') {
            this.submittedSearch = true;
            return;
        }
        var pays = new pays_1.Pays();
        pays.nom = this.searchPaysForm.value.nom;
        pays.nationalite = this.searchPaysForm.value.nationalite;
        if (this.searchPaysForm.value.active != '')
            pays.active = this.searchPaysForm.value.active;
    };
    PaysComponent.prototype.getPays = function (pays) {
        this.editPaysForm.patchValue({
            id: pays.id.toString(),
            nom: pays.nom,
            nationalite: pays.nationalite,
            active: (pays.active == true) ? '1' : '0'
        });
    };
    PaysComponent.prototype.effacerChamps = function () {
        this.editPaysForm.patchValue({
            id: '',
            nom: '',
            nationalite: '',
            active: ''
        });
        this.submitted = false;
    };
    PaysComponent.prototype.effacerSearchChamps = function () {
        this.searchPaysForm.patchValue({
            nom: '',
            nationalite: '',
            active: ''
        });
        this.submittedSearch = false;
    };
    PaysComponent.prototype.getIpp = function (nombre) {
        this.ipp = parseInt(nombre);
    };
    PaysComponent = __decorate([
        core_1.Component({
            selector: 'app-pays',
            templateUrl: './pays.component.html',
            styleUrls: ['./pays.component.scss']
        })
    ], PaysComponent);
    return PaysComponent;
}());
exports.PaysComponent = PaysComponent;
