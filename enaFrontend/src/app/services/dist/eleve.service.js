"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EleveService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var EleveService = /** @class */ (function () {
    function EleveService(http) {
        this.http = http;
        this.api = environment_1.environment.apiBaseUrl;
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'content-type': 'application/json' })
        };
    }
    EleveService.prototype.add = function (model, url) {
        return this.http.post(this.api + url, model, this.httpOptions);
    };
    EleveService.prototype.update = function (model, url) {
        return this.http.put(this.api + url, model, this.httpOptions);
    };
    EleveService.prototype["delete"] = function (url) {
        return this.http["delete"](this.api + url, this.httpOptions);
    };
    EleveService.prototype.findById = function (id) {
        return this.http.get(this.api + "/v1/eleves/findOne/" + id);
    };
    EleveService.prototype.findAll = function () {
        return this.http.get(this.api + "/v1/eleves/findAll");
    };
    EleveService.prototype.findEleves = function (model) {
        return this.http.post(this.api + "/v1/eleves/findEleves", model, this.httpOptions);
    };
    EleveService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], EleveService);
    return EleveService;
}());
exports.EleveService = EleveService;
