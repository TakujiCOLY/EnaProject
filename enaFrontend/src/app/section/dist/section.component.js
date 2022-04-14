"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SectionComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var section_1 = require("../models/section");
var SectionComponent = /** @class */ (function () {
    function SectionComponent(api, fb) {
        this.api = api;
        this.fb = fb;
    }
    SectionComponent.prototype.ngOnInit = function () {
        this.searchSectionForm = this.fb.group({
            nom: [''],
            active: ['']
        });
        this.editSectionForm = this.fb.group({
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
    SectionComponent.prototype.getData = function () {
        var _this = this;
        this.api.findAllSection().subscribe(function (response) {
            _this.sections = response;
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(SectionComponent.prototype, "f", {
        get: function () { return this.editSectionForm.controls; },
        enumerable: false,
        configurable: true
    });
    SectionComponent.prototype.addSection = function () {
        var _this = this;
        this.submitted = true;
        if (this.editSectionForm.invalid)
            return;
        var section = new section_1.Section();
        section.nom = this.editSectionForm.value.nom;
        section.active = Boolean(parseInt(this.editSectionForm.value.active));
        if (this.editSectionForm.value.id == '') {
            this.api.add(section, '/v1/sections/add').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            section.id = parseInt(this.editSectionForm.value.id);
            this.api.update(section, '/v1/sections/update').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                _this.effacerChamps();
                _this.getData();
            });
        }
    };
    SectionComponent.prototype.searchSection = function () {
        if (this.searchSectionForm.value.nom == '' && this.searchSectionForm.value.active == '') {
            this.submittedSearch = true;
            return;
        }
        var section = new section_1.Section();
        section.nom = this.searchSectionForm.value.nom;
        if (this.searchSectionForm.value.active != '')
            section.active = Boolean(parseInt(this.searchSectionForm.value.active));
    };
    SectionComponent.prototype.getSection = function (section) {
        this.editSectionForm.patchValue({
            id: section.id.toString(),
            nom: section.nom,
            active: (section.active == true) ? '1' : '0'
        });
    };
    SectionComponent.prototype.effacerChamps = function () {
        this.editSectionForm.patchValue({
            id: '',
            nom: '',
            active: ''
        });
        this.submitted = false;
    };
    SectionComponent.prototype.effacerSearchChamps = function () {
        this.searchSectionForm.patchValue({
            nom: '',
            active: ''
        });
    };
    SectionComponent.prototype.getIpp = function (nombre) {
        this.ipp = parseInt(nombre);
    };
    SectionComponent = __decorate([
        core_1.Component({
            selector: 'app-section',
            templateUrl: './section.component.html',
            styleUrls: ['./section.component.scss']
        })
    ], SectionComponent);
    return SectionComponent;
}());
exports.SectionComponent = SectionComponent;
