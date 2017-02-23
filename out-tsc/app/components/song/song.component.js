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
export var SongComponent = (function () {
    function SongComponent() {
    }
    SongComponent.prototype.ngOnInit = function () {
        this.hotSongs = SONG;
        this.newSongs = SONG;
    };
    SongComponent = __decorate([
        Component({
            selector: 'app-song',
            templateUrl: './song.component.html',
            styleUrls: ['./song.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SongComponent);
    return SongComponent;
}());
//# sourceMappingURL=/var/www/html/material/src/app/components/song/song.component.js.map