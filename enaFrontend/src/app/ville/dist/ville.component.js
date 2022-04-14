"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VilleComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ville_1 = require("../models/ville");
var VilleComponent = /** @class */ (function () {
    function VilleComponent(api, fb) {
        this.api = api;
        this.fb = fb;
    }
    VilleComponent.prototype.ngOnInit = function () {
        this.searchVilleForm = this.fb.group({
            nom: [''],
            region: [''],
            pays: [''],
            active: ['']
        });
        this.editVilleForm = this.fb.group({
            id: [''],
            nom: ['', forms_1.Validators.required],
            region: ['', forms_1.Validators.required],
            pays: [''],
            active: ['', forms_1.Validators.required]
        });
        this.ipp = 10;
        this.p = 1;
        this.submitted = false;
        this.submittedSearch = false;
        this.getData();
        this.getPays();
    };
    VilleComponent.prototype.getData = function () {
        var _this = this;
        this.api.findAllVille().subscribe(function (response) {
            _this.villes = response;
        }, function (error) {
            console.log(error);
        });
    };
    VilleComponent.prototype.getPays = function () {
        var _this = this;
        this.api.findAllPays().subscribe(function (response) {
            _this.pays = response;
        }, function (error) {
            console.log(error);
        });
    };
    VilleComponent.prototype.getRegionsSearch = function (id) {
        var _this = this;
        if (id != '') {
            this.api.findRegionsByPaysId(parseInt(id)).subscribe(function (response) {
                _this.regionSearch = response;
            }, function (error) {
                console.log(error);
            });
        }
    };
    VilleComponent.prototype.getRegionAdd = function (id) {
        var _this = this;
        if (id != '') {
            this.api.findRegionsByPaysId(parseInt(id)).subscribe(function (response) {
                _this.regionAdd = response;
            }, function (error) {
                console.log(error);
            });
        }
    };
    Object.defineProperty(VilleComponent.prototype, "f", {
        get: function () { return this.editVilleForm.controls; },
        enumerable: false,
        configurable: true
    });
    VilleComponent.prototype.addVille = function () {
        var _this = this;
        this.submitted = true;
        if (this.editVilleForm.invalid)
            return;
        var ville = new ville_1.Ville();
        ville.nom = this.editVilleForm.value.nom;
        ville.region = parseInt(this.editVilleForm.value.region);
        ville.active = Boolean(parseInt(this.editVilleForm.value.active));
        if (this.editVilleForm.value.id == '') {
            this.api.add(ville, '/v1/villes/add').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.api.update(ville, '/v1/villes/update').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
    };
    VilleComponent.prototype.searchVille = function () {
        if (this.searchVilleForm.value.nom == '' && this.searchVilleForm.value.active == '') {
            this.submittedSearch = true;
            return;
        }
        var ville = new ville_1.Ville();
        ville.nom = this.searchVilleForm.value.nom;
        ville.region = this.searchVilleForm.value.region;
        if (this.searchVilleForm.value.active != '')
            ville.active = Boolean(parseInt(this.searchVilleForm.value.active));
    };
    VilleComponent.prototype.getVille = function (ville) {
        this.getRegionAdd(ville.region.pays.id);
        this.editVilleForm.patchValue({
            id: ville.id.toString(),
            nom: ville.nom,
            pays: ville.region.pays.id.toString(),
            region: ville.region.id.toString(),
            active: (ville.active == true) ? '1' : '0'
        });
    };
    VilleComponent.prototype.effacerChamps = function () {
        this.editVilleForm.patchValue({
            id: '',
            nom: '',
            pays: '',
            region: '',
            active: ''
        });
        this.submitted = false;
    };
    VilleComponent.prototype.effacerSearchChamps = function () {
        this.searchVilleForm.patchValue({
            nom: '',
            region: '',
            active: '',
            pays: ''
        });
        this.submittedSearch = false;
    };
    VilleComponent.prototype.getIpp = function (nombre) {
        this.ipp = parseInt(nombre);
    };
    VilleComponent = __decorate([
        core_1.Component({
            selector: 'app-ville',
            templateUrl: './ville.component.html',
            styleUrls: ['./ville.component.scss']
        })
    ], VilleComponent);
    return VilleComponent;
}());
exports.VilleComponent = VilleComponent;
