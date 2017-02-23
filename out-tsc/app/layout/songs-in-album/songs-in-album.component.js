var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
export var SongsInAlbumComponent = (function () {
    function SongsInAlbumComponent() {
        this.changeAudio = new EventEmitter();
    }
    SongsInAlbumComponent.prototype.ngOnInit = function () {
    };
    SongsInAlbumComponent.prototype.changeSong = function (song) {
        this.changeAudio.emit(song);
        console.log('change Song');
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], SongsInAlbumComponent.prototype, "songs", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], SongsInAlbumComponent.prototype, "changeAudio", void 0);
    SongsInAlbumComponent = __decorate([
        Component({
            selector: 'app-songs-in-album',
            templateUrl: './songs-in-album.component.html',
            styleUrls: ['./songs-in-album.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SongsInAlbumComponent);
    return SongsInAlbumComponent;
}());
//# sourceMappingURL=/var/www/html/material/src/app/layout/songs-in-album/songs-in-album.component.js.map