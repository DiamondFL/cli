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
import { VIDEO } from "../../database/seeds/video";
import { FEELING } from "../../database/seeds/feeling";
export var PlayerVideoComponent = (function () {
    function PlayerVideoComponent() {
        this.video = null;
        this.videos = null;
        this.feelings = null;
    }
    PlayerVideoComponent.prototype.ngOnInit = function () {
        this.video = VIDEO[0];
        this.videos = VIDEO;
        this.feelings = FEELING;
    };
    PlayerVideoComponent = __decorate([
        Component({
            selector: 'app-player-video',
            templateUrl: './player-video.component.html',
            styleUrls: ['./player-video.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PlayerVideoComponent);
    return PlayerVideoComponent;
}());
//# sourceMappingURL=/var/www/html/material/src/app/components/player-video/player-video.component.js.map