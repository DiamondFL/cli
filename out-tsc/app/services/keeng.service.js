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
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { API_URL } from "../configs/app.config";
export var KeengService = (function () {
    function KeengService(http) {
        this.http = http;
    }
    KeengService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    KeengService.prototype.allData = function (params) {
        var url = API_URL + 'home/alldata' + params;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    KeengService.prototype.common = function () {
        var url = API_URL + 'home/commondata';
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    KeengService.prototype.banner = function () {
        var url = API_URL + 'processBanner?type=wap&code=&is_vip=false';
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    KeengService.prototype.capcha = function () {
        var url = API_URL + 'getCaptcha';
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    KeengService.prototype.linkFooter = function () {
        var url = API_URL + 'link-footer';
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    KeengService.prototype.charts = function () {
        var url = API_URL + 'bxh/songs-videos';
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    KeengService.prototype.liveTv = function () {
        var url = API_URL + 'videos/homeTv';
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    KeengService.prototype.songDetail = function (params) {
        var url = API_URL + 'song' + params;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    KeengService.prototype.songs = function (params) {
        var url = API_URL + 'song' + params;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    KeengService.prototype.videos = function () {
        var url = API_URL + 'homeVideo';
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    KeengService.prototype.albums = function () {
        var url = API_URL + 'albums';
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    KeengService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], KeengService);
    return KeengService;
}());
//# sourceMappingURL=/var/www/html/material/src/app/services/keeng.service.js.map