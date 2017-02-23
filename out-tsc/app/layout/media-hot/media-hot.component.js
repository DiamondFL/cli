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
export var MediaHotComponent = (function () {
    function MediaHotComponent() {
    }
    MediaHotComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], MediaHotComponent.prototype, "itemHots", void 0);
    MediaHotComponent = __decorate([
        Component({
            selector: 'app-media-hot',
            templateUrl: './media-hot.component.html',
            styleUrls: ['./media-hot.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MediaHotComponent);
    return MediaHotComponent;
}());
//# sourceMappingURL=/var/www/html/material/src/app/layout/media-hot/media-hot.component.js.map