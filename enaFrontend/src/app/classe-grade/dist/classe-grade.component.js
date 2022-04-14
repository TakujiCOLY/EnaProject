"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClasseGradeComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var classe_grade_1 = require("../models/classe-grade");
var ClasseGradeComponent = /** @class */ (function () {
    function ClasseGradeComponent(api, fb) {
        this.api = api;
        this.fb = fb;
    }
    ClasseGradeComponent.prototype.ngOnInit = function () {
        this.searchClasseForm = this.fb.group({
            nom: [''],
            active: ['']
        });
        this.editClasseForm = this.fb.group({
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
    ClasseGradeComponent.prototype.getData = function () {
        var _this = this;
        this.api.findAllClasseGrade().subscribe(function (response) {
            _this.classes = response;
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(ClasseGradeComponent.prototype, "f", {
        get: function () { return this.editClasseForm.controls; },
        enumerable: false,
        configurable: true
    });
    ClasseGradeComponent.prototype.addClasse = function () {
        var _this = this;
        this.submitted = true;
        if (this.editClasseForm.invalid)
            return;
        var classe = new classe_grade_1.ClasseGrade();
        classe.nom = this.editClasseForm.value.nom;
        classe.active = Boolean(parseInt(this.editClasseForm.value.active));
        if (this.editClasseForm.value.id == '') {
            this.api.add(classe, '/v1/classeGrades/add').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            });
        }
        else {
            classe.id = parseInt(this.editClasseForm.value.id);
            this.api.update(classe, '/v1/classeGrades/update').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            });
        }
    };
    ClasseGradeComponent.prototype.searchClasse = function () {
        if (this.searchClasseForm.value.nom == '' && this.searchClasseForm.value.active == '') {
            this.submittedSearch = true;
            return;
        }
        var classe = new classe_grade_1.ClasseGrade();
        classe.nom = this.searchClasseForm.value.nom;
        if (this.searchClasseForm.value.active != '')
            classe.active = Boolean(parseInt(this.searchClasseForm.value.active));
    };
    ClasseGradeComponent.prototype.effacerChamps = function () {
        this.editClasseForm.patchValue({
            id: '',
            nom: '',
            active: ''
        });
        this.submitted = false;
    };
    ClasseGradeComponent.prototype.effacerSearchChamps = function () {
        this.searchClasseForm.patchValue({
            nom: '',
            active: ''
        });
        this.submittedSearch = false;
    };
    ClasseGradeComponent.prototype.getClasse = function (classe) {
        this.editClasseForm.patchValue({
            id: classe.id.toString(),
            nom: classe.nom,
            active: (classe.active == true) ? '1' : '0'
        });
    };
    ClasseGradeComponent.prototype.getIpp = function (nombre) {
        this.ipp = parseInt(nombre);
    };
    ClasseGradeComponent = __decorate([
        core_1.Component({
            selector: 'app-classe-grade',
            templateUrl: './classe-grade.component.html',
            styleUrls: ['./classe-grade.component.scss']
        })
    ], ClasseGradeComponent);
    return ClasseGradeComponent;
}());
exports.ClasseGradeComponent = ClasseGradeComponent;
