import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {SingerDirective} from './directive/singer.directive';
import {SingerComponent} from './components/singer/singer.component';
import {ForcePipe} from './pipes/force.pipe';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';
import {HeroService} from "./services/hero.service";
import {HeroComponent} from './components/hero/hero.component';
// import {AppRoutingModule} from "./routes/app.routes";
import {DashboardComponent} from './components/dashboard/dashboard.component';
//import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
//import {InMemoryDataService} from "./services/in-memory-data.service";
import {HeroSearchComponent} from './components/hero-search/hero-search.component';
import {HeroSearchService} from "./services/hero-search.service";
import {SingerService} from "./services/singer.service";
//import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { KeengComponent } from './components/keeng/keeng.component';
import {KeengService} from "./services/keeng.service";
import { CarouselModule } from 'ng2-bootstrap';
import {AlertModule} from "ng2-bootstrap";
import { PlayerComponent } from './components/player/player.component';
import { PlayerAlbumComponent } from './components/player-album/player-album.component';
import { PlayerChartsComponent } from './components/player-charts/player-charts.component';
import { PlayerLivetvComponent } from './components/player-livetv/player-livetv.component';
import { PlayerRadioComponent } from './components/player-radio/player-radio.component';
import { PlayerVideoComponent } from './components/player-video/player-video.component';
import { PopupLoginComponent } from './components/popup-login/popup-login.component';
import { AlbumComponent } from './components/album/album.component';
import { SongComponent } from './components/song/song.component';
import { ChartComponent } from './components/chart/chart.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { HomeComponent } from './components/home/home.component';
import { TopicComponent } from './components/topic/topic.component';
import { ListSongComponent } from './components/list-song/list-song.component';
import { SingerDetailComponent } from './components/singer-detail/singer-detail.component';
import { ListVideoComponent } from './components/list-video/list-video.component';
import {KeengRoutingModule} from "./routes/keeng.routes";
import { CategoryComponent } from './components/category/category.component';
@NgModule({
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
    KeengComponent,
    PlayerComponent,
    PlayerAlbumComponent,
    PlayerChartsComponent,
    PlayerLivetvComponent,
    PlayerRadioComponent,
    PlayerVideoComponent,
    PopupLoginComponent,
    AlbumComponent,
    SongComponent,
    ChartComponent,
    TopicDetailComponent,
    HomeComponent,
    TopicComponent,
    ListSongComponent,
    SingerDetailComponent,
    ListSongComponent,
    ListVideoComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // AppRoutingModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    //MaterialModule.forRoot(),
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    KeengRoutingModule
  ],
  providers: [HeroService, HeroSearchService, SingerService, KeengService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
