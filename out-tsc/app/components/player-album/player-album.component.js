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
import { FEELING } from "../../database/seeds/feeling";
export var PlayerAlbumComponent = (function () {
    function PlayerAlbumComponent() {
        this.song = SONG[0];
        this.songs = SONG;
        this.albums = ALBUM;
        this.feelings = FEELING;
    }
    PlayerAlbumComponent.prototype.ngOnInit = function () {
    };
    PlayerAlbumComponent = __decorate([
        Component({
            selector: 'app-player-album',
            templateUrl: './player-album.component.html',
            styleUrls: ['./player-album.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PlayerAlbumComponent);
    return PlayerAlbumComponent;
}());
//# sourceMappingURL=/var/www/html/material/src/app/components/player-album/player-album.component.js.map