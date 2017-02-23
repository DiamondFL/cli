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
export var AlbumListComponent = (function () {
    function AlbumListComponent() {
    }
    AlbumListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], AlbumListComponent.prototype, "albums", void 0);
    AlbumListComponent = __decorate([
        Component({
            selector: 'app-album-list',
            templateUrl: './album-list.component.html',
            styleUrls: ['./album-list.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AlbumListComponent);
    return AlbumListComponent;
}());
//# sourceMappingURL=/var/www/html/material/src/app/layout/album-list/album-list.component.js.map