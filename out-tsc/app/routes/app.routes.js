var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HeroComponent } from "../components/hero/hero.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { HeroDetailComponent } from "../components/hero-detail/hero-detail.component";
import { SingerComponent } from "../components/singer/singer.component";
import { KeengComponent } from "../components/keeng/keeng.component";
/**
 * Created by s on 2/8/17.
 */
var routes = [
    {
        path: '',
        redirectTo: '/keeng',
        pathMatch: 'full'
    },
    {
        path: 'heroes', component: HeroComponent
    },
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'detail/:id', component: HeroDetailComponent
    },
    {
        path: 'singer', component: SingerComponent
    },
    {
        path: 'keeng', component: KeengComponent
    }
];
export var AppRoutingMoudle = (function () {
    function AppRoutingMoudle() {
    }
    AppRoutingMoudle = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingMoudle);
    return AppRoutingMoudle;
}());
// export const appRoutes = RouterModule.forRoot(routes);
//# sourceMappingURL=/var/www/html/material/src/app/routes/app.routes.js.map