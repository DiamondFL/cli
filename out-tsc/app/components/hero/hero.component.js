var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HeroService } from "../../services/hero.service";
import { Router } from "@angular/router";
export var HeroComponent = (function () {
    function HeroComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    HeroComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroComponent.prototype.onSelect = function (hero) {
        console.log(hero);
        this.selectedHero = hero;
    };
    HeroComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            console.log('xxxx');
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    HeroComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    HeroComponent = __decorate([
        Component({
            //moduleId: module.id,
            selector: 'app-hero',
            templateUrl: './hero.component.html',
            styleUrls: ['./hero.component.css']
        }), 
        __metadata('design:paramtypes', [HeroService, Router])
    ], HeroComponent);
    return HeroComponent;
}());
//# sourceMappingURL=/var/www/html/material/src/app/components/hero/hero.component.js.map