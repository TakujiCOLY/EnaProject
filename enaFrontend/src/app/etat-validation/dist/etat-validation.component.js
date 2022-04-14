"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EtatValidationComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var etat_validation_1 = require("../models/etat-validation");
var EtatValidationComponent = /** @class */ (function () {
    function EtatValidationComponent(api, fb) {
        this.api = api;
        this.fb = fb;
    }
    EtatValidationComponent.prototype.ngOnInit = function () {
        this.searchValidationForm = this.fb.group({
            nom: [''],
            active: ['']
        });
        this.editValidationForm = this.fb.group({
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
    EtatValidationComponent.prototype.getData = function () {
        var _this = this;
        this.api.findAllEtatValidation().subscribe(function (response) {
            _this.validations = response;
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(EtatValidationComponent.prototype, "f", {
        get: function () { return this.editValidationForm.controls; },
        enumerable: false,
        configurable: true
    });
    EtatValidationComponent.prototype.addValidation = function () {
        var _this = this;
        this.submitted = true;
        if (this.editValidationForm.invalid)
            return;
        var validation = new etat_validation_1.EtatValidation();
        validation.nom = this.editValidationForm.value.nom;
        validation.active = Boolean(parseInt(this.editValidationForm.value.active));
        if (this.editValidationForm.value.id == '') {
            this.api.add(validation, '/v1/etatValidations/add').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            });
        }
        else {
            validation.id = parseInt(this.editValidationForm.value.id);
            this.api.update(validation, '/v1/etatValidations/update').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
    };
    EtatValidationComponent.prototype.searchValidation = function () {
        if (this.searchValidationForm.value.nom == '' && this.searchValidationForm.value.active == '') {
            this.submittedSearch = true;
            return;
        }
        var validation = new etat_validation_1.EtatValidation();
        validation.nom = this.searchValidationForm.value.nom;
        if (this.searchValidationForm.value.active != '')
            validation.active = Boolean(parseInt(this.searchValidationForm.value.active));
    };
    EtatValidationComponent.prototype.getValidation = function (validation) {
        this.editValidationForm.patchValue({
            id: validation.id.toString(),
            nom: validation.nom,
            active: (validation.active == true) ? '1' : '0'
        });
    };
    EtatValidationComponent.prototype.effacerChamps = function () {
        this.editValidationForm.patchValue({
            id: '',
            nom: '',
            active: ''
        });
        this.submitted = false;
    };
    EtatValidationComponent.prototype.effacerSearchChamps = function () {
        this.searchValidationForm.patchValue({
            nom: '',
            active: ''
        });
        this.submittedSearch = false;
    };
    EtatValidationComponent.prototype.getIpp = function (nombre) {
        this.ipp = parseInt(nombre);
    };
    EtatValidationComponent = __decorate([
        core_1.Component({
            selector: 'app-etat-validation',
            templateUrl: './etat-validation.component.html',
            styleUrls: ['./etat-validation.component.scss']
        })
    ], EtatValidationComponent);
    return EtatValidationComponent;
}());
exports.EtatValidationComponent = EtatValidationComponent;
