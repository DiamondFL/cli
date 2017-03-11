import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../components/home/home.component";
import {AlbumComponent} from "../components/album/album.component";
import {CategoryComponent} from "../components/category/category.component";
import {ChartComponent} from "../components/chart/chart.component";
import {ListSongComponent} from "../components/list-song/list-song.component";
import {ListVideoComponent} from "../components/list-video/list-video.component";
import {PlayerComponent} from "../components/player/player.component";
import {PlayerAlbumComponent} from "../components/player-album/player-album.component";
import {PlayerChartsComponent} from "../components/player-charts/player-charts.component";
import {PlayerLivetvComponent} from "../components/player-livetv/player-livetv.component";
import {PlayerVideoComponent} from "../components/player-video/player-video.component";
import {PopupLoginComponent} from "../components/popup-login/popup-login.component";
import {SingerComponent} from "../components/singer/singer.component";
import {SingerDetailComponent} from "../components/singer-detail/singer-detail.component";
import {SongComponent} from "../components/song/song.component";
import {TopicComponent} from "../components/topic/topic.component";
import {TopicDetailComponent} from "../components/topic-detail/topic-detail.component";

/**
 * Created by s on 2/8/17.
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'album.html', component: AlbumComponent
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
    path: ':slug/:id/song-player.html', component: PlayerComponent
  },
  {
    path: ':slug/:id/player-album.html', component: PlayerAlbumComponent
  },
  {
    path: 'player-chart', component: PlayerChartsComponent
  },
  {
    path: 'player-livetv', component: PlayerLivetvComponent
  },
  {
    path: ':slug/:id/video-player.html', component: PlayerVideoComponent
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class KeengRoutingModule {}
