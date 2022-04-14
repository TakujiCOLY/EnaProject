"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HierarchieComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var hierarchie_1 = require("../models/hierarchie");
var HierarchieComponent = /** @class */ (function () {
    function HierarchieComponent(api, fb) {
        this.api = api;
        this.fb = fb;
    }
    HierarchieComponent.prototype.ngOnInit = function () {
        this.searchHierarchieForm = this.fb.group({
            nom: [''],
            active: ['']
        });
        this.editHierarchieForm = this.fb.group({
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
    HierarchieComponent.prototype.getData = function () {
        var _this = this;
        this.api.findAllHierarchie().subscribe(function (response) {
            _this.hierarchies = response;
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(HierarchieComponent.prototype, "f", {
        get: function () { return this.editHierarchieForm.controls; },
        enumerable: false,
        configurable: true
    });
    HierarchieComponent.prototype.addHierarchie = function () {
        var _this = this;
        this.submitted = true;
        if (this.editHierarchieForm.invalid)
            return;
        var hierarchie = new hierarchie_1.Hierarchie();
        hierarchie.nom = this.editHierarchieForm.value.nom;
        hierarchie.active = Boolean(parseInt(this.editHierarchieForm.value.active));
        if (this.editHierarchieForm.value.id == '') {
            this.api.add(hierarchie, '/v1/hierarchies/add').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            hierarchie.id = parseInt(this.editHierarchieForm.value.id);
            this.api.update(hierarchie, '/v1/hierarchies/update').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
    };
    HierarchieComponent.prototype.searchHierarchie = function () {
        if (this.searchHierarchieForm.value.nom == '' && this.searchHierarchieForm.value.active == '') {
            this.submittedSearch = true;
            return;
        }
        var hierarchie = new hierarchie_1.Hierarchie();
        hierarchie.nom = this.searchHierarchieForm.value.nom;
        if (this.searchHierarchieForm.value.active != '')
            hierarchie.active = Boolean(parseInt(this.searchHierarchieForm.value.active));
    };
    HierarchieComponent.prototype.getHierarchie = function (hierarchie) {
        this.editHierarchieForm.patchValue({
            id: hierarchie.id.toString(),
            nom: hierarchie.nom,
            active: (hierarchie.active == true) ? '1' : '0'
        });
    };
    HierarchieComponent.prototype.effacerChamps = function () {
        this.editHierarchieForm.patchValue({
            id: '',
            nom: '',
            active: ''
        });
        this.submitted = false;
    };
    HierarchieComponent.prototype.effacerSearchChamps = function () {
        this.searchHierarchieForm.patchValue({
            nom: '',
            active: ''
        });
        this.submittedSearch = false;
    };
    HierarchieComponent.prototype.getIpp = function (nombre) {
        this.ipp = parseInt(nombre);
    };
    HierarchieComponent = __decorate([
        core_1.Component({
            selector: 'app-hierarchie',
            templateUrl: './hierarchie.component.html',
            styleUrls: ['./hierarchie.component.scss']
        })
    ], HierarchieComponent);
    return HierarchieComponent;
}());
exports.HierarchieComponent = HierarchieComponent;
