import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {SingerComponent} from './components/singer/singer.component';
import {ForcePipe} from './pipes/force.pipe';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import 'hammerjs';
import {KeengService} from "./services/keeng.service";
import {PlayerComponent} from './components/player/player.component';
import {PlayerAlbumComponent} from './components/player-album/player-album.component';
import {PlayerChartsComponent} from './components/player-charts/player-charts.component';
import {PlayerLivetvComponent} from './components/player-livetv/player-livetv.component';
import {PlayerRadioComponent} from './components/player-radio/player-radio.component';
import {PlayerVideoComponent} from './components/player-video/player-video.component';
import {PopupLoginComponent} from './components/popup-login/popup-login.component';
import {AlbumComponent} from './components/album/album.component';
import {SongComponent} from './components/song/song.component';
import {ChartComponent} from './components/chart/chart.component';
import {TopicDetailComponent} from './components/topic-detail/topic-detail.component';
import {HomeComponent} from './components/home/home.component';
import {TopicComponent} from './components/topic/topic.component';
import {ListSongComponent} from './components/list-song/list-song.component';
import {SingerDetailComponent} from './components/singer-detail/singer-detail.component';
import {ListVideoComponent} from './components/list-video/list-video.component';
import {KeengRoutingModule} from "./routes/keeng.routes";
import {CategoryComponent} from './components/category/category.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

@NgModule({
  declarations: [
    AppComponent,
    SingerComponent,

    ForcePipe,
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
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule.forRoot(),
    KeengRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [KeengService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
