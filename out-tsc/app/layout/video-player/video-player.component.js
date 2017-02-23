var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { video } from "../../database/entities/video";
export var VideoPlayerComponent = (function () {
    function VideoPlayerComponent() {
    }
    VideoPlayerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(), 
        __metadata('design:type', video)
    ], VideoPlayerComponent.prototype, "video", void 0);
    VideoPlayerComponent = __decorate([
        Component({
            selector: 'app-video-player',
            templateUrl: './video-player.component.html',
            styleUrls: ['./video-player.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], VideoPlayerComponent);
    return VideoPlayerComponent;
}());
//# sourceMappingURL=/var/www/html/material/src/app/layout/video-player/video-player.component.js.map