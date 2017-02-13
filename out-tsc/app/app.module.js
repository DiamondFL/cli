var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SingerDirective } from './directive/singer.directive';
import { SingerComponent } from './components/singer/singer.component';
import { ForcePipe } from './pipes/force.pipe';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroService } from "./services/hero.service";
import { HeroComponent } from './components/hero/hero.component';
import { AppRoutingMoudle } from "./routes/app.routes";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroSearchService } from "./services/hero-search.service";
import { SingerService } from "./services/singer.service";
import 'hammerjs';
import { KeengComponent } from './components/keeng/keeng.component';
import { KeengService } from "./services/keeng.service";
import { CarouselModule } from 'ng2-bootstrap';
import { AlertModule } from "ng2-bootstrap";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                SingerComponent,
                SingerDirective,
                ForcePipe,
                HeroDetailComponent,
                HeroComponent,
                DashboardComponent,
                HeroSearchComponent,
                HeroSearchComponent,
                KeengComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                AppRoutingMoudle,
                // InMemoryWebApiModule.forRoot(InMemoryDataService),
                //MaterialModule.forRoot(),
                AlertModule.forRoot(),
                CarouselModule.forRoot(),
            ],
            providers: [HeroService, HeroSearchService, SingerService, KeengService],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/var/www/html/material/src/app/app.module.js.map