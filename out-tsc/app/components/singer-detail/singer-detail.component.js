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
import { KeengService } from "../../services/keeng.service";
import { SONG } from "../../database/seeds/song";
import { VIDEO } from "../../database/seeds/video";
import { ALBUM } from "../../database/seeds/album";
export var SingerDetailComponent = (function () {
    function SingerDetailComponent(keengService) {
        this.keengService = keengService;
    }
    SingerDetailComponent.prototype.ngOnInit = function () {
        this.singer = {
            singer_name: 'Noo Phước Thịnh',
            image: 'http://vip.img.cdn.keeng.vn/sata11/singer/2016/04/22/aadba86309bd34bb1211e6484f2b2647a22dea45.jpg'
        };
        this.songs = SONG;
        this.videos = VIDEO;
        this.albums = ALBUM;
    };
    SingerDetailComponent = __decorate([
        Component({
            selector: 'app-singer-detail',
            templateUrl: './singer-detail.component.html',
            styleUrls: ['./singer-detail.component.css']
        }), 
        __metadata('design:paramtypes', [KeengService])
    ], SingerDetailComponent);
    return SingerDetailComponent;
}());
//# sourceMappingURL=/var/www/html/material/src/app/components/singer-detail/singer-detail.component.js.map