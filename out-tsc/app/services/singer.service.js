var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http } from "@angular/http";
export var SingerService = (function () {
    function SingerService(http) {
        this.http = http;
        this.url = 'api/singers';
    }
    SingerService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    SingerService.prototype.index = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    SingerService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], SingerService);
    return SingerService;
}());
//# sourceMappingURL=/var/www/html/material/src/app/services/singer.service.js.map