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
import { ALL_DATA, COMMON } from "../../database/seeds/home";
export var KeengComponent = (function () {
    function KeengComponent(keengService) {
        this.keengService = keengService;
        this.flashHots = [];
        this.blogs = [];
        this.feelings = [];
        this.playlistHots = [];
        this.charts = [];
        this.topics = [];
        this.imagePatch = "http://vip.img.cdn.keeng.vn";
        this.videoPatch = "http://cdn1.keeng.net/bucket-media-keeng";
        this.audioPatch = "http://cdn1.keeng.net/bucket-audio-keeng";
        this.firstBlog = {};
        this.firstFeeling = {};
        this.categories = [];
    }
    KeengComponent.prototype.ngOnInit = function () {
        // this.keengService.index().then(data => {
        //   this.flashHots = data.flashs;
        //   this.charts = data.rankingvn;
        //   for(let i in this.charts) {    ;
        //     if(this.charts[i].image_path == null) {
        //       let singer_images: string[] = this.charts[i].singer_image.split("$");
        //       this.charts[i].image_path = singer_images[0];
        //     }
        //   }
        //   this.topics = data.topics;
        //   this.blogs = data.blogs;
        //   this.firstBlog = this.blogs[0];
        //   this.playlistHots = data.playlistHots;
        //   for(let i in this.playlistHots) {
        //     for(let j in this.playlistHots[i]) {
        //       if(this.playlistHots[i][j].image_path == null) {
        //         this.playlistHots[i][j].image_path = this.playlistHots[i][j].singer_image;
        //       }
        //     }
        //   }
        //   this.feelings = data.feelings;
        //   this.firstFeeling = data.feelings[0];
        // });
        // this.keengService.common().then(data => {
        //   console.log(data);
        //   this.categories = data.categories;
        // });
        this.flashHots = ALL_DATA.flashs;
        this.charts = ALL_DATA.rankingvn;
        for (var i in this.charts) {
            if (this.charts[i].image_path == null) {
                var singer_images = this.charts[i].singer_image.split("$");
                this.charts[i].image_path = singer_images[0];
            }
        }
        this.topics = ALL_DATA.topics;
        this.blogs = ALL_DATA.blogs;
        this.firstBlog = this.blogs[0];
        this.playlistHots = ALL_DATA.playlistHots;
        for (var i in this.playlistHots) {
            for (var j in this.playlistHots[i]) {
                if (this.playlistHots[i][j].image_path == null) {
                    this.playlistHots[i][j].image_path = this.playlistHots[i][j].singer_image;
                }
            }
        }
        this.feelings = ALL_DATA.feelings;
        this.firstFeeling = ALL_DATA.feelings[0];
        this.categories = COMMON.categories;
    };
    KeengComponent = __decorate([
        Component({
            selector: 'app-keeng',
            templateUrl: './keeng.component.html',
            styleUrls: ['./keeng.component.css']
        }), 
        __metadata('design:paramtypes', [KeengService])
    ], KeengComponent);
    return KeengComponent;
}());
//# sourceMappingURL=/var/www/html/material/src/app/components/keeng/keeng.component.js.map