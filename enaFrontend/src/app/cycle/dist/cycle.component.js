"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CycleComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var cycle_1 = require("../models/cycle");
var CycleComponent = /** @class */ (function () {
    function CycleComponent(api, fb) {
        this.api = api;
        this.fb = fb;
    }
    CycleComponent.prototype.ngOnInit = function () {
        this.searchCycleForm = this.fb.group({
            nom: [''],
            active: ['']
        });
        this.editCycleForm = this.fb.group({
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
    CycleComponent.prototype.getData = function () {
        var _this = this;
        this.api.findAllCycle().subscribe(function (response) {
            _this.cycles = response;
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(CycleComponent.prototype, "f", {
        get: function () { return this.editCycleForm.controls; },
        enumerable: false,
        configurable: true
    });
    CycleComponent.prototype.addCycle = function () {
        var _this = this;
        this.submitted = true;
        if (this.editCycleForm.invalid)
            return;
        var cycle = new cycle_1.Cycle();
        cycle.nom = this.editCycleForm.value.nom;
        cycle.active = Boolean(parseInt(this.editCycleForm.value.active));
        if (this.editCycleForm.value.id == '') {
            this.api.add(cycle, '/v1/cycles/add').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            cycle.id = parseInt(this.editCycleForm.value.id);
            this.api.update(cycle, '/v1/cycles/update').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
    };
    CycleComponent.prototype.searchCycle = function () {
        if (this.searchCycleForm.value.nom == '' && this.searchCycleForm.value.active == '') {
            this.submittedSearch = true;
            return;
        }
        var cycle = new cycle_1.Cycle();
        cycle.nom = this.searchCycleForm.value.nom;
        if (this.searchCycleForm.value.active != '')
            cycle.active = Boolean(parseInt(this.searchCycleForm.value.active));
    };
    CycleComponent.prototype.getCycle = function (cycle) {
        this.editCycleForm.patchValue({
            id: cycle.id.toString(),
            nom: cycle.nom,
            active: (cycle.active == true) ? '1' : '0'
        });
    };
    CycleComponent.prototype.effacerChamps = function () {
        this.submitted = false;
        this.editCycleForm.patchValue({
            id: '',
            nom: '',
            active: ''
        });
    };
    CycleComponent.prototype.effacerSearchChamps = function () {
        this.submittedSearch = false;
        this.searchCycleForm.patchValue({
            nom: '',
            active: ''
        });
    };
    CycleComponent.prototype.getIpp = function (nombre) {
        this.ipp = parseInt(nombre);
    };
    CycleComponent = __decorate([
        core_1.Component({
            selector: 'app-cycle',
            templateUrl: './cycle.component.html',
            styleUrls: ['./cycle.component.scss']
        })
    ], CycleComponent);
    return CycleComponent;
}());
exports.CycleComponent = CycleComponent;
