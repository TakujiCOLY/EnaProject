"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CorpsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var corps_1 = require("../models/corps");
var CorpsComponent = /** @class */ (function () {
    function CorpsComponent(api, fb) {
        this.api = api;
        this.fb = fb;
    }
    CorpsComponent.prototype.ngOnInit = function () {
        this.searchCorpsForm = this.fb.group({
            nom: [''],
            active: ['']
        });
        this.editCorpsForm = this.fb.group({
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
    CorpsComponent.prototype.getData = function () {
        var _this = this;
        this.api.findAllCorps().subscribe(function (response) {
            _this.corps = response;
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(CorpsComponent.prototype, "f", {
        get: function () { return this.editCorpsForm.controls; },
        enumerable: false,
        configurable: true
    });
    CorpsComponent.prototype.addCorps = function () {
        var _this = this;
        this.submitted = true;
        if (this.editCorpsForm.invalid)
            return;
        var corp = new corps_1.Corps();
        corp.nom = this.editCorpsForm.value.nom;
        corp.active = Boolean(parseInt(this.editCorpsForm.value.active));
        if (this.editCorpsForm.value.id == '') {
            this.api.add(corp, '/v1/corpses/add').subscribe(function (repsonse) {
                _this.getData();
                _this.effacerChamps();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            corp.id = parseInt(this.editCorpsForm.value.id);
            this.api.update(corp, '/v1/corpses/update').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            });
        }
    };
    CorpsComponent.prototype.searchCorps = function () {
        if (this.searchCorpsForm.value.nom == '' && this.searchCorpsForm.value.active == '') {
            this.submittedSearch = true;
            return;
        }
        var corp = new corps_1.Corps();
        corp.nom = this.searchCorpsForm.value.nom;
        if (this.searchCorpsForm.value.active != '')
            corp.active = Boolean(parseInt(this.searchCorpsForm.value.active));
    };
    CorpsComponent.prototype.effacerChamps = function () {
        this.submitted = false;
        this.editCorpsForm.patchValue({
            id: '',
            nom: '',
            active: ''
        });
    };
    CorpsComponent.prototype.effacerSearchChamps = function () {
        this.submittedSearch = false;
        this.searchCorpsForm.patchValue({
            nom: '',
            active: ''
        });
    };
    CorpsComponent.prototype.getCorps = function (corps) {
        this.editCorpsForm.patchValue({
            id: corps.id.toString(),
            nom: corps.nom,
            active: (corps.active == true) ? '1' : '0'
        });
    };
    CorpsComponent.prototype.getIpp = function (nombre) {
        this.ipp = parseInt(nombre);
    };
    CorpsComponent = __decorate([
        core_1.Component({
            selector: 'app-corps',
            templateUrl: './corps.component.html',
            styleUrls: ['./corps.component.scss']
        })
    ], CorpsComponent);
    return CorpsComponent;
}());
exports.CorpsComponent = CorpsComponent;
