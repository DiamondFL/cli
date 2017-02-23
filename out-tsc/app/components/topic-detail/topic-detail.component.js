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
import { SONG } from "../../database/seeds/song";
import { ALBUM } from "../../database/seeds/album";
import { VIDEO } from "../../database/seeds/video";
export var TopicDetailComponent = (function () {
    function TopicDetailComponent() {
    }
    TopicDetailComponent.prototype.ngOnInit = function () {
        this.songs = SONG;
        this.albums = ALBUM;
        this.videos = VIDEO;
    };
    TopicDetailComponent = __decorate([
        Component({
            selector: 'app-topic-detail',
            templateUrl: './topic-detail.component.html',
            styleUrls: ['./topic-detail.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TopicDetailComponent);
    return TopicDetailComponent;
}());
//# sourceMappingURL=/var/www/html/material/src/app/components/topic-detail/topic-detail.component.js.map