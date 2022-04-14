"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ParametreService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var http_1 = require("@angular/common/http");
var ParametreService = /** @class */ (function () {
    function ParametreService(http) {
        this.http = http;
        this.api = environment_1.environment.apiBaseUrl;
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'content-type': 'application/json' })
        };
    }
    ParametreService.prototype.add = function (model, url) {
        return this.http.post(this.api + url, model, this.httpOptions);
    };
    ParametreService.prototype.update = function (model, url) {
        return this.http.put(this.api + url, model, this.httpOptions);
    };
    ParametreService.prototype["delete"] = function (url) {
        return this.http["delete"](this.api + url, this.httpOptions);
    };
    ParametreService.prototype.findAllClasseGrade = function () {
        return this.http.get(this.api + "/v1/classeGrades/findAll");
    };
    ParametreService.prototype.findRegionsByPaysId = function (id) {
        return this.http.get(this.api + "/v1/regions/findByPays/" + id);
    };
    ParametreService.prototype.findVillesByRegionId = function (id) {
        return this.http.get(this.api + "/v1/villes/findByRegion/" + id);
    };
    ParametreService.prototype.findAllCorps = function () {
        return this.http.get(this.api + "/v1/corpses/findAll");
    };
    ParametreService.prototype.findAllCycle = function () {
        return this.http.get(this.api + "/v1/cycles/findAll");
    };
    ParametreService.prototype.findAllEchelon = function () {
        return this.http.get(this.api + "/v1/echelons/findAll");
    };
    ParametreService.prototype.findAllEtatValidation = function () {
        return this.http.get(this.api + "/v1/etatValidations/findAll");
    };
    ParametreService.prototype.findAllHierarchie = function () {
        return this.http.get(this.api + "/v1/hierarchies/findAll");
    };
    ParametreService.prototype.findAllPays = function () {
        return this.http.get(this.api + "/v1/payses/findAll");
    };
    ParametreService.prototype.findAllPromotion = function () {
        return this.http.get(this.api + "/v1/promotions/findAll");
    };
    ParametreService.prototype.findAllRegion = function () {
        return this.http.get(this.api + "/v1/regions/findAll");
    };
    ParametreService.prototype.findAllSection = function () {
        return this.http.get(this.api + "/v1/sections/findAll");
    };
    ParametreService.prototype.findAllStatut = function () {
        return this.http.get(this.api + "/v1/statuts/findAll");
    };
    ParametreService.prototype.findAllVille = function () {
        return this.http.get(this.api + "/v1/villes/findAll");
    };
    ParametreService.prototype.findAllVoieAcces = function () {
        return this.http.get(this.api + "/v1/voieAcceses/findAll");
    };
    ParametreService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ParametreService);
    return ParametreService;
}());
exports.ParametreService = ParametreService;
