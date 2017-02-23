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
import { HomeComponent } from "../components/home/home.component";
import { AlbumComponent } from "../components/album/album.component";
import { CategoryComponent } from "../components/category/category.component";
import { ChartComponent } from "../components/chart/chart.component";
import { ListSongComponent } from "../components/list-song/list-song.component";
import { ListVideoComponent } from "../components/list-video/list-video.component";
import { PlayerComponent } from "../components/player/player.component";
import { PlayerAlbumComponent } from "../components/player-album/player-album.component";
import { PlayerChartsComponent } from "../components/player-charts/player-charts.component";
import { PlayerLivetvComponent } from "../components/player-livetv/player-livetv.component";
import { PlayerVideoComponent } from "../components/player-video/player-video.component";
import { PopupLoginComponent } from "../components/popup-login/popup-login.component";
import { SingerComponent } from "../components/singer/singer.component";
import { SingerDetailComponent } from "../components/singer-detail/singer-detail.component";
import { SongComponent } from "../components/song/song.component";
import { TopicComponent } from "../components/topic/topic.component";
import { TopicDetailComponent } from "../components/topic-detail/topic-detail.component";
/**
 * Created by s on 2/8/17.
 */
var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'album', component: AlbumComponent
    },
    {
        path: 'category', component: CategoryComponent
    },
    {
        path: 'chart', component: ChartComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'list-song', component: ListSongComponent
    },
    {
        path: 'list-video', component: ListVideoComponent
    },
    {
        path: 'player', component: PlayerComponent
    },
    {
        path: 'player-album', component: PlayerAlbumComponent
    },
    {
        path: 'player-chart', component: PlayerChartsComponent
    },
    {
        path: 'player-livetv', component: PlayerLivetvComponent
    },
    {
        path: 'player-video', component: PlayerVideoComponent
    },
    {
        path: 'popup-login', component: PopupLoginComponent
    },
    {
        path: 'singer', component: SingerComponent
    },
    {
        path: 'singer-detail', component: SingerDetailComponent
    },
    {
        path: 'song', component: SongComponent
    },
    {
        path: 'topic', component: TopicComponent
    },
    {
        path: 'topic-detail', component: TopicDetailComponent
    }
];
export var KeengRoutingModule = (function () {
    function KeengRoutingModule() {
    }
    KeengRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], KeengRoutingModule);
    return KeengRoutingModule;
}());
//# sourceMappingURL=/var/www/html/material/src/app/routes/keeng.routes.js.map