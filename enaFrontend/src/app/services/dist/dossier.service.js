"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DossierService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var DossierService = /** @class */ (function () {
    function DossierService(http) {
        this.http = http;
        this.api = environment_1.environment.apiBaseUrl;
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'content-type': 'application/json' })
        };
    }
    DossierService.prototype.add = function (model, url) {
        return this.http.post(this.api + url, model, this.httpOptions);
    };
    DossierService.prototype.update = function (model, url) {
        return this.http.put(this.api + url, model, this.httpOptions);
    };
    DossierService.prototype["delete"] = function (url) {
        return this.http["delete"](this.api + url, this.httpOptions);
    };
    DossierService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DossierService);
    return DossierService;
}());
exports.DossierService = DossierService;
