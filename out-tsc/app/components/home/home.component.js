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
import { ALBUM } from "../../database/seeds/album";
import { SONG } from "../../database/seeds/song";
import { VIDEO } from "../../database/seeds/video";
import { TOPIC } from "../../database/seeds/topic";
import { FILM } from "../../database/seeds/flim";
import { ITEM_HOT } from "../../database/seeds/itemHots";
import { KeengService } from "../../services/keeng.service";
import { IMAGE_DOMAIN, VIDEO_DOMAIN, AUDIO_DOMAIN } from "../../configs/app.config";
export var HomeComponent = (function () {
    function HomeComponent(keengService) {
        this.keengService = keengService;
        this.albums = [];
        this.songs = [];
        this.videos = [];
        this.topics = [];
        this.films = [];
        this.itemHots = [];
        this.flashHots = [];
        this.playlistHots = [];
        this.IMAGE_DOMAIN = IMAGE_DOMAIN;
        this.VIDEO_DOMAIN = VIDEO_DOMAIN;
        this.AUDIO_DOMAIN = AUDIO_DOMAIN;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = '?size=6&size_flashhot=6';
        this.keengService.allData(params)
            .then(function (data) {
            _this.flashHots = data.flashs;
            _this.playlistHots = data.playlistHots;
            console.log(_this.albums);
        }, function (error) {
            console.log(error);
        });
        this.albums = ALBUM;
        this.songs = SONG;
        this.videos = VIDEO;
        this.topics = TOPIC;
        this.films = FILM;
        this.itemHots = ITEM_HOT;
        this.sources = [
            {
                src: "http://keengmp3obj.1d2173fe.viettel-cdn.vn/bucket-media-keeng/sata07/video/2017/01/06/hgPLtlVTKDcS1fejBD1E586eff02e1896.mp4",
                type: "video/mp4"
            }
        ];
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }), 
        __metadata('design:paramtypes', [KeengService])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/var/www/html/material/src/app/components/home/home.component.js.map