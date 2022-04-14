"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegionComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var region_1 = require("../models/region");
var RegionComponent = /** @class */ (function () {
    function RegionComponent(api, fb) {
        this.api = api;
        this.fb = fb;
    }
    RegionComponent.prototype.ngOnInit = function () {
        this.searchRegionForm = this.fb.group({
            nom: [''],
            pays: [''],
            active: ['']
        });
        this.editRegionForm = this.fb.group({
            id: [''],
            nom: ['', forms_1.Validators.required],
            pays: ['', forms_1.Validators.required],
            active: ['', forms_1.Validators.required]
        });
        this.ipp = 10;
        this.p = 1;
        this.submitted = false;
        this.submittedSearch = false;
        this.getData();
        this.getPays();
    };
    RegionComponent.prototype.getData = function () {
        var _this = this;
        this.api.findAllRegion().subscribe(function (response) {
            _this.regions = response;
        }, function (error) {
            console.log(error);
        });
    };
    RegionComponent.prototype.getPays = function () {
        var _this = this;
        this.api.findAllPays().subscribe(function (response) {
            _this.pays = response;
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(RegionComponent.prototype, "f", {
        get: function () { return this.editRegionForm.controls; },
        enumerable: false,
        configurable: true
    });
    RegionComponent.prototype.addRegion = function () {
        var _this = this;
        this.submitted = true;
        if (this.editRegionForm.invalid)
            return;
        var region = new region_1.Region();
        region.nom = this.editRegionForm.value.nom;
        region.pays = parseInt(this.editRegionForm.value.pays);
        region.active = Boolean(parseInt(this.editRegionForm.value.active));
        if (this.editRegionForm.value.id == '') {
            this.api.add(region, '/v1/regions/add').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            region.id = parseInt(this.editRegionForm.value.id);
            this.api.update(region, '/v1/regions/update').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
    };
    RegionComponent.prototype.searchRegion = function () {
        if (this.searchRegionForm.value.nom == '' && this.searchRegionForm.value.pays == '') {
            this.submittedSearch = true;
            return;
        }
        var region = new region_1.Region();
        region.nom = this.searchRegionForm.value.nom;
        region.pays = this.searchRegionForm.value.pays;
        if (this.searchRegionForm.value.active != '')
            region.active = Boolean(parseInt(this.searchRegionForm.value.active));
    };
    RegionComponent.prototype.getRegion = function (region) {
        this.editRegionForm.patchValue({
            id: region.id.toString(),
            nom: region.nom,
            pays: region.pays.id.toString(),
            active: (region.active == true) ? '1' : '0'
        });
    };
    RegionComponent.prototype.effacerChamps = function () {
        this.editRegionForm.patchValue({
            id: '',
            nom: '',
            pays: '',
            active: ''
        });
        this.submitted = false;
    };
    RegionComponent.prototype.effacerSearchChamps = function () {
        this.submittedSearch = false;
        this.searchRegionForm.patchValue({
            nom: '',
            pays: '',
            active: ''
        });
    };
    RegionComponent.prototype.getIpp = function (nombre) {
        this.ipp = parseInt(nombre);
    };
    RegionComponent = __decorate([
        core_1.Component({
            selector: 'app-region',
            templateUrl: './region.component.html',
            styleUrls: ['./region.component.scss']
        })
    ], RegionComponent);
    return RegionComponent;
}());
exports.RegionComponent = RegionComponent;
