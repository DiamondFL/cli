var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { KeengService } from "./services/keeng.service";
import { ModalDirective } from 'ng2-bootstrap/modal';
export var AppComponent = (function () {
    function AppComponent(keengService) {
        this.keengService = keengService;
        this.common = [];
        this.linkFooter = [];
    }
    AppComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    AppComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.keengService.common().then(function (data) {
            _this.common = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
        // this.keengService.linkFooter().then(
        //   data => {
        //     this.linkFooter = data;
        //     console.log(data);
        //   },
        //   error => {
        //     console.log(error);
        //   }
        // )
    };
    __decorate([
        ViewChild('childModal'), 
        __metadata('design:type', ModalDirective)
    ], AppComponent.prototype, "childModal", void 0);
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: []
        }), 
        __metadata('design:paramtypes', [KeengService])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/var/www/html/material/src/app/app.component.js.map