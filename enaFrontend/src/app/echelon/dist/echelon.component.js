"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EchelonComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var echelon_1 = require("../models/echelon");
var EchelonComponent = /** @class */ (function () {
    function EchelonComponent(api, fb) {
        this.api = api;
        this.fb = fb;
    }
    EchelonComponent.prototype.ngOnInit = function () {
        this.searchEchelonForm = this.fb.group({
            nom: [''],
            active: ['']
        });
        this.editEchelonForm = this.fb.group({
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
    EchelonComponent.prototype.getData = function () {
        var _this = this;
        this.api.findAllEchelon().subscribe(function (response) {
            _this.echelons = response;
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(EchelonComponent.prototype, "f", {
        get: function () { return this.editEchelonForm.controls; },
        enumerable: false,
        configurable: true
    });
    EchelonComponent.prototype.addEchelon = function () {
        var _this = this;
        this.submitted = true;
        if (this.editEchelonForm.invalid)
            return;
        var echelon = new echelon_1.Echelon();
        echelon.nom = this.editEchelonForm.value.nom;
        echelon.active = Boolean(parseInt(this.editEchelonForm.value.active));
        if (this.editEchelonForm.value.id == '') {
            this.api.add(echelon, '/v1/echelons/add').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            echelon.id = parseInt(this.editEchelonForm.value.id);
            this.api.update(echelon, '/v1/echelons/update').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
    };
    EchelonComponent.prototype.searchEchelon = function () {
        if (this.searchEchelonForm.value.nom == '' && this.searchEchelonForm.value.active == '') {
            this.submittedSearch = false;
            return;
        }
        var echelon = new echelon_1.Echelon();
        echelon.nom = this.searchEchelonForm.value.nom;
        if (this.searchEchelonForm.value.active != '')
            echelon.active = Boolean(parseInt(this.searchEchelonForm.value.active));
    };
    EchelonComponent.prototype.getEchelon = function (echelon) {
        this.editEchelonForm.patchValue({
            id: echelon.id.toString(),
            nom: echelon.nom,
            active: (echelon.active == true) ? '1' : '0'
        });
    };
    EchelonComponent.prototype.effacerChamps = function () {
        this.editEchelonForm.patchValue({
            id: '',
            nom: '',
            active: ''
        });
        this.submitted = false;
    };
    EchelonComponent.prototype.effacerSearchChamps = function () {
        this.searchEchelonForm.patchValue({
            nom: '',
            active: ''
        });
    };
    EchelonComponent.prototype.getIpp = function (nombre) {
        this.ipp = parseInt(nombre);
    };
    EchelonComponent = __decorate([
        core_1.Component({
            selector: 'app-echelon',
            templateUrl: './echelon.component.html',
            styleUrls: ['./echelon.component.scss']
        })
    ], EchelonComponent);
    return EchelonComponent;
}());
exports.EchelonComponent = EchelonComponent;
