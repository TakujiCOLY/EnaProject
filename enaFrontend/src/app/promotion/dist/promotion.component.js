"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PromotionComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var promotion_1 = require("../models/promotion");
var PromotionComponent = /** @class */ (function () {
    function PromotionComponent(api, fb) {
        this.api = api;
        this.fb = fb;
    }
    PromotionComponent.prototype.ngOnInit = function () {
        this.searchPromotionForm = this.fb.group({
            nom: [''],
            parrain: [''],
            active: ['']
        });
        this.editPromotionForm = this.fb.group({
            id: [''],
            nom: ['', forms_1.Validators.required],
            parrain: [''],
            active: ['', forms_1.Validators.required]
        });
        this.ipp = 10;
        this.p = 1;
        this.submitted = false;
        this.submittedSearch = false;
        this.getData();
    };
    PromotionComponent.prototype.getData = function () {
        var _this = this;
        this.api.findAllPromotion().subscribe(function (response) {
            _this.promotions = response;
        }, function (error) {
            console.log(error);
        });
    };
    PromotionComponent.prototype.addPromotion = function () {
        var _this = this;
        this.submitted = true;
        if (this.editPromotionForm.invalid)
            return;
        var promotion = new promotion_1.Promotion();
        promotion.nom = this.editPromotionForm.value.nom;
        promotion.parrain = this.editPromotionForm.value.parrain;
        promotion.active = Boolean(parseInt(this.editPromotionForm.value.active));
        if (this.editPromotionForm.value.id == '') {
            this.api.add(promotion, '/v1/promotions/add').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            promotion.id = parseInt(this.editPromotionForm.value.id);
            this.api.update(promotion, '/v1/promotions/update').subscribe(function (response) {
                _this.effacerChamps();
                _this.getData();
            }, function (error) {
                console.log(error);
            });
        }
    };
    PromotionComponent.prototype.searchPromotion = function () {
        if (this.searchPromotionForm.value.nom == '' && this.searchPromotionForm.value.parrain == '') {
            this.submittedSearch = true;
            return;
        }
        var promotion = new promotion_1.Promotion();
        promotion.nom = this.searchPromotionForm.value.nom;
        promotion.parrain = this.searchPromotionForm.value.parrain;
        if (this.searchPromotionForm.value.active != '')
            promotion.active = Boolean(parseInt(this.searchPromotionForm.value.active));
    };
    Object.defineProperty(PromotionComponent.prototype, "f", {
        get: function () { return this.editPromotionForm.controls; },
        enumerable: false,
        configurable: true
    });
    PromotionComponent.prototype.getPromotion = function (promotion) {
        this.editPromotionForm.patchValue({
            id: promotion.id.toString(),
            nom: promotion.nom,
            parrain: promotion.parrain,
            active: (promotion.active == true) ? '1' : '0'
        });
    };
    PromotionComponent.prototype.effacerChamps = function () {
        this.submitted = false;
        this.editPromotionForm.patchValue({
            id: '',
            nom: '',
            parrain: '',
            active: ''
        });
    };
    PromotionComponent.prototype.effacerSearchChamps = function () {
        this.submittedSearch = false;
        this.searchPromotionForm.patchValue({
            nom: '',
            parrain: '',
            active: ''
        });
    };
    PromotionComponent.prototype.getIpp = function (nombre) {
        this.ipp = parseInt(nombre);
    };
    PromotionComponent = __decorate([
        core_1.Component({
            selector: 'app-promotion',
            templateUrl: './promotion.component.html',
            styleUrls: ['./promotion.component.scss']
        })
    ], PromotionComponent);
    return PromotionComponent;
}());
exports.PromotionComponent = PromotionComponent;
