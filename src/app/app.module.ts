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
// import {VgCoreModule} from 'videogular2/core';
// import {VgControlsModule} from 'videogular2/controls';
// import {VgOverlayPlayModule} from 'videogular2/overlay-play';
// import {VgBufferingModule} from 'videogular2/buffering';
import { VideoPlayerComponent } from './layout/video-player/video-player.component';
import { AudioPlayerComponent } from './layout/audio-player/audio-player.component';
import { AudioListComponent } from './layout/audio-list/audio-list.component';
import { VideoListComponent } from './layout/video-list/video-list.component';
import { FeelingComponent } from './layout/feeling/feeling.component';
import { AlbumListComponent } from './layout/album-list/album-list.component';
import { MediaHotComponent } from './layout/media-hot/media-hot.component';
import { TopicListComponent } from './layout/topic-list/topic-list.component';
import { FilmListComponent } from './layout/film-list/film-list.component';
import { ModalModule } from 'ng2-bootstrap/modal';
import { SongsInAlbumComponent } from './layout/songs-in-album/songs-in-album.component';
import { DPlayerComponent } from './layout/d-player/d-player.component';

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
    VideoPlayerComponent,
    AudioPlayerComponent,
    AudioListComponent,
    VideoListComponent,
    FeelingComponent,
    AlbumListComponent,
    MediaHotComponent,
    TopicListComponent,
    FilmListComponent,
    SongsInAlbumComponent,
    DPlayerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    KeengRoutingModule,
    // VgCoreModule,
    // VgControlsModule,
    // VgOverlayPlayModule,
    // VgBufferingModule
  ],
  providers: [KeengService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
